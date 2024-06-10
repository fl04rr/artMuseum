import React from "react";

import { ArtContentWrapper, ArtInfoSection, ArtList } from "./styled";
import {
  Heading,
  SingleItemAuthor,
  Subtext,
  SubtextBold,
} from "../Texts/styled";
import { RESERVE_PHRASES } from "@/constants/phrases";

type SingleArtContentProps = {
  author: string;
  title: string;
  styleTitle: string;
  dimensions: string;
  creditLine: string;
  originPlace: string;
  copyrightNotice: string;
};

export default function SingleArtContent({
  author,
  title,
  styleTitle,
  dimensions,
  creditLine,
  originPlace,
  copyrightNotice,
}: SingleArtContentProps) {
  return (
    <ArtContentWrapper>
      <ArtInfoSection>
        <Heading>{title || RESERVE_PHRASES.title}</Heading>
        <ArtList>
          <SingleItemAuthor>
            {author || RESERVE_PHRASES.author}
          </SingleItemAuthor>
          <SubtextBold>{styleTitle || RESERVE_PHRASES.styleTitle}</SubtextBold>
        </ArtList>
      </ArtInfoSection>

      <ArtInfoSection>
        <Heading>Overview</Heading>

        <ArtList>
          <div>
            <Subtext $inline>Place of Origin: </Subtext>
            <Subtext $defaultColor $inline>
              {originPlace || RESERVE_PHRASES.placeOfOrigin}
            </Subtext>
          </div>
          <div>
            <Subtext $inline>Dimensions: Sheet: </Subtext>
            <Subtext $defaultColor $inline>
              {dimensions || RESERVE_PHRASES.dimensions}
            </Subtext>
          </div>
          <div>
            <Subtext $inline>Credit Line: </Subtext>
            <Subtext $defaultColor $inline>
              {creditLine || RESERVE_PHRASES.creditLine}
            </Subtext>
          </div>
          <div>
            <Subtext $inline>copyright Notice: </Subtext>
            <Subtext $defaultColor $inline>
              {copyrightNotice || RESERVE_PHRASES.copyright}
            </Subtext>
          </div>
        </ArtList>
      </ArtInfoSection>
    </ArtContentWrapper>
  );
}
