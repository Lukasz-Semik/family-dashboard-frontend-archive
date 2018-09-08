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

  ${props => css`
    width: ${props.isFillingParent ? '100%' : 'auto'};
    height: ${props.isFillingParent ? '100%' : 'auto'};
  `};
`;

const Button = ({ translationPath, children, onClick, isFillingParent }) => (
  <ButtonPure isFillingParent={isFillingParent} onClick={onClick}>
    {translationPath || children}
  </ButtonPure>
);

Button.propTypes = {
  translationPath: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isFillingParent: PropTypes.bool,
};

Button.defaultProps = {
  translationPath: '',
  children: null,
  onClick: null,
  isFillingParent: false,
};

export default Button;
