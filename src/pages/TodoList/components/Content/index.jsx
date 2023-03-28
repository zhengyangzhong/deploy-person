import React from 'react'
import { Table } from 'antd';

const columns = [
  {
    title: '事项',
    key: 'matter',
    dataIndex: 'matter',
  }
]
const data = [
  {key:'1', matter: '逛街'},
  {key:'2', matter: '逛街'}
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

const Content = () => {
  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      rouKey="key"
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  )
}

export default Content

