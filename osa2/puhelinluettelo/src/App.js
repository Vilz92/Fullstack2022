import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

const handleNameFilterChange = (event) => {
  setNameFilter(event.target.value)
}

const submitName = (event) => {
  event.preventDefault()
  const found = persons.find(person => person.name === newName)
  if(found) {
    alert(`${newName} is already added to phonebook`)
    setNewName('')
    return
  }

  const newPerson = { name: newName, number: newNumber }
  personService
    .create(newPerson)
    .then(person => {
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    })
}

const removePerson = id => {
  const person = persons.find(person => person.id === id)
  if (window.confirm(`Delete ${person.name}?`)) {
    setPersons(persons.filter(person => person.id !== id))
    personService
      .remove(id)
      .then()
  }
}

useEffect(() => {
  personService
    .getAll()
    .then(persons => {
      setPersons(persons)
    })
  }, [])

const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />

      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber}  handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} submitName={submitName} />
      
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} handleDelete={removePerson} />
    </div>
  )

}

export default App