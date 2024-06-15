import { ARTS_LIMIT } from '@/constants/constants';
import { Art, SearchResult, SingleArtType } from './types';

type SingleResponse = {
  data: SingleArtType;
};

type ArtResponse = {
  data: Art[];
};

type SearchResponse = {
  data: SearchResult[];
};

const fetchData = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const getArtsByPage = async (page: number): Promise<ArtResponse['data'] | undefined> => {
  return fetchData(`${process.env.REACT_APP_BASE_URL}?page=${page}&limit=${ARTS_LIMIT}`);
};

export const getFavoritesArts = async (ids: number[]): Promise<ArtResponse['data'] | undefined> => {
  return fetchData(
    `${process.env.REACT_APP_BASE_URL}?ids=${[...ids]}&fields=id,title,image_id,artist_title,style_title`,
  );
};

export const getArts = async (): Promise<ArtResponse['data'] | undefined> => {
  return fetchData(`${process.env.REACT_APP_BASE_URL}?page=2&limit=12`);
};

export const getArtById = async (artId: string): Promise<SingleResponse['data'] | undefined> => {
  return fetchData(`${process.env.REACT_APP_BASE_URL}${artId}`);
};

export const searchArts = async (str: string): Promise<Art[] | undefined> => {
  try {
    const searchedData = await fetchData<SearchResponse['data'] | undefined>(
      `${process.env.REACT_APP_BASE_URL}search?q=${str}`,
    );
    if (!searchedData) return undefined;
    const ids = searchedData.map((item) => item.id);
    return fetchData(
      `${process.env.REACT_APP_BASE_URL}?ids=${ids.join(',')}&fields=id,title,image_id,artist_title,style_title`,
    );
  } catch (err) {
    console.log(err);
  }
};
