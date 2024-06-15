import styled from 'styled-components';

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

export const SingleItemAuthor = styled.p`
  font-size: 3rem;
  line-height: 3.75rem;
  font-weight: 400;
  font-family: 'Lexend Deca';
  color: ${(props) => props.theme.colors.accentLight};
`;
