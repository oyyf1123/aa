import React, { Component } from 'react'
import { Consumer } from './One'

export default class Three extends Component {
  render() {
    return (
      <Consumer>
        {(money) => 
          <div>
            <p> 孙组件接收 {money} </p>
          </div>
        }
      </Consumer>
    )
  }
}
