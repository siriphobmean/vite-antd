// src/components/DashboardTable.tsx

import React from 'react'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { UserData } from '../data/mockData'

interface Props {
  data: UserData[]
}

const DashboardTable: React.FC<Props> = ({ data }) => {
  const columns: ColumnsType<UserData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'ชื่อผู้ใช้',
      dataIndex: 'name',
    },
    {
      title: 'อีเมล',
      dataIndex: 'email',
    },
    {
      title: 'สิทธิ์',
      dataIndex: 'role',
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'User', value: 'User' },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      render: status => (
        <Tag color={status === 'Active' ? 'green' : 'volcano'}>
          {status}
        </Tag>
      ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      rowKey="id"
    />
  )
}

export default DashboardTable
