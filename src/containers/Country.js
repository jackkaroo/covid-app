import React, {useEffect, useState} from 'react'
import {CircularProgress} from "@material-ui/core"
import CountriesChart from "../components/CountriesChart"
import CountriesForm from "./CountriesForm"

function Country() {
  const [countries, setCountries] = useState([])
  const [countryParam, setCountryParam] = useState('')
  const [caseParam, setCaseParam] = useState('')
  const [dateFromParam, setDateFromParam] = useState('')
  const [results, setResults] = useState('')
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const getResponse = () => {
    setLoading(true)

    fetch(`https://api.covid19api.com/live/country/${countryParam}/status/${caseParam}/date/${dateFromParam}`)
    // fetch('https://api.covid19api.com/live/country/italy/status/confirmed/date/2021-05-21T13:13:30Z')
    .then((response) => {
      if (!response.ok) {
        setLoading(false)
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      setLoading(false)
      setVisible(true)
      console.log(data)
      if (data.length === 0) return setResults(null)
      return setResults(data)
    })
    .catch((error) => alert('Please enter correct values.'))
  }

  useEffect(() => {
    setCountries(JSON.parse(sessionStorage.getItem('countries')))
    if (sessionStorage.getItem('caseParam')) setCaseParam(sessionStorage.getItem('caseParam'))
    if (sessionStorage.getItem('countryParam')) setCountryParam(sessionStorage.getItem('countryParam'))
    if (sessionStorage.getItem('dateFromParam')) setDateFromParam(sessionStorage.getItem('dateFromParam'))
  }, [])

  return (
    <div className='home'>
      <h1>Live By Country And Status After Date</h1>
      <CountriesForm countryParam={countryParam} setCountryParam={setCountryParam} countries={countries}
                     caseParam={caseParam} setCaseParam={setCaseParam} dateFromParam={dateFromParam}
                     setDateFromParam={setDateFromParam} getResponse={getResponse}
      />
      {loading ? <CircularProgress/> : ''}
      {visible ?
        <div>
          {results.length > 0 ?
            <CountriesChart results={results} caseParam={caseParam}/>
            : 'Unfortunately, the provided API does not have this information.'}
        </div>
        : ''}
    </div>
  )
}

export default Country