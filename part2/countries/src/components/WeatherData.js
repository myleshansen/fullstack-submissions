const WeatherData = props => {
    return (
        <div>
            <h1>Weather in {props.country.name.common}</h1>
            <p>temperature -273.15 Celsius</p>
            <img src="" />
            <p>wind {props.weather.wind.speed} m/s</p>
        </div>
    )
}

export default WeatherData