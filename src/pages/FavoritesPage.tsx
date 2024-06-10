import React from "react";
import favoriteIcon from "../assets/icons/favorite.svg";
import { useFavorite } from "@/utils/FavoriteProvider";
import useFetch from "@/utils/hooks/useFetch";
import { getFavoritesArts } from "@/utils/getArts";
import { Container, Wrapper } from "@/components/Blocks/styled";
import { Heading, MainHeading, Subtext } from "@/components/Texts/styled";
import { Icon } from "@/components/Image/styled";
import ArtItems from "@/components/ArtItems/ArtItems";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  const { data: favoritedArts, isLoading } = useFetch(() =>
    getFavoritesArts(favorites),
  );

  document.title = "Your favorites";
  return (
    <>
      <Wrapper>
        <Container>
          <MainHeading>
            Here are your
            <br />
            <Icon src={favoriteIcon} alt={"favorite icon"} />
            <span>Favorites</span>
          </MainHeading>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <div>
            <Subtext $center>Saved by you</Subtext>
            <Heading>
              {favorites.length > 0
                ? "Your favorites list"
                : "Maybe you'll like it"}
            </Heading>
          </div>
          <ArtItems
            arts={favoritedArts}
            isLoading={isLoading}
            previewItemsCount={favorites.length}
          />
        </Container>
      </Wrapper>
    </>
  );
}
