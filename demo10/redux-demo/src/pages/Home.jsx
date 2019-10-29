import React,{useEffect} from 'react';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMovieList} from '../actions'

const Home = props => {

  useEffect(() => {
    props.getMovieList()
  },[])

  return (
    
    <div className = 'home-box' style = {{overflow:'hidden'}}>
      <ul>
        <MovieList {...props} />
      </ul>
    </div>    
  );
}





export default connect(state => {
  return {
    data: state.homeReducer.data
  }
},
dispatch=> bindActionCreators( { getMovieList },dispatch ))(Home);
/* 
connnect 两个参数
   mapStateFromProps  将store里面的state转换成props,然后Home组件继承容器组件的props
   mapDispatchFromProps 将action里面的方法绑定在ui组件身上，以props的形式访问，然后帮助我们发送action给reducer
*/