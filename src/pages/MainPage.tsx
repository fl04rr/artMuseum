import ArtItems from '@/components/ArtItems';
import Container from '@/components/Container';
import Gallery from '@/components/Gallery';
import Heading from '@/components/Heading';
import MainHeading from '@/components/MainHeading';
import Search from '@/components/Search';
import Subtext from '@/components/Subtext';
import Wrapper from '@/components/Wrapper';
import { getArts, getArtsByPage } from '@/utils/getArts';
import useFetch from '@/utils/hooks/useFetch';
import { Art } from '@/utils/types';
import React from 'react';

import { useState } from 'react';

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: galleryItems, isLoading: isGalleryItemsLoading } = useFetch<Art[] | undefined>(
    () => getArtsByPage(currentPage),
    currentPage,
  );

  const { data: artItems, isLoading: isArtItemsLoading } = useFetch<Art[] | undefined>(() =>
    getArts(),
  );

  document.title = 'Museum of Art';

  return (
    <>
      <Wrapper>
        <Container gap={9}>
          <MainHeading>
            let&apos;s find some <span>art</span>
            <br /> here!
          </MainHeading>
          <div>
            <Search />
          </div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <div>
            <Subtext center>Topics for you</Subtext>
            <Heading>Our special gallery</Heading>
          </div>
          <Gallery
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            arts={galleryItems}
            isLoading={isGalleryItemsLoading}
          />
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <div>
            <Subtext center>Here some more</Subtext>
            <Heading>Other works for you</Heading>
          </div>
          <ArtItems arts={artItems} isLoading={isArtItemsLoading} />
        </Container>
      </Wrapper>
    </>
  );
}
