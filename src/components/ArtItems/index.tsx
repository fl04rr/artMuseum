import React, { memo } from 'react';

import { PREVIEW_ITEMS_COUNT } from '@/constants/constants';
import { Art } from '@/utils/types';

import ArtItem from '../ArtItem';
import ArtItemSkeleton from '../ArtItemSkeleton/ArtItemSkeleton';
import { ArtItemsWrapper } from './styled';

type ArtItemsProps = {
  arts: Art[] | undefined;
  isLoading: boolean;
  previewItemsCount?: number;
};

function ArtItems({ arts, isLoading, previewItemsCount }: ArtItemsProps) {
  return (
    <ArtItemsWrapper>
      {isLoading
        ? [...Array(previewItemsCount !== undefined ? previewItemsCount : PREVIEW_ITEMS_COUNT)].map(
            (_, index) => <ArtItemSkeleton key={index} />,
          )
        : arts?.map((el) => (
            <ArtItem
              key={el.id}
              author={el.artist_title}
              title={el.title}
              id={el.id}
              imageId={el.image_id}
              styleTitle={el.style_title}
            />
          ))}
    </ArtItemsWrapper>
  );
}

export default memo(ArtItems);
