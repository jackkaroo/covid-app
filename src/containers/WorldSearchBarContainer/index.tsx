import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useLocation } from 'react-router-dom';
import { getItemSession, getUrlParam, isToday } from '../../utils/functions';
import WorldSearchBar from '../../components/WorldSearchBar';

function WorldSearchBarContainer({ handleSearchWorld } : { handleSearchWorld: any }) {
  const [dateFromParam, setDateFromParam] = useState('');
  const [dateToParam, setDateToParam] = useState('');

  const location = useLocation();

  const handleSearch = (dateFrom: string, dateTo: string) => {
    if (!dateFrom || !dateTo) {
      return alert('Please enter correct values.');
    }
    if (isToday(dateTo)) {
      alert('Please note that the Covid API does not work as expected if you specify today\'s date as the "Date To".');
    }
    return handleSearchWorld({
      dateFrom, dateTo,
    });
  };

  useEffect(() => {
    if (getUrlParam(location, 'dateFrom') && getUrlParam(location, 'dateTo')) {
      setDateFromParam(getUrlParam(location, 'dateFrom') || '');
      setDateToParam(getUrlParam(location, 'dateTo') || '');
      handleSearch(getUrlParam(location, 'dateFrom') || '', getUrlParam(location, 'dateTo') || '');
    } else if (getItemSession('worldDateFromParam') && getItemSession('worldDateToParam')) {
      setDateFromParam(getItemSession('worldDateFromParam') || '');
      setDateToParam(getItemSession('worldDateToParam') || '');
      handleSearch(getItemSession('worldDateFromParam') || '', getItemSession('worldDateToParam') || '');
    }
  }, []);

  return (
    <WorldSearchBar
      dateFromParam={dateFromParam}
      setDateFromParam={setDateFromParam}
      dateToParam={dateToParam}
      setDateToParam={setDateToParam}
      handleSearch={handleSearch}
    />
  );
}

WorldSearchBarContainer.propTypes = {
  handleSearchWorld: PropTypes.func.isRequired,
};

export default WorldSearchBarContainer;
