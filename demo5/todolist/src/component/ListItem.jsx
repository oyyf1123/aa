import React, { Component, Fragment } from 'react'
import ChangeList from './ChangeList';

export default class ListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: false
    }
  }

  changeFlag = () => {
    const { flag } = this.state;
    this.setState({
      flag: !flag
    })
  }

  render () {
    const { flag } = this.state
    const { text, index, handleRemove, changeList } = this.props
    return (
      <Fragment>
        <li className="list-group-item">
          <p> {text} </p>
          {flag && <ChangeList changeList = {changeList} changeFlag = {this.changeFlag} index = {index} />}
          <div>
            <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={this.changeFlag}> 修改 </button>
            <button className="btn btn-danger" onClick={() => { handleRemove(index) }}> 删除 </button>
          </div>
        </li>
      </Fragment>
    )
  }
}
