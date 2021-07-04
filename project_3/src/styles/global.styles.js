import { css } from '@emotion/react';
import variables from './variables';

import { __typography } from './typography';

export const __global = css`
  ${__typography}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${variables.colors.primary};
    font-family: ${variables.fonts.family.default};
    font-weight: ${variables.fonts.weight.regular};
    line-height: ${variables.fonts.lineHeight.normal};
    color: ${variables.colors.white};
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
