import { css } from '@emotion/react';
import { darken } from 'polished';
import variables from '../../../styles/variables';

export const __button = (isPrimary, isSecondary, isDisabled) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 6px;
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: ${variables.fonts.family.default};
  font-weight: ${variables.fonts.weight.regular};
  color: ${variables.colors.white};
  transition: all 0.3s ease;
  cursor: pointer;

  ${isPrimary &&
  `
    background-color: ${variables.colors.green};
  
    &:hover {
      background-color: ${darken(0.15, `${variables.colors.green}`)};
    }
  `};

  ${isDisabled &&
  `
    background-color: ${variables.colors.tertiary};
    cursor: not-allowed;
  `}
`;
