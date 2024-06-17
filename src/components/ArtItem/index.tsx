import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import ArtDescription from '../ArtDescription';
import Image from '../Image';
import { ArtImage, StyledArtItem } from './styled';

type WorkItemProps = {
  author: string;
  title: string;
  id: number;
  imageId: string;
  styleTitle: string;
};

function ArtItem({ author, title, id, imageId, styleTitle }: WorkItemProps) {
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

export default memo(ArtItem);
