import React, { Component } from 'react'
import Refoo from './Refoo'

export default class Ref extends Component {

  getRef = () => {
    // console.log(this);
    // this.refs.el.style.color = 'red'
    console.log(this);
    this.item.style.color = 'blue'
  }

  render() {
    return (
      <div>
        <button onClick={this.getRef}> 得到 </button>
        {/* <p ref = "el"> 你好，欧阳逸峰 </p>
        <Refoo ref = "comp"/> */}
        <p ref = { el => this.item = el }> 你好，欧阳逸峰 </p>
        {/* <Refoo ref={el => this.item2 = el} /> */}
      </div>
    )
  }
}
