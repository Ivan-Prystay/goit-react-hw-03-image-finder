import { Component } from 'react';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    images: [],
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            🔎
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="on"
            //!!!!!!!!!!!!!!!!!!!!!!!!
            //!  autoComplete="off"//!
            //!!!!!!!!!!!!!!!!!!!!!!!!
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
