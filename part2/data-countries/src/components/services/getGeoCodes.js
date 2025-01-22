const API = '125f79c4bbc76005bd37ada5db7e73ee'

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