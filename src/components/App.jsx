import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    nameQuery: '',
  };

  handelSearshForm = nameQuery => {
    this.setState({ nameQuery: nameQuery });
  };

  render() {
    return (
      <Container>
        <Searchbar getQuery={this.handelSearshForm} />
        <ImageGallery nameQuery={this.state.nameQuery} />
      </Container>
    );
  }
}
