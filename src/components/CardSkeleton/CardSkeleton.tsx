import React from 'react';
import { CardDescriptionWrapper, StyledCard } from '../Card/styled';
import Image from '../Image';
import ArtDescription from '../ArtDescription';
import { LOADING_PHRASES } from '@/constants/phrases';

export default function CardSkeleton() {
  return (
    <StyledCard>
      <Image />
      <CardDescriptionWrapper>
        <ArtDescription
          author={LOADING_PHRASES.author}
          title={LOADING_PHRASES.title}
          styleTitle={LOADING_PHRASES.styleTitle}
          id={-1}
        />
      </CardDescriptionWrapper>
    </StyledCard>
  );
}
