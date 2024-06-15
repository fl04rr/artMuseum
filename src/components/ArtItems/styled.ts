import styled from 'styled-components';

export const ArtItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
`;
