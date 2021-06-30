import React from 'react';
import {
  CartesianGrid, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar,
} from 'recharts';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter, dateTickFormatter, nFormatter } from '../../utils/functions';
import CustomTooltip from '../Tooltip';

function CountriesChart({ chartData, caseChartParam }) {
  return (
    <ResponsiveContainer width="98%" height={400}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="Date"
          tickFormatter={(str) => dateTickFormatter(str)}
        />
        <YAxis
          dataKey={capitalizeFirstLetter(caseChartParam)}
          tickCount={6}
          tickFormatter={(str) => nFormatter(str, 3)}
        />
        <CartesianGrid opacity={0.5} vertical={false} />
        <Tooltip content={<CustomTooltip name={caseChartParam} />} />
        <Bar
          dataKey={capitalizeFirstLetter(caseChartParam)}
          fill={
            caseChartParam === 'confirmed'
              ? 'rgba(136,132,216,0.5)'
              : (caseChartParam === 'recovered'
                ? 'rgba(39,216,29,0.5)'
                : 'rgba(252,38,33,0.5)')
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

CountriesChart.propTypes = {
  chartData: PropTypes.instanceOf(Array).isRequired,
  caseChartParam: PropTypes.string.isRequired,
};

export default CountriesChart;
