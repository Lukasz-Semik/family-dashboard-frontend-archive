import styled, { css } from 'styled-components';

import colors from 'styles/colors';

const Card = styled.div`
  ${props => css`
    background-color: ${props.bgColor ? props.bgColor : colors.white};
    margin: ${props.isCentered && '0 auto'};
    width: ${props.width ? `${props.width}px` : 'auto'};
    height: ${props.height ? `${props.height}px` : 'auto'};
  `};
  margin-bottom: ${props => {
    if (props.hasMarginBottomSm) return '15px';
    if (props.hasMarginBottomMd) return '25px';
    return '0';
  }}
  box-shadow: ${colors.mainShadow};
  border-radius: 5px;
  padding: 20px 10px;
`;

export default Card;
