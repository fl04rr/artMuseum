// import React, {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type FavoriteContextProps = {
//   children: ReactNode;
// };

// type FavoriteData = {
//   favorites: number[];
//   isFavorite: (id: number) => boolean;
//   toggleFavorite: (id: number) => void;
// };

// const FavoriteContext = createContext<FavoriteData | null>(null);

// export const FavoriteProvider: React.FC<FavoriteContextProps> = ({
//   children,
// }) => {
//   const [favorites, setFavorites] = useState<number[]>([]);

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem("favorites");
//     if (storedFavorites) {
//       setFavorites(JSON.parse(storedFavorites));
//     } else {
//       setFavorites([]);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (id: number) => {
//     setFavorites((prevFavorites) =>
//       prevFavorites.includes(id)
//         ? prevFavorites.filter((itemId) => itemId !== id)
//         : [...prevFavorites, id],
//     );
//   };

//   const isFavorite = (id: number) => {
//     return favorites.includes(id);
//   };

//   return (
//     <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export const useFavorite = () => {
//   const context = useContext(FavoriteContext);
//   if (!context) {
//     throw new Error("useFavorite must be used within a FavoriteProvider");
//   }
//   return context;
// };

import React, { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

type FavoriteContextProps = {
  children: ReactNode;
};

type FavoriteData = {
  favorites: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
};

const FavoriteContext = createContext<FavoriteData | null>(null);

export const FavoriteProvider: React.FC<FavoriteContextProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  const toggleFavorite = (favorite: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(favorite)
        ? prevFavorites.filter((itemId) => itemId !== favorite)
        : [...prevFavorites, favorite],
    );
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};
