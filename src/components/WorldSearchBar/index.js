import {
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DatePicker from '../DatePicker';
import './index.css';
import { getItemFromSession, isToday } from '../../utils/functions';

function WorldSearchBar({ handleSearchWorld }) {
  const [dateFromParam, setDateFromParam] = useState('');
  const [dateToParam, setDateToParam] = useState('');

  useEffect(() => {
    if (getItemFromSession('worldDateFromParam')) {
      setDateFromParam(getItemFromSession('worldDateFromParam'));
    }
    if (getItemFromSession('worldDateToParam')) {
      setDateToParam(getItemFromSession('worldDateToParam'));
    }
  }, []);

  const handleSearch = () => {
    if (!dateFromParam || !dateToParam) return alert('Please enter correct values.');
    if (isToday(dateToParam)) {
      alert('Please note that the Covid API does not work as expected if you specify today\'s date as the "Date To".');
    }
    return handleSearchWorld({
      dateFromParam, dateToParam,
    });
  };

  return (
    <div className="world-form">
      <DatePicker param={dateFromParam} setParam={setDateFromParam} label="Select Date From" />
      <DatePicker param={dateToParam} setParam={setDateToParam} label="Select Date To" />
      <Button variant="contained" size="large" color="primary" onClick={() => handleSearch()}>
        Search
      </Button>
    </div>
  );
}

WorldSearchBar.propTypes = {
  handleSearchWorld: PropTypes.func.isRequired,
};

export default WorldSearchBar;
