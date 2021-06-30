import {
  Button, MenuItem,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';
import DatePicker from '../DatePicker';
import { getItemFromSession, getUrlParam } from '../../utils/functions';

function CountriesSearchBar({ countries, handleSearchCountries }) {
  const [countryParam, setCountryParam] = useState('');
  const [caseParam, setCaseParam] = useState('');
  const [dateFromParam, setDateFromParam] = useState('');

  const location = useLocation();

  const handleSearch = (country, caseType, dateFrom) => {
    if (!country || !caseType || !dateFrom) return alert('Please enter correct values.');
    return handleSearchCountries({
      country, caseType, dateFrom,
    });
  };

  useEffect(() => {
    if (getUrlParam(location, 'country')
      && getUrlParam(location, 'caseType')
      && getUrlParam(location, 'dateFrom')) {
      setCaseParam(getUrlParam(location, 'country'));
      setCountryParam(getUrlParam(location, 'caseType'));
      setDateFromParam(getUrlParam(location, 'dateFrom'));
      handleSearch(getUrlParam(location, 'country'),
        getUrlParam(location, 'caseType'),
        getUrlParam(location, 'dateFrom'));
    } else if (getItemFromSession('caseParam')
      && getItemFromSession('countryParam')
      && getItemFromSession('dateFromParam')) {
      setCaseParam(getItemFromSession('caseParam'));
      setCountryParam(getItemFromSession('countryParam'));
      setDateFromParam(getItemFromSession('dateFromParam'));
      handleSearch(getItemFromSession('caseParam'),
        getItemFromSession('countryParam'),
        getItemFromSession('dateFromParam'));
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

      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => handleSearch(countryParam, caseParam, dateFromParam)}
      >
        Search
      </Button>
    </div>
  );
}

CountriesSearchBar.propTypes = {
  countries: PropTypes.instanceOf(Array).isRequired,
  handleSearchCountries: PropTypes.func.isRequired,
};

export default CountriesSearchBar;
