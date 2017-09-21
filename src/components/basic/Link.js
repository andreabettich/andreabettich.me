import React, { Component } from 'react';

class Link extends Component {
  onClick(event) {
    event.stopPropagation(); // prevent bubble up to parent events
  }
  render() {
    return (
      <a {...this.props} onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
