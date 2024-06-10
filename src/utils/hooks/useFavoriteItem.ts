import { useFavorite } from "../FavoriteProvider";

export default function useFavoriteItem(itemId: number) {
  const { isFavorite, toggleFavorite } = useFavorite();

  const toggle = () => {
    if (itemId !== -1) {
      toggleFavorite(itemId);
    }
  };

  return {
    isFavorite: isFavorite(itemId),
    toggle,
  };
}
