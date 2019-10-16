import React, { Component, Fragment } from 'react'

class Son extends Component{
  render () {
    return (
      <Fragment>
        <h3>我是Son</h3>
        {/*  类似于插槽 */}
        {this.props.children} 
      </Fragment>
    )
  }
}
export default Son