import React from 'react';
import PropTypes from 'prop-types';
import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { capitalizeFirstLetter, dateTickFormatter, nFormatter } from '../../utils/functions';
import CustomTooltip from '../Tooltip';

function WorldChart({ chartData, caseChartParam } : { chartData: any, caseChartParam: string }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
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
        <Bar
          type="monotone"
          dataKey={capitalizeFirstLetter(caseChartParam)}
          fill={
            caseChartParam === 'NewConfirmed' || caseChartParam === 'TotalConfirmed'
              ? 'rgba(136,132,216,0.5)'
              : (caseChartParam === 'NewRecovered' || caseChartParam === 'TotalRecovered'
                ? 'rgba(39,216,29,0.5)'
                : 'rgba(252,38,33,0.5)')
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

WorldChart.propTypes = {
  chartData: PropTypes.instanceOf(Array).isRequired,
  caseChartParam: PropTypes.string.isRequired,
};

export default WorldChart;
