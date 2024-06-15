import React from 'react';
import { StyledHeading } from './styled';

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return <StyledHeading>{children}</StyledHeading>;
}
