import React from "react";
import { InstagramMedia } from "react-instagram-media";
import { Grid } from "@material-ui/core"; //https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids
import Instapost from "./components/Instapost";
// import ImageGrid from "react-image-grid";
// import PhotoGrid from "react-native-thumbnail-grid";

// const images = [
//     {
//       uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
//       headers: {
//         Authorization: 'Bearer xyz'
//       }
//     },
//     {
//       uri: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
//       headers: {
//         Authorization: 'Bearer xyz'
//       }
//     },
//     {
//       uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
//       headers: {
//         Authorization: 'Bearer xyz'
//       }
//     }
//   ];

const Instalinks1 = () => {
  return (
    <div>
      <Grid contrainer>
        <Grid item xs={4}>
          <Instapost
            // post="https://www.instagram.com/p/CLEYPLQh0I4/"
            post="/p/CLEYPLQh0I4/"
            link="https://pecepoli.com.br/PT/IOT/"
          />
        </Grid>

        <Grid item xs={4}>
          <Instapost
            // post="https://www.instagram.com/p/CKTYst_A8Bt/"
            post="/p/CKTYst_A8Bt/"
            link="https://www.youtube.com/channel/UCCNqpIknWKoRyzy-5rSL4bQ"
          />
        </Grid>

        <Grid item xs={4}>
          <Instapost
            // post="https://www.instagram.com/p/CKQz5oIgOpE/"
            post="/p/CKQz5oIgOpE/"
            link="https://iotslam.com/iot-slam-conference-registration/"
          />
        </Grid>
      </Grid>
      <Grid contrainer>
        <Grid item xs={12}>
          <Instapost
            // post="https://www.instagram.com/p/CKKyv9ahE3m/"
            post="/p/CKKyv9ahE3m/"
            link="https://www.iotforall.com/iot-rest-api?utm_campaign=coschedule&utm_source=twitter&utm_medium=iotforall"
          />
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item xs={6} style={{ background: "black" }}>
          Hooray something is here!
        </Grid>
        <Grid item xs={6} style={{ background: "yellow" }}>
          Hooray something is too!
        </Grid>
      </Grid> */}

      {/* <ImageGrid 
      className="photos"
      margin="10"
      widthHeightRatio="3/5"
      targetWidth="250"
      images={
          [
              "https://www.instagram.com/p/CLEYPLQh0I4/",
              {
                  src: "https://www.instagram.com/p/CLEYPLQh0I4/",
                  link: "https://pecepoli.com.br/PT/IOT/"
              },
              "https://www.instagram.com/p/CKTYst_A8Bt/",
          ]
      }
      /> */}

      {/* <PhotoGrid /> */}

      
    </div>
  );
};

export default Instalinks1;
