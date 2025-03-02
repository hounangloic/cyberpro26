import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <Box 
    id="contact"
    sx={{ padding: { xs: 2, md: 6 } }}>
      
      <Grid container spacing={4}>
  {/* Bloc texte */}
  <Grid item xs={12} md={6} sx={{ mt: 6 }}>
    <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins, sans-serif", mb: 2 }}>
      Contactez-nous !
    </Typography>
    <Typography variant="h6" sx={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner
      dans la création de votre site web.
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
    </Typography>
    <Typography variant="body1" sx={{ mt: 3, fontWeight: "bold", fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      Ou contactez-nous directement par e-mail à{" "}
      <Typography
  component="a"
  href="mailto:contact@cyberpro26.com"
  color="primary"
  fontWeight="bold"
  sx={{
    fontFamily: "Poppins, sans-serif",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
  }}
>
  contact@cyberpro26.com
</Typography>

    </Typography>
  </Grid>


        {/* Bloc formulaire */}
        <Grid item xs={12} md={6}>
          <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Grid container spacing={2}>
              {/* Nom & Prénom sur la même ligne */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Nom" variant="outlined" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Prénom" variant="outlined" required />
              </Grid>

              {/* Téléphone & Entreprise sur la même ligne */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Téléphone" variant="outlined" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Entreprise" variant="outlined" required />
              </Grid>
            </Grid>

            {/* Sujet, Email & Message */}
            <TextField fullWidth label="Sujet" variant="outlined" required />
            <TextField fullWidth label="Email" variant="outlined" required type="email" />
            <TextField fullWidth label="Message" variant="outlined" required multiline rows={4} />

            <Button variant="contained" color="primary" size="large" sx={{fontFamily: "Poppins, sans-serif"}}>
              Envoyer
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
