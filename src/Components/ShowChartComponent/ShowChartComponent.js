import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './ShowChartComponent.css';
import { skills, hobbies } from '../../data';

const ShowChartComponent = ({ users }) => {
  const [chartData, setChartData] = useState(skills);
  const dataSelector = (event) => {
    switch (event.target.value) {
      case 'skills':
        setChartData(skills);
        break;
      case 'hobbies':
        setChartData(hobbies);
        break;
      default:
        setChartData(skills);
        break;
    }
  };
  return (
    <div className='container'>
      <div className='inner'>
        <label className='f4' htmlFor='labelSelector'>
          Chart To Display:{' '}
        </label>
        <select id='labelSelector' name='labelSelector' onChange={dataSelector}>
          <option value='skills'>Candidate's Skills</option>
          <option value='hobbies'>Candidate's Hobbies</option>
        </select>
        <hr />
        <Bar
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: chartData.label,
                data: chartData.data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default ShowChartComponent;
