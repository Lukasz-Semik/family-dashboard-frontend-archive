import React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import colors from 'styles/colors';

const Heading = styled.h1`
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

const Title = ({ tag: CustomTag, children, translationPath, ...styles }) => {
  const hasTranslation = !isEmpty(translationPath);

  if (isEmpty(children) && !hasTranslation) return null;

  return (
    <Heading as={CustomTag} {...styles}>
      {!isEmpty(translationPath) ? <FormattedMessage id={translationPath} /> : children}
    </Heading>
  );
};

Title.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  translationPath: PropTypes.string,
};

Title.defaultProps = {
  tag: 'h1',
  children: null,
  translationPath: '',
};

export default Title;
