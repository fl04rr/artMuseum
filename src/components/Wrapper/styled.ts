import styled from 'styled-components';

export const StyledWrapper = styled.section<{
  $gap?: number;
  $direction?: string;
}>`
  width: 100%;
  margin: 15rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
