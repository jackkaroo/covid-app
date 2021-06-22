import React from 'react';
import {
  FormControl, InputLabel, Select,
} from '@material-ui/core';
import useStyles from '../../utils/hooks';

export default function BaseInput({ param, setParam, children }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Select Country</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={param}
        onChange={(e) => {
          setParam(e.target.value);
          sessionStorage.setItem(`${setParam}`, e.target.value);
        }}
        label="Select Country"
      >
        {children}
      </Select>
    </FormControl>
  );
}
