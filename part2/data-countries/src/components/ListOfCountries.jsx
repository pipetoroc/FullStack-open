import { useState } from "react";
import DetailOfCountry from "./DetailOfCountry";

const ListOfCountries = ({ countries, search }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const findMatches = () => {
        if (search.length === 0) return []

        return countries.filter((country) =>
            country.name.common.toLowerCase().includes(search)
        );
    };

    const matches = findMatches()

    const showInformation = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div>
            {/* Renderización condicional */}
            {matches.length === 0 && <h2>Look for a country</h2>}
            {matches.length > 10 && <h2>Too many matches, specify another filter</h2>}
            {matches.length > 1 && matches.length <= 10 && (
                <ul>
                    {matches.map((country) => (
                        <li key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => showInformation(country)}>show</button>
                        </li>
                    ))}
                </ul>
            )}
            {matches.length === 1 && (
                <div>
                    <h2>{matches[0].name.common}</h2>
                    <p>
                        <strong>Capital:</strong> {matches[0].capital}
                    </p>
                    <p>
                        <strong>Area:</strong> {matches[0].area}
                    </p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.entries(matches[0].languages).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                    <img src={matches[0].flags.svg} alt="Country flag" />
                </div>
            )}
            {selectedCountry && matches.length > 1 && (
                <div>
                    <h2>{selectedCountry.name.common}</h2>
                    <p>
                        <strong>Capital:</strong> {selectedCountry.capital}
                    </p>
                    <p>
                        <strong>Area:</strong> {selectedCountry.area}
                    </p>
                    <h2>Languages</h2>
                    <ul>
                        {Object.entries(selectedCountry.languages).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                    <img src={selectedCountry.flags.svg} alt="Country flag" />
                </div>
            )}
        </div>
    )
}

export default ListOfCountries