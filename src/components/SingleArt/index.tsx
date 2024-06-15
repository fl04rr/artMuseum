import React from 'react';
import { SingleArtButtonWrapper, SingleArtImage, StyledSingleArt } from './styled';
import SingleArtContent from '../SingleArtContent';
import { SingleArtType } from '@/utils/types';
import FavoriteButton from '../FavoriteButton';
import Image from '../Image';
import SingleArtSkeleton from '../SingleArtSkeleton/SingleArtSkeleton';

type SingleArtProps = {
  artContent: SingleArtType;
  isLoading: boolean;
};

export default function SingleArt({ artContent, isLoading }: SingleArtProps) {
  if (!artContent && !isLoading) {
    throw new Error('ArtContent is undefined');
  }

  return (
    <StyledSingleArt>
      <SingleArtImage>
        <SingleArtButtonWrapper>
          <FavoriteButton itemId={artContent?.id || -1} />
        </SingleArtButtonWrapper>

        <Image imageId={artContent?.image_id || ''} imageSize={800} />
      </SingleArtImage>
      {isLoading ? (
        <SingleArtSkeleton />
      ) : (
        <SingleArtContent
          author={artContent.artist_title}
          title={artContent.title}
          styleTitle={artContent.style_title}
          dimensions={artContent.dimensions}
          creditLine={artContent.credit_line}
          originPlace={artContent.place_of_origin}
          copyrightNotice={artContent.copyright_notice}
        />
      )}
    </StyledSingleArt>
  );
}
