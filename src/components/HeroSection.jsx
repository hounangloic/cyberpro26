import React from 'react';
import { Box, Button, Typography, Grid, useTheme } from '@mui/material';
import heroImage from '../assets/images/hero/heroo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {
  // Utilisation correcte du hook useTheme
  

  return (
    <Box
      id="accueil"
      sx={{
        backgroundColor: { xs: '#E6D8F0', md: '#E6D8F0' },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '15px', md: '40px' },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texte dans une grille */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              fontSize: { xs: '1.8rem', md: '4.5rem' },
              marginTop: { xs: '120px' },
              color: 'black',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Boostez votre visibilité avec un site WordPress sur mesure.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 3,
              color: '#777988',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Des sites web personnalisés, conviviaux et optimisés pour le référencement pour votre entreprise
          </Typography>
          <Button
           href="https://calendly.com/contact-cyberpro26/30min"
           target="_blank" // Ouvre dans un nouvel onglet
           rel="noopener noreferrer"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: '10px',
              padding: '12px 30px',
              marginBottom: 8,
              backgroundColor: '#2B6CB0',
              position: 'relative',
              textTransform: 'none',
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Prendre un RDV
            <ArrowForwardIcon
              sx={{
                marginLeft: '10px',
                fontSize: '20px',
              }}
            />
          </Button>
        </Grid>

        {/* Les deux images dans la même grille */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: { xs: '20px', md: '0' },
          }}
        >
          {/* heroImage en bas */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              zIndex: 1,
              borderRadius: '30px',
              overflow: 'hidden',
              marginTop: { xs: '-40px', md: '35px' },
            }}
          >
            <img
              src={heroImage}
              alt="hero"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '15px 0px 15px 15px',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
