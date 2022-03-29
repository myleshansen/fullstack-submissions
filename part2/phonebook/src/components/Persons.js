const Persons = props => {
    return (
        <ul>{props.personsToShow.map(person =>
            <p key={person.name} person={person}>{person.name} {person.number}</p>
        )}</ul>
    )
}

export default Persons