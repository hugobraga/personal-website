import React from "react";
import SMButtons from "../components/SMButtons";
import "./Microblog.css";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/rosto.jpeg";
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import SMButtons6 from "../components/SMButtons6";
import SMButtons7 from "../components/SMButtons7";
import SMButtons8 from "../components/SMButtons8";

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
      {/* <SMButtons6 /> */}
      {/* <ReactWhatsapp number="+5571992682584" message="Contact me" /> */}
      <WhatsAppWidget phoneNumber='+5571992682584' />
      <SMButtons8 />
    </div>
  );
};

export default Microblog;
