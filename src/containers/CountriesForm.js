import {
  Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    width: 300,
  },
}));

export default function CountriesForm({
  countryParam, setCountryParam, countries, getResponse,
  caseParam, setCaseParam, dateFromParam, setDateFromParam,
}) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={countryParam}
          onChange={(e) => {
            setCountryParam(e.target.value);
            sessionStorage.setItem('countryParam', e.target.value);
          }}
          label="Select Country"
        >
          {countries
            ? countries.map((el) => <MenuItem key={el.Slug} value={el.Slug}>{el.Country}</MenuItem>)
            : (
              <MenuItem value="">
                <em>Loading</em>
              </MenuItem>
            )}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Case</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={caseParam}
          onChange={(e) => {
            setCaseParam(e.target.value);
            sessionStorage.setItem('caseParam', e.target.value);
          }}
          label="Case"
        >
          <MenuItem value="confirmed">Confirmed</MenuItem>
          <MenuItem value="recovered">Recovered</MenuItem>
          <MenuItem value="deaths">Deaths</MenuItem>
        </Select>
      </FormControl>
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
            sessionStorage.setItem('dateFromParam', e.target.value);
          }}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={() => getResponse()}>
        Search
      </Button>
    </div>
  );
}
