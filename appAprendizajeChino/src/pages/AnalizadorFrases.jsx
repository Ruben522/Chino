// src/pages/AnalizadorFrases.jsx
import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio"; // asumo que existe en tu proyecto
import { tokenizeTrie } from "../utils/tokenizer_trie";
import "./AnalizadorFrases.css";

export default function AnalizadorFrases() {
    const [text, setText] = useState("");
    const [tokens, setTokens] = useState([]);
    const [selectedToken, setSelectedToken] = useState(null);

    const analyze = () => {
        const t = tokenizeTrie(text);
        setTokens(t);
        setSelectedToken(null);
    };


    return (
        <Contenedor>
            <h2>🔍 Analizador de frases (tokenizer)</h2>
            <p>Introduce una frase en chino (o pega una). El tokenizador usará el diccionario HSK para segmentar y mostrar pinyin/traducción.</p>

            <div className="analyzer-controls">
                <textarea
                    placeholder="Ejemplo: 我想和你一起去吃饭。"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={3}
                />

                <div className="buttons">
                    <button onClick={analyze}>Analizar</button>
                    <button onClick={() => { setText(""); setTokens([]); setSelectedToken(null); }}>Limpiar</button>
                </div>
            </div>
            {/* Traducción al español */}
            {tokens.length > 0 && (
                <div className="translation-box">
                    <h3>Traducción aproximada:</h3>
                    <p>
                        {tokens
                            .map(t => t.spanish || "")
                            .filter(Boolean)
                            .join(" ")}
                    </p>
                </div>
            )}
            {/* Lista de tokens */}
            {tokens.length > 0 && (
                <>
                    <div className="token-list">
                        {tokens.map((tk, i) => (
                            <div
                                key={i}
                                className={`token-card level-${tk.level || "0"}`}
                                onClick={() => setSelectedToken(tk)}
                            >
                                <div className="token-word">{tk.word}</div>
                                <div className="token-pinyin">{tk.pinyin}</div>
                                <div className="token-spanish">{tk.spanish}</div>

                                <div className="token-actions">
                                    {/* reproducir audio de la palabra */}
                                    <Audio text={tk.word}>🔊</Audio>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {selectedToken && (
                <div className="token-detail">
                    <h3>Detalle: {selectedToken.word}</h3>

                    <p><strong>Pinyin:</strong> {selectedToken.pinyin}</p>
                    <p><strong>Traducción:</strong> {selectedToken.spanish}</p>
                    <p>
                        <strong>Tono:</strong>{" "}
                        {(selectedToken.adjustedTones || selectedToken.tones || []).join(" - ")}
                    </p>

                    <div style={{ marginTop: 8 }}>
                        <Audio text={selectedToken.word}>🔊 Escuchar</Audio>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <button onClick={() => setSelectedToken(null)}>Cerrar</button>
                    </div>
                </div>
            )}
        </Contenedor>
    );
}
