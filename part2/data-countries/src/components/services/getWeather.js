const API = '125f79c4bbc76005bd37ada5db7e73ee'

function getWeather({ lat, lon }) {
    console.log(lat, lon);


    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`

    return fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data, 'weather')
            const {
                weather: [{ icon }],
                wind,
                main: { temp }
            } = data

            return { icon, wind, temp }
        }
        )
}

export default getWeather