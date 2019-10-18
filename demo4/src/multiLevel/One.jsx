import React, { Component } from 'react'
import Two from './Two';

export const {Provider,Consumer} = React.createContext();
export default class One extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      money: 2222
    }
  }
  render () {
    const { money } = this.state
    return (
      <div>
        <Provider value={money} >
          <Two/>
        </Provider>
      </div>
    )
  }
}
