import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, MenuItem } from '@material-ui/core';
import WorldChart from '../WorldChart';
import BaseInput from '../BaseInput';
import './index.css';
import WorldSearchBarContainer from '../../containers/WorldSearchBarContainer';

// @ts-ignore
// @ts-ignore
function WorldPage({
  caseParam, setCaseParam, loading, chartData, handleSearchWorld, caseMenuData,
} : { caseParam: string, setCaseParam: any, loading: boolean, chartData: any, handleSearchWorld: any, caseMenuData: any, }) {
  return (
    <div className="world page">
      <h1 className="page_title">World Global Statistics</h1>
      <div className="page_subtitle">
        Please note that
        the provided API only shows results from January 2021.
      </div>

      <WorldSearchBarContainer handleSearchWorld={handleSearchWorld} />

      <BaseInput param={caseParam} setParam={setCaseParam} label="Select Case">
        {caseMenuData
          ? caseMenuData.map((el: { value: string; text: string; }) => (
            <MenuItem
              key={el.value}
              value={el.value}
            >
              {el.text}
            </MenuItem>
          ))
          : (
            'No data found.'
          )}
      </BaseInput>

      {loading
        ? (
          <div className="world-loader">
            <CircularProgress />
          </div>
        )
        : (chartData.length > 0
          ? (
            <div className="world-chart">
              <WorldChart
                chartData={chartData}
                caseChartParam={caseParam}
              />
            </div>
          )
          : ''
        )}
    </div>
  );
}

WorldPage.propTypes = {
  caseParam: PropTypes.string.isRequired,
  setCaseParam: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  chartData: PropTypes.instanceOf(Array).isRequired,
  handleSearchWorld: PropTypes.func.isRequired,
  caseMenuData: PropTypes.instanceOf(Array).isRequired,
};

export default WorldPage;
