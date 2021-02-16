import { InstagramMedia } from "react-instagram-media";

const Instapost = (props) => {
  return (
    <div>
      <InstagramMedia
        uri={props.post}
        renderItem={({ display_url, video_url, type, caption }) => {
          if (type === "video") {
            return (
              <video poster={display_url} controls>
                <source src={video_url} type="video/mp4" />
              </video>
            );
          }

          return (
            <a target="_blank" href={props.link}>
              <img src={display_url} alt={caption} width="25%%" />
            </a>
          );
        }}
        renderMediaList={(children) => <div className="swiper">{children}</div>}
        renderError={() => <div>I have failed to parse it</div>}
        renderLoading={() => <div>Loading</div>}
      />
    </div>
  );
};

export default Instapost;
