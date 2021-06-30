import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from '../DatePicker';
import './index.css';

function WorldSearchBar({
  dateFromParam, setDateFromParam, dateToParam, setDateToParam, handleSearch,
}) {
  return (
    <div className="world-form">
      <DatePicker
        param={dateFromParam}
        setParam={setDateFromParam}
        label="Select Date From"
      />
      <DatePicker
        param={dateToParam}
        setParam={setDateToParam}
        label="Select Date To"
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => handleSearch(dateFromParam, dateToParam)}
      >
        Search
      </Button>
    </div>
  );
}

WorldSearchBar.propTypes = {
  dateFromParam: PropTypes.string.isRequired,
  setDateFromParam: PropTypes.func.isRequired,
  dateToParam: PropTypes.string.isRequired,
  setDateToParam: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default WorldSearchBar;
