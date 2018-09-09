import styled, { css } from 'styled-components';

import colors from 'styles/colors';

const Card = styled.div`
  ${props => css`
    background-color: ${props.bgColor ? props.bgColor : colors.white};
    margin: ${props.isCentered && '0 auto'};
    width: ${props.width ? `${props.width}px` : 'auto'};
    height: ${props.height ? `${props.height}px` : 'auto'};
    padding: ${props.hasDefaultPadding && '20px 10px'};
  `};
  margin-bottom: ${props => {
    if (props.hasMarginBottomSm) return '15px';
    if (props.hasMarginBottomMd) return '25px';
    return '0';
  }}
  transition: width 0.5s linear, height 0.5s linear, box-shadow 0.3s ease;
  box-shadow: ${colors.mainShadow};
  border-radius: 5px;

  &:hover {
    box-shadow: ${colors.orangeShadow}
  }
`;

export default Card;
