import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import WorldService from '../../services/world.service';
import { setItemToSession } from '../../utils/functions';
import WorldPage from '../../components/WorldPage';
import CaseMenuData from './data';

function WorldPageContainer() {
  const [caseParam, setCaseParam] = useState('NewConfirmed');

  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  const history = useHistory();

  const handleSearchWorld = ({ dateFrom, dateTo }) => {
    setLoading(true);

    history.push(`/?dateFrom=${dateFrom}&dateTo=${dateTo}`);
    setItemToSession('worldDateFromParam', dateFrom);
    setItemToSession('worldDateToParam', dateTo);

    WorldService.getWorldStatistic(dateFrom, dateTo)
      .then((data) => {
        data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
        return setChartData(data);
      })
      .catch(() => alert('Something goes wrong..'))
      .finally(() => setLoading(false));

    return 1;
  };

  return (
    <WorldPage
      caseParam={caseParam}
      setCaseParam={setCaseParam}
      loading={loading}
      chartData={chartData}
      handleSearchWorld={handleSearchWorld}
      caseMenuData={CaseMenuData}
    />
  );
}

export default WorldPageContainer;
