import { BREAKPOINTS } from '@/constants/constants';
import styled from 'styled-components';

export const ModalWrapper = styled.dialog`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(5px);

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    align-items: end;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 72rem;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  padding: 4rem;
  border-radius: 4rem;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    width: 100%;
    border-radius: 4rem 4rem 0 0;
  }
`;

export const StyledModalSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const SearchItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const StyledSortBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

export const StyledSortButton = styled.button<{ $current?: boolean }>`
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundDark};
  ${(props) =>
    props.$current &&
    `
    color: ${props.theme.colors.accentLight}
  `}
`;
