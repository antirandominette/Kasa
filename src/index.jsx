import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Error404 from './pages/Error404/Error404';
import "./index.css"

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/logement/:id' element={ <FicheLogement /> } />
        <Route path='/about-us' element={ <AboutUs /> } />
        <Route path='*' element={ <Error404 /> } />
      </Routes>
    </Router>
  </React.StrictMode>
  );