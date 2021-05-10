import React from "react";
import SMButtons from "../components/SMButtons";
import "./Microblog.css";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/rosto.jpeg";
import "react-whatsapp-widget/dist/index.css";
import SMButtons8 from "../components/SMButtons8";

const Microblog = () => {
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

      <p className="hor-centered">
        <span className="small-picture">💡</span>
        IoT Enthusiast
      </p>
      <p className="hor-centered">
        <span className="small-picture">🎓</span>
        PhD in Computer Science
      </p>
      <p>
        <span className="linha-separadora">___________________________</span>
      </p>
      <p className="hor-centered">I'm open to Entrepreneurship!</p>
      <p className="hor-centered">
        Let's innovate in Amazonas state,
      </p>
      <p className="hor-centered">
        heart of the Amazon Rainforest
        <span className="small-picture">🌳</span>
      </p>
      <p>
        <span className="linha-separadora">___________________________</span>
      </p>
      <h2></h2>
      <SMButtons />
      {/* <SMButtons6 /> */}
      {/* <ReactWhatsapp number="+5571992682584" message="Contact me" /> */}
      {/* <WhatsAppWidget phoneNumber="+5571992682584" /> */}
      <SMButtons8 />
    </div>
  );
};

export default Microblog;
