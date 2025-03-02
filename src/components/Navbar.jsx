import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Accueil', path: '#accueil' },
    { text: 'Apropos', path: '#apropos' },
    { text: 'Services', path: '#services' },
    { text: 'Réalisations', path: '#realisations' },
    { text: 'Tarifs', path: '#tarifs' },
    { text: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: '#ffffff',
          padding: '10px 0',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0 40px', fontFamily: 'Poppins, sans-serif' }}>
          {/* Logo as a Link */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <a href="/">
              <img
                src={logo}
                alt="Codepro26"
                style={{
                  width: 'auto',
                  height: '60px', // Taille réduite
                }}
              />
            </a>
          </Box>

          {/* Menu Items for Large Screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1, gap: '30px' }}>
            {menuItems.map((item) => (
              <a key={item.text} href={item.path} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="button"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    '&:hover': {
                      color: '#614CE1',
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </a>
            ))}
          </Box>

          {/* Buttons for Large Screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
            href="https://calendly.com/contact-cyberpro26/30min"
            target="_blank" // Ouvre dans un nouvel onglet
            rel="noopener noreferrer"
              variant="contained"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                textTransform: 'none',
                height: '45px', // Hauteur réduite
                borderRadius: '10px',
                backgroundColor: '#2B6CB0',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#4b3cb2',
                },
              }}
            >
              Devis Gratuit
            </Button>
          </Box>

          {/* Menu Icon for Small Screens */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'block', md: 'none' },
              color: '#2B6CB0',
              marginLeft: 'auto', // Maintient l'alignement à droite
              width: '50px', // Augmente la largeur du bouton
              height: '50px', // Augmente la hauteur du bouton
              marginTop: '3px',
            }}
          >
            <MenuIcon sx={{ fontSize: 32 }} /> {/* Agrandir l'icône */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            paddingTop: '10px',
            backgroundColor: '#ffffff',
            color: '#000000',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              color: '#ffffff',
              backgroundColor: '#2B6CB0',
              '&:hover': {
                backgroundColor: '#4b3cb2',
              },
              marginLeft: 'auto',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Menu Items in Drawer */}
          <List sx={{ marginTop: '10px' }}>
  {menuItems.map((item) => (
    <ListItem button key={item.text} sx={{ textAlign: 'left', padding: '10px 20px' }}>
      <a
        href={item.path}
        style={{
          textDecoration: 'none',
          color: '#000000',
          fontWeight: 'bold',
          width: '100%',
        }}
      >
        <ListItemText
          primary={item.text}
          sx={{
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif', // Assurez-vous d'appliquer ici également
          }}
        />
      </a>
    </ListItem>
  ))}
</List>


          {/* Free Audit Button in Drawer */}
          <Box sx={{ padding: '16px' }}>
            <Button
            href="https://calendly.com/contact-cyberpro26/30min"
            target="_blank" // Ouvre dans un nouvel onglet
            rel="noopener noreferrer"
              variant="contained"
              fullWidth
              sx={{
                fontFamily: 'Poppins, sans-serif',
                textTransform: 'none',
                height: '50px',
                borderRadius: '10px',
                backgroundColor: '#2B6CB0',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#4b3cb2',
                },
              }}
            >
              Devis Gratuit
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
