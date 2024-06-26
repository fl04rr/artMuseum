import React, { ChangeEvent, useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { SearchIcon, StyledSearch } from './styled';
import useFetch from '@/utils/hooks/useFetch';
import useDebouce from '@/utils/hooks/useDebounce';
import { searchArts } from '@/utils/getArts';
import SearchModal from '../SearchModal';
import { icons } from '@/utils/images';

export const validationSchema = Yup.object().shape({
  searchQuery: Yup.string().trim().required('Search query is required.'),
});

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedValue = useDebouce(searchQuery, 200);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: arts, isLoading } = useFetch(() => searchArts(debouncedValue), debouncedValue);

  const handleSearchQueryChange = (newValue: string) => {
    setSearchQuery(newValue);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
  }, [isModalOpen]);

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ setFieldValue }) => {
        useEffect(() => {
          setFieldValue('searchQuery', debouncedValue);
        }, [debouncedValue, setFieldValue]);

        return (
          <>
            <Form>
              <Field
                as={StyledSearch}
                type="text"
                name="searchQuery"
                placeholder="Search art, artist, work..."
                onClick={() => setIsModalOpen(true)}
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSearchQueryChange(e.target.value)
                }
              />
              <SearchIcon src={icons.searchIcon.src} alt={icons.searchIcon.alt} />
            </Form>
            {isModalOpen && (
              <SearchModal
                arts={arts}
                isLoading={isLoading}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                searchQuery={searchQuery}
                setSearchQuery={handleSearchQueryChange}
              />
            )}
          </>
        );
      }}
    </Formik>
  );
}
