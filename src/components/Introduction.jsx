import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import introduction from '../assets/images/introduction/introuction.jpg';

const Introduction = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F9F9',
        padding: { xs: '40px 20px', md: '80px 60px' },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texte à gauche */}
        <Grid item xs={12} md={6}>
          <Typography
            
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              color: '#2B2B2B',
              marginBottom: 2,
              fontSize: { xs: '1.6rem', md: '2rem' },
            }}
          >
            Introduction
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontFamily: 'Poppins, sans-serif',
              color: '#555555',
              lineHeight: 1.6,
            }}
          >
            Dans un monde numérique en constante évolution, avoir un site performant est essentiel pour assurer la visibilité et la croissance de votre entreprise. Chez{' '}
            <strong>Cyberpro26</strong>, nous concevons des sites WordPress sur mesure, alliant design esthétique, ergonomie intuitive et optimisation SEO.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontFamily: 'Poppins, sans-serif',
              color: '#555555',
              lineHeight: 1.6,
              marginTop: 2,
            }}
          >
            Nos solutions sont pensées pour attirer plus de visiteurs, convertir vos prospects en clients et renforcer votre présence en ligne. Grâce à notre expertise, nous vous aidons à créer une plateforme digitale efficace, adaptée à vos besoins et évolutive selon vos objectifs.
          </Typography>
        </Grid>

        {/* Image à droite */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={introduction}
              alt="Introduction"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '15px',
                display: 'block',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
