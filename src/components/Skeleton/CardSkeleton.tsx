import React from 'react';
import { CardDescriptionWrapper, StyledCard } from '../Card/styled';
import ArtDescription from '../ArtItem/ArtDescription';
import Image from '../Image/Image';

export default function CardSkeleton() {
  return (
    <StyledCard>
      <Image />
      <CardDescriptionWrapper>
        <ArtDescription
          author={'Contacting the Author'}
          title={'Remembering the title'}
          styleTitle={'Checking style'}
          id={-1}
        />
      </CardDescriptionWrapper>
    </StyledCard>
  );
}
