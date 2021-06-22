import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import CountriesChart from '../../components/CountriesChart';
import CountriesForm from './CountriesForm';
import './index.css';
import capitalizeFirstLetter from '../../utils/functions';
import CountriesService from './CountriesService';

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [countryParam, setCountryParam] = useState('');
  const [caseParam, setCaseParam] = useState('');
  const [caseChartParam, setCaseChartParam] = useState('');
  const [dateFromParam, setDateFromParam] = useState('');
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const getResponse = () => {
    if (!countryParam || !caseParam || !dateFromParam) return alert('Please enter correct values.');
    setLoading(true);
    setCaseChartParam(caseParam);
    CountriesService.getCountriesByStatus(countryParam, caseParam, dateFromParam)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length === 0) return setVisible(false);
        setVisible(true);
        return setResults(data);
      })
      .catch(() => {
        alert('Something goes wrong..');
      })
      .finally(() => setLoading(false));
    return 1;
  };

  useEffect(() => {
    setCountries(JSON.parse(sessionStorage.getItem('countries')));
    if (sessionStorage.getItem('caseParam')) setCaseParam(sessionStorage.getItem('caseParam'));
    if (sessionStorage.getItem('countryParam')) setCountryParam(sessionStorage.getItem('countryParam'));
    if (sessionStorage.getItem('dateFromParam')) setDateFromParam(sessionStorage.getItem('dateFromParam'));
  }, []);

  return (
    <div className="countries page">
      <h1 className="countries_title">Country statistics</h1>
      <div className="countries_subtitle">Live By Country And Status After Date</div>
      <CountriesForm
        countryParam={countryParam}
        setCountryParam={setCountryParam}
        countries={countries}
        caseParam={caseParam}
        setCaseParam={setCaseParam}
        dateFromParam={dateFromParam}
        setDateFromParam={setDateFromParam}
        getResponse={getResponse}
      />
      {loading ? <CircularProgress /> : ''}
      {visible
        ? (
          <div className="countries_chart">
            {results.length > 0
              ? (
                <div>
                  <CountriesChart results={results} caseChartParam={caseChartParam} />
                  <h2>
                    {capitalizeFirstLetter(countryParam)}
                  </h2>
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
