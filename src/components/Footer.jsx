import React from 'react';
import { Box, Typography, Grid, TextField, Button, IconButton, Divider } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material';
import logo from '../assets/images/logo.png';




const Footer = () => {
  
  const textColor =  '#FFFFFF';
  const police = 'Poppins, sans-serif';

  return (
    <>
      <Box
        sx={{
          background:  '#000000' ,
          padding: '40px 20px',
          color: textColor,
          textAlign: 'left',
          margin: '0 auto',
          maxWidth: '100%',
          
        }}
      >
        {/* Logo and Social Icons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box display="flex" justifyContent="center">
            <img src={ logo} alt="Cyberpro26" style={{width: 'auto',height: '60px'}} />
          </Box>
          <Box display="flex" gap={2}>
            <IconButton href="https://www.linkedin.com/company/cyberpro26/" target="_blank" sx={{ color: textColor }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://www.instagram.com/cyberpro26_/" target="_blank" sx={{ color: textColor }}>
              <Instagram />
            </IconButton>
            
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ mb: 3, backgroundColor: textColor }} />

        {/* Footer Sections */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {/* Solutions */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: textColor, fontFamily:police }}>L’AGENCE</Typography>
            {['Introduction', 'À propos', 'Services', 'Blog'].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{ mb: 3, color: textColor,fontFamily:police, '&:hover': { color: '#2B6CB0', cursor: 'pointer' },mt:3 }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: textColor }}>BLOG</Typography>
            {['Forfait et prix', 'Comment ça marche', 'Développement Web', 'SEO'].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{ mb: 3, color: textColor,fontFamily:police, '&:hover': { color: '#2B6CB0', cursor: 'pointer' },mt:3  }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: textColor ,fontFamily:police }}>CONTACT</Typography>
            {['Besoin d\'aide ?', 'Vous avez une question ?', 'Contactez-nous à', 'contact@cyberpro26.com'].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{ mb: 3, color: textColor, fontFamily:police, '&:hover': { color: '#2B6CB0', cursor: 'pointer' },mt:3  }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

         

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: textColor, fontFamily:police }}>NEWSLETTER</Typography>
            <Box display="flex" alignItems="center" position="relative" mt={3} >
              <TextField
                variant="outlined"
                placeholder="Email address.."
                fullWidth
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                  },
                  '& input': {
                    paddingLeft: '2.5rem',
                  },
                }}
              />
              <Email sx={{ color: '#2B6CB0', position: 'absolute', marginLeft: '10px' }} />
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#2B6CB0',
                color: '#FFFFFF',
                mt: 2,
                fontWeight: 'bold',
                borderRadius: 3,
                height: '50px',
                fontFamily: 'Poppins, sans-serif',
                '&:hover': { backgroundColor: '#26262C' },
              }}
            >
              Subscribe Now
            </Button>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 3, backgroundColor: textColor }} />

        {/* Footer Bottom */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 2 }}
        >
          <Typography variant="body1" sx={{ color: textColor,fontFamily:police }}>Copyright © 2025 – Cyberpro26</Typography>
          
        </Box>
      </Box>
    </>
  );
};

export default Footer;
