import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const handleNameChange = (event) => {setNewName(event.target.value)}
  const handleNumberChange = (event) => {setNewNumber(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        <div/>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
        {persons.map((persons, i) => <p key={persons.name}>{persons.name} {persons.number}</p>)}
    </div>
  )
}

export default App