import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default class Banner extends Component {

  render () {
    return (
      <div className="swiper-container" style={{ width: '90 %',height:'200px'}}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        {/* <!-- 如果需要分页器 --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- 如果需要导航按钮 --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- 如果需要滚动条 --> */}
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    )
  }

  componentDidMount () {
     new Swiper ('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })        
  }
}
