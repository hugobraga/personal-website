import React from "react";
import InstaButtons from "../components/InstaButtons";
import { Link } from "react-router-dom";
import MyPhoto from "./images/rosto.jpeg";

const Instalinks = () => {
  return (
      <div style={{textAlign: "center", marginTop: "20px"}}>
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
              Links do Instagram
          </p>

          {/* Link para a Home */}
          <div style={{marginTop: "20px"}}>
              <Link to="/">Home</Link>
          </div>

          <p>
              <span className="linha-separadora">___________________________</span>
          </p>

          {/* Botões do InstaButtons */}
          <InstaButtons/>
      </div>
  );
};

export default Instalinks;