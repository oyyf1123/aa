import React from 'react';
import { Button } from 'antd-mobile';

const ShopItem = props => {
  function goDetail () {
    props.history.push('/list')
  }
  return (
    <li>
      <div className='wrap-li'  onClick = { goDetail }>
        <div className='img-box'>
          <img src={props.img.replace('w.h', '128.180')} /> 
        </div>
        <div className='text-box'>
          <p style={{ fontWeight: 'bold',fontSize:'16px'}}> {props.nm} </p>
          { props.sc &&  <p> 观众评 {props.sc} </p> ||<p> {props.wish}人想看 </p>}
          <p> 主演: {props.star} </p>
          <p> {props.showInfo} </p>
        </div>
        <div className='btn-box'>
          <Button type={props.globalReleased && 'warning' || 'primary'}>
            {props.globalReleased && '购买' || '预售'}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;