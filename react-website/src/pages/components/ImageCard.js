import React from "react";

// const ImageCard = (props) => {
//     const { description, urls } = props.image;
//     let imageRef = createRef();
//   return (
//     <div>
//       <a target="_blank" href={link}>
//         <img ref={imageRef} src={urls.small} alt={description} />
//       </a>
//     </div>
//   );
// }

// export default ImageCard;

class ImageCard extends React.Component {
  constuctor(props) {
    // super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    console.log(this.imageRef.current.clientHeight);
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    // const { description, urls } = this.props.image;

    return (
    //   <div style={{ gridRowEnd: `span ${this.state.spans}` }}></div>
      <div style={{ gridRowEnd: this.state.spans }}>
        <a target="_blank" href={this.props.link}>
          {/* <img ref={this.imageRef} src={urls.small} alt={description} /> */}
          <img ref={this.imageRef} src={this.props.post} />
        </a>
      </div>
    );
  }
}

export default ImageCard;
