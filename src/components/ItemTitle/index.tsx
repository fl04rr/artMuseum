import React from 'react';
import { StyledItemTitle } from './styled';

type ItemTitleProps = {
  children: string;
};
export default function ItemTitle({ children }: ItemTitleProps) {
  return <StyledItemTitle>{children}</StyledItemTitle>;
}
