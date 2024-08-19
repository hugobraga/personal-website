import React from 'react';
import { IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import HuggingFaceIcon from "./icons/HuggingFaceIcon";
import KaggleIcon from "./icons/KaggleIcon";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../pages/Microblog.css";

const HomeRoundedButtons = () => {
    return (
        <div className="hor-centered">
            <IconButton
                component={Link}
                href="https://linkedin.com/in/bragahugo"
                target="_blank"
                style={{ backgroundColor: '#0A66C2', color: 'white' }} // LinkedIn Blue
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                component={Link}
                href="https://github.com/hugobraga"
                target="_blank"
                style={{ backgroundColor: '#333', color: 'white' }} // GitHub Black
            >
                <GitHubIcon />
            </IconButton>
            <IconButton
                component={Link}
                href="https://instagram.com/hugobraga.io"
                target="_blank"
                style={{ backgroundColor: '#E1306C', color: 'white' }} // Instagram Pink
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                component={Link}
                href="https://x.com/_hugobraga"
                target="_blank"
                style={{ backgroundColor: '#000000', color: 'white' }} // X Black
            >
                <XIcon />
            </IconButton>
            <IconButton
                component={Link}
                href="https://huggingface.co/hugobraga"
                target="_blank"
                style={{ backgroundColor: '#ffcc4d', color: '#664500' }} // Hugging Face Yellow
            >
                <HuggingFaceIcon />
            </IconButton>
            <IconButton
                component={Link}
                href="https://www.kaggle.com/bragahugo"
                target="_blank"
                style={{ backgroundColor: '#20BEFF', color: 'white' }} // Kaggle Blue
            >
                <KaggleIcon />
            </IconButton>
{/*}            <IconButton
                component={Link}
                href="https://x.com/_hugobraga"
                target="_blank"
                style={{ backgroundColor: '#1DA1F2', color: 'white' }} // Twitter Blue
            >
                <TwitterIcon />
            </IconButton>*/}
{/*            <IconButton
                component={Link}
                href="https://www.facebook.com/hugovvbraga"
                target="_blank"
                style={{ backgroundColor: '#1877F2', color: 'white' }} // Facebook Blue

            >
                <FacebookIcon />
            </IconButton>*/}
        </div>
    );
}
export default HomeRoundedButtons;