import React, { memo } from 'react';

import useFavoriteItem from '@/utils/hooks/useFavoriteItem';
import { icons } from '@/utils/images';

import { Button } from './styled';

type Props = {
  itemId: number;
};

function FavoriteButton({ itemId }: Props) {
  const { isFavorite, toggle } = useFavoriteItem(itemId);

  const currentIcon = isFavorite ? icons.bookmarkFilledIcon : icons.bookmarkIcon;

  return (
    <Button onClick={toggle} disabled={itemId === -1}>
      <img src={currentIcon.src} alt={currentIcon.alt} />
    </Button>
  );
}

export default memo(FavoriteButton);
