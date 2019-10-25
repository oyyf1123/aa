import React,{useState,useEffect} from 'react';
import ShopItem from './shopItem';
import ajax from '../../../utils/request';

const ShopList = props => {

  const [movieList,setMovieList] = useState([]);

  useEffect(() => {
    if (movieList.length !== 0) return;
    ajax({
      url: '/ajax/movieOnInfoList',
      params: {
        token:"",
      }
    }).then(res => setMovieList(res.data.movieList))
  })

  function renderItem () {
    return movieList && movieList.map( item =>  <ShopItem {...item} {...props} key = {item.id} />)
  }

  return (
    <ul className='movie-ul'>
      {renderItem()}
    </ul>
  );
}

export default ShopList;