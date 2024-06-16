import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';
import Heading from '../Heading';
import Subtext from '../Subtext';

type ErrorProps = {
  title: string;
};
export default function CustomError({ title }: ErrorProps) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Link to="/">
        <Subtext center>GO HOME</Subtext>
      </Link>
    </Container>
  );
}
