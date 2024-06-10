import styled from "styled-components";

export const StyledSingleArt = styled.div`
  width: 100%;
  min-height: 71.25rem;
  display: flex;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SingleArtImage = styled.article`
  min-width: 62.125rem;
  height: 71.25rem;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: auto;
  }
  /* height: 100%; */
`;

export const ArtContentWrapper = styled.article`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* @media screen and (max-width: 768px){ */
  gap: 7rem;
  /* } */
`;

export const ArtInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const ArtList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  list-style-type: none;
`;

export const SingleArtButtonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  padding: 2rem;
`;
