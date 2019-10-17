import React, { Component } from 'react'
// 没有存在实际的被控制的操作，非受控组件
export default class Uncontrolled extends Component {
  render () {
    const {money} = this.props
    return (
      <div>
        <p> 今天捡了 {money} 元 </p>
      </div>
    )
  }
}
