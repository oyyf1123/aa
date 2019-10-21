import React, { Component } from 'react'

export default class StateDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr:[0,1,2]
    }
  }
  
  addItem = () => {
    return this.setState({
      arr:[...this.state.arr, this.state.arr.length]
    })
   
  }
  render () {
    // console.log(arr);
    const { arr } = this.state
    // console.log({arr});
    return (
      <div>
        <button onClick = {this.addItem}> 添加列表 </button>
        <span>{arr}</span>
        <ul>
          {
            arr.map((item,index) => <li key = {index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
