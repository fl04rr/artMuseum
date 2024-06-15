import { theme } from '@/utils/theme';
import styled from 'styled-components';

export const StyledNavbar = styled.div<{ $isOpen: boolean }>`
  width: 80vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
  background-color: ${theme.colors.backgroundDark};
  padding: 20rem 4rem;
  z-index: 3;
  transition: transform 0.2s;

  &:after {
    content: '';
    width: 20vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 80vw;
    margin-left: auto;
    z-index: -1;
    backdrop-filter: blur(0px);
    transition: backdrop-filter 0.2s;
    visibility: hidden;

    ${(props) =>
      props.$isOpen &&
      `
        backdrop-filter: blur(3px);
        transition-delay: .05s;
        visibility: visible;
      `}
  }
`;

export const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
