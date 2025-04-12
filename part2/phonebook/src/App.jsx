import { useState } from 'react'

const PhonebookForm = ({newName, newPhone, handleSubmit, handleNameChange, handlePhoneChange}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  )
}

const FilterInput = ({ filter, handleFilterChange}) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

const SearchFilter = ({persons, filter}) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return filteredPersons.map((person) => (
        <li key={person.id}>{person.name} {person.phone}</li>
      ))
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: "111-1234567", id: 1}, 
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('banana')
  const [newPhone, setNewPhone] = useState('222-1234567')
  const [filter, setFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

      // Validate name (only alphabets and spaces)
    if (!/^[A-Za-z\s]+$/.test(newName.trim())) {
      alert("Name should only contain alphabets and spaces")
      return
    }
    
    // Validate phone (only numbers and allowed symbols like -, +)
    if (!/^[0-9\-\+]+$/.test(newPhone)) {
      alert("Phone number should only contain numbers and hyphens")
      return
    }


    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = { 
        name: newName,
        phone: newPhone,
        id: persons.length + 1 
      }

      setPersons(persons.concat(nameObject))

      setNewName('') 
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  // To take in user input of filter value (2.9)
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput filter={filter} handleFilterChange={handleFilterChange}/>

      <h2>add a new</h2>
      <PhonebookForm newName={newName} newPhone={newPhone} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>

      <h2>Numbers</h2>
      <SearchFilter persons={persons} filter={filter}/>
    </div>
  )
}

export default App
