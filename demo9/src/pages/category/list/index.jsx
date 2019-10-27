import React from 'react';
import './index.scss';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import list1 from './lists/list1';
import list2 from './lists/list2';
import list3 from './lists/list3';
import list4 from './lists/list4';

const lists = [
  {
    id: 1,
    text: "人气",
    path: '/list/list1',
    component: list1,
    px:'t'
  },
  {
    id: 2,
    text: "最新",
    path: '/list/list2',
    component: list2,
    px:'latest'
  },
  {
    id: 3,
    text: "销量",
    path: '/list/list3',
    component: list3,
    px:'sell'
  },
  {
    id: 4,
    text: "价格",
    path: '/list/list4',
    component: list4,
    px:'price_h'
  },
]
const List = (props) => {

  function renderLists () {
    const cid = props.location.search.split('=')[1];
    return lists.map(item => item.id !== 4 && <NavLink to={{
      pathname: item.path,
      search:`?cid=${cid}`,      
      state:item.px,
    }} key={item.id}> {item.text} </NavLink>
      || <NavLink to={{
      pathname: item.path,
      search:`?cid=${cid}`,
      state:item.px,
      }} key={item.id}> {item.text} <i className = "fas fa-exchange-alt"></i> </NavLink> 
    )
  }
  function renderRoutes () {
    return lists.map(item => <Route key={item.id} path={item.path} component={item.component}  />)
  }

  return (
    <div className="list">
      <div className="listNav">
        {renderLists()}
      </div>
      <Switch>
        <Redirect from='/list' to='/list/list1' exact/>
        {renderRoutes()}
      </Switch>
    </div>
  );
}

export default List