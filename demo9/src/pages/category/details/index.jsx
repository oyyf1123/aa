import React,{useEffect,useState} from 'react';
import './index.scss';
import ajax from '../../../utils/request';

const Details = props => {

  let [detailsList, setDetailsList] = useState([]);

  function goBack () {
    props.history.go(-1);
  }

  useEffect(() => {
    let _id = props.location.search.split('&')[0].split('=')[1];
    let categoryId = props.location.search.split('&')[1].split('=')[1];
   
    ajax({
      url: '/api/goods/get-similar-goods',
      params: {
        id: _id,
        categoryId,
      }
    }).then(res => console.log(res))
  })

  return (
    <div className="details">
      <i className = 'fas fa-chevron-circle-left' onClick = {goBack} ></i>
      details
    </div>
  );
}

export default Details