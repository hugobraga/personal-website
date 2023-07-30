// https://jaketrent.github.io/react-social-icons/

// import React from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import "../pages/Microblog.css";

const SMButtons = () => {
    return (
        <div className="hor-centered">
            <SocialIcon
                url="https://linkedin.com/in/bragahugo"
                target="_blank"
                // bgColor="#0a66c2"
                bgColor="#0085ae"
                fgColor="#ffffff"
            />

            <SocialIcon
                url="https://github.com/hugobraga"
                target="_blank"
                // bgColor="#0a66c2"
                //bgColor="#0085ae"
                fgColor="#ffffff"
            />            

            <SocialIcon
                url="https://instagram.com/hugovvbraga"
                target="_blank"
                bgColor="#d6249f"
                fgColor="#ffffff"
            />

            <SocialIcon
                url="https://twitter.com/_hugobraga"
                target="_blank"
                fgColor="#ffffff"
            />

            <SocialIcon
                url="https://www.facebook.com/hugovvbraga"
                target="_blank"
                fgColor="#ffffff"
            />
        </div>
    );
}

export default SMButtons;