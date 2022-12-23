import PropTypes from 'prop-types';

import { Component } from 'react';
import { notify } from 'servises/notify';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    serchQuery: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.serchQuery.trim() === '') {
      notify('Введіть свій запит');
this.setState({ serchQuery: '' });
      return;
    }
    this.props.getQuery(this.state.serchQuery);
    this.setState({ serchQuery: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton
            type="submit"
            // disabled={!this.state.serchQuery}
          >
            🔎
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            name="serchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.serchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
