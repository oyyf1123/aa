import React, { Component } from 'react';
import ajax from '../utils/request';
import './withList.scss';
import { Link } from 'react-router-dom';

const withList = UiComponent => {
  return class _ extends Component {
    constructor(props) {
      super(props)

      this.state = {
        content: [],
      }
    }
    async componentDidMount () {

      const cid = this.props.location.search.split('=')[1];
      const px = this.props.location.state;


      const result = await ajax({
        url: '/index.php',
        params: {
          r: 'class/cyajaxsub',
          page: 1,
          cid,
          px,
          cac_id: '',
        }
      })

      this.setState({
        content: result,
      })

    }

    renderList () {
      console.log(this.state.content);
      return this.state.content.data && this.state.content.data.data.content.map(item =>
        <li key={item.id} >
          <Link
            to={{
              pathname: '/details',
              search: `?id=${item.id}&categoryId=${item.category_id}`,
            }}
          >
            <div className='img_box'>
            <img src={item.pic} alt="" />
          </div>
          <div className='text_box'>
            <h3>{item.d_title}</h3>
            <div>
              <span> 天猫价 ￥{item.yuanjia} </span>
              <span> 已售{item.xiaoliang} 件 </span>
            </div>
            <div>
              <span> 券后价 ￥ {item.jiage} </span>
              <span> {item.quan_jine} 元券 </span>
            </div>
          </div>
          </Link>
          
        </li>)
    }
      render() {
        return (
          <div className='withListh-box'>
            <ul>
              {this.renderList()}
            </ul>
          </div>
        );
      }
    }
  }

  export default withList;
