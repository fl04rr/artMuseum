import { renderHook } from '@testing-library/react-hooks';
import { useFavorite } from '../FavoriteProvider';
import useFavoriteItem from './useFavoriteItem';

jest.mock('../FavoriteProvider', () => ({
  useFavorite: jest.fn(),
}));

describe('useFavoriteItem hook', () => {
  it('should call toggleFavorite when toggle is called with itemId not equal to -1', () => {
    const mockIsFavorite = jest.fn().mockReturnValue(true);
    const mockToggleFavorite = jest.fn();
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });

    const itemId = 1;
    const { result } = renderHook(() => useFavoriteItem(itemId));
    result.current.toggle();

    expect(mockToggleFavorite).toHaveBeenCalledWith(itemId);
  });

  it('should not call toggleFavorite when toggle is called with itemId equal to -1', () => {
    const mockIsFavorite = jest.fn().mockReturnValue(true);
    const mockToggleFavorite = jest.fn();
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });

    const itemId = -1;
    const { result } = renderHook(() => useFavoriteItem(itemId));

    result.current.toggle();

    expect(mockToggleFavorite).not.toHaveBeenCalled();
  });

  it('should return isFavorite value from useFavorite', () => {
    const mockIsFavorite = jest.fn().mockReturnValue(true);
    const mockToggleFavorite = jest.fn();
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });

    const itemId = 1;
    const { result } = renderHook(() => useFavoriteItem(itemId));

    expect(result.current.isFavorite).toBe(true);
  });
});
