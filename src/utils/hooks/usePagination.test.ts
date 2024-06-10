import { renderHook, act } from "@testing-library/react-hooks";
import usePagination from "./usePagination";

describe("usePagination hook", () => {
  const setCurrentPageMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call setCurrentPage with next page number when handleNextPage is called", () => {
    const totalPages = 10;
    const currentPage = 1;

    const { result } = renderHook(() =>
      usePagination({
        totalPages,
        currentPage,
        setCurrentPage: setCurrentPageMock,
      }),
    );

    act(() => {
      result.current.handleNextPage();
    });

    expect(setCurrentPageMock).toHaveBeenCalledWith(currentPage + 1);
  });

  test("should not call setCurrentPage when handleNextPage is called and currentPage is equal to totalPages", () => {
    const totalPages = 5;
    const currentPage = 5;

    const { result } = renderHook(() =>
      usePagination({
        totalPages,
        currentPage,
        setCurrentPage: setCurrentPageMock,
      }),
    );

    act(() => {
      result.current.handleNextPage();
    });

    expect(setCurrentPageMock).not.toHaveBeenCalled();
  });

  test("should call setCurrentPage with previous page number when handlePreviousPage is called", () => {
    const totalPages = 10;
    const currentPage = 2;

    const { result } = renderHook(() =>
      usePagination({
        totalPages,
        currentPage,
        setCurrentPage: setCurrentPageMock,
      }),
    );

    act(() => {
      result.current.handlePreviousPage();
    });

    expect(setCurrentPageMock).toHaveBeenCalledWith(currentPage - 1);
  });

  test("should not call setCurrentPage when handlePreviousPage is called and currentPage is 1", () => {
    const totalPages = 10;
    const currentPage = 1;

    const { result } = renderHook(() =>
      usePagination({
        totalPages,
        currentPage,
        setCurrentPage: setCurrentPageMock,
      }),
    );

    act(() => {
      result.current.handlePreviousPage();
    });

    expect(setCurrentPageMock).not.toHaveBeenCalled();
  });

  test("should call setCurrentPage with specified page number when handlePage is called", () => {
    const totalPages = 10;
    const currentPage = 5;
    const targetPage = 7;

    const { result } = renderHook(() =>
      usePagination({
        totalPages,
        currentPage,
        setCurrentPage: setCurrentPageMock,
      }),
    );

    act(() => {
      result.current.handlePage(targetPage);
    });

    expect(setCurrentPageMock).toHaveBeenCalledWith(targetPage);
  });
});
