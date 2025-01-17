import { useEffect, useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import ListOfCountries from './components/ListOfCountries'
import getCountries from './components/services/getCountries'

function App() {
  const [search, setSearch] = useState([])
  const [countries, setCountries] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data)
    })
  }, [search])


  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <SearchInput handleOnChange={handleOnChange} handleSubmit={handleSubmit} value={search} />
      <ListOfCountries countries={countries} search={search} />
    </>
  )
}

export default App
