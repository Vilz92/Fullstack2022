const Persons = ({ filteredPersons }) => {
    return(
        <div>
            { filteredPersons.map(person => {
                return(
                <div key={person.name}>{person.name} {person.number}</div>
                )
            })}
        </div>
    )
}

export default Persons