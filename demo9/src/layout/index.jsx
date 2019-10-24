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
      gobackFlag:false
    }
  }
  
  render () {
    const { tabFlag, gobackFlag } = this.state;
    return (
      <div className = "layout">
        {tabFlag && <Tab tabFlag={tabFlag} gobackFlag={gobackFlag} />}
        <RouterComp />
        <TabBar />
      </div>
    )
  }
}
