import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, InputLabel, Select,
} from '@material-ui/core';
import useStyles from '../../utils/hooks';
import './index.css';

function BaseInput({
  param, setParam, children, label,
} : {param: string, setParam: any, children: any, label: string}) {
  const classes = useStyles();

  return (
    <div className="input-wrapper">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          {label}
        </InputLabel>
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

BaseInput.propTypes = {
  param: PropTypes.string.isRequired,
  setParam: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

export default BaseInput;
