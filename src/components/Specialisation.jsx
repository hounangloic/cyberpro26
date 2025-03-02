import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import spec1 from '../assets/images/Specialition/spec1.png';
import spec2 from '../assets/images/Specialition/spec2.png';
import spec3 from '../assets/images/Specialition/spec3.png';
import spec4 from '../assets/images/Specialition/spec4.png';
import spec5 from '../assets/images/Specialition/spec5.png';
import spec6 from '../assets/images/Specialition/spec6.png';

const specialisations = [
  { title: "Conception de sites web sur mesure", text: "Nous ne créons pas de modèles génériques. Chaque projet est conçu en fonction des besoins uniques de votre entreprise et de votre marché.", image: spec1 },
  { title: "Sites web conviviaux", text: "L’expérience utilisateur est au cœur de notre processus de conception. Un site facile à naviguer, intuitif et agréable à utiliser augmente non seulement la satisfaction des visiteurs.", image: spec2 },
  { title: "Optimisation SEO", text: "Nos sites sont conçus pour être SEO-friendly, ce qui signifie qu’ils sont optimisés pour le référencement dès leur création, vous aidant ainsi à mieux vous classer !", image: spec3 },
  { title: "Responsive et mobile-friendly", text: "Dans un monde où les utilisateurs accèdent à Internet principalement via leurs appareils mobiles, nous nous assurons que votre site web est parfaitement responsive, offrant une expérience fluide sur tous les appareils.", image: spec4 },
  { title: "Performance et rapidité", text: "Un site rapide est essentiel pour retenir l’attention de vos visiteurs. Nous optimisons chaque site pour des performances maximales, garantissant un chargement rapide, même avec un contenu riche.", image: spec5 },
  { title: "WooCommerce", text: "Nous concevons des sites web entièrement responsives, garantissant une expérience utilisateur fluide et optimisée sur tous les appareils. Que ce soit sur mobile, tablette ou ordinateur, votre site s’adapte parfaitement.", image: spec6 }
];

const Specialisation = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  return (
    <Box 
    id="services"
    sx={{ backgroundColor: '#FFFFFF', padding: { xs: '40px 20px', md: '80px 60px' }, textAlign: 'center' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Poppins, sans-serif',
          color: '#2B2B2B',
          marginBottom: 4,
        }}
      >
        Nous sommes spécialisés dans
      </Typography>

      {isMobile || isTablet ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 2} // 1 slide sur mobile, 2 sur tablette
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            960: {
              slidesPerView: 2,
            },
          }}
        >
          {specialisations.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  border: '2px solid #2B6CB0',
                  borderRadius: '15px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  padding: 3,
                  textAlign: 'center',
                  minHeight: {xs:'320px', md:'320px'}, // Hauteur minimale pour uniformiser toutes les cartes
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    transform: 'scale(1.05)', // Zoom légèrement sur survol
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)', // Augmente l'ombre sur survol
                    transition: 'all 0.3s ease', // Transition douce pour l'effet
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img src={item.image} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#2B6CB0', marginBottom: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: '#555555', lineHeight: 1.6, flexGrow: 1 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Grid container spacing={4}>
          {specialisations.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  border: '2px solid #2B6CB0',
                  borderRadius: '15px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  padding: 3,
                  textAlign: 'center',
                  minHeight: {xs:'320px', md:'320px'}, // Hauteur minimale pour uniformiser toutes les cartes
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    transform: 'scale(1.05)', // Zoom légèrement sur survol
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)', // Augmente l'ombre sur survol
                    transition: 'all 0.3s ease', // Transition douce pour l'effet
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img src={item.image} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#2B6CB0', marginBottom: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: '#555555', lineHeight: 1.6, flexGrow: 1 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Specialisation;
