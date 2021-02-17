//https://ncoughlin.com/posts/react-responsive-image-grid/
import React from "react";
import "./ImageList.css";

const ImageList = (props) => {  
    const images = props.images.map(({id, urls, description}) => {
    //   return <img key={id} src={urls.small} alt={description} />;
      return <ImageCard key={image.id} image={image} />;
    });
    
    return <div className="image-list">{images}</div>;
  };