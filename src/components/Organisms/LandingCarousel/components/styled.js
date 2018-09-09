import styled from 'styled-components';

import { mountDefaultIntro } from 'styles/animations';
import { mixinContentCenterFlex } from 'styles/mixins';

export const CardWrapper = styled.div`
  ${mixinContentCenterFlex};
  height: 100%;
`;

export const MainWrapper = styled.div`
  max-width: 100%;
  position: relative;
  overflow-x: hidden;
  min-height: 406px;
`;

export const FlyingWrapper = styled.div`
  position: absolute;
  width: 100%;
  transition: all 0.5s linear;
  top: 0;
  left: ${props => {
    if (props.isMovedRight) return '33.33%';
    if (props.isMovedLeft) return '-33.33%';
    return '0';
  }};
`;

export const ButtonCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 33.33%;
  left: ${props => (props.isRightButton ? '100%' : '-33.33%')};
`;

export const AnimatedWrapper = styled.div`
  animation: ${mountDefaultIntro} 0.5s linear;
`;

export const AnimatedButtonWrapper = styled.div`
  height: 100%;
  animation: ${mountDefaultIntro} 0.5s linear;
`;
