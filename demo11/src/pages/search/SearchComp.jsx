import React from 'react';
import './index.css';
import SearchInput from './searchInput';

const SearchComp = props => {
  return (
    <div className = 'search_box'>
      <div>

      </div>
      <div className = 'searchInput'>
        <SearchInput/>
      </div>
    </div>
  );
}

export default SearchComp;