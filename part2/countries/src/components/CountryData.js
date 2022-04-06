import { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherData from './WeatherData'

const CountryData = props => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState()

    const weatherHook = (country) => {
        console.log('effect 2')
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=' + api_key)
            .then(response => {
                console.log('promise fulfilled')
                setWeather(response.data)
            })
    }
    useEffect(weatherHook, [])
    console.log(weather)
    return (
        <>
            <div>
                <h1>{props.country.name.common}</h1>
                <p>capital {props.country.capital[0]}</p>
                <p>area {props.country.area}</p>
            </div>
            <div>
                <h3>languages:</h3>
                <ul>{Object.values(props.country.languages).map(language =>
                    <li key={language} >{language}</li>
                )}</ul>
                <img src={props.country.flags.png} alt="Country flag" />
            </div>
            {/* {<WeatherData weather={props.weather} country={props.country} />} */}
        </>
    )

}

export default CountryData