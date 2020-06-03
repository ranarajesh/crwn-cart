import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './404-error.styles';

const Error404 = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'} />
    <ErrorImageText>This Page is Lost in Space</ErrorImageText>
  </ErrorImageOverlay>
);

export default Error404;
