import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import about from "../assets/images/about/about.jpg";
import about1 from "../assets/images/about/about1.jpg";

// Liste des points avec check et sans check
const pointsCheck = [
  "Communication ouverte, collaboration étroite et implication à chaque étape garantissent un résultat conforme à vos attentes.",
  "Un site invisible ne sert à rien. Nous optimisons chaque aspect pour le SEO, du code à la structure et au contenu.",
  "Quel que soit votre secteur, nous concevons un site adapté à vos exigences.",
  "Nous assurons support technique et maintenance pour la sécurité et la pérennité de votre site.",
];

const pointsNoCheck = [
  "Image professionnelle : Un site moderne renforce votre crédibilité.",
  "Croissance durable : Une base évolutive pour un développement à long terme.",
  "Conversions optimisées : Un design efficace transforme les visiteurs en clients.",
  "Visibilité accrue : SEO et contenu stratégique pour attirer plus de prospects.",
];

const About = () => {
  return (
    <Box
      id="apropos"
      sx={{
        background: "linear-gradient(135deg, E6D8F0, #C2E1F4)#",
        py: 8,
        px: 4,
        textAlign: "center",
        fontFamily: "Poppins, sans-serif", // S'assure que la police est appliquée
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Pourquoi choisir Cyberpro26 ?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Nous créons des sites web uniques, adaptés aux besoins et objectifs de votre entreprise.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Image principale */}
        <Grid item xs={12} md={5} sx={{mt:4}}>
          <Box
            component="img"
            src={about}
            alt="About Cyberpro26"
            sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>

        {/* Liste des points avec check */}
        <Grid item xs={12} md={7} textAlign="left" >
          <List>
            {pointsCheck.map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {/* Icône check verte */}
                  <CheckCircleIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ fontFamily: "Poppins, sans-serif", fontSize:'22px' }} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* Deuxième partie avec autres points et image */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={7} textAlign="left">
          <List>
            {pointsNoCheck.map((text, index) => {
              const [boldPart, normalPart] = text.split(": ");
              return (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          variant="h6"
                          component="span"
                          fontWeight="bold"
                          sx={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {boldPart} :
                        </Typography>{" "}
                        <Typography
                          variant="body1"
                          component="span"
                          sx={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {normalPart}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>

        {/* Deuxième image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={about1}
            alt="About Details"
            sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>
      </Grid>

      {/* Bouton centré */}
      <Box sx={{ mt: 6 }}>
        <Button
         href="https://calendly.com/contact-cyberpro26/30min"
         target="_blank" // Ouvre dans un nouvel onglet
         rel="noopener noreferrer"
          variant="contained"
          sx={{
            backgroundColor: "#2B6CB0",
            color: "#fff",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            "&:hover": { backgroundColor: "#1E4A7B" },
          }}
        >
          Devis Gratuit
        </Button>
      </Box>
    </Box>
  );
};

export default About;
