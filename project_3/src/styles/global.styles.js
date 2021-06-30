import { css } from '@emotion/react';

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
    font-family: Lato, Open Sans, sans-serif;
    font-weight: 400;
    line-height: 1;
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
