import React, { Component } from 'react'
import Controlled from './Controlled'
import Uncontrolled from './Uncontrolled'

export default class Father extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      flag: true,
      money:2000
    }
  }

  changeFlag = () => {
    this.setState(() => {
      return {
        flag:!this.state.flag
      }
    })
  }
  
  render () {
    const {flag,money} = this.state
    return (
      <div>
        <button onClick = {this.changeFlag}>点击</button>
        <Controlled flag={flag}/>
        <Uncontrolled money={money}/>
      </div>
    )
  }
}
