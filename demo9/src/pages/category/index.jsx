import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Category = props => {
  return (
    <div className = "categoryBox">
      <Link to = "/list">Category</Link>
    </div>
  );
}

export default Category;