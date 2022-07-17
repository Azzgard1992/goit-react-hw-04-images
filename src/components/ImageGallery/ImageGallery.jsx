import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, Item } from './ImageGallery.styled';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <Gallery>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Item key={id}>
          <ImageGalleryItem
            url={webformatURL}
            largeUrl={largeImageURL}
            alt={tags}
            openModal={openModal}
          />
        </Item>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
