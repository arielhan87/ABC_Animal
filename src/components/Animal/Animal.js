import React from 'react';
import './Animal.css';

export class Animal extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img src={this.props.src} alt="abc-animal"/>
      </div>
    );
  }
}
