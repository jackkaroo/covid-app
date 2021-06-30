import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getItemSession, getUrlParam } from '../../utils/functions';
import CountriesSearchBar from '../../components/CountriesSearchBar';

function CountriesSearchBarContainer({ countries, handleSearchCountries } : { countries: any, handleSearchCountries: any }) {
  const [countryParam, setCountryParam] = useState('');
  const [caseParam, setCaseParam] = useState('');
  const [dateFromParam, setDateFromParam] = useState('');

  const location = useLocation();

  const handleSearch = (country: string, caseType: string, dateFrom: string) => {
    if (!country || !caseType || !dateFrom) {
      return alert('Please enter correct values.');
    }
    return handleSearchCountries({
      country, caseType, dateFrom,
    });
  };

  useEffect(() => {
    if (getUrlParam(location, 'country') && getUrlParam(location, 'case')
      && getUrlParam(location, 'dateFrom')) {
      setCaseParam(getUrlParam(location, 'case') || '');
      setCountryParam(getUrlParam(location, 'country') || '');
      setDateFromParam(getUrlParam(location, 'dateFrom') || '');
      handleSearch(getUrlParam(location, 'country') || '', getUrlParam(location, 'case') || '',
        getUrlParam(location, 'dateFrom') || '');
    } else if (getItemSession('caseParam') && getItemSession('countryParam')
      && getItemSession('dateFromParam')) {
      setCaseParam(getItemSession('caseParam') || '');
      setCountryParam(getItemSession('countryParam') || '');
      setDateFromParam(getItemSession('dateFromParam') || '');
      handleSearch(getItemSession('countryParam') || '', getItemSession('caseParam') || '',
        getItemSession('dateFromParam') || '');
    }
  }, []);

  return (
    <CountriesSearchBar
      countries={countries}
      countryParam={countryParam}
      setCountryParam={setCountryParam}
      caseParam={caseParam}
      setCaseParam={setCaseParam}
      dateFromParam={dateFromParam}
      setDateFromParam={setDateFromParam}
      handleSearch={handleSearch}
    />
  );
}

CountriesSearchBarContainer.propTypes = {
  countries: PropTypes.instanceOf(Array).isRequired,
  handleSearchCountries: PropTypes.func.isRequired,
};

export default CountriesSearchBarContainer;
