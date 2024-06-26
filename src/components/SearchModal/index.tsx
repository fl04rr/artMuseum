import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ErrorMessage } from 'formik';

import { icons } from '@/utils/images';
import { Art } from '@/utils/types';

import ArtItems from '../ArtItems';
import { Icon } from '../Image/styled';
import { SearchError, StyledSearch } from '../Search/styled';
import {
  ModalWrapper,
  SearchItemsWrapper,
  StyledModal,
  StyledModalSearch,
  StyledSortBtnsWrapper,
  StyledSortButton,
} from './styled';

type SearchModalProps = {
  arts: Art[] | undefined;
  isLoading: boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

type SortMethod = 'default' | 'az' | 'za';

export default function SearchModal({
  arts,
  isLoading,
  setIsOpen,
  searchQuery,
  setSearchQuery,
}: SearchModalProps) {
  const [sortMethod, setSortMethod] = useState<SortMethod>('default');

  const handleSortChange = (method: SortMethod) => {
    setSortMethod(method);
  };

  const sortArts = (arts: Art[] | undefined, method: SortMethod): Art[] | undefined => {
    if (!arts) return undefined;

    const sortedArts = [...arts];
    if (method === 'az') {
      sortedArts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (method === 'za') {
      sortedArts.sort((a, b) => b.title.localeCompare(a.title));
    }

    return sortedArts;
  };

  const sortedArts = useMemo(() => sortArts(arts, sortMethod), [arts, sortMethod]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSearchQueryChange = (newValue: string) => {
    setSearchQuery(newValue);
  };

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <ModalWrapper>
      <StyledModal>
        <StyledModalSearch>
          <StyledSearch
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
            ref={searchInputRef}
          />
          <ErrorMessage name="searchQuery" component={SearchError} />
          <button onClick={handleClose}>
            <Icon src={icons.closeIcon.src} alt={icons.closeIcon.alt} />
          </button>
        </StyledModalSearch>
        <StyledSortBtnsWrapper>
          <StyledSortButton
            $current={sortMethod === 'default'}
            onClick={() => handleSortChange('default')}
          >
            Default
          </StyledSortButton>
          <StyledSortButton $current={sortMethod === 'az'} onClick={() => handleSortChange('az')}>
            {'A -> Z'}
          </StyledSortButton>
          <StyledSortButton $current={sortMethod === 'za'} onClick={() => handleSortChange('za')}>
            {'Z -> A'}
          </StyledSortButton>
        </StyledSortBtnsWrapper>
        <SearchItemsWrapper>
          <ArtItems arts={sortedArts} isLoading={isLoading} previewItemsCount={10} />
        </SearchItemsWrapper>
      </StyledModal>
    </ModalWrapper>
  );
}
