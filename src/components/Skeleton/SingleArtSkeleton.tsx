import React from "react";
import SingleArtContent from "../SingleArt/SingleArtContent";
import { LOADING_PHRASES } from "@/constants/phrases";

export default function SingleArtSkeleton() {
  return (
    <SingleArtContent
      author={LOADING_PHRASES.author}
      title={LOADING_PHRASES.title}
      styleTitle={LOADING_PHRASES.styleTitle}
      dimensions={LOADING_PHRASES.dimensions}
      creditLine={LOADING_PHRASES.creditLine}
      originPlace={LOADING_PHRASES.placeOfOrigin}
      copyrightNotice={LOADING_PHRASES.copyright}
    />
  );
}
