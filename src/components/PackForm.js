import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";


const PackForm = () => {
  const { packId } = useParams(); // Récupère le pack depuis l'URL
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  // Gestion des inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoi de l'email
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      packId,
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_2tiul84", "template_y5ndbju", templateParams, "user_Mb4UVQnlmxstVG4HtfvMl")
      .then(() => alert("Message envoyé avec succès !"))
      .catch(() => alert("Erreur lors de l'envoi du message"));
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Formulaire de Commande
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 2, color: "#2B6CB0" }}>
        Vous avez sélectionné : {packId}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Prénom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Envoyer
        </Button>
      </form>
    </Box>
  );
};

export default PackForm;
