// https://www.npmjs.com/package/react-social-login-buttons

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
// import "./styles.css";

import {
  AmazonLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  BufferLoginButton
} from "react-social-login-buttons";

const FacebookButton = styled(FacebookLoginButton)`
  width: 150px;
`;

// function App() {
//   return (
//     <div className="App">
//       <AmazonLoginButton />
//       <FacebookLoginButton />
//       <GithubLoginButton />
//       <GoogleLoginButton />
//       <InstagramLoginButton />
//       <LinkedInLoginButton />
//       <MicrosoftLoginButton />
//       <TwitterLoginButton />
//       <BufferLoginButton />
//       <FacebookButton iconSize="50px" size="100px">
//         <span style={{ fontSize: 10 }}></span>
//       </FacebookButton>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

const SMButtons4 = () => {
    return (
        <div>
        <AmazonLoginButton />
        <FacebookLoginButton />
        <GithubLoginButton />
        <GoogleLoginButton />
        <InstagramLoginButton />
        <LinkedInLoginButton />
        <MicrosoftLoginButton />
        <TwitterLoginButton />
        <BufferLoginButton />
        <FacebookButton iconSize="50px" size="100px">
          <span style={{ fontSize: 10 }}></span>
        </FacebookButton>
      </div>
  
    );   
}

export default SMButtons4;