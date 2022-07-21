import { GlobalStyle } from '../GlobalStyle';
import { Box } from 'components/Box/Box';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Text } from './App.styled';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { imagesApi } from 'services/api';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState(null);

  useEffect(() => {
    if (query === '') return;

    async function getImeges() {
      try {
        setIsLoader(true);
        const { hits } = await imagesApi(query, page);
        setItems(items => [...items, ...hits]);
        setTotal(hits.length);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    }

    getImeges();
  }, [query, page, error]);

  const searchImages = values => {
    if (values === query) return;
    setPage(1);
    setQuery(values);
    setItems([]);
    setError(null);
    setTotal(0);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageURL(null);
  };

  const scroll = Scroll.animateScroll;

  const shouldRenderImagesGallery = items.length > 0;
  const shouldRenderLoadMoreButtun = total >= 12;
  const shouldRenderTextWarning = items.length <= 0;

  return (
    <Box width="container" py="4" mx="auto" as="main">
      <GlobalStyle />
      <Searchbar onSearch={searchImages} />
      {!query && (
        <Box mt="5">
          <Text>Welcome to the photo gallery</Text>
          <Text>Start your photo search</Text>
        </Box>
      )}
      {shouldRenderImagesGallery && (
        <Box mt="5">
          <ImageGallery items={items} openModal={openModal} />
        </Box>
      )}
      {isLoader && <Loader />}
      {shouldRenderLoadMoreButtun && (
        <Button
          onClick={() => {
            setPage(page => page + 1);
            scroll.scrollToBottom();
          }}
        >
          Load more
        </Button>
      )}

      {error && (
        <Box mt="5">
          <Text>Something went wrong, try reloading the page.</Text>
        </Box>
      )}

      {shouldRenderTextWarning && query !== '' && (
        <Box mt="5">
          <Text>There are no photos with this {query}</Text>
        </Box>
      )}

      {largeImageURL && (
        <Modal onClose={closeModal}>
          <img src={largeImageURL} alt="Big foto" />
        </Modal>
      )}

      <ToastContainer />
    </Box>
  );
};
