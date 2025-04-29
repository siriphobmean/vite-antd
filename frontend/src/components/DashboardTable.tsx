import React from 'react'
import { Table, Tag, Card } from 'antd'
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
      align: 'center',
      width: 100,
    },
    {
      title: 'ชื่อผู้ใช้',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'อีเมล',
      dataIndex: 'email',
      render: (email) => <a href={`mailto:${email}`}>{email}</a>,
    },
    {
      title: 'สิทธิ์',
      dataIndex: 'role',
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'User', value: 'User' },
      ],
      onFilter: (value, record) => record.role === value,
      render: (role) => (
        <Tag color={role === 'Admin' ? 'blue' : 'geekblue'}>{role}</Tag>
      ),
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'volcano'}>
          {status}
        </Tag>
      ),
    },
  ]

  return (
    <Card style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        rowKey="id"
        size="middle"
        scroll={{ x: 800 }}
        bordered
      />
    </Card>
  )
}

export default DashboardTable