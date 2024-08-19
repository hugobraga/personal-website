import React from "react";
import SMButtons from "../components/SMButtons";
import "./Microblog.css";
import MyPhoto from "./images/rosto.jpeg";
// import "react-whatsapp-widget/dist/index.css";
import SMButtons8 from "../components/SMButtons8";

const Microblog = () => {
  return (
    <div>
      <div>
        <h6></h6>
        <div className="hor-centered">
          <img
            src={MyPhoto}
            alt="Hugo Braga"
            style={{
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              objectFit: "cover",
            }}
          />
        </div>
        <span className={["myname"]}>Hugo Braga</span>
      </div>

      <p className="hor-centered">
        <span className="small-picture">💡</span>
        Entrepreneur
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
      <SMButtons8 />
    </div>
  );
};

export default Microblog;