import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CountriesPage from './containers/Countries';
import World from './containers/World';
import About from './containers/About';

function App() {
  const getCountriesData = () => {
    fetch('https://api.covid19api.com/countries')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => {
          const textA = a.Country.toUpperCase();
          const textB = b.Country.toUpperCase();
          if (textA < textB) return -1;
          if (textA > textB) return 1;
          return 0;
        });
        sessionStorage.setItem('countries', JSON.stringify(data));
      });
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={World} />
          <Route path="/countries" exact component={CountriesPage} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
