import styled from 'styled-components';

import { BREAKPOINTS } from '@/constants/constants';

export const StyledMain = styled.div`
  min-height: calc(100vh - 15rem - 129px * 2);

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    min-height: calc(100vh - 15rem - 98px * 2);
  }
`;
