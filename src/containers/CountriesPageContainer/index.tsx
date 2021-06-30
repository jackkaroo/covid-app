import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useHistory } from 'react-router-dom';
import CountriesService from '../../services/countries.service';
import { getItemSession, setItemToSession } from '../../utils/functions';
import CountriesPage from '../../components/CountriesPage';

function CountriesPageContainer() {
  const [countries, setCountries] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [caseChartParam, setCaseChartParam] = useState('');

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const history = useHistory();

  const handleSearchCountries = ({ country, caseType, dateFrom } : { country: string, caseType: string, dateFrom: string }) => {
    setLoading(true);
    setCaseChartParam(caseType);

    history.push(`/countries?dateFrom=${dateFrom}&case=${caseType}&country=${country}`);
    setItemToSession('countryParam', country);
    setItemToSession('caseParam', caseType);
    setItemToSession('dateFromParam', dateFrom);

    CountriesService.getCountriesByStatus(country, caseType, dateFrom)
      .then((data) => {
        if (data.length === 0) return setVisible(false);
        setVisible(true);
        return setChartData(data);
      })
      .catch(() => alert('Something goes wrong..'))
      .finally(() => setLoading(false));

    return 1;
  };

  useEffect(() => {
    if (!getItemSession('countries')) alert('Please wait a few seconds.');
    else setCountries(JSON.parse(getItemSession('countries') || ''));
  }, []);

  return (
    <CountriesPage
      countries={countries}
      chartData={chartData}
      caseChartParam={caseChartParam}
      loading={loading}
      visible={visible}
      handleSearchCountries={handleSearchCountries}
    />
  );
}

export default CountriesPageContainer;
