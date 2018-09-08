import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const buttonReset = css`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const ButtonPure = styled.button`
  ${buttonReset};
`;

const Button = ({ translationPath, children, onClick }) => (
  <ButtonPure onClick={onClick}>{translationPath || children}</ButtonPure>
);

Button.propTypes = {
  translationPath: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  translationPath: '',
  children: null,
  onClick: null,
};

export default Button;
