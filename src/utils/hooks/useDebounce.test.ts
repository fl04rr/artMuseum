import { renderHook, act } from "@testing-library/react-hooks";
import useDebounce from "./useDebounce";

jest.useFakeTimers();

describe("useDebounce hook", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test("should update debounced value after delay", () => {
    const initialValue = "initial";
    const updatedValue = "updated";
    const delay = 200;

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: initialValue, delay } },
    );

    act(() => {
      jest.advanceTimersByTime(delay - 1);
    });

    expect(result.current).toBe(initialValue);

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(result.current).toBe(initialValue);

    rerender({ value: updatedValue, delay });

    act(() => {
      jest.advanceTimersByTime(delay - 1);
    });

    expect(result.current).toBe(initialValue);

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(result.current).toBe(updatedValue);
  });
});
