import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API_KEY, params } from 'servises/api';
import { notify } from 'servises/notify';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    totalHits: 0,
    page: 1,
    isLoading: false,
  };

  addPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameQuery !== this.props.nameQuery) {
      this.setState({
        images: [],
      });
    }

    if (
      prevProps.nameQuery !== this.props.nameQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const urlSearh = `?${API_KEY}&q=${this.props.nameQuery}&page=${this.state.page}`;
        const {
          data: { hits, totalHits },
        } = await axios.get(urlSearh, { params });
        if (totalHits > 0 && hits.length > 0) {
          notify(
            `За вашим запитом всього знайдено ${totalHits} зображень, завантажую ${hits.length} зображень.`
          );
        }
        if (totalHits > 0 && hits.length === 0) {
          notify(
            `За вашим запитом знайдено ${totalHits} зображень, під час завантаження щось пішло не так. Повторіть ще раз.`
          );
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits: totalHits,
        }));
        if (totalHits === 0) {
          notify('За вашим запитом нічого не знайдено, спробуйте знову');
        }
      } catch (error) {
        console.error(error);
        notify(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <>
        <Gallery>
          {this.state.images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </Gallery>
        {this.state.isLoading && <Loader />}
        {Boolean(
          (this.state.images.length % 12 === 0) &
            (this.state.totalHits > params.per_page)
        ) && <Button addPage={this.addPage} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  nameQuery: PropTypes.string.isRequired,
};
