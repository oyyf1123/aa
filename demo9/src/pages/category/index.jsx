import React,{useState,useEffect} from 'react';
import './index.scss';
import { Tabs } from 'antd-mobile';import CategoryList from './categoryList';
import ajax from '../../utils/request';



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

  let [lists, setLists] = useState([]);

  useEffect(() => {
    if (lists.length !== 0) return ;
    ajax({
      url: '/index.php',
      params: {
        r:'class/category',
        type: 1,
      }
    }).then(res => {
      setLists(res.data.data.data)
      console.log(res.data.data.data);
    })
  })

  function renderTab (lists) {
    return lists.map(item => (
      <div key = {item.cid} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
        <CategoryList {...item} />
      </div>))
  }

  return (
    <div className="categoryBox">
      <Tabs
        tabs={tabs}
        tabBarPosition='left'
        tabDirection='vertical'
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}
        tabBarActiveTextColor='#FC3F78'
        tabBarBackgroundColor='#F4F4F4'
        prerenderingSiblingsNumber = '0'
      >
        {renderTab(lists)}
      </Tabs>
    </div>
  );
}

export default Category;