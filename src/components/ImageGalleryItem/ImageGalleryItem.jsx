import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  //   toggleModal = () => {
  //     this.setState(({ isModalOpen }) => ({
  //       isModalOpen: !isModalOpen,
  //     }));
  //   };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { url, alt, largeUrl } = this.props;
    return (
      <div>
        <Image src={url} alt={alt} onClick={this.openModal} />

        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeUrl} alt={alt} />
          </Modal>
        )}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
};
