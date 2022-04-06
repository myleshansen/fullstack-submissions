const CountryData = props => {
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
        </>
    )
}

export default CountryData