import React, { useState } from 'react';
import './index.scss';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import list1 from './lists/list1';
import list2 from './lists/list2';
import list3 from './lists/list3';

const List = props => {
  const [lists] = useState([
    {
      id: 1,
      text: "1",
      path: '/list/list1',
      component: list1,
    },
    {
      id: 2,
      text: "2",
      path: '/list/list2',
      component: list2,
    },
    {
      id: 3,
      text: "3",
      path: '/list/list3',
      component: list3,
    },
  ])

  function renderLists () {
    return lists.map(item => <NavLink to={item.path} key={item.id}> {item.text} </NavLink>)
  }
  function renderRoutes () {
    return lists.map(item => <Route key={item.id} path={item.path} component={item.component} />)
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