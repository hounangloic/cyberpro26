import React from 'react';
import { Grid, Typography, Box, Rating, Container, Card, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonial from '../assets/images/temoignages/temoignage.jpg';
import avatar1 from '../assets/images/temoignages/avatar1.png';
import avatar2 from '../assets/images/temoignages/avatar2.png';
import avatar3 from '../assets/images/temoignages/avatar3.png';

const Testimonials = () => {
  return (
    <Container sx={{ padding: { xs: '20px', sm: '50px 0' }, fontFamily: 'Poppins, sans-serif' }}>
      {/* Section Titre et Image */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
            Témoignages Clients
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ fontFamily: 'Poppins, sans-serif', lineHeight: 2 }}>
          Nous avons eu le privilège de travailler avec de nombreuses entreprises de différents secteurs, créant des sites web qui répondent à leurs besoins uniques tout en dépassant leurs attentes. Découvrez nos réalisations et lisez
           les témoignages de nos clients satisfaits qui témoignent de l’impact positif de notre travail sur leur activité.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={testimonial} alt="Témoignages" style={{ width: '90%', borderRadius: '8px' }} />
          </Box>
        </Grid>
      </Grid>

      {/* Swiper des Témoignages */}
      <Box sx={{ marginTop: 6, maxWidth: '100%' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ paddingBottom: '40px' }}
        >
          {[{ img: avatar1, name: "Mathieu, entrepreneur dans le secteur de la mode", text: "“Une expérience exceptionnelle ! Cyberpro26 a créé un site sur mesure qui reflète parfaitement ma marque et a amélioré mes ventes grâce à une optimisation SEO efficace. Très recommandés !”" },
            { img: avatar2, name: "Maria, consultant en stratégie d’entreprise", text: "“Le site web créé par Cyberpro26 est professionnel, facile à naviguer et optimisé pour le SEO. Il a clairement fait une différence pour mon activité. Une équipe de confiance.”" },
            { img: avatar3, name: "Tom, propriétaire d’un restaurant local", text: "“Le site de mon restaurant est magnifique et facile à utiliser. Depuis son lancement, nous avons vu une hausse des réservations. Un service de qualité que je recommande vivement !”" }].map((testimonial, index) => (
            <SwiperSlide key={index} >
              <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 2, boxShadow: 2,  padding: '20px', height:'400px' }}>
                <CardMedia component="img" image={testimonial.img} alt={testimonial.name} sx={{ width: '70px', height: '70px', borderRadius: '50%', marginTop: 2 }} />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ marginTop: 2, fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', marginTop: 1, fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.text}
                  </Typography>
                  <Rating name="read-only" value={5} readOnly sx={{ marginTop: 1 }} />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Testimonials;
