import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import StudyDeckPage from "../pages/StudyDeckPage";
import VocabListPage from "../pages/VocabListPage";
import RadicalsPage from "../pages/RadicalsPage";
import Frases from "../pages/Frases";
import PracticarPronunciacion from "../pages/PracticarPronunciacion";
import Exam from "../pages/Exam";
import ExamResult from "../pages/ExamResult";
import ExamRanking from "../pages/ExamRanking";
import ExamReview from "../pages/ExamReview";
import MiniJuegoOrdenar from "../pages/MiniJuegoOrdenar";
import AnalizadorFrases from "../pages/AnalizadorFrases";
import TonosPage from "../pages/TonosPage";
import Error from "../components/Error";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/study-deck" element={<StudyDeckPage />} />
    <Route path="/vocab-list" element={<VocabListPage />} />
    <Route path="/radicals" element={<RadicalsPage />} />
    <Route path="/frases" element={<Frases />} />
    <Route path="/practica-pronunciacion" element={<PracticarPronunciacion />} />
    <Route path="/exam" element={<Exam />} />
    <Route path="/exam-result" element={<ExamResult />} />
    <Route path="/exam-ranking" element={<ExamRanking />} />
    <Route path="/exam-review" element={<ExamReview />} />
    <Route path="/minijuego-frases" element={<MiniJuegoOrdenar />} />
    <Route path="/analizador" element={<AnalizadorFrases />} />
    <Route path="/tonos" element={<TonosPage />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default AppRoutes;
