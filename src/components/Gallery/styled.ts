import styled from "styled-components";

export const StyledGallery = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 3rem;
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 7.5rem;
  width: 100%;
  height: 64.25rem;

  @media screen and (max-width: 1280px) {
    height: auto;
  }

  @media screen and (max-width: 1279px) {
    grid-template-columns: repeat(3, 40vw);
    column-gap: 3.5rem;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    & > * {
      scroll-snap-align: start;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 80vw);
  }
`;
