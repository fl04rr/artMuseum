import styled from "styled-components";

export const MainHeading = styled.h1`
  font-family: "Lexend Deca";
  font-size: 8rem;
  line-height: 10rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.secondary};
  text-transform: capitalize;
  text-align: center;
  * {
    color: ${(props) => props.theme.colors.accent};
    font-size: inherit;
  }
`;

export const Heading = styled.h2`
  font-family: "Lexend Deca";
  font-size: 4rem;
  line-height: 5rem;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 400;
`;

export const Subtext = styled.small<{
  $center?: boolean;
  $inline?: boolean;
  $defaultColor?: boolean;
}>`
  font-family: "Lexend Deca";
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${(props) =>
    props.$defaultColor
      ? props.theme.colors.secondary
      : props.theme.colors.accentLight};
  display: ${(props) => (props.$inline ? "inline" : "block")};
  text-align: ${(props) => (props.$center ? "center" : "start")};
`;

export const SubtextBold = styled(Subtext)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ItemTitle = styled.p`
  font-family: "Lexend Deca";
  font-weight: 500;
  font-size: 2.25rem;
  color: ${(props) => props.theme.colors.secondary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(41.75rem - 6rem - 8.5rem);
`;

export const ItemAuthor = styled(Subtext)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(41.75rem - 6rem - 8.5rem);
`;

export const ItemStyleTitle = styled(ItemTitle)`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.25rem;
  margin-top: 1rem;
`;

export const SingleItemAuthor = styled.p`
  font-size: 3rem;
  line-height: 3.75rem;
  font-weight: 400;
  font-family: "Lexend Deca";
  color: ${(props) => props.theme.colors.accentLight};
`;
