import React, { Component, Fragment } from 'react'
import Son from './Son'

class Father extends Component{
  render () {
    return (
      <Fragment>
        {this.props.children}
        <h3>这里放的是SON</h3>
        <Son>
          <p>我要放这里面</p>
        </Son>
      </Fragment>
    )
  }
}
export default Father