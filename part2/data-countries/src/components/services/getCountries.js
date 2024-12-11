const apiURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function getCountries() {
    return fetch(apiURL)
        .then(res => res.json())
        .then(data => data)
}
export default getCountries