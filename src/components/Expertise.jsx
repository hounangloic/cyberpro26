import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import expertise from '../assets/images/expertise/193-removebg-preview.png';

const Expertise = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
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
            Notre expertise en conception de sites web WordPress
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
            Chez <strong>Cyberpro26</strong>, nous concevons des sites web entièrement personnalisés, adaptés à votre identité de marque et à vos objectifs. Notre équipe d’experts WordPress collabore avec vous pour créer un site unique, alliant design attractif, ergonomie intuitive et performance optimale.
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
            Nous veillons à ce que votre site reflète votre entreprise tout en offrant une expérience utilisateur fluide et efficace, vous aidant ainsi à vous démarquer et à atteindre vos ambitions commerciales.
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
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={expertise}
              alt="Notre expertise en WordPress"
              style={{
                maxWidth: '100%',
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

export default Expertise;
