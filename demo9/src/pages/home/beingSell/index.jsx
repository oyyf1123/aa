import React,{useEffect} from 'react';
import ShopList from './ShopList';
import './index.scss'
import BScroll  from 'better-scroll';


const BeingSell = props => {
  useEffect(() => {
    new BScroll( document.querySelector('.shopList'),{
      click: true
    })
  })
  return (
    <div className = "shopList">
      <ShopList {...props} />
    </div>
  );
}

export default BeingSell;