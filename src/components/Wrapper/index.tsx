import React from 'react';
import { StyledWrapper } from './styled';

type WrapperProps = {
  children: React.ReactNode;
  gap?: number;
  direction?: string;
};
export default function Wrapper({ gap, direction, children }: WrapperProps) {
  return (
    <StyledWrapper $gap={gap} $direction={direction}>
      {children}
    </StyledWrapper>
  );
}
