import React, { useState } from "react";
import { ImageWrapper, Img } from "./styled";
import getImage from "@/utils/getImage";
import logoIcon from "../../assets/logoIcon.svg";

type Props = {
  imageId?: string;
  imageSize?: number | undefined;
};
export default function Image({ imageId, imageSize }: Props) {
  const [isError, setIsError] = useState(false);

  return (
    <ImageWrapper>
      {imageId && !isError && (
        <Img
          src={getImage(imageSize, imageId)}
          alt="art"
          onError={() => setIsError(true)}
        />
      )}
      {isError && <Img src={logoIcon} alt="default icon" $error />}
    </ImageWrapper>
  );
}
