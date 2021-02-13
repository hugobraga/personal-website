// https://www.npmjs.com/package/react-social-media-buttons

import SocialMediaButtons from 'react-social-media-buttons';

const SMButtons2 = () => {
    const links = ['https://www.linkedin.com/in/bragahugo',
        'https://www.instagram.com/hugovvbraga',
        'http://twitter.com/_hugobraga',
        'https://t.me/bragah',
        'skype:hugobraga85'];

    const buttonStyle = {
        backgroundColor: '#000000',
        borderRadius: '30%',
        margin: '0px 10px',
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

export default SMButtons2;