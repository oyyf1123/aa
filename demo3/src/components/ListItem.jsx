import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      list: [
        {
          id: 1,
          name:'oyyf'
        },
        {
          id: 2,
          name:'yyf'
        }
       ]
    }
  }
  
  renderList = () => {
    const { list } = this.state;
    return list.map(item => <li key={item.id}>{item.name}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}
