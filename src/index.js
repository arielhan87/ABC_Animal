import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Animal } from './components/Animal/Animal';
import { Abc } from './components/Abc/Abc';
import { Word } from './components/Word/Word';

const IMAGE = {
   Aa: ['https://s3-us-west-1.amazonaws.com/abcalphabet/alligator.png',
        'Alligator'] ,
   Bb: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/bear.png',
        'Bear' ],
   Cc: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/cat.png',
        'Cat' ],
   Dd: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/dog_final.png',
        'Dog' ],
   Ee: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/elephant.png',
        'Elephant' ],
   Ff: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/Fox.png',
        'Fox' ],
   Gg: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/giraffe.png',
        'Giraffe' ],
   Hh: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/hippo.png',
        'Hippo' ],
   Ii: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/Iguana.png',
        'Iguana' ],
   Jj: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/jaguar.png',
        'Jaguar' ],
   Kk: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/kangaroo.png',
        'Kangaroo' ],
   Ll: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/Lion.png',
        'Lion' ],
   Mm: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/+monkey.png',
        'Monkey' ],
   Nn: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/numbat.png',
        'Numbat' ],
   Oo: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/Owl.png',
        'Owl' ],
   Pp: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/pig.png',
         'Pig' ],
   Qq: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/quail.png',
        'Quail' ],
   Rr: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/rabbit.png',
        'Rabbit' ],
   Ss: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/Sheep.png',
        'Sheep' ],
   Tt: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/turtle.png',
        'Tutle' ],
   Uu: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/urial.png',
        'Urial' ],
   Vv: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/vicuna.png',
        'Vicuna' ],
   Ww: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/whale.png',
        'Whale' ],
   Xx: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/x-ray.png',
        'X-ray' ],
   Yy: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/yak.png',
        'Yak' ],
   Zz: [ 'https://s3-us-west-1.amazonaws.com/abcalphabet/Zebra02.png',
        'Zebra' ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
		this.chooseImage = this.chooseImage.bind(this);
    this.chooseWord = this.chooseWord.bind(this);
    this.state = { src: IMAGE.Aa[0],
                   title: IMAGE.Aa[1]
                  };
  }

 	chooseImage(newImage) {
    this.setState({
       src: IMAGE[newImage][0]
    });
  }

  chooseWord(word) {
    this.setState({
      title: IMAGE[word][1]
    });
  }

  render() {
    return (
      <div>
        <Abc chooseImage={this.chooseImage} chooseWord={this.chooseWord}/>
        <Word title={this.state.title} />
        <Animal src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
