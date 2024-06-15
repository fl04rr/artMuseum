import styled from 'styled-components';

export const StyledMainHeading = styled.h1`
  font-family: 'Lexend Deca';
  font-size: 8rem;
  line-height: 10rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;
  text-align: center;
  * {
    color: ${(props) => props.theme.colors.accent};
    font-size: inherit;
  }
`;
