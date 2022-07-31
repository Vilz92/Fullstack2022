import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  const [weather, setWeather] = useState({
    'weather': [{ 'icon': '01n'}],
    'main': {
      'temp': '15'
    },
    'wind': {
      'speed': '2'
    }
  })
  const [selectedCity, setCity] = useState('')

  const handlecountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const handleSetCountry = (country) => {
    setCountryFilter(country)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])
  
  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))

  if(filteredCountries.length === 1) {
    const city = filteredCountries[0].capital[0]
    if(city !== selectedCity){
      setCity(city)
    }
  }
  
  useEffect(() => {
    if(selectedCity !== ''){
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(response => {
        setWeather(response.data)
      })
    }
    }, [selectedCity])

  return (
    <div>
      <Filter countryFilter={countryFilter} handlecountryFilterChange={handlecountryFilterChange} />
      <Countries filteredCountries={filteredCountries} handleSetCountry={handleSetCountry} weather={weather} />
    </div>
  );
}

export default App;
