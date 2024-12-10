import { useState, useEffect } from 'react'
import personService from './services/persons'
import { Notification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = { name: newName, number: newNumber };
    const checkName = persons.find(p => p.name.toLowerCase() === newName.toLowerCase());

    if (checkName) {
      const changedName = { ...checkName, number: newNumber };

      personService
        .update(checkName.id, changedName)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === checkName.id ? returnedPerson : person));
          showUpdateNotification(`Updated ${newName}`, 'success');
        })
        .catch(error => {
          showUpdateNotification(`Failed to update ${newName}. Contact might have been removed from the server.`, 'error');
          setPersons(persons.filter(p => p.id !== checkName.id));
        });

      setNewName('');
      setNewNumber('');
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          showUpdateNotification(`Added ${returnedPerson.name}`, 'success');
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          showUpdateNotification(`Failed to add contact: ${error.message}`, 'error');
        });
    }
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
          showUpdateNotification(`Deleted ${name}`, 'success');
        })
        .catch(error => {
          showUpdateNotification(`Failed to delete ${name}: ${error.message}`, 'error');
        });
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }


  const showUpdateNotification = (message, type) => {
    setNotification({ message, type });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setNotification({ message: '', type: '' });
    }, 7000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {showNotification && <Notification notification={notification} />}
      <form onSubmit={addPerson}>
        <div>
          name:
          <input onChange={handleNameChange} value={newName} />
          number:
          <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App