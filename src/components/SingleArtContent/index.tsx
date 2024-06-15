import React from 'react';

import { RESERVE_PHRASES } from '@/constants/phrases';
import { ArtContentWrapper, ArtInfoSection, ArtList, SingleItemAuthor } from './styled';
import Heading from '../Heading';
import Subtext from '../Subtext';

type SingleArtContentProps = {
  author: string;
  title: string;
  styleTitle: string;
  dimensions: string;
  creditLine: string;
  originPlace: string;
  copyrightNotice: string;
};

export default function SingleArtContent({
  author,
  title,
  styleTitle,
  dimensions,
  creditLine,
  originPlace,
  copyrightNotice,
}: SingleArtContentProps) {
  return (
    <ArtContentWrapper>
      <ArtInfoSection>
        <Heading>{title || RESERVE_PHRASES.title}</Heading>
        <ArtList>
          <SingleItemAuthor>{author || RESERVE_PHRASES.author}</SingleItemAuthor>
          <Subtext bold>{styleTitle || RESERVE_PHRASES.styleTitle}</Subtext>
        </ArtList>
      </ArtInfoSection>

      <ArtInfoSection>
        <Heading>Overview</Heading>

        <ArtList>
          <div>
            <Subtext inline>Place of Origin: </Subtext>
            <Subtext defaultColor inline>
              {originPlace || RESERVE_PHRASES.placeOfOrigin}
            </Subtext>
          </div>
          <div>
            <Subtext inline>Dimensions: Sheet: </Subtext>
            <Subtext defaultColor inline>
              {dimensions || RESERVE_PHRASES.dimensions}
            </Subtext>
          </div>
          <div>
            <Subtext inline>Credit Line: </Subtext>
            <Subtext defaultColor inline>
              {creditLine || RESERVE_PHRASES.creditLine}
            </Subtext>
          </div>
          <div>
            <Subtext inline>copyright Notice: </Subtext>
            <Subtext defaultColor inline>
              {copyrightNotice || RESERVE_PHRASES.copyright}
            </Subtext>
          </div>
        </ArtList>
      </ArtInfoSection>
    </ArtContentWrapper>
  );
}
