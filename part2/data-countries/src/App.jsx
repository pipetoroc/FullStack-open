import { useEffect, useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import Result from './components/Result'
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
    console.log('sending request')
  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  // const findMatches = (search) => {
  //   const matches = countries.filter((country) => {
  //     return country.name.official.toLowerCase().includes(search.toLowerCase())
  //   })
  //   setResult(matches)
  // }

  return (
    <>
      <SearchInput handleOnChange={handleOnChange} handleSubmit={handleSubmit} value={search} />
      <Result countries={countries} search={search} />
    </>
  )
}

export default App
