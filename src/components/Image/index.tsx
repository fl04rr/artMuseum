import React, { useState } from 'react';
import { ImageWrapper, Img } from './styled';
import getImage from '@/utils/getImage';
import { icons } from '@/utils/images';

type Props = {
  imageId?: string;
  imageSize?: number | undefined;
};
export default function Image({ imageId, imageSize }: Props) {
  const [isError, setIsError] = useState(false);

  return (
    <ImageWrapper>
      {imageId && !isError && (
        <Img src={getImage(imageSize, imageId)} alt="art" onError={() => setIsError(true)} />
      )}
      {isError && <Img src={icons.logoIcon.src} alt={icons.logoIcon.alt} $error />}
    </ImageWrapper>
  );
}
