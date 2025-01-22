import { useState, useEffect } from "react";
import getGeoCodes from './services/getGeoCodes'
import getWeather from "./services/getWeather";

const ListOfCountries = ({ countries, search }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [capital, setCapital] = useState("");
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
    const [capitalInformation, setCapitalInformation] = useState({})

    // Filtrar los países según la búsqueda
    const findMatches = () => {
        if (search.length === 0) return [];
        return countries.filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
        );
    };

    const matches = findMatches();

    // Actualizar la capital cuando hay un solo país
    useEffect(() => {
        if (matches.length === 1) {
            setCapital(matches[0].capital[0]); // Usamos el primer elemento de la capital (es un array)
        } else {
            setCapital("");
        }
    }, [matches]);

    // Manejar la selección de un país desde el botón
    const handleCountrySelection = (country) => {
        setSelectedCountry(country);
    };

    //Buscar geoCodes para buscar por capital
    useEffect(() => {
        if (capital) {
            getGeoCodes(capital).then((data) => {
                const { lat, lon } = data[0];
                setLat(lat);
                setLon(lon);
            });
        } else {
            setLat("");
            setLon("");
            setCapitalInformation(null);
        }
    }, [capital]);

    // Obtener información del clima usando latitud y longitud
    useEffect(() => {
        if (lat && lon) {
            getWeather({ lat, lon }).then((data) => {
                setCapitalInformation(data);
            });
        } else {
            setCapitalInformation(null);
        }
    }, [lat, lon]);
    return (
        <div>
            {/* Renderización condicional */}
            {matches.length === 0 && <h2>Look for a country</h2>}
            {matches.length > 10 && <h2>Too many matches, specify another filter</h2>}

            {/* Lista de países con botón para mostrar detalles */}
            {matches.length > 1 && matches.length <= 10 && (
                <ul>
                    {matches.map((country) => (
                        <li key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => handleCountrySelection(country)}>show</button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Mostrar información de un solo país */}
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
                    <img src={matches[0].flags.png} alt="Country flag" />
                </div>
            )}

            {/* Mostrar información del país seleccionado con el botón */}
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
                    <img src={selectedCountry.flags.png} alt="Country flag" />
                </div>
            )}

            {/* Información adicional: capital seleccionada */}
            {capital && capitalInformation && (
                < div >
                    <h2>Weather in {capital}</h2>
                    <p>
                        <strong>Temperature: </strong> {capitalInformation.temp}°C {console.log(capitalInformation, 'capitalInformation')}
                    </p>
                    <p><strong>Wind: </strong> {capitalInformation.wind.speed} m/s </p>
                    <img src={`https://openweathermap.org/img/wn/${capitalInformation.icon}@2x.png`} alt="Icon of current weather" />


                </div >
            )
            }
        </div>
    );
};

export default ListOfCountries;
