import React, { Component } from 'react'

export default class Son extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      flag: false
    }
  }
  changeFlag = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  
  render () {
    const { money } = this.props   // 父子组件通信通过props得到，无论父组件那边是props还是state子组件这边都是通过props获得
    const { flag } = this.state
    return (
      <div>
        <p> 父组件给了我：{money} </p>
        {
         flag && <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7b51b721c3319e9c2916cc41cd9c695.jpg?w=632&h=340" alt=""/>
        }
      </div>
    )
  }
}
