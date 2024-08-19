import React from 'react';
import { SvgIcon } from '@mui/material';

const KaggleIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      d="M11.48 12.43l4.54 6.01c.36.5.95.79 1.58.79.41 0 .82-.13 1.17-.37.72-.5.89-1.48.38-2.2l-4.12-5.44 3.99-5.4c.51-.69.34-1.67-.35-2.19-.69-.52-1.67-.35-2.19.34l-4.19 5.67V3.53c0-1.03-.83-1.87-1.87-1.87S9.06 2.5 9.06 3.53v17.08c0 1.03.84 1.87 1.87 1.87s1.87-.84 1.87-1.87v-9.18z"
      fill="white" // Change to white for contrast
    />
  </SvgIcon>
);

export default KaggleIcon;