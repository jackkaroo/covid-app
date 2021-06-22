import React from 'react';
import {
  FormControl, InputLabel, Select,
} from '@material-ui/core';
import useStyles from '../../utils/hooks';
import './index.css';

export default function BaseInput({
  param, setParam, children, label,
}) {
  const classes = useStyles();

  return (
    <div className="input-wrapper">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={param}
          onChange={(e) => {
            setParam(e.target.value);
          }}
          label={label}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
