import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(newSearch.toUpperCase()))


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', countries.length, 'countries')


  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }



  return (
    <div>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  )
}

export default App