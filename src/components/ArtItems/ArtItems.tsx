import React from "react";
import { ArtItemsWrapper } from "./styled";
import { Art } from "@/utils/types";
import ArtItemSkeleton from "../Skeleton/ArtItemSkeleton";
import { PREVIEW_ITEMS_COUNT } from "@/constants/constants";
import ArtItem from "../ArtItem/ArtItem";

type ArtItemsProps = {
  arts: Art[] | undefined;
  isLoading: boolean;
  previewItemsCount?: number;
};

export default function ArtItems({
  arts,
  isLoading,
  previewItemsCount,
}: ArtItemsProps) {
  return (
    <ArtItemsWrapper>
      {isLoading
        ? [...Array(previewItemsCount || PREVIEW_ITEMS_COUNT)].map(
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
