import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd-mobile';;



 const tabs = [
    { title: '为你推荐', sub: '1' },
    { title: '品牌精选', sub: '2' },
    { title: '女装', sub: '3' },
    { title: '男装', sub: '4' },
    { title: '美食', sub: '5' },
    { title: '美妆', sub: '6' },
    { title: '居家日用', sub: '7' },
    { title: '鞋品', sub: '8' },
    { title: '数码家电', sub: '9' },
    { title: '文娱车品', sub: '10' },
    { title: '内衣', sub: '11' },
    { title: '母婴', sub: '12' },
    { title: '箱包', sub: '13' },
    { title: '配饰', sub: '14' },
    { title: '家装家纺', sub: '15' },
    { title: '户外运动', sub: '16' },
  ];


const Category = props => {
 
  function renderTab (tab) {
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
      <p>Content of {tab.title} </p>
    </div>);
  }

  return (
    <div className="categoryBox">
      <Tabs
        tabs={tabs}
        tabBarPosition='left'
        tabDirection='vertical'
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}
        
      >
        {renderTab(props)}
      </Tabs>
    </div>
  );
}

export default Category;