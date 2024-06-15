import styled from 'styled-components';

export const StyledSearch = styled.input`
  height: 8rem;
  width: 95.25rem;
  border-radius: 16px;
  padding: 2rem;
  font-size: 1.75rem;
  color: ${(props) => `${props.theme.colors.secondary}80`};
  background-color: ${(props) => `${props.theme.colors.secondary}0d`};
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
  }
`;

export const SearchIcon = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  pointer-events: none;
  transform: translate(-6rem, 2rem);
`;

export const SearchError = styled.div`
  position: absolute;
  color: #ff3333;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 10rem;
`;
