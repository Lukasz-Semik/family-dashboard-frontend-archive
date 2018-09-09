import { keyframes } from 'styled-components';

export const mountDefaultIntro = keyframes`
  from {
    opacity: 0;
    transform: scale(0.3);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;
