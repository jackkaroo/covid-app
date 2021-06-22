import React from 'react';
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import capitalizeFirstLetter from '../../utils/functions';
import CustomTooltip from '../Tooltip';

function CountriesChart({ chartData, caseChartParam }) {
  return (
    <ResponsiveContainer width="98%" height={400}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={
                caseChartParam === 'confirmed'
                  ? '#8884d8'
                  : (caseChartParam === 'recovered'
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
          tickFormatter={(str) => {
            const dateObj = new Date(str);
            const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
            const newDate = new Date(dateObj.getTime() + userTimezoneOffset);
            const weekday = newDate.toLocaleString('en', { month: 'short' });
            return `${weekday}, ${newDate.getDate()}`;
          }}
        />
        <YAxis
          dataKey={capitalizeFirstLetter(caseChartParam)}
          tickCount={5}
        />
        <CartesianGrid opacity={0.5} vertical={false} />
        <Tooltip content={<CustomTooltip name={caseChartParam} />} />
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
export default CountriesChart;
