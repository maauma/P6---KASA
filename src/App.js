import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccommodationPage from './pages/AccommodationPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import './css/style.scss';

// Crée un composant fonctionnel App
function App() {
  return (
    <Router>
      {/* Gère les métadonnées et les polices de caractères */}
      <Helmet>
        <title>Kasa - Chez vous, partout et ailleurs</title>
        <meta name="description" content="Bievenue chez Kasa, cherchez votre prochain hébergement en location pour vos vacances" />
        <link rel="canonical" href="https://www.example.com/" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      {/* Affiche la barre de navigation */}
      <NavBar />
      {/* Gère les routes pour les différentes pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/accommodation/:id" element={<AccommodationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Affiche le pied de page */}
      <Footer />
    </Router>
  );
}

// Exporte le composant App pour être utilisé dans d'autres parties de l'application
export default App;