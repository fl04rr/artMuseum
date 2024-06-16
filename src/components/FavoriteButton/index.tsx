import React from 'react';
import { Button } from './styled';
import useFavoriteItem from '@/utils/hooks/useFavoriteItem';
import { icons } from '@/utils/images';

type Props = {
  itemId: number;
};

export default function FavoriteButton({ itemId }: Props) {
  const { isFavorite, toggle } = useFavoriteItem(itemId);

  const currentIcon = isFavorite ? icons.bookmarkFilledIcon : icons.bookmarkIcon;

  return (
    <Button onClick={toggle} disabled={itemId === -1}>
      <img src={currentIcon.src} alt={currentIcon.alt} />
    </Button>
  );
}
