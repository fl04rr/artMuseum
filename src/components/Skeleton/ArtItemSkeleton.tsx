import React from 'react';
import ArtItem from '../ArtItem/ArtItem';

export default function ArtItemSkeleton() {
  return (
    <ArtItem
      author={'Contacting the Author'}
      title={'Remembering the title'}
      id={-1}
      imageId={''}
      styleTitle={'Checking style'}
    />
  );
}
