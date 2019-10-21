import React from 'react';

//  高阶组件是一个函数，接收一个组件作参数

const HocComp = Comp => {
  return class WithCopyRight extends React.Component{

    animateHandle = () => {    //一个实现动画的方法
    
    }

    render () {
      return <Comp animateHandle = {this.animateHandle} />
    }
  }
}

export default HocComp;