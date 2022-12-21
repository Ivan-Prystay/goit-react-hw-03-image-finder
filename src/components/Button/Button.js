import { Component } from 'react';

import { LoadMore } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <LoadMore type="button" onClick={this.props.addPage}>
        Load more
      </LoadMore>
    );
  }
}
