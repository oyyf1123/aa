import React from 'react';
import { Table, Divider, Button } from 'antd';


const { Column } = Table;

const data = [
  {
    key: '1',
    sendName: 'John',
    acceptName: 'Brown',
    entryTime: 32,
    leaveTime: 34,
    taskDetails: '任务一',
  },
  {
    key: '2',
    sendName: 'Jim',
    acceptName: 'Green',
    entryTime: 42,
    leaveTime: 35,
    taskDetails: '任务二',
  },
  {
    key: '3',
    sendName: 'Joe',
    acceptName: 'Black',
    entryTime: 32,
    leaveTime: 44,
    taskDetails: '任务三',
  }
];

const ContentComp = props => {
  return (
    <Table dataSource={data}>

      <Column title="移交任务" dataIndex="sendName" key="sendName" />
      <Column title="接受任务" dataIndex="acceptName" key="acceptName" />

      <Column title="入职时间" dataIndex="entryTime" key="entryTime" />
      <Column title="离职时间" dataIndex="leaveTime" key="leaveTime" />
      <Column title="交接任务详情" dataIndex="taskDetails" key="taskDetails" />

      <Column
        title="操作"
        key="action"
        render={(text, record) => (
          <span>
            <Button type="primary">
              <a>查看详情</a>
            </Button>
            <Divider type="vertical" />
            <Button type="danger">
              <a>删除</a>
            </Button>
          </span>
        )}
      />
    </Table>
  );
}

export default ContentComp;