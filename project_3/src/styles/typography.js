import { css } from '@emotion/react';

const fontsPath = '/fonts/Lato/';

export const __typography = css`
  @font-face {
    font-family: 'Lato';
    src: url(${fontsPath}Lato-Light.eot) format('embedded-opentype');
    src: url(${fontsPath}Lato-Light.eot?#iefix) format('embedded-opentype'),
      url(${fontsPath}Lato-Light.ttf) format('truetype'),
      url(${fontsPath}Lato-Light.woff) format('woff'),
      url(${fontsPath}Lato-Light.woff2) format('woff2');
    font-display: swap;
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${fontsPath}Lato-Regular.eot) format('embedded-opentype');
    src: url(${fontsPath}Lato-Regular.eot?#iefix) format('embedded-opentype'),
      url(${fontsPath}Lato-Regular.ttf) format('truetype'),
      url(${fontsPath}Lato-Regular.woff) format('woff'),
      url(${fontsPath}Lato-Regular.woff2) format('woff2');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${fontsPath}Lato-Bold.eot) format('embedded-opentype');
    src: url(${fontsPath}Lato-Bold.eot?#iefix) format('embedded-opentype'),
      url(${fontsPath}Lato-Bold.ttf) format('truetype'),
      url(${fontsPath}Lato-Bold.woff) format('woff'),
      url(${fontsPath}Lato-Bold.woff2) format('woff2');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
`;
