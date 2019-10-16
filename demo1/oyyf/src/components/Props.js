import React, { Component,Fragment } from 'react'
//  react数据定义有2钟方式，1.外部传入 2.内部定义
//  react中  属性是不可变的
import PropTypes from 'prop-types'
export default class Props extends Component {
  static defaultProps = {
    haha:'逗比'
  }
  render() {
    return (
      <Fragment>
        <p>外部传入的：{this.props.name }</p>
        <p>内部定义的：{this.props.haha}</p>
        <p>笑一次的价钱：{this.props.price + 1000}</p>
      </Fragment>
    )
  }
}
Props.propTypes = {
  // price:PropTypes.number  //要与传入的类型相同  不然会报错
  price:PropTypes.string
}