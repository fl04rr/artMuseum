import React from 'react';
import ArtItem from '../ArtItem';
import { LOADING_PHRASES } from '@/constants/phrases';

export default function ArtItemSkeleton() {
  return (
    <ArtItem
      author={LOADING_PHRASES.author}
      title={LOADING_PHRASES.title}
      id={-1}
      imageId={''}
      styleTitle={LOADING_PHRASES.styleTitle}
    />
  );
}
