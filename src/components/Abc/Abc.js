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
    this.props.chooseWord(value);
  }

  render() {
    return (
      <div className="scroll-bar">
        <form onClick={this.handleClick} >
          <input type="button" name="src" value="Aa" />
          <input type="button" name="src" value="Bb" />
          <input type="button" name="src" value="Cc" />
          <input type="button" name="src" value="Dd" />
          <input type="button" name="src" value="Ee" />
          <input type="button" name="src" value="Ff" />
          <input type="button" name="src" value="Gg" />
          <input type="button" name="src" value="Hh" />
          <input type="button" name="src" value="Ii" />
          <input type="button" name="src" value="Jj" />
          <input type="button" name="src" value="Kk" />
          <input type="button" name="src" value="Ll" />
          <input type="button" name="src" value="Mm" />
          <input type="button" name="src" value="Nn" />
          <input type="button" name="src" value="Oo" />
          <input type="button" name="src" value="Pp" />
          <input type="button" name="src" value="Qq" />
          <input type="button" name="src" value="Rr" />
          <input type="button" name="src" value="Ss" />
          <input type="button" name="src" value="Tt" />
          <input type="button" name="src" value="Uu" />
          <input type="button" name="src" value="Vv" />
          <input type="button" name="src" value="Ww" />
          <input type="button" name="src" value="Xx" />
          <input type="button" name="src" value="Yy" />
          <input type="button" name="src" value="Zz" />
        </form>
      </div>
    );
  }
}
