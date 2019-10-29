import React, { Fragment,useState } from 'react';
import './homeitem.css';
import {Button } from 'antd-mobile';

const MovieList = props => {

  const [state, setstate] = useState(props)
  
  function renderItem () {
    // return state.map( item => <li key={item.id}>
    //   <div className='wrap-li'>
    //     <div className='img-box'>
    //       <img src={item.img.replace('w.h', '128.180')} /> 
    //     </div>
    //     <div className='text-box'>
    //       <p style={{ fontWeight: 'bold',fontSize:'16px'}}> {item.nm} </p>
    //       { item.sc &&  <p> 观众评 {item.sc} </p> ||<p> {item.wish}人想看 </p>}
    //       <p> 主演: {item.star} </p>
    //       <p> {item.showInfo} </p>
    //     </div>
    //     <div className='btn-box'>
    //       <Button type={item.globalReleased && 'warning' || 'primary'}>
    //         {item.globalReleased && '购买' || '预售'}
    //       </Button>
    //     </div>
    //   </div>
    // </li>)
  }

  return (
    <Fragment>
      {renderItem()}
    </Fragment>
  );
}

export default MovieList;