import {
  Button, FormControl, MenuItem, TextField,
} from '@material-ui/core';
import React from 'react';
import BaseInput from '../../components/BaseInput';
import useStyles from '../../utils/hooks';

export default function CountriesForm({
  countryParam, setCountryParam, countries, getResponse,
  caseParam, setCaseParam, dateFromParam, setDateFromParam,
}) {
  const classes = useStyles();
  return (
    <div className="countries-form">
      <BaseInput param={countryParam} setParam={setCountryParam}>
        {countries
          ? countries.map((el) => <MenuItem key={el.Slug} value={el.Slug}>{el.Country}</MenuItem>)
          : (
            <MenuItem value="">
              <em>Loading</em>
            </MenuItem>
          )}
      </BaseInput>
      <BaseInput param={caseParam} setParam={setCaseParam}>
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
            sessionStorage.setItem('dateFromParam', e.target.value);
          }}
        />
      </FormControl>

      <Button variant="contained" size="large" color="primary" onClick={() => getResponse()}>
        Search
      </Button>
    </div>
  );
}
