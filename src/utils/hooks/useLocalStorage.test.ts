import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return initial value', () => {
    const key = 'testKey';
    const initialValue = 'initialValue';

    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    expect(result.current[0]).toBe(initialValue);
  });

  test('should update value in localStorage', () => {
    const key = 'testKey';
    const initialValue = 'initialValue';
    const updatedValue = 'updatedValue';

    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    expect(result.current[0]).toBe(initialValue);
    act(() => {
      result.current[1](updatedValue);
    });
    expect(result.current[0]).toBe(updatedValue);
    expect(localStorage.getItem(key)).toBe(JSON.stringify(updatedValue));
  });

  test('should handle error in readValue function', () => {
    const key = 'testKey';
    const initialValue = 'initialValue';

    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation(() => {
      throw new Error('localStorage getItem error');
    });

    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    expect(result.current[0]).toBe(initialValue);
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
    window.localStorage.__proto__.getItem.mockRestore();
  });
});
