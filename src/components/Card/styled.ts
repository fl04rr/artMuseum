import styled from 'styled-components';

export const StyledCard = styled.article`
  width: 100%;
  padding-bottom: 8.75rem;
`;

export const CardDescriptionWrapper = styled.div`
  /* width: 41.75rem; */
  width: calc(100% - 6.25rem);
  /* height: 16.5rem; */
  padding: 2rem 3rem;
  position: relative;
  transform: translate(3.125rem, -7.75rem);
  background-color: ${(props) => props.theme.colors.backgroundLight};
  border: 1px solid ${(props) => props.theme.colors.backgroundDark};
`;
