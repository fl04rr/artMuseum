import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 80%;
  background-color: #f2f4f5;
`;

export const Img = styled.img<{ $error?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${(props) =>
    props.$error &&
    `
    object-fit: none;
    border: 1px solid ${props.theme.colors.accentLight};
  `}
`;

export const Icon = styled.img`
  vertical-align: sub;
`;
