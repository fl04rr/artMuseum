import styled from 'styled-components';

export const Button = styled.button<{ $favorite?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  border: 1px solid
    ${(props) => (props.$favorite ? props.theme.colors.accent : props.theme.colors.backgroundDark)};
  transition:
    background-color 0.2s,
    border 0.2s;
  flex-shrink: 0;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.backgroundDark};
    opacity: 0.7;

    &:hover {
      background-color: ${(props) => props.theme.colors.backgroundDark};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.accentOpacity};
  }

  @media (hover: none) {
    &:hover {
      background-color: ${(props) => props.theme.colors.backgroundLight};
    }
  }
`;
