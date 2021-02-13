// https://github.com/react-native-elements/react-native-elements

import { SocialIcon } from 'react-native-elements';

// // Icon
// <SocialIcon
//   type='twitter'
// />

// <SocialIcon
//   raised={false}
//   type='gitlab'
// />

// <SocialIcon
//   light
//   type='medium'
// />

// <SocialIcon
//   light
//   raised={false}
//   type='medium'
// />


// // Button
// <SocialIcon
//   title='Sign In With Facebook'
//   button
//   type='facebook'
// />

// <SocialIcon
//   title='Some Twitter Message'
//   button
//   type='twitter'
// />

// <SocialIcon
//   button
//   type='medium'
// />

// <SocialIcon
//   button
//   light
//   type='instagram'
// />

const SMButtons3 = () => {
    return (
        <div>
            <SocialIcon
            button
            type='linkedin'
            onPress={() => {
                window.location.href = 'https://www.linkedin.com/in/bragahugo';
            }}
            />

            <SocialIcon
            button
            type='instagram'
            onPress={() => {
                window.location.href = 'https://www.instagram.com/hugovvbraga';
            }}

            />
        </div>
    );
}

export default SMButtons3;