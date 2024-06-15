import { BREAKPOINTS } from '@/constants/constants';
import styled from 'styled-components';

export const StyledContainer = styled.div<{
  $gap?: number;
  $direction?: string;
}>`
  width: 160rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.$direction || 'column'};
  gap: ${(props) => (props.$gap ? `${props.$gap}rem` : '5rem')};

  @media screen and (max-width: ${BREAKPOINTS.MODULE}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    padding: 0 16px;
  }
`;
