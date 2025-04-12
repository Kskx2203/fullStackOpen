import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1", phone: "111-1234567"} // Added phone (2.8)
  ])

  const [newName, setNewName] = useState('banana')
  const [newPhone, setNewPhone] = useState('222-1234567')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = { 
        name: newName,
        phone: newPhone,
        id: String(persons.length + 1)
      }

      setPersons(persons.concat(nameObject))

      setNewName('') 
      setNewPhone('') // Reset phone on input (2.8)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.id}>{person.name} {person.phone}</li>
      ))}
    </div>
  )
}

export default App
