import React from 'react';
import { Breadcrumb } from 'antd';
import './index.css';

const BreadcrumbComp = props => {
  return (
      <Breadcrumb separator = ">" >
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">交接任务列表</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>交接任务明细</Breadcrumb.Item>
      </Breadcrumb>
  );
}

export default BreadcrumbComp;