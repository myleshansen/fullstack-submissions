import CountryData from "./CountryData"

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
                <li key={country.name.common} country={country}>
                    <p>{country.name.common} <button onClick={props.handleClick}>show</button></p>
                </li>
            )}</ul>
        )
    }

}

export default Countries