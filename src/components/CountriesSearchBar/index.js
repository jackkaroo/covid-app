import {
  Button, FormControl, MenuItem, TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BaseInput from '../BaseInput';
import useStyles from '../../utils/hooks';

export default function CountriesSearchBar({ countries, handleSearchCountries }) {
  const [countryParam, setCountryParam] = useState('');
  const [caseParam, setCaseParam] = useState('');
  const [dateFromParam, setDateFromParam] = useState('');

  const classes = useStyles();

  useEffect(() => {
    if (sessionStorage.getItem('caseParam')) setCaseParam(sessionStorage.getItem('caseParam'));
    if (sessionStorage.getItem('countryParam')) setCountryParam(sessionStorage.getItem('countryParam'));
    if (sessionStorage.getItem('dateFromParam')) setDateFromParam(sessionStorage.getItem('dateFromParam'));
  }, []);

  const handleSearch = () => {
    if (!countryParam || !caseParam || !dateFromParam) return alert('Please enter correct values.');
    return handleSearchCountries({
      countryParam, caseParam, dateFromParam,
    });
  };

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

      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="datetime-local"
          label="Date From"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          value={dateFromParam}
          onChange={(e) => {
            setDateFromParam(e.target.value);
          }}
        />
      </FormControl>

      <Button variant="contained" size="large" color="primary" onClick={() => handleSearch()}>
        Search
      </Button>
    </div>
  );
}
