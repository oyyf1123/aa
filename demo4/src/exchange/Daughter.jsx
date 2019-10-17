import React, { Component } from 'react'

export default class Daughter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       qian:5555
    }
  }
  
  render() {
    const { giveQian,change } = this.props
    const {qian} = this.state
    return (
      <div>
        <button onClick = {()=>{giveQian(qian)}} >give</button>
        <button onClick = {change}> changeFlag </button>
      </div>
    )
  }
}
