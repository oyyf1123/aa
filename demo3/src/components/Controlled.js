import React, { Component } from 'react'
// 父组件控制了这个组件  这个组件就是受控组件
export default class Controlled extends Component {
  render () {
    const {flag} = this.props
    return (
      <div>
        <p>{flag && '❤️取消' || '🖤收藏'}</p>
      </div>
    )
  }
}
