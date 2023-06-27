import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Crée un composant fonctionnel Slideshow
const Slideshow = ({ images }) => {
  // Définir l'état pour suivre l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gestionnaire d'événements pour le bouton "précédent"
  const previousSlide = () => {
    // Si on est à la première image, aller à la dernière image, sinon, aller à l'image précédente
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  // Gestionnaire d'événements pour le bouton "suivant"
  const nextSlide = () => {
    // Si on est à la dernière image, aller à la première image, sinon, aller à l'image suivante
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Calculer le compteur de photos
  const photoCounter = `${currentImageIndex + 1}/${images.length}`;

  // Renvoie le rendu du diaporama avec les boutons "précédent" et "suivant", l'image actuelle et le compteur
  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button className="slideshow-button slideshow-button-previous" onClick={previousSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slideshow-button slideshow-button-next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <img className="slideshow-image" src={images[currentImageIndex]} alt="" />
      <div className="photo-counter">{photoCounter}</div>
    </div>
  );
};

// Exporte le composant Slideshow pour être utilisé dans d'autres parties de l'application
export default Slideshow;
