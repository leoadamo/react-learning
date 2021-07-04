import { css } from '@emotion/react';
import variables from '../../../styles/variables';

export const __input = css`
  width: 100%;
  display: flex;
  flex-direction: column;

  .input {
    &__label {
      display: block;
      margin-bottom: 8px;
    }

    &__element {
      display: block;
      width: 100%;
      padding: 14px 20px;
      font-family: ${variables.fonts.family.default};
      font-size: 16px;
      font-weight: ${variables.fonts.weight.bold};
      color: ${variables.colors.white};
      background: ${variables.colors.secondary};
      border: none;

      &:hover,
      &:focus {
        outline: none;
      }
    }
  }
`;
