import { useEffect, useRef, useState } from "react";

const toneMarks = {
    "ā": 1, "ē": 1, "ī": 1, "ō": 1, "ū": 1, "ǖ": 1,
    "á": 2, "é": 2, "í": 2, "ó": 2, "ú": 2, "ǘ": 2,
    "ǎ": 3, "ě": 3, "ǐ": 3, "ǒ": 3, "ǔ": 3, "ǚ": 3,
    "à": 4, "è": 4, "ì": 4, "ò": 4, "ù": 4, "ǜ": 4
};

const detectTone = (pinyin) => {
    for (let char of pinyin) {
        if (toneMarks[char]) return toneMarks[char];
    }
    return 0;
};

export default function useMicRecorder(lang = "zh-CN") {
    const Recognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    const [transcript, setTranscript] = useState("");
    const [toneDetected, setToneDetected] = useState(null);
    const [status, setStatus] = useState("");
    const [listening, setListening] = useState(false);

    const recogRef = useRef(null);

    // Grabación con MediaRecorder
    const mediaStreamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const [recordedAudioURL, setRecordedAudioURL] = useState(null);

    // Reiniciar reconocimiento completamente
    const resetRecognition = () => {
        try {
            recogRef.current?.abort();
        } catch { }
        recogRef.current = null;
    };

    const initRecognition = () => {
        if (!Recognition) return null;
        const rec = new Recognition();

        rec.lang = lang;
        rec.interimResults = false;
        rec.continuous = false;

        rec.onstart = () => {
            setListening(true);
            setStatus("listening");
            setTranscript("");
            setToneDetected(null);
        };

        rec.onresult = (event) => {
            const txt = event.results[0][0].transcript.trim();
            setTranscript(txt);

            // detectar tono solo si se reconoce pinyin (no caracteres chinos)
            const hasChinese = /[\u4e00-\u9fff]/.test(txt);
            if (!hasChinese) {
                const tone = detectTone(txt);
                setToneDetected(tone);
            }
            try {
                mediaRecorderRef.current?.stop();
                mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
            } catch (e) { }
            setStatus("finished");
        };

        rec.onerror = () => {
            setStatus("error");
            setListening(false);
        };

        rec.onend = () => {
            setListening(false);

            // si terminó sin onresult, detenemos grabación igual
            if (mediaRecorderRef.current?.state === "recording") {
                try {
                    mediaRecorderRef.current.stop();
                    mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
                } catch (e) { }
            }

            if (status === "listening") setStatus("finished");
        };

        return rec;
    };

    const startListening = async () => {
        if (!Recognition) {
            setStatus("unsupported");
            return;
        }

        resetRecognition();
        recogRef.current = initRecognition();

        // iniciar grabación
        try {
            mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });

            audioChunksRef.current = [];
            mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current);

            mediaRecorderRef.current.ondataavailable = (e) => {
                audioChunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
                setRecordedAudioURL(URL.createObjectURL(blob));
            };

            mediaRecorderRef.current.start();
        } catch (err) {
            console.error("MediaRecorder error", err);
        }

        recogRef.current.start?.();
    };

    const stopListening = () => {
        try {
            recogRef.current?.stop();
        } catch { }

        setListening(false);

        // detener grabación
        try {
            mediaRecorderRef.current?.stop();
            mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
        } catch { }
    };

    useEffect(() => {
        return () => {
            resetRecognition();
            mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
        };
    }, []);

    return {
        transcript,
        status,
        listening,
        toneDetected,
        recordedAudioURL,
        startListening,
        stopListening,
    };
}
