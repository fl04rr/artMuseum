import React from 'react';
import { StyledContainer } from './styled';

type ContainerProps = {
  children: React.ReactNode;
  gap?: number;
  direction?: string;
};
export default function Container({ children, gap, direction }: ContainerProps) {
  return (
    <StyledContainer $gap={gap} $direction={direction}>
      {children}
    </StyledContainer>
  );
}
