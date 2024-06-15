import { renderHook } from '@testing-library/react-hooks';
import useFetch from './useFetch';

describe('useFetch hook', () => {
  it('should fetch data and set isLoading to false when fetchFunction resolves', async () => {
    const mockData = 'Mock data';
    const fetchFunction = jest.fn().mockResolvedValue(mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetch(fetchFunction));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(mockData);
    expect(result.current.error).toBeNull();
  });

  it('should set isLoading to false and error when fetchFunction rejects', async () => {
    const mockError = new Error('Mock error');
    const fetchFunction = jest.fn().mockRejectedValue(mockError);

    const { result, waitForNextUpdate } = renderHook(() => useFetch(fetchFunction));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBe(mockError);
  });

  it('should refetch when update dependency changes', async () => {
    const mockData1 = 'Mock data 1';
    const mockData2 = 'Mock data 2';
    let count = 0;
    const fetchFunction = jest.fn().mockImplementation(() => {
      count++;
      return Promise.resolve(count === 1 ? mockData1 : mockData2);
    });

    const { result, waitForNextUpdate, rerender } = renderHook(
      ({ update }) => useFetch(fetchFunction, update),
      { initialProps: { update: 1 } },
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(mockData1);
    expect(result.current.error).toBeNull();

    rerender({ update: 2 });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBe(mockData1);
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(mockData2);
    expect(result.current.error).toBeNull();
  });
});
