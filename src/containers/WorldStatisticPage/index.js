import React, { useState } from 'react';
import { CircularProgress, MenuItem } from '@material-ui/core';
import WorldSearchBar from '../../components/WorldSearchBar';
import WorldService from '../../services/world.service';
import WorldChart from '../../components/WorldChart';
import BaseInput from '../../components/BaseInput';
import CaseMenuData from './data';

function WorldPage() {
  const [caseParam, setCaseParam] = useState('NewConfirmed');

  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(false);

  const handleSearchWorld = (params) => {
    const { dateFromParam, dateToParam } = params;
    setLoading(true);
    sessionStorage.setItem('worldDateFromParam', dateFromParam);
    sessionStorage.setItem('worldDateToParam', dateToParam);

    WorldService.getWorldStatistic(dateFromParam, dateToParam)
      .then((data) => {
        console.log(data);
        data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
        return setChartData(data);
      })
      .catch(() => alert('Something goes wrong..'))
      .finally(() => setLoading(false));

    return 1;
  };

  return (
    <div className="world page">
      <h1 className="page_title">World Global Statistics</h1>
      <div className="page_subtitle">
        World WIP. Please note that
        the provided API only shows results from January 2021.
      </div>
      <WorldSearchBar handleSearchWorld={handleSearchWorld} />
      {loading ? <div className="world-loader"><CircularProgress /></div> : ''}

      <BaseInput param={caseParam} setParam={setCaseParam} label="Select Case">
        {CaseMenuData
          ? CaseMenuData.map((el) => <MenuItem key={el.value} value={el.value}>{el.text}</MenuItem>)
          : (
            'No data found.'
          )}
      </BaseInput>

      {chartData.length > 0
        ? <div className="world-chart"><WorldChart chartData={chartData} caseChartParam={caseParam} /></div>
        : ''}

    </div>
  );
}

export default WorldPage;
