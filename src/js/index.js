import {icons} from "./weatherIcons";
import {getWeatherForecast, getTenDayForecast} from "./weatherFunctions";
import {updatePage} from "./updatePage";

(function() {
    const form = document.querySelector("form");
    const send = document.getElementById("search");
    const query = document.getElementById("locate");
    let coords;
    navigator.geolocation.getCurrentPosition((position) => {
        coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        getWeatherForecast(coords, (data) => {
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
            getWeatherForecast(coords, (data) => {
                updatePage(data);
            });
        });
    });
    //Event listeners
    form.addEventListener("submit", processQuery);
    search.addEventListener("click", processQuery);

    function processQuery(e) {
        e.preventDefault();
        let place = query.value;
        getWeatherForecast(place, (data) => {
            updatePage(data);
        });
    }
}());
