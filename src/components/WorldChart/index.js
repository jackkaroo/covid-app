import React from 'react';
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import capitalizeFirstLetter from '../../utils/functions';

function WorldChart({ chartData, caseChartParam }) {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <AreaChart data={chartData} margin={{ right: 20, left: 50 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={
                  caseChartParam === 'NewConfirmed' || caseChartParam === 'TotalConfirmed'
                    ? '#8884d8'
                    : (caseChartParam === 'NewRecovered' || caseChartParam === 'TotalRecovered'
                      ? '#0ad83b'
                      : '#fc2621')
                }
              stopOpacity={0.8}
            />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="Date"
          // tickFormatter={(str) => {
          //   const dateObj = new Date(str);
          //   // const weekday = dateObj.toLocaleString('en', { month: 'short' });
          //   // return `${weekday}, ${dateObj.getDate()}`;
          //   return dateObj.getDate();
          // }}
        />
        <YAxis
          dataKey={caseChartParam}
          tickCount={5}
        />
        <CartesianGrid opacity={0.5} vertical={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={capitalizeFirstLetter(caseChartParam)}
          stroke="#aaaaaa"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
export default WorldChart;
