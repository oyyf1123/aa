import React from 'react';
import './index.scss';
import { withRouter, Link} from 'react-router-dom';

const CategoryList = props => {
  console.log(props.floors);

  // function goLists () {
  //   props.history.push('/list');
  // }

  return (
    <div className = 'category-list-box'>
      {props.floors.map(item =>
        <div
          style = {{background:'#fff'}}
          key={item.list[0].api_cid} >
          <p> {item.name} </p>
          <ul>
            {item.list.map( item2 =>
              <li
                key={item2.api_id}
              >
                <Link to={{
                  pathname: '/list/list1',
                  search:`?cid=${item2.api_cid}`
                }} >
                  <img src={item2.img} alt="" />
                  <i> {item2.name} </i>
                </Link>
              </li>)}
          </ul>
        </div>)}
    </div>
  );
}

export default withRouter(CategoryList);