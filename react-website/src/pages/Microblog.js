import React from "react";
import SMButtons from "../components/SMButtons";
import "./Microblog.css";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/rosto.jpeg";

const Microblog = () => {
  return (
    <div>
      <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="110" imageHeight="110" />
      <h2>Hugo Braga</h2>
      <h2>IoT Enthusiast</h2>
      <h2>PhD in Computer Science</h2>
      <span className="linha-separadora">___________________________</span>
      <h2>I'm open to IoT Entrepreneurship!</h2>
      <h2>Let's innovate in state of Amazonas</h2>
      <span className="linha-separadora">___________________________</span>
      <SMButtons />
    </div>
  );
};

export default Microblog;
