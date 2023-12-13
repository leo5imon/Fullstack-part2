import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {setNewName(event.target.value)}
  const handleNumberChange = (event) => {setNewNumber(event.target.value)}
  const handleFilterChange = (event) => {setNewFilter(event.target.value)}

  const addPerson = (event) => {
    event.preventDefault()
    persons.forEach((person) => {
    if (person.name.includes(newName)) {
        alert(`${newName} is already added to phonebook`)
    } else {
        const personsObject = {
        name: newName,
        number: newNumber
        }
        setPersons(persons.concat(personsObject))
        setNewName('')
        setNewNumber('')
    }})
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