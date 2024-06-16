import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Main from '@/components/Main';
import MainHeading from '@/components/MainHeading';
import Subtext from '@/components/Subtext';
import Wrapper from '@/components/Wrapper';

export default function ErrorPage() {
  return (
    <Main>
      <Wrapper>
        <Container>
          <div>
            <Subtext center>404</Subtext>
            <Heading>page doesn&apos;t exist</Heading>
          </div>
          <div>
            <MainHeading>Page not found</MainHeading>
            <Link to="/">
              <Subtext center>Go home</Subtext>
            </Link>
          </div>
        </Container>
      </Wrapper>
    </Main>
  );
}
