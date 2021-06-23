import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CountriesPage from './containers/CountriesStatisticPage';
import WorldPage from './containers/WorldStatisticPage';
import AboutPage from './containers/AboutPage';
import CountriesService from './services/countries.service';
import { setItemToSession } from './utils/functions';

function App() {
  const getCountriesData = () => {
    CountriesService.getCountriesNames()
      .then((data) => {
        data.sort((a, b) => a.Country.localeCompare(b.Country));
        setItemToSession('countries', JSON.stringify(data));
      })
      .catch(() => alert('Something goes wrong..'));
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={WorldPage} />
          <Route path="/countries" exact component={CountriesPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
