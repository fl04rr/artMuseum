export type Art = {
  artist_title: string;
  image_id: string;
  title: string;
  id: number;
  style_title: string;
};

export type SingleArtType = Art & {
  dimensions: string;
  credit_line: string;
  place_of_origin: string;
  copyright_notice: string;
};

export type NavItem = {
  title: string;
  icon: string;
  url: string;
};

export type SearchResult = {
  id: number;
};
