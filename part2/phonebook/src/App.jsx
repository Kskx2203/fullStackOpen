import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1"} // Added id for consistency (2.6)
  ]) 

  // (used onChange) To control the input field and know what the user wants to add (2.6)
  // If this state is not included, users will not be able to change the input field (2.6)
  const [newName, setNewName] = useState('banana')

  // To add new person by user (2.6)
  const addPerson = (event) => {
    // Used to prevent the page from rerendering (page will rerender by default on submit). (2.6)
    event.preventDefault()

    // Preventing duplicate names from being added to the phonebook (2.7)
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      // nameObject is created to receive contents from newName state (2.6)
      const nameObject = { 
        name: newName,
        id: String(persons.length + 1)
      }

      // .concat does not mutate the original notes array but create a new copy (2.6)
      setPersons(persons.concat(nameObject))

      // Reset newName
      setNewName('') 
    }
  }

  // onChange doesn't require preventDefault() because it doesn't trigger a browser event that needs cancellation — it just listens to input changes.(2.6)
  // hence, no event.preventDefault() needed in handleNameCHange to handle the event(onChnage)
  const handleNameChange = (event) => {
    console.log(event.target.value)

    // Every keystroke updates newName using setNewName (2.6)
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </div>
  )
}

export default App
