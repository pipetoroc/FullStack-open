const API = import.meta.env.VITE_SOME_KEY

function getGeoCodes(capital) {
    const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${capital}&limit=1&appid=${API}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            const geoCodes = data.map(entry => {
                console.log(entry)
                const { lat, lon } = entry
                return { lat, lon }
            })
            console.log(geoCodes, 'geoCodes')
            return geoCodes
        })
}
export default getGeoCodes