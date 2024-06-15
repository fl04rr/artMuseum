import styled from 'styled-components';

export const StyledSubtext = styled.small<{
  $center?: boolean;
  $inline?: boolean;
  $defaultColor?: boolean;
  $bold?: boolean;
}>`
  font-family: 'Lexend Deca';
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${(props) =>
    props.$defaultColor ? props.theme.colors.secondary : props.theme.colors.accentLight};
  display: ${(props) => (props.$inline ? 'inline' : 'block')};
  text-align: ${(props) => (props.$center ? 'center' : 'start')};

  ${(props) =>
    props.$bold &&
    `
      font-weight: bold;
      color: ${props.theme.colors.secondary};
    `}
`;
