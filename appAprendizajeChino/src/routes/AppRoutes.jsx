import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import StudyDeckPage from '../pages/StudyDeckPage';
import VocabListPage from '../pages/VocabListPage';
import Error from '../components/Error';
import RadicalsPage from '../pages/RadicalsPage';
import Frases from "../pages/Frases";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study-deck" element={<StudyDeckPage />} />
      <Route path="/vocab-list" element={<VocabListPage />} />
      <Route path="/radicals" element={<RadicalsPage />} />
      <Route path="/frases" element={<Frases />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;