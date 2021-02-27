// https://codepen.io/tvweinstock/pen/wegZEW
import React from "react";
// import ReactDOM from 'react-dom';
import "./Instalinks3.scss";
import Instapost from "./components/Instapost";

// const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'];
const imgUrls = [
//   "https://www.instagram.com/p/CLEYPLQh0I4/", 
// "https://www.instagram.com/p/CKTYst_A8Bt/", 
// "https://www.instagram.com/p/CKQz5oIgOpE/",
// "https://www.instagram.com/p/CLEYPLQh0I4/", 
// "https://www.instagram.com/p/CKTYst_A8Bt/", 
// "https://www.instagram.com/p/CKQz5oIgOpE/"
"/p/CLEYPLQh0I4/", 
"/p/CKTYst_A8Bt/", 
"/p/CKQz5oIgOpE/",
"/p/CLEYPLQh0I4/", 
"/p/CKTYst_A8Bt/", 
"/p/CKQz5oIgOpE/"
];
const imgLinks = [
  "https://pecepoli.com.br/PT/IOT/", 
  "https://www.youtube.com/channel/UCCNqpIknWKoRyzy-5rSL4bQ", 
  "https://iotslam.com/iot-slam-conference-registration/",
  "https://pecepoli.com.br/PT/IOT/", 
  "https://www.youtube.com/channel/UCCNqpIknWKoRyzy-5rSL4bQ", 
  "https://iotslam.com/iot-slam-conference-registration/"
];

class Instalinks3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, link, index) {
    return (
      <div 
      // onClick={(e) => this.openModal(e, index)}
      >
          <Instapost
            post={src}
            link={link}
          />

        {/* <img src={src} key={src} /> */}
      </div>
    ) 
  }
  openModal(e, index) {
    this.setState ({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <h1>🔥 This Gallery Is Lit 🔥</h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < imgUrls.length} 
          src={imgUrls[this.state.currentIndex]} 
          link={imgLinks[this.state.currentIndex]}
        />
      </div>
    )
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  // componentWillUnMount() {
  //   document.body.removeEventListener('keydown', this.handleKeyDown);
  // }
  handleKeyDown(e) {
    // if (e.keyCode === 27)
    //   this.props.closeModal();
    // if (e.keyCode === 37 && this.props.hasPrev)
    //   this.props.findPrev();
    // if (e.keyCode === 39 && this.props.hasNext)
    //   this.props.findNext();
  }
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src, link } = this.props;
    if (!src) {
      console.log('whut')
      return null;
    }
    console.log(link);
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="modal">
          <div className='modal-body'>
            <a href="#" className='modal-close' 
            // onClick={closeModal} onKeyDown={this.handleKeyDown}
            >
              {/* &times; */}
              </a>
            {hasPrev && <a href="#" className='modal-prev' 
            // onClick={findPrev} onKeyDown={this.handleKeyDown}
            >
              {/* &lsaquo; */}
            </a>}
            {hasNext && <a href="#" className='modal-next' 
            // onClick={findNext} onKeyDown={this.handleKeyDown}
            >
              {/* &rsaquo; */}
            </a>}
            <Instapost
            post={src}
            link={link}
          />
            {/* <img src={src} /> */}
          </div>
        </div>
      </div>
    )
  }
}

// ReactDOM.render(<Instalinks3 />, document.querySelector('.gallery-container'));

export default Instalinks3;