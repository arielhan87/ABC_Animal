import React from 'react';
import './Word.css';

export class Word extends React.Component {
  render() {
    return (
      <div className="word-container">
        <h1> {this.props.title} </h1>
      </div>
    );
  }
}
