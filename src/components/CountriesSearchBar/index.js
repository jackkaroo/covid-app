import {
  Button, MenuItem,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BaseInput from '../BaseInput';
import DatePicker from '../DatePicker';
import { getItemFromSession } from '../../utils/functions';

export default function CountriesSearchBar({ countries, handleSearchCountries }) {
  const [countryParam, setCountryParam] = useState('');
  const [caseParam, setCaseParam] = useState('');
  const [dateFromParam, setDateFromParam] = useState('');

  const handleSearch = () => {
    if (!countryParam || !caseParam || !dateFromParam) return alert('Please enter correct values.');
    return handleSearchCountries({
      countryParam, caseParam, dateFromParam,
    });
  };

  useEffect(() => {
    if (getItemFromSession('caseParam')) {
      setCaseParam(getItemFromSession('caseParam'));
    }
    if (getItemFromSession('countryParam')) {
      setCountryParam(getItemFromSession('countryParam'));
    }
    if (getItemFromSession('dateFromParam')) {
      setDateFromParam(getItemFromSession('dateFromParam'));
    }
  }, []);

  return (
    <div className="countries-form">
      <BaseInput param={countryParam} setParam={setCountryParam} label="Select Country">
        {countries
          ? countries.map((el) => <MenuItem key={el.Slug} value={el.Slug}>{el.Country}</MenuItem>)
          : (
            <MenuItem value="">
              <em>Loading</em>
            </MenuItem>
          )}
      </BaseInput>

      <BaseInput param={caseParam} setParam={setCaseParam} label="Select Case">
        <MenuItem value="confirmed">Confirmed</MenuItem>
        <MenuItem value="recovered">Recovered</MenuItem>
        <MenuItem value="deaths">Deaths</MenuItem>
      </BaseInput>

      <DatePicker param={dateFromParam} setParam={setDateFromParam} label="Select Date From" />

      <Button variant="contained" size="large" color="primary" onClick={() => handleSearch()}>
        Search
      </Button>
    </div>
  );
}
