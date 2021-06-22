import React from 'react';
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import capitalizeFirstLetter from '../../utils/functions';
import CustomTooltip from './Tooltip';

function CountriesChart({ results, caseChartParam }) {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <AreaChart data={results} margin={{ right: 20, left: 50 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="Date"
          tickFormatter={(str) => {
            const dateObj = new Date(str);
            const weekday = dateObj.toLocaleString('en', { month: 'short' });
            return `${weekday}, ${dateObj.getDate()}`;
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
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
export default CountriesChart;
