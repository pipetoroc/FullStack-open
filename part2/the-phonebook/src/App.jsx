import { useState, useEffect } from 'react'
import personService from './services/persons'
import { Notification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [updatedName, setUpdatedName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const checkName = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
    console.log(checkName, name, newName);

    if (checkName) {
      const changedName = { ...checkName, number: checkName.number = newNumber }
      showUpdateNotification(newName)
      personService
        .update(checkName.id, changedName)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.name.toLowerCase() === newName.toLowerCase() ? returnedPerson : person))
        })
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(newPerson))
      showUpdateNotification(newPerson)
      setNewName('')
      setNewNumber('')

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
  }

  const deletePerson = (id, name) => {
    window.confirm(`Do you really want delete ${name}`)
    personService
      .remove(id)

    setPersons(persons.filter(p => p.id !== id))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }


  const showUpdateNotification = (name) => {
    setUpdatedName(name)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {
        showNotification && <Notification name={updatedName} number={newNumber} />
      }


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
      {persons.map(person =>
        <li key={person.name}>{person.name} {person.number}
          <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
        </li>
      )}
    </div>
  )
}

export default App