// https://www.npmjs.com/package/social-media-icons-react

import React from 'react';
import ReactDOM from 'react-dom';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const SMButtons5 = () => {
    return (
        <div>
            <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="5"
                borderStyle="solid"
                icon="twitter"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(28,186,223,1)"
                iconSize="5"
                roundness="20%"
                url="https://twitter.com/_hugobraga"
                size="100" />
        </div>
    );
}

export default SMButtons5;