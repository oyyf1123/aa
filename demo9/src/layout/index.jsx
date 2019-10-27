import React, { Component } from 'react'
import Tab from '../components/tab'
import TabBar from '../components/tabbar'
import './index.scss'
import RouterComp from './router/routerComp';

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabFlag: true,
    }
  }

  componentDidMount () {
    const pathName = this.props.location.pathname;
    console.log(pathName);
    if (pathName === '/details') this.setState({ tabFlag: false })
  }

  onlyBack () {
    this.props.history.go(-1);
  }

  render () {
    const { tabFlag } = this.state;
    const pathName = this.props.location.pathname;

    return (
      pathName === '/details' &&
      <div className="layout">
        <RouterComp />
      </div>
      ||
      <div className="layout">
        {tabFlag && <Tab tabFlag={tabFlag}  {...this.props} />}
        <RouterComp />
        {tabFlag && <TabBar />}
      </div>
    )
  }
}
