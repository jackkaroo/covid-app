import React from 'react';
import PropTypes from 'prop-types';
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { capitalizeFirstLetter, dateTickFormatter, nFormatter } from '../../utils/functions';
import CustomTooltip from '../Tooltip';

function WorldChart({ chartData, caseChartParam }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={chartData}>
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
          tickFormatter={(str) => dateTickFormatter(str)}
        />
        <YAxis
          dataKey={caseChartParam}
          tickCount={5}
          tickFormatter={(str) => nFormatter(str, 3)}
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

WorldChart.propTypes = {
  chartData: PropTypes.instanceOf(Array).isRequired,
  caseChartParam: PropTypes.string.isRequired,
};

export default WorldChart;
