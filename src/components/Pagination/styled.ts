import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundMedium};
  }

  @media (hover: none) {
    &:hover {
      background-color: transparent;
    }
  }

  &:first-child img {
    transform: rotateY(180deg);
  }
`;

export const PaginationArrow = styled(PaginationButton)<{ $active?: boolean }>`
  visibility: ${(props) => !props.$active && "hidden"};
`;

export const PaginationNumber = styled(PaginationButton)<{ $current: boolean }>`
  font-family: "Lexend Deca";
  font-size: 2.25rem;
  line-height: 3rem;
  font-weight: ${(props) => (props.$current ? "600" : "300")};
  color: ${(props) =>
    props.$current
      ? props.theme.colors.backgroundLight
      : props.theme.colors.secondary};
  background-color: ${(props) =>
    props.$current ? props.theme.colors.accent : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.$current
        ? props.theme.colors.accent
        : props.theme.colors.backgroundMedium};
  }

  @media (hover: none) {
    &:hover {
      background-color: ${(props) =>
        props.$current ? props.theme.colors.accent : "transparent"};
    }
  }
`;
