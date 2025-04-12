import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1"} // Added id for consistency
  ]) 

  // (used onChange) To control the input field and know what the user wants to add
  // If this state is not included, users will not be able to change the input field
  const [newName, setNewName] = useState('banana')

  // To add new person by user
  const addPerson = (event) => {
    // Used to prevent the page from rerendering (page will rerender by default on submit). 
    event.preventDefault()

    // nameObject is created to receive contents from newName state
    const nameObject = { 
      name: newName,
      id: String(persons.length + 1)
    }

    // The method does not mutate the original notes array but create a new copy
    setPersons(persons.concat(nameObject))

    // Reset newName
    setNewName('') 
  }

  // There is no event.preventDefault() as there isnt a default action occuring onChange
  const handleNameChange = (event) => {
    console.log(event.target.value)

    // Every keystroke updates newName using setNewName
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
