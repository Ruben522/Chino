import React, { useEffect, useState } from "react";
import Contenedor from "../components/Contenedor";
import { playSound } from "../components/SoundEffect";

import frases from "../assets/frases/hsk1.json";
import "./MiniJuegoOrdenar.css";

// Mezclador
const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);

// Distractores fallback
const distractoresCN = ["现在", "但是", "因为", "然后", "一起", "非常"];
const distractoresES = ["yo", "mucho", "a veces", "siempre", "cuando", "pero"];

export default function MiniJuegoOrdenar() {
    const [phrase, setPhrase] = useState(null);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [result, setResult] = useState("");
    const [mode, setMode] = useState("es-cn");
    const [showSolution, setShowSolution] = useState(false);

    // es-cn = mostrar español → ordenar chino
    // cn-es = mostrar chino → ordenar español

    const loadNewPhrase = () => {
        const f = frases[Math.floor(Math.random() * frases.length)];

        // ---- ELEGIR QUÉ MOSTRAR Y QUÉ ORDENAR ----
        let shown = "";
        let correctPieces = [];
        let distractorPool = [];

        if (mode === "es-cn") {
            // Mostrar español → ordenar caracteres chinos
            shown = f.spanish;
            correctPieces = f.analysis.map((p) => p.char); // 你, 好, 吗
            distractorPool = frases.flatMap((x) =>
                x.analysis.map((p) => p.char)
            );
        }

        if (mode === "cn-es") {
            // Mostrar chino → ordenar piezas españolas
            shown = f.chinese;
            correctPieces = f.analysis.map((p) => p.spanish); // tú, bien, partícula interrogativa
            distractorPool = frases.flatMap((x) =>
                x.analysis.map((p) => p.spanish)
            );
        }

        // Quitar duplicados y no repetir correctas
        distractorPool = distractorPool.filter(Boolean);
        distractorPool = Array.from(
            new Set(distractorPool.filter((w) => !correctPieces.includes(w)))
        );

        // Queremos mínimo 2 distractores
        const extrasNeeded = Math.max(2, Math.floor(correctPieces.length * 0.6));
        let chosen = shuffle(distractorPool).slice(0, extrasNeeded);

        // Si faltan, añadimos fallback según idioma objetivo
        if (chosen.length < extrasNeeded) {
            const fallback = mode === "es-cn" ? distractoresCN : distractoresES;
            chosen = chosen.concat(
                fallback.filter((d) => !correctPieces.includes(d)).slice(0, extrasNeeded - chosen.length)
            );
        }

        // Mezclar todo
        const finalOptions = shuffle([...correctPieces, ...chosen]);

        setPhrase({ ...f, shown, correctPieces });
        setOptions(finalOptions);
        setSelected([]);
        setResult("");
        setShowSolution(false);

    };

    useEffect(() => {
        loadNewPhrase();
    }, [mode]);

    const selectWord = (word, index) => {
        if (selected.some((s) => s.index === index)) return;
        setSelected((prev) => [...prev, { word, index }]);
        setResult("");
    };

    const verify = async () => {
        const user = selected.map((s) => s.word).join("").trim();
        const correct = phrase.correctPieces.join("").trim();

        if (user === correct) {
            setResult("correct");
            await playSound("/sounds/success.mp3");
        } else {
            setResult("incorrect");
            await playSound("/sounds/error.mp3");
        }
    };

    const resetSelection = () => {
        setSelected([]);
        setResult("");
    };

    const isSelected = (i) => selected.some((s) => s.index === i);

    return (
        <Contenedor>
            <h2>🧩 Mini-juego: Ordena la frase</h2>

            {/* Selector de modo */}
            <div style={{ marginBottom: "20px" }}>
                <label>Modo: </label>
                <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    style={{ padding: "5px", marginLeft: "10px" }}
                >
                    <option value="es-cn">Español → Chino</option>
                    <option value="cn-es">Chino → Español</option>
                </select>
            </div>

            {phrase && (
                <>
                    <h3>Frase objetivo:</h3>

                    <div className="target-box">{phrase.shown}</div>
                    {phrase.pinyin && (
  <div className="pinyin-box">
    {phrase.pinyin}
  </div>
)}

                    <h4>Pulsa las palabras correctas en orden:</h4>

                    <div className="options-box">
                        {options.map((w, i) => (
                            <button
                                key={i}
                                disabled={isSelected(i)}
                                className={`word-btn ${isSelected(i) ? "word-disabled" : ""}`}
                                onClick={() => selectWord(w, i)}
                            >
                                {w}
                            </button>
                        ))}
                    </div>

                    <h4>Tu frase:</h4>

                    <div
                        className={`user-box ${result === "correct"
                                ? "correct-bg"
                                : result === "incorrect"
                                    ? "incorrect-bg"
                                    : ""
                            }`}
                    >
                        {selected.map((s) => s.word).join(" ")}
                    </div>
                    {showSolution && (
                        <div className="solution-box">
                            <strong>Solución correcta:</strong>
                            <br />
                            {phrase.correctPieces.join(" ")}
                        </div>
                    )}
                    <div className="actions">
                        <button onClick={resetSelection}>Reiniciar</button>
                        <button onClick={verify}>Verificar</button>
                        <button onClick={loadNewPhrase}>Siguiente frase</button>
                        <button onClick={() => setShowSolution(true)}>
                            Mostrar solución
                        </button>
                    </div>
                </>
            )}
        </Contenedor>
    );
}
