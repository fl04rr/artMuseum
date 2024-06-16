import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@/components/Container';
import ErrorBoundary from '@/components/ErrorBoundry';
import Main from '@/components/Main';
import SingleArt from '@/components/SingleArt';
import Wrapper from '@/components/Wrapper';
import { RESERVE_PHRASES } from '@/constants/phrases';
import { getArtById } from '@/utils/getArts';
import useFetch from '@/utils/hooks/useFetch';
import { SingleArtType } from '@/utils/types';

export default function ArtPage() {
  const { id } = useParams();
  const { data: artContent, isLoading } = useFetch<SingleArtType | undefined>(() =>
    getArtById(id || '-1'),
  );

  document.title = `${artContent?.title || RESERVE_PHRASES.title} | ${artContent?.artist_title || RESERVE_PHRASES.author}`;

  return (
    <Main>
      <Wrapper>
        <Container>
          <ErrorBoundary>
            <SingleArt artContent={artContent!} isLoading={isLoading} />
          </ErrorBoundary>
        </Container>
      </Wrapper>
    </Main>
  );
}
