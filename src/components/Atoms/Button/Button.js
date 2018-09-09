import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import colors from 'styles/colors';

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
    color: ${props.color ? props.color : colors.black}

    &:hover,
    &:focus {
      text-decoration: ${props.hasUnderscoreMarker && 'underline'};
    }
  `};
`;

const Button = ({
  translationPath,
  children,
  onClick,
  color,
  isFillingParent,
  hasUnderscoreMarker,
}) => (
  <ButtonPure
    isFillingParent={isFillingParent}
    hasUnderscoreMarker={hasUnderscoreMarker}
    onClick={onClick}
    color={color}
  >
    {translationPath || children}
  </ButtonPure>
);

Button.propTypes = {
  translationPath: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  color: PropTypes.string,
  isFillingParent: PropTypes.bool,
  hasUnderscoreMarker: PropTypes.bool,
};

Button.defaultProps = {
  translationPath: '',
  children: null,
  onClick: null,
  color: '',
  isFillingParent: false,
  hasUnderscoreMarker: false,
};

export default Button;
