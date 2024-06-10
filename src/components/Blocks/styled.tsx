import styled from "styled-components";

export const Wrapper = styled.section<{
  $gap?: number;
  $direction?: string;
}>`
  width: 100%;
  margin: 15rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{
  $gap?: number;
  $direction?: string;
}>`
  width: 160rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.$direction || "column"};
  gap: ${(props) => (props.$gap ? `${props.$gap}rem` : "5rem")};

  @media screen and (max-width: 1280px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;
