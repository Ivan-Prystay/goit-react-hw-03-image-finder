import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { Container } from './App.styled';
import { query } from '../servises/api';

export class App extends Component {
  state = {
    loading: false,
  };

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery />
        <Button />
        {/*
    <Loader />
    <Modal /> */}
      </Container>
    );
  }
}
