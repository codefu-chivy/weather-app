function getWeatherForecast(location, callback) {
    const key = "86973ef1d1d433defa2f0625ecc81a07";
    let query;
    if (location.hasOwnProperty("latitude")) {
        query = `lat=${location.latitude}&lon=${location.longitude}`;
    }
    else {
        query = `q=${location}`;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&APPID=${key}`, {
        method: "get"
    }).then((res) => {
        return res.json();
    }).then((json) => {
        callback(json);
    });
}

function getTenDayForecast() {
        
}

export {getWeatherForecast, getTenDayForecast};