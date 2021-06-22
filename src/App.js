import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CountriesPage from './containers/CountriesStatisticPage';
import WorldPage from './containers/WorldStatisticPage';
import About from './containers/About';
import CountriesService from './services/countries.service';

function App() {
  const getCountriesData = () => {
    CountriesService.getCountriesNames()
      .then((data) => {
        data.sort((a, b) => a.Country.localeCompare(b.Country));
        sessionStorage.setItem('countries', JSON.stringify(data));
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
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
