import React, { FC } from "react";
import { Grid, Button, makeStyles, withTheme } from "@material-ui/core";
import "./SMButtons8.css";

// import "./icons/EmailIcon";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(
  (theme) => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#3d3b3c",
      color: "white",
      padding: "15px",
      width: "50%",
      fontWeight: "bold",
    },
  }),
  { name: "Demo" }
);

const InstaButtons = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
     <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://www.iotday.org", "_blank");
        }}
      >
        IoTDay
     </Button>
     <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://www.datasciencecentral.com/profiles/blogs/new-books-and-resources-for-dsc-members", "_blank");
        }}
      >
        Livros grátis de Data Science na DSC
     </Button>
     <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("http://bit.ly/3qPyMgW", "_blank");
        }}
      >
        Solução fim-a-fim com PySpark e Draco (Mar/21)
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://pecepoli.com.br/PT/IOT/", "_blank");
        }}
      >
        MBA em IoT - USP
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open(
            "https://www.youtube.com/channel/UCCNqpIknWKoRyzy-5rSL4bQ",
            "_blank"
          );
        }}
      >
        Agricultura A a Z - Borem
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open(
            "https://iotslam.com/iot-slam-conference-registration/",
            "_blank"
          );
        }}
      >
        IoT DaySlam (Abr/2021)
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open(
            "https://www.iotforall.com/iot-rest-api?utm_campaign=coschedule&utm_source=twitter&utm_medium=iotforall",
            "_blank"
          );
        }}
      >
        RESTFul APIs para IoT
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://bit.ly/38ezzBg", "_blank");
        }}
      >
        Food and Agribusiness in 2030
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://www.iotonlineconference.com/", "_blank");
        }}
      >
        IoT Online Conference (Dez/2020)
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://www.agroapi.cnptia.embrapa.br/", "_blank");
        }}
      >
        Plataforma de APIs da Embrapa
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("http://sebrae.ro/agrolab", "_blank");
        }}
      >
        Canal do Agrolab Amazônia
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("http://bit.ly/2Z68FWW", "_blank");
        }}
      >
        Agrolab Amazônia (Set/2020)
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://lnkd.in/dNGD46F", "_blank");
        }}
      >
        Webinar Agricultura Digital (Ago/2020)
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://bit.ly/2D4phqg", "_blank");
        }}
      >
        Livro - IoT Solutions for dummies
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://bit.ly/3g5EcyF", "_blank");
        }}
      >
        Recomendações no desenvolvimento de IoT
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://twitter.com/_hugobraga", "_blank");
        }}
      >
        Siga-me no Twitter
      </Button>
    </Grid>
  );
};
export default InstaButtons;
