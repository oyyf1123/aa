import React, { Component } from 'react'
import Son from './Son'
import Daughter from './Daughter'

export default class Father extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      money: 2222,
      qian: ''
    }
  }

  giveQian = (val) => {
    this.setState({
      qian: val
    })
  }

  change = () => {
    this.son.changeFlag()
  }
  
  render () {
    const { money,qian } = this.state
    return (
      <div>
        <Son money={money} ref={el => this.son = el}/>
        <p> 女儿组件给我：{qian} </p>
        <Daughter giveQian = {this.giveQian} change = {this.change} />
      </div>
    )
  }
}
