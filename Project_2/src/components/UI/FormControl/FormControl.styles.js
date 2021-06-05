import { css } from 'styled-components';

export const __control = css`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;

    ${(props) =>
      props.invalid &&
      `
        color: red
      `}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;

    ${(props) =>
      props.invalid &&
      `
        border-color: red; 
        background-color: #fad0ec;
      `}
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
