import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

// Define the custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#3d3b3c",
  color: "white",
  padding: "15px",
  width: "250px",
  fontWeight: "bold",
}));

const InstaButtons = () => {
  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://emergebrasil.in/amazonia/", "_blank")}
        >
          Emerge Amazônia
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://sebrae.com.br/inovaamazonia", "_blank")}
        >
          Inova Amazônia
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://linktr.ee/casaraodainovacaocassina", "_blank")}
        >
          Casarão da Inovação Cassina
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://amazonialegalemdados.info", "_blank")}
        >
          Amazônia Legal em Dados
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.iotsworldcongress.com/activities/digital-summit/", "_blank")}
        >
          IoT Solutions World Congress (Mai/21)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.trifacta.com/events/wrangle-summit-2021/", "_blank")}
        >
          Wrangle Summit (Abr/21)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.iotday.org", "_blank")}
        >
          IoTDay
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.datasciencecentral.com/profiles/blogs/new-books-and-resources-for-dsc-members", "_blank")}
        >
          Livros grátis de Data Science na DSC
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("http://bit.ly/3qPyMgW", "_blank")}
        >
          Solução fim-a-fim com PySpark e Draco (Mar/21)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://pecepoli.com.br/PT/IOT/", "_blank")}
        >
          MBA em IoT - USP
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.youtube.com/channel/UCCNqpIknWKoRyzy-5rSL4bQ", "_blank")}
        >
          Agricultura A a Z - Borem
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://iotslam.com/iot-slam-conference-registration/", "_blank")}
        >
          IoT DaySlam (Abr/2021)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.iotforall.com/iot-rest-api?utm_campaign=coschedule&utm_source=twitter&utm_medium=iotforall", "_blank")}
        >
          RESTFul APIs para IoT
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://bit.ly/38ezzBg", "_blank")}
        >
          Food and Agribusiness in 2030
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.iotonlineconference.com/", "_blank")}
        >
          IoT Online Conference (Dez/2020)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://www.agroapi.cnptia.embrapa.br/", "_blank")}
        >
          Plataforma de APIs da Embrapa
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("http://sebrae.ro/agrolab", "_blank")}
        >
          Canal do Agrolab Amazônia
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("http://bit.ly/2Z68FWW", "_blank")}
        >
          Agrolab Amazônia (Set/2020)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://lnkd.in/dNGD46F", "_blank")}
        >
          Webinar Agricultura Digital (Ago/2020)
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://bit.ly/2D4phqg", "_blank")}
        >
          Livro - IoT Solutions for dummies
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://bit.ly/3g5EcyF", "_blank")}
        >
          Recomendações no desenvolvimento de IoT
        </StyledButton>
      </Grid>

      <Grid item>
        <StyledButton
          variant="outlined"
          onClick={() => window.open("https://twitter.com/_hugobraga", "_blank")}
        >
          Siga-me no Twitter
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default InstaButtons;