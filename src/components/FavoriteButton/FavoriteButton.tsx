import React from "react";
import { Button } from "./styled";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkFilledIcon from "../../assets/icons/bookmarkFilled.svg";
import useFavoriteItem from "@/utils/hooks/useFavoriteItem";

type Props = {
  itemId: number;
};

export default function FavoriteButton({ itemId }: Props) {
  const { isFavorite, toggle } = useFavoriteItem(itemId);
  return (
    <Button onClick={toggle} disabled={itemId === -1}>
      <img
        src={isFavorite ? bookmarkFilledIcon : bookmarkIcon}
        alt="bookmarkIcon"
      />
    </Button>
  );
}
