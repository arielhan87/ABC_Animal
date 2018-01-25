import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Animal } from './components/Animal/Animal';
import { Abc } from './components/Abc/Abc';
import { Word } from './components/Word/Word';

const IMAGE = {
  fast: 'https://s3-us-west-1.amazonaws.com/abcalphabet/alligator.png',
  slow: 'https://s3-us-west-1.amazonaws.com/abcalphabet/bear.png',
  cute: 'https://s3-us-west-1.amazonaws.com/abcalphabet/cat.png',
  eek: 'https://s3-us-west-1.amazonaws.com/abcalphabet/dog_final.png'
};

class App extends React.Component {
  constructor(props) {
    super(props);
		this.chooseImage = this.chooseImage.bind(this);
    this.state = { src: IMAGE.fast };
  }

 	chooseImage(newVideo) {
    this.setState({
       src: IMAGE[newVideo]
    });
  }

  render() {
    return (
      <div>
        <Abc chooseImage={this.chooseImage} />
        <Word />
        <Animal src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
