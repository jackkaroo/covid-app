import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import CountriesChart from '../components/CountriesChart';
import CountriesForm from './CountriesForm';

function Country() {
  const [countries, setCountries] = useState([]);
  const [countryParam, setCountryParam] = useState('');
  const [caseParam, setCaseParam] = useState('');
  const [dateFromParam, setDateFromParam] = useState('');
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const getResponse = () => {
    if (!countryParam) return alert('Please enter correct values.');
    if (!caseParam) return alert('Please enter correct values.');
    if (!dateFromParam) return alert('Please enter correct values.');
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/live/country/${countryParam}/status/${caseParam}/date/${dateFromParam}`)
    // fetch('https://api.covid19api.com/live/country/italy/status/confirmed/date/2021-05-21T13:13:30Z')
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (data.length === 0) return setVisible(false);
        setVisible(true);
        return setResults(data);
      })
      .catch(() => {
        alert('Something goes wrong..');
        setLoading(false);
      });
    return 1;
  };

  useEffect(() => {
    setCountries(JSON.parse(sessionStorage.getItem('countries')));
    if (sessionStorage.getItem('caseParam')) setCaseParam(sessionStorage.getItem('caseParam'));
    if (sessionStorage.getItem('countryParam')) setCountryParam(sessionStorage.getItem('countryParam'));
    if (sessionStorage.getItem('dateFromParam')) setDateFromParam(sessionStorage.getItem('dateFromParam'));
  }, []);

  return (
    <div className="home">
      <h1>Live By Country And Status After Date</h1>
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
          <div>
            {results.length > 0
              ? <CountriesChart results={results} caseParam={caseParam} />
              : '' }
          </div>
        )
        : 'Unfortunately, the provided API does not have this information.'}
    </div>
  );
}

export default Country;
