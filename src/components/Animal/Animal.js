import React from 'react';
import './Animal.css';

export class Animal extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} />
      </div>
    );
  }
}
