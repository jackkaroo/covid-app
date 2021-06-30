import {
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from '../DatePicker';
import './index.css';
import { getItemFromSession, getUrlParam, isToday } from '../../utils/functions';

function WorldSearchBar({ handleSearchWorld }) {
  const [dateFromParam, setDateFromParam] = useState('');
  const [dateToParam, setDateToParam] = useState('');

  const location = useLocation();

  const handleSearch = (dateFrom, dateTo) => {
    if (!dateFrom || !dateTo) return alert('Please enter correct values.');
    if (isToday(dateTo)) {
      alert('Please note that the Covid API does not work as expected if you specify today\'s date as the "Date To".');
    }
    return handleSearchWorld({
      dateFrom, dateTo,
    });
  };

  useEffect(() => {
    if (getUrlParam(location, 'dateFrom') && getUrlParam(location, 'dateTo')) {
      setDateFromParam(getUrlParam(location, 'dateFrom'));
      setDateToParam(getUrlParam(location, 'dateTo'));
      handleSearch(getUrlParam(location, 'dateFrom'), getUrlParam(location, 'dateTo'));
    } else if (getItemFromSession('worldDateFromParam') && getItemFromSession('worldDateToParam')) {
      setDateFromParam(getItemFromSession('worldDateFromParam'));
      setDateToParam(getItemFromSession('worldDateToParam'));
      handleSearch(getItemFromSession('worldDateFromParam'), getItemFromSession('worldDateToParam'));
    }
  }, []);

  return (
    <div className="world-form">
      <DatePicker param={dateFromParam} setParam={setDateFromParam} label="Select Date From" />
      <DatePicker param={dateToParam} setParam={setDateToParam} label="Select Date To" />
      <Button variant="contained" size="large" color="primary" onClick={() => handleSearch(dateFromParam, dateToParam)}>
        Search
      </Button>
    </div>
  );
}

WorldSearchBar.propTypes = {
  handleSearchWorld: PropTypes.func.isRequired,
};

export default WorldSearchBar;
