import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ openModal, largeUrl, url, alt }) => {
  return (
    <div>
      <Image src={url} alt={alt} onClick={() => openModal(largeUrl)} />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
};
