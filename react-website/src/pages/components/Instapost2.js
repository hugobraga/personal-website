import InstagramMediaParserWithHeader from "../components/InstagramMediaParserWithHeader";
import { instagramMediaParser } from "react-instagram-media";
import InstagramMedia2 from "./InstagramMedia2";
// import { InstagramMedia } from "react-instagram-media";
//https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e

//https://github.com/filipemerker/react-instagram-media
//https://www.npmjs.com/package/react-instagram-media
//https://elements.heroku.com/buttons/tobiasr/cors-proxy

const Instapost2 = (props) => {
  const {
    id,
    description,
    like_count,
    comment_count,
    type,
    caption,
    media,
  } = InstagramMedia2({ uri: props.post });
  // console.log(caption);

  return (
    <div>
    <a target="_blank" href={props.link}>
      <img
        key={props.post}
        src={props.post}
        alt={caption}
        width="25%%"
      />
    </a>
    </div>
  );  

  // return (
  //   <div>
  //     <InstagramMedia
  //       uri={props.post}
  //       renderItem={({ display_url, video_url, type, caption }) => {
  //         if (type === "video") {
  //           return (
  //             <video poster={display_url} controls>
  //               <source src={video_url} type="video/mp4" />
  //             </video>
  //           );
  //         }

  //         return (
  //           <a target="_blank" href={props.link}>
  //             <img
  //               key={display_url}
  //               src={display_url}
  //               alt={caption}
  //               width="25%%"
  //             />
  //           </a>
  //         );
  //       }}
  //       // renderMediaList={(children) => <div className="swiper">{children}</div>}
  //       renderError={() => <div>I have failed to parse it</div>}
  //       renderLoading={() => <div>Loading</div>}
  //     />
  //   </div>
  // );
};

export default Instapost2;
