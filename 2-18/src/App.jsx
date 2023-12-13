import { useState, useEffect } from 'react'
import axios from 'axios'
const allApi = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const countryApi = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState('')

  const handleFilter = (event) => {
    const searchValue = event.target.value.toLowerCase()
    setFilter(event.target.value)
    getAll()
    .then((countries) => {
      const filteredCountries = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchValue);
      });
      setCountries(filteredCountries)
    })
    .catch((error) => {
      console.error(error)
    })}

  const getAll = () => {
    const request = axios.get(allApi)
    return request.then(response => {
      return response.data
    })
  }

  const getCountry = (country) => {
    const request = axios.get(`${countryApi}/${country}`)
    return request.then(response => {
      return response.data
    })
  }
  
  const Search = () => {
    if (countries.length < 10 && countries.length !== 0) {
      return countries.map((search) => (
        <p key={search.name.common}>{search.name.common}</p>
      ))
    } else {
        return (
          <p>Too many matches, specify another filter.</p>
        )
      }}

    const Focus = () => {
      if (countries.length === 1) {
        const selected = countries[0].name.common
        getCountry(selected).then((select) => {
          return (
            <div>
              <h1>{select.name.common}</h1>
              <p>capital {select.capital}</p>
              <p>area {select.area}</p>
              <ul>
                languages:
                <li></li>
              </ul>
              <img src={`https://flagcdn.com/w320/${selected.toLowerCase()}.png`} alt="Flag" />
            </div>
          );
        })
      }
    };

  return (
    <div>
      <div>find countries <input value={filter} onChange={handleFilter}></input></div>
      <Search />
      <Focus />
    </div>
  )
}

export default App