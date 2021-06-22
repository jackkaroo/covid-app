import React from 'react';
import './index.css';
import { FormControl, TextField } from '@material-ui/core';
import useStyles from '../../utils/hooks';
import '../BaseInput/index.css';

function DatePicker({ param, setParam, label }) {
  const classes = useStyles();

  return (
    <div className="input-wrapper">
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="datetime-local"
          label={label}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          value={param}
          onChange={(e) => {
            setParam(e.target.value);
          }}
        />
      </FormControl>
    </div>
  );
}

export default DatePicker;
