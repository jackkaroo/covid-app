import {
  Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DatePicker from '../DatePicker';
import './index.css';

export default function CountriesSearchBar({ handleSearchWorld }) {
  const [dateFromParam, setDateFromParam] = useState('');
  const [dateToParam, setDateToParam] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('worldDateFromParam')) setDateFromParam(sessionStorage.getItem('worldDateFromParam'));
    if (sessionStorage.getItem('worldDateToParam')) setDateToParam(sessionStorage.getItem('worldDateToParam'));
  }, []);

  const handleSearch = () => {
    if (!dateFromParam || !dateToParam) return alert('Please enter correct values.');
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
