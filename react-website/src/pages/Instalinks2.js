//https://ncoughlin.com/posts/react-responsive-image-grid/
import React from "react";
import "./ImageList.css";
import ImageCard from "./components/ImageCard";

const Instalinks2 = () => {
  const images = [
    <ImageCard
      post="https://www.instagram.com/p/CLEYPLQh0I4/"
      link="https://pecepoli.com.br/PT/IOT/"
    />,

    <ImageCard
      post="https://www.instagram.com/p/CKTYst_A8Bt/"
      link="https://www.youtube.com/channel/UCCNqpIknWKoRyzy-5rSL4bQ"
    />,

    <ImageCard
      post="https://www.instagram.com/p/CKQz5oIgOpE/"
      link="https://iotslam.com/iot-slam-conference-registration/"
    />,

    <ImageCard
      post="https://www.instagram.com/p/CKKyv9ahE3m/"
      link="https://www.iotforall.com/iot-rest-api?utm_campaign=coschedule&utm_source=twitter&utm_medium=iotforall"
    />,
  ];

  return <div className="image-list">{images}</div>;
};

export default Instalinks2;
