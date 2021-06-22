import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import CountriesChart from '../../components/CountriesChart';
import CountriesSearchBar from '../../components/CountriesSearchBar';
import './index.css';
import CountriesService from '../../services/countries.service';

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [caseChartParam, setCaseChartParam] = useState('');

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCountries(JSON.parse(sessionStorage.getItem('countries')));
  }, []);

  const handleSearchCountries = (params) => {
    const { countryParam, caseParam, dateFromParam } = params;

    setLoading(true);
    setCaseChartParam(caseParam);
    sessionStorage.setItem('countryParam', countryParam);
    sessionStorage.setItem('caseParam', caseParam);
    sessionStorage.setItem('dateFromParam', dateFromParam);

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
      <div className="page_subtitle">Live By Country And Status After Date</div>
      <CountriesSearchBar
        countries={countries}
        handleSearchCountries={handleSearchCountries}
      />
      {loading ? <CircularProgress /> : ''}
      {visible
        ? (
          <div className="countries_chart">
            {chartData.length > 0
              ? (
                <div>
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
