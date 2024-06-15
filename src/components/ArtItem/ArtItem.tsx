import React from 'react';
import ArtDescription from './ArtDescription';
import { ArtImage, StyledArtItem } from './styled';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

type WorkItemProps = {
  author: string;
  title: string;
  id: number;
  imageId: string;
  styleTitle: string;
};

export default function ArtItem({ author, title, id, imageId, styleTitle }: WorkItemProps) {
  return (
    <StyledArtItem>
      <Link to={`/art/${id}`}>
        <ArtImage>
          <Image imageId={imageId} imageSize={80} />
        </ArtImage>
      </Link>
      <ArtDescription author={author} title={title} id={id} styleTitle={styleTitle} gap={2} />
    </StyledArtItem>
  );
}
