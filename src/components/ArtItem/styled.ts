import styled from "styled-components";

export const StyledArtItem = styled.article`
  padding: 2rem 1.625rem;
  border: 1px solid ${(props) => props.theme.colors.backgroundDark};
  width: 100%;
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundLight};
`;

export const ArtImage = styled.div`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
`;

export const StyledArtDescription = styled.div<{ $gap?: number }>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.$gap ? `${props.$gap}rem` : `1rem`)};
  align-items: center;
  width: 100%;
`;

export const ArtTextWrapper = styled.div`
  max-width: calc(100% - 8.5rem);
`;
