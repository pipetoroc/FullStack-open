const SearchInput = ({ handleOnChange, handleSubmit, search }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label >Find countries
                <input type="text" placeholder="Search countries" onChange={handleOnChange} value={search} />
            </label>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchInput