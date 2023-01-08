import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  const showMessage = (message, type) => {
    setMessage(message)
    setMessageType(type)
    setTimeout(() => {
      setMessage(null)
      setMessageType(null)
    }, 5000)
  }

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
  const newPerson = { name: newName, number: newNumber }

  if(found) {
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      personService
        .update(found.id, newPerson)
        .then(person => {
          const newpersons = persons.map(element => {
            if (element.id === found.id) {
              return person;
            }
            return element;
          });
          setPersons(newpersons)
          setNewName('')
          setNewNumber('')
          showMessage(`${newName} was replaced to the phonebook with new number!`, 'success')
        })
        .catch(error => {
          showMessage(`Information of ${newName} has already removed from server`, 'error')
        })
    }
    return
  }

  personService
    .create(newPerson)
    .then(person => {
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    })
  showMessage(`${newName} was added to the phonebook!`, 'success')
}

const removePerson = id => {
  const person = persons.find(person => person.id === id)
  if (window.confirm(`Delete ${person.name}?`)) {
    setPersons(persons.filter(person => person.id !== id))
    personService
      .remove(id)
      .then()
  }
  showMessage(`${person.name} was deleted from the phonebook!`, 'success')
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
      <Notification message={message} type={messageType} />

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