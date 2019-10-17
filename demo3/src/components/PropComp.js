import React, { Component } from 'react'


export default class PropComp extends Component {
  //  当前组件内：
  //       属性一旦确定了 就不可更改了
  //       如果是外部传入的属性，我们要通过外部来修改的


  static defaultProps = {
    heihei:'逗不逗啊'
  }
  render() {
    return (
      <div>
        <p> 外部传入属性：{this.props.name} </p>
        <p> 内部设置的属性：{this.props.heihei} </p>
      </div>
    )
  }
}
