/** @jsxImportSource @emotion/react */
import React from 'react';
import PropTypes from 'prop-types';

import { __input } from './BaseInput.styles';

const BaseInput = ({
  name,
  type,
  label,
  placeholder,
  value,
  autoComplete,
  hasError,
  errorMessage,
  children,
  className,
  onChange,
  ...rest
}) => {
  return (
    <div css={__input} className={className}>
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        className="input__element"
      />
      {hasError && <small className="input__message">{errorMessage}</small>}
    </div>
  );
};

BaseInput.defaultProps = {
  type: 'text',
  placeholder: 'Please, type something',
  autoComplete: 'off',
};

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.any,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default BaseInput;
