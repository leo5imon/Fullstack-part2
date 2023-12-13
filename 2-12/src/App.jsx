import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {setNewName(event.target.value)}
  const handleNumberChange = (event) => {setNewNumber(event.target.value)}
  const handleFilterChange = (event) => {setNewFilter(event.target.value)}

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name.includes(newName))) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personsObject = {
        name: newName,
        number: newNumber
      }
      axios
        .post('http://localhost:3001/persons', personsObject)
        .then(response => {
          setPersons(persons.concat(personsObject))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handle={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} valueName={newName} handleName={handleNameChange} valueNumber={newNumber} handleNumber={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter}/>
    </div>
  )
}

export default App