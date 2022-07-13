import { Box } from 'components/Box/Box';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { imagesApi } from 'services/api';
import { GlobalStyle } from '../GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Text } from './App.styled';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoader: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({
          isLoader: true,
        });
        const images = await imagesApi(query, page);

        this.setState(prevState => ({
          items: [...prevState.items, ...images.hits],
        }));
      } catch (error) {
        this.setState({
          error,
        });
      } finally {
        this.setState({
          isLoader: false,
        });
      }
    }
  }

  searchImages = values => {
    if (values === this.state.query) {
      return;
    }
    this.setState({
      page: 1,
      query: values,
      items: [],
      error: null,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoader, items, query, error } = this.state;
    return (
      <Box width="container" py="4" mx="auto" as="main">
        <GlobalStyle />
        <Searchbar onSearch={this.searchImages} />
        {!query && (
          <Box mt="5">
            <Text>Welcome to the photo gallery</Text>
            <Text>Start your photo search</Text>
          </Box>
        )}
        {items.length > 0 && (
          <Box mt="5">
            <ImageGallery items={items} />
            <Button onClick={this.loadMore}>Load more</Button>
          </Box>
        )}
        {isLoader && <Loader />}
        {error && (
          <Box mt="5">
            <Text>Something went wrong, try reloading the page.</Text>
          </Box>
        )}

        {items.length <= 0 && query !== '' && (
          <Box mt="5">
            <Text>There are no photos with this {query}</Text>
          </Box>
        )}

        <ToastContainer />
      </Box>
    );
  }
}
