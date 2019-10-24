import React,{useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/home';
import Category from '../../pages/category';
import Activity from '../../pages/activity';
import Me from '../../pages/me';
import ShoppingCart from '../../pages/shoppingcart';
import ErrorComp from '../../pages/error';
import List from '../../pages/category/list';
import Details from '../../pages/category/details';

const RouterComp = props => {
  const [routes] = useState([
    {
      id: 1,
      path: '/home',
      component:Home,
    },
    {
      id: 2,
      path: '/category',
      component:Category,
    },
    {
      id: 3,
      path: '/activity',
      component:Activity,
    },
    {
      id: 4,
      path: '/me',
      component:Me,
    },
    {
      id: 5,
      path: '/shoppingcart',
      component:ShoppingCart,
    },
    {
      id: 6,
      path: '/list',
      component:List,
    },
    {
      id: 7,
      path: '/details',
      component:Details,
    },
    {
      id: 8,
      path: '',
      component:ErrorComp
    }
  ])

  function renderRoutes () {
    return routes.map( item => <Route key = {item.id} path = {item.path} component = {item.component} /> )
  }


  //  from 来源
  //to  目标

  return (
    <Switch>
      <Redirect from = "/" to = "/home" exact/>  
      { renderRoutes() }
    </Switch>
  );
}

export default RouterComp