import React, { useMemo } from "react";

import { GalleryWrapper, StyledGallery } from "./styled";
import { Art } from "@/utils/types";
import { ARTS_LIMIT, TOTAL_PAGES } from "@/constants/constants";
import CardSkeleton from "../Skeleton/CardSkeleton";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

type GalleryProps = {
  currentPage: number;
  arts: Art[] | undefined;
  isLoading: boolean;
  setCurrentPage: (page: number) => void;
};

export default function Gallery({
  currentPage,
  arts,
  isLoading,
  setCurrentPage,
}: GalleryProps) {
  const galleryItems = useMemo(() => {
    if (isLoading) {
      return [...Array(ARTS_LIMIT)].map((_, index) => (
        <CardSkeleton key={index} />
      ));
    }

    return arts?.map((el) => (
      <Card
        key={el.id}
        id={el.id}
        title={el.title}
        author={el.artist_title}
        imageId={el.image_id}
        styleTitle={el.style_title}
      />
    ));
  }, [isLoading, arts]);

  return (
    <StyledGallery>
      <GalleryWrapper>{galleryItems}</GalleryWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        setCurrentPage={setCurrentPage}
      />
    </StyledGallery>
  );
}
