import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: ${props => {
    if (props.isOneThird) return '33.33%';
    if (props.isQuarter) return '25%';
    if (props.isHalf) return '50%';
    return '100%';
  }};
`;
