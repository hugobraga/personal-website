import React from "react";
import "./Microblog.css";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/rosto.jpeg";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import SMButtons6 from "../components/SMButtons6";
import SMButtons7 from "../components/SMButtons7";
import InstaButtons from "../components/InstaButtons";
import { Link } from "react-router-dom";

const Instalinks = () => {
  return (
    <div>
      <div>
        <h6></h6>
        <div className="hor-centered">
          <ReactRoundedImage
            image={MyPhoto}
            roundedSize="0"
            imageWidth="110"
            imageHeight="110"
          />
        </div>
        <span className={["myname"]}>Hugo Braga</span>
      </div>
      <h2></h2>
      <p className="hor-centered">Links do Instagram</p>
      <p className="hor-centered">
        <Link to="/">Home</Link>
      </p>
      <p>
        <span className="linha-separadora">___________________________</span>
      </p>
      <h2></h2>
      <InstaButtons />
    </div>
  );
};

export default Instalinks;
