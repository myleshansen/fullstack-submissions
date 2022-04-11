const Persons = props => {
    const handleDeletePerson = (person) => {
        let result = window.confirm(`Delete ${person.name} ?`)
        if (result) {
            props.deletePerson(person)
        }
    }

    return (
        <ul>{props.personsToShow.map(person =>
            <p key={person.name} person={person}>{person.name} {person.number} <button onClick={() => handleDeletePerson(person)} >delete</button></p>
        )
        }</ul>
    )
}

export default Persons