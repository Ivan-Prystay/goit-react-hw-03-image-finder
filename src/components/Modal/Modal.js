import { Component } from 'react';

import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  render() {
    const { largeImageURL, tags } = this.props.item;
    return (
      <Overlay onClick={this.props.onClose}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
