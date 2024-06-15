import React from 'react';
import { Link } from 'react-router-dom';
import { RESERVE_PHRASES } from '@/constants/phrases';
import FavoriteButton from '../FavoriteButton';
import { ArtTextWrapper, ItemAuthor, ItemStyleTitle, StyledArtDescription } from './styled';
import ItemTitle from '../ItemTitle';

type ArtDescriptionProps = {
  title: string;
  author: string;
  styleTitle: string;
  id: number;
  gap?: number;
};
export default function ArtDescription({
  title,
  author,
  styleTitle,
  id,
  gap,
}: ArtDescriptionProps) {
  return (
    <StyledArtDescription $gap={gap}>
      <ArtTextWrapper>
        <Link to={`/art/${id}`}>
          <ItemTitle>{title || RESERVE_PHRASES.title}</ItemTitle>
        </Link>
        <ItemAuthor>{author || RESERVE_PHRASES.author}</ItemAuthor>
        <ItemStyleTitle>{styleTitle || RESERVE_PHRASES.styleTitle}</ItemStyleTitle>
      </ArtTextWrapper>
      <FavoriteButton itemId={id} />
    </StyledArtDescription>
  );
}
