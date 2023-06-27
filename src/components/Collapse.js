import React, { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Crée un composant fonctionnel Collapse
const Collapse = ({ title, children }) => {
  // Utilise l'état pour gérer l'ouverture et la fermeture du composant
  const [isOpen, setIsOpen] = useState(false);
  // Crée une référence pour accéder au contenu du composant
  const contentRef = useRef(null);
  // Utilise l'état pour définir la hauteur maximale du contenu
  const [maxHeight, setMaxHeight] = useState("0px");

  // Met à jour la hauteur maximale lorsque le contenu change
  useEffect(() => {
    if(contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [children]);

  // Bascule entre l'ouverture et la fermeture du composant
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordeon about-accordeon accomodation-accordeon'>
      {/* Affiche le titre et l'icône en fonction de l'état d'ouverture */}
      <h2 className={isOpen ? 'open' : 'closed'} onClick={toggleOpen}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </h2>
      {/* Affiche le contenu en fonction de l'état d'ouverture et ajuste la hauteur */}
      <div 
        className={`content ${isOpen ? 'open' : 'closed'}`} 
        style={{minHeight: isOpen ? maxHeight : "0px"}}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

// Exporte le composant Collapse pour être utilisé dans d'autres parties de l'application
export default Collapse;