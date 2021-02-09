import SocialMediaButtons from 'react-social-media-buttons';

const SocialMedialButton = () => {
    const links = ['https://www.linkedin.com/in/bragahugo',
        'https://www.instagram.com/hugovvbraga',
        'http://twitter.com/_hugobraga'];

    const buttonStyle = {
        backgroundColor: '#000000',
        borderRadius: '50%',
    };

    const iconStyle = { color: '#ffffff' };

    return (
        <div>
            <SocialMediaButtons
                links={links}
                buttonStyle={buttonStyle}
                iconStyle={iconStyle}
                openNewTab={true}
            />
        </div>
    );
}

export default SocialMedialButton;