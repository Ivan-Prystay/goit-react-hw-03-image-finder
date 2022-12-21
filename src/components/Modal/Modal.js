import { Component } from 'react';

import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  render() {
    const { largeImage, tags } = this.props;
    return (
      <Overlay onClick={this.props.onClose}>
        <ModalWindow>
          <img src={largeImage} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
