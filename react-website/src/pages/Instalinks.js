import React from "react";
import InstaButtons from "../components/InstaButtons";
import { Link } from "react-router-dom";

const Instalinks = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src="images/rosto.jpeg"
        alt="Hugo Braga"
        style={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          objectFit: "cover"
        }}
      />
      <h1>Hugo Braga</h1>
      <h2>Links do Instagram</h2>

      {/* Link para a Home */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/">Home</Link>
      </div>

      {/* Linha de separação */}
      <hr style={{ margin: "40px 0" }} />

      {/* Botões do InstaButtons */}
      <InstaButtons />
    </div>
  );
};

export default Instalinks;