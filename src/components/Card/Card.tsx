import React from "react";
import { Link } from "react-router-dom";
import { CardDescriptionWrapper, StyledCard } from "./styled";
import Image from "../Image/Image";
import ArtDescription from "../ArtItem/ArtDescription";

export type CardProps = {
  id: number;
  imageId: string;
  title: string;
  author: string;
  styleTitle: string;
};

export default function Card({
  id,
  imageId,
  title,
  author,
  styleTitle,
}: CardProps) {
  return (
    <StyledCard>
      <Link to={`/art/${id}`}>
        <Image imageId={imageId} />
      </Link>
      <CardDescriptionWrapper>
        <ArtDescription
          title={title}
          author={author}
          styleTitle={styleTitle}
          id={id}
        />
      </CardDescriptionWrapper>
    </StyledCard>
  );
}
