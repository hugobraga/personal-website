import React, { FC } from "react";
import { Grid, Button, makeStyles, withTheme } from "@material-ui/core";
import "./SMButtons8.css";
import { SocialIcon } from "react-social-icons";

// import "./icons/EmailIcon";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Instagram,
  Whatsapp,
} from "@trejgun/material-ui-icons-social-networks";

import { Link } from "react-router-dom";

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
    instabutton: {
      margin: theme.spacing(1),
      backgroundColor: "mediumvioletred",
      color: "white",
      padding: "15px",
      width: "50%",
      fontWeight: "bold",
    },
    instalink: {
      color: "white",
      fontWeight: "bold",
      textDecoration: "none"
    },    
    whatsappbutton: {
      margin: theme.spacing(1),
      backgroundColor: "limegreen",
      color: "white",
      padding: "15px",
      width: "50%",
      fontWeight: "bold",
    },
    icon: {
      marginRight: theme.spacing(1),
      color: "white",
    },
  }),
  { name: "Demo" }
);

const SMButtons8 = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Button
        variant="outlined"
        className={classes.whatsappbutton}
        onClick={() => {
          window.open("http://wa.me/+5571992682584", "_blank");
          // window.location.href = "http://wa.me/+5571992682584";
        }}
      >
        <SocialIcon
          network="whatsapp"
          bgColor="limegreen"
          fgColor="#ffffff"
          style={{ height: 20, width: 20 }}
        />
        {/* <Whatsapp className={classes.icon} />  */}
        Contact me
      </Button>
      <Button
        variant="outlined"
        className={classes.instabutton}
      >
        <SocialIcon
          network="instagram"
          bgColor="mediumvioletred"
          fgColor="#ffffff"
          style={{ height: 20, width: 20 }}
        />
        {/* <Instagram className={classes.icon} />  */}
        <Link className={classes.instalink} to="/instalinks">Instagram Links</Link>
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1CvUlSSo4SrD5u09h3TDK8V5PRLqLbJEm/view?usp=sharing",
            "_blank"
          );
        }}
      >
        Curriculum Vitae
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("https://sites.google.com/site/hugobraga", "_blank");
        }}
      >
        Personal Website
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={(e) => {
          window.location = "mailto:hugo@hugobraga.io";
          e.preventDefault();
        }}
      >
        {/* <FontAwesomeIcon icon={['fas', 'fa-envelope-square']} /> */}
        {/* <EmailIcon /> */}
        Write me an E-Mail
      </Button>
    </Grid>
  );
};
export default SMButtons8;
