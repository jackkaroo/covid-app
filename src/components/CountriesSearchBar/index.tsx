import { Button, MenuItem } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';
import DatePicker from '../DatePicker';

function CountriesSearchBar({
  countries, countryParam, setCountryParam, caseParam, setCaseParam,
  dateFromParam, setDateFromParam, handleSearch,
} : {
    countries: any, countryParam: string, setCountryParam: any, caseParam: string,
    setCaseParam: any, dateFromParam: string, setDateFromParam: any, handleSearch: any
}) {
  return (
    <div className="countries-form">
      <BaseInput
        param={countryParam}
        setParam={setCountryParam}
        label="Select Country"
      >
        {
          countries
            ? countries.map((el: { Slug: string; Country: string; }) => (
              <MenuItem
                key={el.Slug}
                value={el.Slug}
              >
                {el.Country}
              </MenuItem>
            ))
            : (
              <MenuItem value="">
                <em>Loading</em>
              </MenuItem>
            )
        }
      </BaseInput>

      <BaseInput
        param={caseParam}
        setParam={setCaseParam}
        label="Select Case"
      >
        <MenuItem value="confirmed">Confirmed</MenuItem>
        <MenuItem value="recovered">Recovered</MenuItem>
        <MenuItem value="deaths">Deaths</MenuItem>
      </BaseInput>

      <DatePicker
        param={dateFromParam}
        setParam={setDateFromParam}
        label="Select Date From"
      />

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
  countryParam: PropTypes.string.isRequired,
  setCountryParam: PropTypes.func.isRequired,
  caseParam: PropTypes.string.isRequired,
  setCaseParam: PropTypes.func.isRequired,
  dateFromParam: PropTypes.string.isRequired,
  setDateFromParam: PropTypes.func.isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default CountriesSearchBar;
