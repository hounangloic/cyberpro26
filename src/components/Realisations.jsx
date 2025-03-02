import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import realisation1 from "../assets/images/realisations/realisation1.jpg";
import realisation2 from "../assets/images/realisations/realisation2.jpg";
import realisation3 from "../assets/images/realisations/realisation3.jpg";
import realisation4 from "../assets/images/realisations/realisation4.jpg";
import realisation5 from "../assets/images/realisations/realisation5.jpg";
import realisation6 from "../assets/images/realisations/realisation6.jpg";

const realisations = [realisation1, realisation2, realisation3, realisation4, realisation5, realisation6];

const Realisations = () => {
  return (
    <Box
      id="realisations"
      sx={{
        textAlign: "center",
        py: 6,
        px: { xs: 2, sm: 4 }, // Added padding on the sides for small screens
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontFamily: "Poppins, sans-serif", mb: 4 }}
      >
        Nos Réalisations
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation module
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ width: "100%", margin: "auto", mt:5 }}
      >
        {realisations.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image}
              alt={`Réalisation ${index + 1}`}
              sx={{
                width: "100%",
                height: "310px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                margin: "0 auto", // Center images
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination en bas */}
      <Box className="custom-pagination" sx={{ mt: 2 }} />
    </Box>
  );
};

export default Realisations;
