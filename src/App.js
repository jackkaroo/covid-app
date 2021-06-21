import React, {useEffect} from 'react'
import './App.css'
import Sidebar from '../src/components/Sidebar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Country from '../src/containers/Country'
import World from "./containers/World"
import About from "./containers/About"

function App() {

  const getCountriesData = () => {
    fetch('https://api.covid19api.com/countries')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.sort(function(a, b) {
        let textA = a.Country.toUpperCase();
        let textB = b.Country.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      sessionStorage.setItem('countries', JSON.stringify(data))
    })
  }

  useEffect(() => {
    getCountriesData()
  }, [])

  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/' exact component={World}/>
          <Route path='/country' exact component={Country}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
