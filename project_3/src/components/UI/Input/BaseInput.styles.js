import { css } from '@emotion/react';

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
      padding: 10px;
      border: 2px solid;
      border-radius: 3px;
      outline: none;
    }
  }
`;
