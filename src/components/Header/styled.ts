import styled from 'styled-components';

export const StyledHeaderTemplate = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding: 4rem 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 16px;

    img {
      max-height: 8rem;
    }
  }
`;

export const StyledHeader = styled(StyledHeaderTemplate).attrs(() => ({
  as: 'header',
}))`
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);

  position: sticky;
  top: 0;
  z-index: 4;
`;

export const StyledNav = styled.nav<{ $column?: boolean }>`
  display: flex;
  align-items: ${(props) => (props.$column ? 'start' : 'center')};
  ${(props) => props.$column && 'flex-direction: column'};

  gap: 2rem;
`;

export const StyledLink = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props) => props.theme.colors.backgroundLight};
  font-size: 2rem;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.accentLight};
  }

  @media (hover: none) {
    &:hover {
      color: ${(props) => props.theme.colors.backgroundLight};
    }
  }
`;

export const StyledHeaderContainer = styled.div`
  & > *:nth-child(2) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & > *:nth-child(1) {
      display: none;
    }

    & > *:nth-child(2) {
      display: block;
    }
  }
`;

export const StyledBurgerMenu = styled.button`
  background-color: transparent;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160rem;
`;
