import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import colors from 'styles/colors';

const Heading = ({ tag: CustomTag, children, className }) => (
  <CustomTag className={className}>{children}</CustomTag>
);

const Title = styled(Heading)`
  ${props => css`
    color: ${props.color || colors.mainBlue};
    text-transform: ${props.isUppercased && 'uppercase'};
    text-align: ${props.isCentered && 'center'};
  `};
  font-size: ${props => {
    if (props.isMedium) return '2rem';
    if (props.isSmall) return '1.5rem';
    return '3rem';
  }}
  margin: 0;
`;

Heading.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  tag: 'h1',
};

export default Title;
