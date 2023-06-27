import React from 'react';
import '../css/style.scss';

// Crée un composant fonctionnel Banner
function Banner({ title, image, page }) {
  
  // Applique le style de la bannière en fonction de l'image passée en paramètre
  const bannerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // Détermine la classe de la bannière en fonction de la page où elle se trouve
  let bannerClassName = 'banner';
  if (page === 'HomePage') {
    // Ajoute la classe spécifique pour la bannière de la page d'accueil
    bannerClassName += ' banner-home';
  } else if (page === 'AboutPage') {
    // Ajoute la classe spécifique pour la bannière de la page "À propos" et la version mobile
    bannerClassName += ' banner-about banner-about-mobile';
  }

  // Renvoie le rendu du composant Banner avec le titre et le style appropriés
  return (
    <div className={bannerClassName} style={bannerStyle}>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

// Exporte le composant Banner pour être utilisé dans d'autres parties de l'application
export default Banner;
