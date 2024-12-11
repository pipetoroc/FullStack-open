const Result = ({ countries, search }) => {
    console.log(search, 'search');

    const findMatches = () => {
        if (search.length === 0) return []
        return countries.filter((country) =>
            country.name.common.toLowerCase().includes(search)
        );
    };

    const matches = findMatches()

    return (
        <div>
            {/* Renderización condicional */}
            {matches.length === 0 && <h2>Look for a country</h2>}
            {matches.length > 10 && <h2>Too many matches, specify another filter</h2>}
            {matches.length > 0 && matches.length <= 10 && (
                <ul>
                    {matches.map((country) => (
                        <li key={country.name.common}>{country.name.common}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Result