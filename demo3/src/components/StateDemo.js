import React, { Component } from 'react'

export default class StateDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr:[1,2,3]
    }
  }
  addItem = () => {
    this.setState(() => {
      this.state.arr.push(4);  // 先操作，后赋值
      return {
        arr:this.state.arr
      }
    })
  }
  render () {
    // console.log(arr);
    const { arr } = this.state
    // console.log({arr});
    return (
      <div>
        <button onClick = {this.addItem}> 添加列表 </button>
        <ul>
          {
            arr.map((item,index) => <li key = {index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
