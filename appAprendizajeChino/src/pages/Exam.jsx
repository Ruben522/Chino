import React, { useEffect, useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";

import hsk1 from "../assets/hsk/hsk1.json";
import hsk2 from "../assets/hsk/hsk2.json";

import "./Exam.css";

const levels = { 1: hsk1, 2: hsk2 };

const QUESTION_TYPES = ["meaning", "pinyin", "chinese", "audio"];

function getRandomItems(arr, n) {
  return arr.sort(() => Math.random() - 0.5).slice(0, n);
}

const createQuestion = (word, allWords) => {
  const type = QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)];

  let question = {
    type,
    word,
    options: [],
    correct: null,
    prompt: "",
  };

  const distractors = getRandomItems(
    allWords.filter((w) => w.id !== word.id),
    3
  );

  if (type === "meaning") {
    question.prompt = `¿Cuál es el significado de "${word.chinese}"?`;
    question.options = [word.spanish, ...distractors.map((d) => d.spanish)];
    question.correct = word.spanish;
  }

  if (type === "pinyin") {
    question.prompt = `¿Cuál es el pinyin de "${word.chinese}"?`;
    question.options = [word.pinyin, ...distractors.map((d) => d.pinyin)];
    question.correct = word.pinyin;
  }

  if (type === "chinese") {
    question.prompt = `¿Qué carácter corresponde a "${word.spanish}"?`;
    question.options = [word.chinese, ...distractors.map((d) => d.chinese)];
    question.correct = word.chinese;
  }

  if (type === "audio") {
    question.prompt = "Escucha y selecciona la opción correcta:";
    question.options = [word.chinese, ...distractors.map((d) => d.chinese)];
    question.correct = word.chinese;
  }

  question.options = question.options.sort(() => Math.random() - 0.5);

  return question;
};

export default function Exam() {
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[step];

  const startExam = () => {
    const pool = levels[level];
    const selected = getRandomItems(pool, 10);
    const generated = selected.map((w) => createQuestion(w, pool));

    setQuestions(generated);
    setStep(0);
    setScore(0);
  };

  const selectAnswer = (option) => {
    const isCorrect = option === current.correct;

    const updated = [...questions];
    updated[step].selected = option;
    updated[step].isCorrect = isCorrect;

    setQuestions(updated);

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    if (step === questions.length - 1) {
      finishExam(updated);
    } else {
      setStep((s) => s + 1);
    }
  };

  const finishExam = (answerData) => {
    const examData = {
      date: new Date().toLocaleString(),
      level,
      score,
      total: questions.length,
      answers: answerData,
    };

    localStorage.setItem("lastExam", JSON.stringify(examData));

    // ranking
    const ranking = JSON.parse(localStorage.getItem("examRanking") || "[]");
    ranking.push(examData);
    ranking.sort((a, b) => b.score - a.score);
    localStorage.setItem("examRanking", JSON.stringify(ranking));

    window.location.href = "/exam-result";
  };

  return (
    <Contenedor>
      <h2>📘 Examen HSK</h2>

      {questions.length === 0 && (
        <div className="exam-start">
          <label>Nivel: </label>
          <select value={level} onChange={(e) => setLevel(Number(e.target.value))}>
            <option value={1}>HSK 1</option>
            <option value={2}>HSK 2</option>
          </select>

          <button onClick={startExam}>Comenzar examen</button>
        </div>
      )}

      {questions.length > 0 && current && (
        <div className="exam-question">
          <h3>
            Pregunta {step + 1} / {questions.length}
          </h3>

          <p>{current.prompt}</p>

          {current.type === "audio" && (
            <Audio text={current.word.chinese}>🔊 Escuchar</Audio>
          )}

          <div className="options">
            {current.options.map((opt, i) => (
              <button key={i} onClick={() => selectAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </Contenedor>
  );
}
