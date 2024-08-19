import React from "react";
import { Grid, Button, IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

// Define the custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#3d3b3c",
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
}));

const InstaButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "mediumvioletred",
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "limegreen",
  color: "white",
  padding: "15px",
  width: "50%",
  fontWeight: "bold",
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
}));

const IconStyles = {
  marginRight: "8px", // Use px for fixed spacing
  color: "white",
};

const SMRectangularButtons = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <WhatsAppButton
        variant="outlined"
        onClick={() => window.open("http://wa.me/+5571992682584", "_blank")}
      >
        <WhatsAppIcon style={IconStyles} />
        Contact me
      </WhatsAppButton>

      <InstaButton variant="outlined">
        <InstagramIcon style={IconStyles} />
        <StyledLink to="/instalinks">Instagram Links</StyledLink>
      </InstaButton>

      <StyledButton
        variant="outlined"
        onClick={() => window.open("https://drive.google.com/file/d/1CvUlSSo4SrD5u09h3TDK8V5PRLqLbJEm/view?usp=sharing", "_blank")}
      >
        Curriculum Vitae
      </StyledButton>

      <StyledIconButton
        onClick={(e) => {
          window.location = "mailto:hugo@hugobraga.io";
          e.preventDefault();
        }}
      >
        <MailIcon style={IconStyles} />
        Write me an E-Mail
      </StyledIconButton>

      <StyledButton
        variant="outlined"
        onClick={() => window.open("https://sites.google.com/site/hugobraga", "_blank")}
      >
        Academic Website
      </StyledButton>
    </Grid>
  );
};

export default SMRectangularButtons;