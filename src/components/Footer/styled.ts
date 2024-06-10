import styled from "styled-components";
import { StyledHeaderTemplate, StyledHeaderWrapper } from "../Header/styled";

export const StyledFooter = styled(StyledHeaderTemplate).attrs(() => ({
  as: "footer",
}))`
  background: ${(props) => props.theme.colors.backgroundLight};
`;

export const StyledFooterWrapper = styled(StyledHeaderWrapper)``;
