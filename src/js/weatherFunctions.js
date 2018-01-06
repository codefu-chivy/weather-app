const key = "86973ef1d1d433defa2f0625ecc81a07";

function getWeatherForecast(location, error, callback) {
    let query = getQuery(location);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&APPID=${key}`, {
        method: "get"
    }).then((res) => {
        return res.json();
    }).then((json) => {
        callback(json);
    }).catch((err) => {
        console.log(err)
        if (err) {
            error.textContent = "Invalid Parameters!"
        }
    });
}

function getTenDayForecast(input, error, callback) {
    let queryTen = getQuery(input);
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?${queryTen}&cnt=10&APPID=${key}`, {
        method: "get"
    }).then((res) => {
        return res.json();
    }).then((json) => {
        callback(json);
    }).catch((err) => {
        console.log(err)
        if (err) {
            error.textContent = "Invalid Parameters!"
        }
    });
}

function getQuery(query) {
    let val;
    if (query.hasOwnProperty("latitude")) {
        val = `lat=${query.latitude}&lon=${query.longitude}`;
    }
    else if (/\d{5}/.test(query)) {
        val = `zip=${query}`;
    }
    else {
        if (/\w+,\s?\w{2}/.test(query)) {
            query = query.replace(/ /g, "");
        }
        val = `q=${query}`;
    }
    return val;
}

export {getWeatherForecast, getTenDayForecast};