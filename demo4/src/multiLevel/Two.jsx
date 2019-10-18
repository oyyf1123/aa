import React, { Component } from 'react'
import { Consumer } from './One'
import Three from './Three'

export default class Two extends Component {
  render () {
    return (
      <Consumer>
        {(money) => 
          <div>
            <p> 子组件接收:{money} </p>
            <Three />
          </div>
        }
      </Consumer>
    )
  }
}
