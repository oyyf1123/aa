import React, { Component } from 'react'
import './index.scss';
import { Carousel } from 'antd-mobile';
import { NavLink, Route, Redirect } from 'react-router-dom';
import WillSell from './willSell';
import BeingSell from './beingSell';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }


  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: ['https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1368605228,431949653&fm=175&app=25&f=JPEG?w=600&h=726&s=EAF18243021E3FDC113C489303005082', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=777863782,3895765671&fm=175&app=25&f=JPEG?w=600&h=861&s=A5BB71977B5B7FD40C0895EF0300F060', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1880620715,3520044128&fm=175&app=25&f=JPEG?w=640&h=819&s=37105F854EC376C0448C98B7030040A1'],
      });
    }, 100);
  }

  render () {
    return (
      <div className="homeBox">
        <Carousel
          className='Carousel-box'
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="javescript:;"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'false' });
                }}
              />
            </a>
          ))}
        </Carousel>

        <div className='home-nav'>
          <div className="box1">杭州</div>
          <NavLink className="box2" to='/home/beingsell'>
            <div>正在热卖</div>
          </NavLink>
          <NavLink className="box3" to='/home/willsell'>
            <div>即将上市</div>
          </NavLink>
          <div className="box4"><i className="fas fa-search" ></i></div>
        </div>

        <div className='home-content'>
          <Redirect from='/home' to='/home/beingsell' />
          <Route path='/home/beingsell' component={BeingSell} />
          <Route path='/home/willsell' component={WillSell} />
        </div>
      </div>
    )
  }
}

