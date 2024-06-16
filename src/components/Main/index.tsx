import React from 'react';

import { StyledMain } from './styled';

type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
