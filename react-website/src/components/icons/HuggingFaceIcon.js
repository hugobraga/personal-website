import React from 'react';
import { SvgIcon } from '@mui/material';

const HuggingFaceIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    {/* Face circle */}
    <circle cx="32" cy="32" r="30" fill="#ffcc4d" />
    {/* Eyes */}
    <circle cx="20.5" cy="24.5" r="5" fill="#664500" />
    <circle cx="43.5" cy="24.5" r="5" fill="#664500" />
    {/* Mouth */}
    <path
      fill="#664500"
      d="M32 52c-8.25 0-15-3.75-15-3.75s2.25-9.75 15-9.75 15 9.75 15 9.75S40.25 52 32 52z"
    />
    {/* Teeth */}
    <path
      fill="#fff"
      d="M22.5 42.25s1.5-3 9.5-3 9.5 3 9.5 3S36.25 44 32 44s-9.5-1.75-9.5-1.75z"
    />
    {/* Left Hand */}
    <path
      fill="#FFAC33"
      d="M20.71 47.39C17.79 50.3 12.5 52.22 8 52l4.32-6.6c3.58-2.16 8.82-3.4 13.12-3.4L20.71 47.39z"
    />
    {/* Right Hand */}
    <path
      fill="#FFAC33"
      d="M43.29 47.39C46.21 50.3 51.5 52.22 56 52l-4.32-6.6c-3.58-2.16-8.82-3.4-13.12-3.4l4.73 5.39z"
    />
    {/* Left Arm */}
    <path
      fill="#FFAC33"
      d="M18 39.5c-4.5 0-8.5 1.5-10.5 4l-2.5-1.5c2-3 6-5 10.5-5l2.5 2.5z"
    />
    {/* Right Arm */}
    <path
      fill="#FFAC33"
      d="M46 39.5c4.5 0 8.5 1.5 10.5 4l-2.5 1.5c-2-3-6-5-10.5-5l-2.5 2.5z"
    />
  </SvgIcon>
);

export default HuggingFaceIcon;