import React from 'react';
import { PaginationArrow, PaginationNumber, PaginationWrapper } from './styled';
import { TOTAL_PAGES } from '@/constants/constants';
import usePagination from '@/utils/hooks/usePagination';
import { icons } from '@/utils/images';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({ totalPages, currentPage, setCurrentPage }: PaginationProps) {
  const { handleNextPage, handlePage, handlePreviousPage } = usePagination({
    totalPages,
    currentPage,
    setCurrentPage,
  });

  return (
    <PaginationWrapper>
      <PaginationArrow $active={currentPage > 1} onClick={() => handlePreviousPage()}>
        <img src={icons.arrowIcon.src} alt={icons.arrowIcon.alt} />
      </PaginationArrow>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <PaginationNumber
            $current={currentPage === index + 1}
            key={index}
            onClick={() => handlePage(index + 1)}
          >
            {index + 1}
          </PaginationNumber>
        );
      })}
      <PaginationArrow $active={TOTAL_PAGES > currentPage} onClick={() => handleNextPage()}>
        <img src={icons.arrowIcon.src} alt={icons.arrowIcon.alt} />
      </PaginationArrow>
    </PaginationWrapper>
  );
}
