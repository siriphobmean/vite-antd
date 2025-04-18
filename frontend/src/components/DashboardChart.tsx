// src/components/DashboardChart.tsx
import React from 'react'
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
  return <Bar data={data} options={options} />
}

export default DashboardChart