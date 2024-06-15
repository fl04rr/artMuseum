import styled from 'styled-components';
import Subtext from '../Subtext';
import ItemTitle from '../ItemTitle';

export const StyledArtDescription = styled.div<{ $gap?: number }>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.$gap ? `${props.$gap}rem` : `1rem`)};
  align-items: center;
  width: 100%;
`;

export const ArtTextWrapper = styled.div`
  max-width: calc(100% - 8.5rem);
`;

export const ItemStyleTitle = styled(ItemTitle)`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.25rem;
  margin-top: 1rem;
`;

export const ItemAuthor = styled(Subtext)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(41.75rem - 6rem - 8.5rem);
`;
