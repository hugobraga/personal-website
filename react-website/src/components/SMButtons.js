// https://jaketrent.github.io/react-social-icons/

// import React from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import "../pages/Microblog.css";

const SMButtons = () => {
    return (
        <div className="hor-centered">
            <SocialIcon
                url="http://linkedin.com/in/bragahugo"
                target="_blank"
                bgColor="#0a66c2"
            />

            <SocialIcon
                url="http://instagram.com/hugovvbraga"
                target="_blank"
                bgColor="#d6249f"
            />

            <SocialIcon
                url="http://twitter.com/_hugobraga"
                target="_blank"
            />
        </div>
    );
}

export default SMButtons;