import React from 'react';
import { IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faKaggle } from '@fortawesome/free-brands-svg-icons'; // Import the Bluesky and Kaggle icons
import HuggingFaceIcon from "./icons/HuggingFaceIcon.jsx";
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
                href="https://bsky.app/profile/hugobraga.io" // Replace with your actual Bluesky profile URL
                target="_blank"
                style={{ backgroundColor: '#00AAFF', color: 'white' }} // Bluesky Blue
            >
                <FontAwesomeIcon icon={faBluesky} />
            </IconButton>
            <IconButton
                component="a"
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
                <FontAwesomeIcon icon={faKaggle} />
            </IconButton>
        </div>
    );
}
export default HomeRoundedButtons;
