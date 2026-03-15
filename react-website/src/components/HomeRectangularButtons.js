import React from "react";
import { Grid, Button, IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Ícone ideal para startups/projetos
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InstaButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "mediumvioletred",
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: "#c71585",
  },
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "limegreen",
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: "#2e8b57",
  },
}));

// Novo estilo padronizado para os projetos de empreendedorismo
const ProjectButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#1976d2", // Azul escuro para transmitir confiança e tecnologia
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: "#115293",
  },
}));

const StyledLink = styled(Link)({
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#3d3b3c",
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
  borderRadius: "4px", // Mantém o formato retangular para combinar com os outros
  '&:hover': {
    backgroundColor: "#2b2a2a",
  },
}));

const IconStyles = {
  marginRight: "8px",
  color: "white",
};

const HomeRectangularButtons = () => {
  const { t } = useTranslation();

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      
      {/* Botão LexiFlow */}
      <ProjectButton
        variant="contained"
        onClick={() => window.open("https://lexiflow.com.br", "_blank")}
      >
        <RocketLaunchIcon style={IconStyles} />
        {t('lexiflow_project')}
      </ProjectButton>

      {/* Botão NaveSync */}
      <ProjectButton
        variant="contained"
        onClick={() => window.open("https://navesync.com.br", "_blank")}
      >
        <RocketLaunchIcon style={IconStyles} />
        {t('navesync_project')}
      </ProjectButton>

      <WhatsAppButton
        variant="outlined"
        onClick={() => window.open("http://wa.me/+5571992682584", "_blank")}
      >
        <WhatsAppIcon style={IconStyles} />
        {t('contact_me')}
      </WhatsAppButton>

      <InstaButton variant="outlined">
        <InstagramIcon style={IconStyles} />
        <StyledLink to="/instalinks">{t('instagram_links')}</StyledLink>
      </InstaButton>

      <StyledIconButton
        onClick={(e) => {
          window.location = "mailto:hugo@hugobraga.io";
          e.preventDefault();
        }}
      >
        <MailIcon style={IconStyles} />
        {t('write_me_email')}
      </StyledIconButton>
    </Grid>
  );
};

export default HomeRectangularButtons;