import React from 'react';
import './Abc.css';

export class Abc extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.target.value;
    this.props.chooseImage(value);
  }

  render() {
    return (
      <form onClick={this.handleClick} >
        <input type="radio" name="src" value="fast" /> A
        <input type="radio" name="src" value="slow" /> B
        <input type="radio" name="src" value="cute" /> C
        <input type="radio" name="src" value="eek" /> D
        <input type="radio" name="src" value="fast" /> E
        <input type="radio" name="src" value="slow" /> F
        <input type="radio" name="src" value="cute" /> G
        <input type="radio" name="src" value="eek" /> H
        <input type="radio" name="src" value="fast" /> I
        <input type="radio" name="src" value="slow" /> J
        <input type="radio" name="src" value="cute" /> K
        <input type="radio" name="src" value="eek" /> L
        <input type="radio" name="src" value="fast" /> M
        <input type="radio" name="src" value="slow" /> N
        <input type="radio" name="src" value="cute" /> O
        <input type="radio" name="src" value="eek" /> P
        <input type="radio" name="src" value="eek" /> Q
        <input type="radio" name="src" value="eek" /> R
        <input type="radio" name="src" value="eek" /> S
        <input type="radio" name="src" value="eek" /> T
        <input type="radio" name="src" value="eek" /> U
        <input type="radio" name="src" value="eek" /> V
        <input type="radio" name="src" value="eek" /> W
        <input type="radio" name="src" value="eek" /> X
        <input type="radio" name="src" value="eek" /> Y
        <input type="radio" name="src" value="eek" /> Z
      </form>
    );
  }
}
