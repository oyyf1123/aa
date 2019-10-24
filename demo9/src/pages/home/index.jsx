import React, { Component } from 'react'
import './index.scss';
import { Carousel } from 'antd-mobile';

export default class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render () {
    return (
      <div className="homeBox">
        <Carousel
          className = 'Carousel-box'
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className = 'home-nav'>
          <div className = "box1">杭州</div> 
          <div className = "box2">正在热卖</div> 
          <div className = "box3">即将上市</div> 
          <div className = "box4"><i className = "fas fa-search" ></i></div> 
        </div>
        <div className = 'home-content'> 

        </div>
      </div>
    )
  }
}

