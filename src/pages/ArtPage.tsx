import React from 'react';
import { RESERVE_PHRASES } from '@/constants/phrases';
import { getArtById } from '@/utils/getArts';
import useFetch from '@/utils/hooks/useFetch';
import { SingleArtType } from '@/utils/types';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundry';
import SingleArt from '@/components/SingleArt';
import Wrapper from '@/components/Wrapper';
import Container from '@/components/Container';

export default function ArtPage() {
  const { id } = useParams();
  const { data: artContent, isLoading } = useFetch<SingleArtType | undefined>(() =>
    getArtById(id || '-1'),
  );

  document.title = `${artContent?.title || RESERVE_PHRASES.title} | ${artContent?.artist_title || RESERVE_PHRASES.author}`;

  return (
    <Wrapper>
      <Container>
        <ErrorBoundary>
          <SingleArt artContent={artContent!} isLoading={isLoading} />
        </ErrorBoundary>
      </Container>
    </Wrapper>
  );
}
