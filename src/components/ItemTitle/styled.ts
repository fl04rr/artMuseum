import styled from 'styled-components';

export const StyledItemTitle = styled.p`
  font-family: 'Lexend Deca';
  font-weight: 500;
  font-size: 2.25rem;
  color: ${(props) => props.theme.colors.secondary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(41.75rem - 6rem - 8.5rem);
`;
