import { useState } from 'react'
const CountryButton = props => {
    const [showCountry, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(prev => !prev)}>show</button>
            {showCountry ? props.country : null}
        </>
    )
}

export default CountryButton