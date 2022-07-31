import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
  setPersons(persons.concat({ name: newName, number: newNumber }))
  setNewName('')
  setNewNumber('')
}

useEffect(() => {
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
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
      <Persons filteredPersons={filteredPersons} />
    </div>
  )

}

export default App