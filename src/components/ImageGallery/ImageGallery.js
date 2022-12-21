import { Component } from 'react';
import axios from 'axios';
import { API_KEY, params } from '../../servises/api';
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
    console.log('this.props', this.state.isLoading);

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

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits: totalHits,
        }));
        if (totalHits === 0) {
          alert('Ви ввели некоректний запит');
        }
      } catch (error) {
        console.error(error);
        alert(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    console.log('this.state: ', this.state);

    return (
      <>
        {this.state.isLoading && <Loader />}
        <Gallery>
          {this.state.images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </Gallery>
        {Boolean(
          (this.state.images.length % 12 === 0) &
            (this.state.totalHits > params.per_page)
        ) && <Button addPage={this.addPage} />}
      </>
    );
  }
}
