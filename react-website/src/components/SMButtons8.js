import React, { FC } from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";

import {
  Instagram,
  Whatsapp,
} from "@trejgun/material-ui-icons-social-networks";

const useStyles = makeStyles(
  (theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  }),
  { name: "Demo" }
);

const SMButtons8 = () => {
  const classes = useStyles();

  return (
    <Grid 
    container 
    direction="column" 
    justify="center" 
    alignItems="center"
    >
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("http://linkin.bio/hugovvbraga", "_blank");
          //   window.location.href = "http://linkin.bio/hugovvbraga";
        }}
      >
        <Instagram className={classes.icon} /> Instagram links
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
          window.open("http://wa.me/+5571992682584", "_blank");
          // window.location.href = "http://wa.me/+5571992682584";
        }}
      >
        <Whatsapp className={classes.icon} /> Contact me
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
    </Grid>
  );
};
export default SMButtons8;
