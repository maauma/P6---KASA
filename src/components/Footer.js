import React from 'react';

// Crée un composant fonctionnel Footer
function Footer() {
  return (
    // Renvoie le rendu du pied de page avec le logo et le texte de copyright
    <footer>
      {/* Affiche le logo en version blanche */}
      <img src="/logo_blanc.webp" alt="Logo" />
      {/* Affiche le texte de copyright */}
      <p>© 2023 - Kasa - Tous droits réservés</p>
    </footer>
  );
}

// Exporte le composant Footer pour être utilisé dans d'autres parties de l'application
export default Footer;