import axios from 'axios'
import { useState, useEffect } from 'react'
import { create } from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')

    create(newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
      })

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            onChange={handleNameChange}
            value={newName}
          />
          number:
          <input
            onChange={handleNumberChange}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit"> add </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App