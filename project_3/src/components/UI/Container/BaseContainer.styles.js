import { css } from '@emotion/react';
import variables from '../../../styles/variables';

export const __container = css`
  width: calc(100% - ${variables.ui.padding.mobile});
  max-width: ${variables.ui.container.maxWidth};
  margin: auto;
`;
