import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const packs = [
  {
    id: "pack-starter",
    title: "🔹 Pack Starter – Site vitrine simple et efficace",
    price: "999 €",
    features: [
      "Design sur mesure (1 à 5 pages)",
      "Site responsive et optimisé",
      "Plugins essentiels",
      "Sécurisation de base",
      "Livraison en 48h",
      "Formulaire de contact",
    ],
  },
  {
    id: "pack-ecommerce",
    title: "🔹 Pack E-commerce – Boutique en ligne performante",
    price: "4 500 €",
    features: [
      "Site WooCommerce complet",
      "Gestion produits & commandes",
      "Modes de livraison intégrés",
      "Support technique 1 an",
    ],
  },
  {
    id: "pack-pro",
    title: "🔹 Pack Pro – Site professionnel et évolutif",
    price: "2 500 €",
    features: [
      "Design sur mesure (jusqu’à 10 pages)",
      "SEO de base",
      "Blog intégré",
      "Réseaux sociaux",
      "Sécurisation avancée",
      "Formation à la gestion",
    ],
  },
];

const Tarifs = () => {
  const navigate = useNavigate();
  return (
    <Box
      id="tarifs"
      sx={{
        backgroundColor: "#f7f7f7",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          color: "#2B2B2B",
          marginBottom: 2,
        }}
      >
        Nos Tarifs
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#555555",
          marginBottom: 4,
        }}
      >
        Cyberpro26 crée des sites WordPress sur mesure, adaptés à vos besoins.<br/>
        Découvrez nos offres pour booster votre présence en ligne !
      </Typography>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "50px" }}
      >
        {packs.map((pack, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                border: "2px solid #2B6CB0",
                borderRadius: "18px",
                padding: 3,
                backgroundColor: "#FFFFFF",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
             
                minHeight: {xs:'420px', md:'420px'}, // 🔥 Assurer une hauteur uniforme
              }}
            >
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, fontFamily: "Poppins, sans-serif" }}
              >
                {pack.title}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#2B6CB0",
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {pack.price}
              </Typography>

              {/* Liste des caractéristiques */}
              <Box sx={{ textAlign: "left", marginBottom: 2, flexGrow: 1 }}>
                {pack.features.map((feature, i) => (
                  <Typography
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#555555",
                      marginBottom: 1,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontFamily: "Poppins, sans-serif",
                      "&:hover": {
                        transform: "translateX(5px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <span style={{ color: "#28a745", marginRight: 8 }}>✔</span>
                    {feature}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => navigate(`/pack-form/${pack.id}`)}
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#2B6CB0",
                    "&:hover": { backgroundColor: "#1E4A80" },
                    borderRadius: "30px",
                    padding: "10px 30px",
                    textTransform: "none",
                    fontWeight: "bold",
                    boxShadow: "none",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Je choisis ce pack
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Tarifs;
