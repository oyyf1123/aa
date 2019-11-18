import React from 'react';
import './index.css';
import MenuComp from '../pages/menu/MenuComp';
import SearchComp from '../pages/search/SearchComp';
import BreadcrumbComp from '../Breadcrumb/Breadcrumb';
import ContentComp from '../pages/content/ContentComp';

const Layout = props => {
  return (
    <div className='layout_wrap_box'>
      <div className='menu_left_box'>
        <MenuComp />
      </div>
      <div className='content_box'>
        <div className='content_breadcrumb'>
          <BreadcrumbComp />
        </div>
        <div className='content_search'>
          <SearchComp />
        </div>
        <div className='content_render_box'>
          <ContentComp/>
        </div>
      </div>
    </div>
  );
}

export default Layout;