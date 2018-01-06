import {icons} from "./weatherIcons";
import {getWeatherForecast, getTenDayForecast} from "./weatherFunctions";
import {updatePage, updateTenDay} from "./updatePage";

(function() {
    const form = document.querySelector("form");
    const send = document.getElementById("search");
    const query = document.getElementById("locate");
    const error = document.getElementById("form-error");
    const showTenDay = document.getElementById("show-forecast");
    const forecast = document.getElementById("ten-forecast");
    let coords;
    let queryVal;
    navigator.geolocation.getCurrentPosition((position) => {
        coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        getWeatherForecast(coords, error, (data) => {
            showTenDay.style.display = "initial";
            updatePage(data);
        });
    }, (err) => {
        fetch("https://freegeoip.net/json/github.com", {
            method: "get"
        }).then((res) => {
            return res.json()
        }).then((json) => {
            coords = {
                latitude: json.latitude,
                longitude: json.longitude
            }
            getWeatherForecast(coords, error, (data) => {
                showTenDay.style.display = "initial";
                updatePage(data);
            });
        });
    });
    //Event listeners
    form.addEventListener("submit", processQuery);
    search.addEventListener("click", processQuery);
    showTenDay.addEventListener("click", () => {
        let input;
        if (queryVal) {
            input = queryVal;
        }
        else {
            input = coords;
        }
        getTenDayForecast(input, error, (data) => {
            updateTenDay(data);
        });
    });
    query.addEventListener("focus", () => {
        error.textContent = "";
    });

    function processQuery(e) {
        e.preventDefault();
        queryVal = query.value;
        query.blur();
        forecast.style.display = "none";
        getWeatherForecast(queryVal, error, (data) => {
            updatePage(data);
        });
    }
}());
