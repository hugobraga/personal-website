import React from 'react';
import { SvgIcon } from '@mui/material';
import HuggingFaceSvgUrl from './HuggingFaceLogo.svg';

// Vite doesn't support CRA's `import { ReactComponent as ... }` by default.
// Import the SVG as a URL and render it inside the icon (or use <img/>).
const HuggingFaceIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 256 256">
      {/* Use an img so the SVG is loaded as an asset URL. */}
      <image href={HuggingFaceSvgUrl} width="100%" height="100%" />
    </SvgIcon>
  );
};

export default HuggingFaceIcon;
