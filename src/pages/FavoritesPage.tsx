import React from 'react';

import ArtItems from '@/components/ArtItems';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { Icon } from '@/components/Image/styled';
import Main from '@/components/Main';
import MainHeading from '@/components/MainHeading';
import Subtext from '@/components/Subtext';
import Wrapper from '@/components/Wrapper';
import { useFavorite } from '@/utils/FavoriteProvider';
import { getFavoritesArts } from '@/utils/getArts';
import useFetch from '@/utils/hooks/useFetch';
import { icons } from '@/utils/images';

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  const { data: favoritedArts, isLoading } = useFetch(() => getFavoritesArts(favorites));

  document.title = 'Your favorites';
  return (
    <Main>
      <Wrapper>
        <Container>
          <MainHeading>
            Here are your
            <br />
            <Icon src={icons.favoriteIcon.src} alt={icons.favoriteIcon.alt} />
            <span>Favorites</span>
          </MainHeading>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <div>
            <Subtext center>Saved by you</Subtext>
            <Heading>
              {favorites.length > 0 ? 'Your favorites list' : 'Your favorites list is empty :('}
            </Heading>
          </div>
          <ArtItems
            arts={favoritedArts?.filter((el) => favorites.includes(el.id))}
            isLoading={isLoading}
            previewItemsCount={favorites.length}
          />
        </Container>
      </Wrapper>
    </Main>
  );
}
