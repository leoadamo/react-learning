/** @jsxImportSource @emotion/react */
import React from 'react';

import { __container } from './BaseContainer.styles';

const BaseContainer = ({ children }) => {
  return <div css={__container}>{children}</div>;
};

export default BaseContainer;
