import { useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import Result from './components/Result'

function App() {
  const [search, setSearch] = useState([])


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('sending request')
  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <>
      <SearchInput handleOnChange={handleOnChange} handleSubmit={handleSubmit} value={search} />
      <Result />
    </>
  )
}

export default App
