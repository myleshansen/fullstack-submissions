
import { useEffect } from 'react'
import CountryData from "./CountryData"
import CountryButton from "./CountryButton"

const Countries = props => {
    if (props.countriesToShow.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else if (props.countriesToShow.length === 1) {
        const country = props.countriesToShow[0]

        return (
            <CountryData country={country} />
        )
    } else {
        return (
            <ul>{props.countriesToShow.map(country =>
                <li key={country.name.common}>
                    <p>{country.name.common} </p>
                    <CountryButton country={<CountryData country={country} />} />
                </li>
            )}</ul>
        )
    }

}

export default Countries