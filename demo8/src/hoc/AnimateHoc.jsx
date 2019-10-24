import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';

const withAnimate = UiComponent => {
  return class x extends Component{
    render () {
      const { flag, timeout, classNames } = this.props;
      return (
        <CSSTransition
          in={flag}
          timeout={timeout}
          classNames = {classNames}
          unmountOnExit  // 当exit退出时，组件卸载掉
        >
          <UiComponent/>
        </CSSTransition>
      );
    }
  }
}

export default withAnimate;