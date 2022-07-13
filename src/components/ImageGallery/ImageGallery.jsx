import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, Item } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Item key={id}>
          <ImageGalleryItem
            url={webformatURL}
            largeUrl={largeImageURL}
            alt={tags}
          />
        </Item>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
