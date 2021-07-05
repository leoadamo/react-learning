import { css } from '@emotion/react';
import { boxShadow } from '../../styles/snippets';

export const __wrapper = css`
  display: flex;
  align-items: stretch;
  ${boxShadow}

  .wrapper {
    &__button {
      max-width: 140px;

      svg {
        display: block;
        transition: all 0.3s ease-in;
      }

      &:hover {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
