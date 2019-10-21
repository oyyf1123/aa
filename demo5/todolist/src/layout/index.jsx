import React, { Component } from 'react';
import InputBox from '../component/InputBox'
import TaskList from '../component/TaskList'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      list: [
        {
          id: 1,
          text:'任务一'
        },
        {
          id: 2,
          text:'任务二'
        }
       ]
    }
  }

  handleList = (val) => {
    return this.setState({
      list: [...this.state.list, {
        id: this.state.list.length && this.state.list[this.state.list.length - 1].id + 1 || 1,
        text:val
      }]
    })
  }

  handleRemove = (index) => {
    const { list } = this.state
    this.setState(() => {
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  changeList = (val,index) => {
    const { list } = this.state
    this.setState(() => {
      list[index].text = val
      return {
        list
      }
    })
  }
  
  render() {
    return (
      <div className="container">
      <div className = "row">
        <InputBox handleList = {this.handleList} />
      </div>
      <div className = "row">
          <TaskList {...this.state} handleRemove={this.handleRemove} changeList={this.changeList}/>
      </div>
    </div>
    )
  }
}




