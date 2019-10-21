import React, { Component } from 'react';
import './animateComp.css';
import { CSSTransition } from 'react-transition-group';

export default class AnimateComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flag:true
    }
  }

  changeFlag = () => {
    const { flag } = this.state;
    this.setState({
      flag:!flag
    })
  }
  
  render () {
    const { flag } = this.state;
    return (
      <div>
        <button onClick = {this.changeFlag} > changeFlag </button>
        <CSSTransition in={flag} timeout={300} classNames="my-node">
          <p> 动起来 </p>
        </CSSTransition>
      </div>
    )
  }
}
