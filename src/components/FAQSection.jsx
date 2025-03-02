import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "Quels types de sites web pouvez-vous créer sur WordPress ?",
    answer:
      "Nous concevons une large gamme de sites web sur WordPress, adaptés aux besoins spécifiques de chaque client. Nous créons des sites vitrines, des blogs, des sites e-commerce, des portefeuilles en ligne, des sites d’entreprise, ainsi que des plateformes complexes et des intranets. Quel que soit votre secteur d’activité, nous vous proposons une solution sur mesure qui correspond à vos objectifs.",
  },
  {
    question: "Quels types de services de maintenance proposez-vous après la mise en ligne du site ?",
    answer:
      "Nous proposons plusieurs options de maintenance, allant de l’entretien régulier de votre site (mises à jour de plugins et de sécurité, sauvegardes) à des services plus complexes comme l’ajout de nouvelles fonctionnalités ou la mise à jour du contenu. Nous pouvons également surveiller les performances du site et optimiser la vitesse de chargement pour assurer sa pérennité.",
  },
  {
    question: "Le site sera-t-il sécurisé ?",
    answer:
      "La sécurité est une priorité pour nous. Nous mettons en œuvre des mesures de sécurité de base (SSL, mises à jour régulières, sauvegardes automatiques) et nous vous recommandons des solutions de sécurité avancées en fonction de vos besoins. Nous garantissons que votre site sera protégé contre les menaces courantes sur Internet.",
  },
  {
    question: "Est-ce que vous offrez un service de conception entièrement personnalisé ?",
    answer:
      "Oui, absolument. Nous croyons en la personnalisation totale de chaque projet. Nous partons de zéro pour créer un design unique, sans utiliser de templates préexistants. Cela garantit que votre site reflète l’identité de votre marque et répond parfaitement à vos besoins spécifiques.",
  },
  {
    question: "Combien de temps faut-il pour créer un site web WordPress ?",
    answer:
      "Le délai de création d’un site web varie en fonction de la complexité du projet. En règle générale, la création d’un site WordPress personnalisé prend entre 2 à 4 semaines. Les projets plus complexes ou les sites de grande envergure peuvent prendre plus de temps. Nous vous fournirons un planning détaillé dès le début du projet.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6, fontFamily: "Poppins, sans-serif" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
        FAQ
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: "center", color: "gray", fontFamily: "Poppins, sans-serif" }}>
        Questions fréquentes sur nos services de conception de sites web WordPress
      </Typography>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            mb: 2,
            "& .MuiAccordionSummary-root": {
              backgroundColor: expanded === index ? "#2B6CB0" : "#ffffff",
              color: expanded === index ? "white" : "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "16px",
              fontFamily: "Poppins, sans-serif"
            },
            "& .MuiAccordionDetails-root": {
              backgroundColor: "white",
              fontSize: "1.1rem",
              padding: "16px",
              lineHeight: 1.6,
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: expanded === index ? "white" : "black" }} />}>
            <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif", fontWeight:'bold'}}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif"}}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQSection;
