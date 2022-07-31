const Countries = ({ filteredCountries, handleSetCountry, weather }) => {
    if(filteredCountries.length > 10){
        return(
            <div>Too many matches, specify another filter</div>
        )
    }
    if(filteredCountries.length > 1)
        return(
            <div>
                { filteredCountries.map(country => {
                    return(
                        <div key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => handleSetCountry(country.name.common)}>show</button>
                        </div>
                    )
                })}
            </div>
        )
    if(filteredCountries.length === 1){
        const country = filteredCountries[0]
        return(
            <div>
                <h1>{country.name.common}</h1>
                <div>capital {country.capital[0]}</div>
                <div>area {country.area}</div>
                <h2>languages:</h2>
                <ul>
                    {Object.keys(country.languages).map(lang => <li key={lang}>{country.languages[lang]}</li>)}
                </ul>
                <img alt={country.name.common} src={country.flags.png}></img>
                <h2>Weather in {country.capital[0]}</h2>
                <div>temperature {weather.main.temp} Celsius</div>
                <img alt={`${country.capital[0]} weather`} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                <div>wind {weather.wind.speed} m/s</div>
            </div>
        )
    }
    
}

export default Countries