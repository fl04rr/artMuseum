import { BREAKPOINTS } from '@/constants/constants';
import styled from 'styled-components';

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
  @media screen and (max-width: ${BREAKPOINTS.MODULE}px) {
    height: auto;
  }

  @media screen and (max-width: ${BREAKPOINTS.MODULE - 1}px) {
    grid-template-columns: repeat(3, 40vw);
    column-gap: 3.5rem;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    & > * {
      scroll-snap-align: start;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.MOBILE - 1}px) {
    grid-template-columns: repeat(3, 80vw);
  }
`;
