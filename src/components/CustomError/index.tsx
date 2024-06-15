import React from 'react';
import { StyledError } from './styled';

type ErrorProps = {
  title: string;
};
export default function CustomError({ title }: ErrorProps) {
  return <StyledError>{title}</StyledError>;
}
