import React, { useState } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
//  激活的路由链接

const TabBar = props => {
  const [tabBar] = useState([
    {
      id: 1,
      iconName: "fas fa-home",
      text: '首页',
      path: "/home",
    }, {
      id: 2,
      iconName: "fas fa-align-center",
      text: '分类',
      path: "/category",
    }, {
      id: 3,
      iconName: "fas fa-gift",
      text: '活动',
      path: "/activity",
    }, {
      id: 4,
      iconName: "fas fa-cart-plus",
      text: '购物车',
      path: "/shoppingcart",
    }, {
      id: 5,
      iconName: "fas fa-user",
      text: '我的',
      path: "/me",
    },
  ])

  function renderItem () {
    return tabBar.map(item => (
      <li key={item.id}>
        <NavLink to = {item.path}>
          <i className = {item.iconName}></i>
          <span> {item.text} </span>
        </NavLink>
      </li>
    ))
  }   
  
  return (
    <footer>
      <ul>
        {renderItem() }
      </ul>
    </footer>
  );
}

export default TabBar;