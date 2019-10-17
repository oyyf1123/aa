import React, { Component } from 'react'

export default class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      xing: '',
      ming: ''
    }
  }

  headlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render () {
    const { xing, ming } = this.state;
    return (
      <div>
        <label>
          姓：<input type="text" name="xing" value={xing} onChange={this.headlerInput}/>
        </label>
        <label>
          名：<input type="text" name="ming" value={ming} onChange={this.headlerInput}/>
        </label>
        <p>你的名字：{xing}{ming}</p>
      </div>
    )
  }
}
