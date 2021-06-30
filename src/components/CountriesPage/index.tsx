import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import CountriesChart from '../CountriesChart';
import CountriesSearchBarContainer from '../../containers/CountriesSearchBarContainer';
import './index.css';

function CountriesPage({
  countries, chartData, caseChartParam, loading, visible, handleSearchCountries,
} : { countries: any, chartData: any, caseChartParam: string, loading: boolean, visible: boolean, handleSearchCountries: any}) {
  return (
    <div className="page">
      <h1 className="page_title">Country Statistics</h1>
      <div className="page_subtitle">
        Please note that
        the provided API only shows results from January 2021.
      </div>

      <CountriesSearchBarContainer
        countries={countries}
        handleSearchCountries={handleSearchCountries}
      />

      {
        loading
          ? <CircularProgress />
          : (visible
            ? (
              <div>
                {chartData.length > 0
                  ? (
                    <div>
                      <CountriesChart chartData={chartData} caseChartParam={caseChartParam} />
                    </div>
                  )
                  : '' }
              </div>
            )
            : (
              <div className="countries_no-info">
                Unfortunately, the provided API does not have this information.
              </div>
            ))
      }
    </div>
  );
}

CountriesPage.propTypes = {
  countries: PropTypes.instanceOf(Array).isRequired,
  caseChartParam: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  chartData: PropTypes.instanceOf(Array).isRequired,
  handleSearchCountries: PropTypes.func.isRequired,
};

export default CountriesPage;
