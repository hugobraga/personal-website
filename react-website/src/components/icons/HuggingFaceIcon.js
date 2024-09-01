import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as HuggingFaceSvg } from './HuggingFaceLogo.svg'; // Update with the path to your SVG

const HuggingFaceIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 256 256" >
      <HuggingFaceSvg width="100%" height="100%" />
    </SvgIcon>
  );
};

export default HuggingFaceIcon;