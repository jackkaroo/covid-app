import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import useStyles from '../../utils/hooks';

export default function TimePicker(dateFromParam, setDateFromParam) {
  const classes = useStyles();
  return (
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
  );
}
