import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import CountriesChart from '../../components/CountriesChart';
import CountriesSearchBar from '../../components/CountriesSearchBar';
import './index.css';
import CountriesService from '../../services/countries.service';
import { getItemFromSession, setItemToSession } from '../../utils/functions';

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [caseChartParam, setCaseChartParam] = useState('');

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCountries(JSON.parse(getItemFromSession('countries')));
  }, []);

  const handleSearchCountries = ({ countryParam, caseParam, dateFromParam }) => {
    setLoading(true);
    setCaseChartParam(caseParam);

    setItemToSession('countryParam', countryParam);
    setItemToSession('caseParam', caseParam);
    setItemToSession('dateFromParam', dateFromParam);

    CountriesService.getCountriesByStatus(countryParam, caseParam, dateFromParam)
      .then((data) => {
        console.log(data);
        if (data.length === 0) return setVisible(false);
        setVisible(true);
        return setChartData(data);
      })
      .catch(() => alert('Something goes wrong..'))
      .finally(() => setLoading(false));

    return 1;
  };

  return (
    <div className="page">
      <h1 className="page_title">Country Statistics</h1>
      <div className="page_subtitle">
        Please note that
        the provided API only shows results from January 2021.
      </div>
      <CountriesSearchBar
        countries={countries}
        handleSearchCountries={handleSearchCountries}
      />
      {loading ? <CircularProgress /> : ''}
      {visible
        ? (
          <div>
            {chartData.length > 0
              ? (
                <div className="countries_chart-wrapper">
                  <CountriesChart chartData={chartData} caseChartParam={caseChartParam} />
                </div>
              )
              : '' }
          </div>
        )
        : <div className="countries_no-info">Unfortunately, the provided API does not have this information.</div>}
    </div>
  );
}

export default CountriesPage;
