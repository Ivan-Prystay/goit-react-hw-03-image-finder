import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        <ImageGalleryItem />
      </Gallery>
    );
  }
}
