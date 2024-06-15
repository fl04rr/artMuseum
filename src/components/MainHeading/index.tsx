import React from 'react';
import { StyledMainHeading } from './styled';

type MainHeadingProps = {
  children: React.ReactNode;
};
export default function MainHeading({ children }: MainHeadingProps) {
  return <StyledMainHeading>{children}</StyledMainHeading>;
}
