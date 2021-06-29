/** @jsxImportSource @emotion/react */
import { React } from 'react';
import PropTypes from 'prop-types';

import { __button } from './BaseButton.styles';

const BaseButton = ({
  type,
  label,
  title,
  isPrimary,
  isSecondary,
  isDisabled,
  styles,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      title={title}
      css={[__button(isPrimary, isSecondary, isDisabled), styles]}
      onClick={onClick}
    >
      {children ? children : label}
    </button>
  );
};

BaseButton.defaultProps = {
  type: 'button',
};

BaseButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  styles: PropTypes.object,
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

export default BaseButton;
