// components/ScrollToTopButton.tsx
import React from 'react';
import { Fab } from '@mui/material'; // Fab pour le bouton flottant
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Icône de flèche vers le haut

const ScrollToTopButton = () => {
  // Fonction pour faire défiler jusqu'en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 16, // Place le bouton à 16px du bas
        right: 10, // Garde le bouton à 16px de la droite
        backgroundColor: '#2B6CB0', // Couleur d'arrière-plan
        borderRadius: '50%', // Forme arrondie
        padding: '8px',
        color: '#FFFFFF', // Couleur de l'icône
        width: '45px', // Augmenté pour meilleure visibilité
        height: '45px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Ajoute une ombre pour le style
        transition: 'background-color 0.3s ease', // Animation fluide
        '&:hover': {
          backgroundColor: '#5b3ca6', // Couleur au survol
        },
        zIndex: 1300, // Assurez-vous qu'il soit au-dessus des autres éléments
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
