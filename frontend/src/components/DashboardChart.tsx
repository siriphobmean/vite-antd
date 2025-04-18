import React from 'react'
import { Card } from 'antd'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Active Users',
      data: [12, 19, 3, 5, 2],
      backgroundColor: '#1890ff',
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
}

const DashboardChart: React.FC = () => {
  return <Card style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
    <Bar data={data} options={options} />
  </Card>
}

export default DashboardChart