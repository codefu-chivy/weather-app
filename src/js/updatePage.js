import {icons} from "./weatherIcons";

function updatePage(data) {
    const tempContainer = document.getElementById("left-container");
    const humContainer = document.getElementById("upper");
    const cloudContainer = document.getElementById("lower");
    const descContainer = document.getElementById("desc-container");
    let tempF = convertToFC(data.main.temp).fahrenheit;
    let tempC = convertToFC(data.main.temp).celsius;
    let humidity = data.main.humidity;
    let cloudCover = data.clouds.all;
    let description = data.weather[0].description;
    let id = data.weather[0].id.toString();
    let icon;

    if (/^2\d{2}$/.test(id)) {
        icon = icons.day.thunderstorm;
    }
    else if (/^3|5\d{2}$/.test(id)) {
        icon = icons.day.rainy;
    }
    else if (/^6\d{2}$/.test(id)) {
        icon = icons.day.snow;
    }
    else if (id === "800") {
        icon = icons.day.clear;
    }
    else if (/^[801]|[802]$/.test(id)) {
        icon = icons.day.mostly;
    }
    else if (/^8\d{2}$/.test(id)) {
        icon = icons.day.cloudy;
    }
    else {
        icon = icons.day.clear;
    }
    tempContainer.innerHTML = `<img id=icon src=${icon}><h1 id=temp>${tempF}&#186 F</h1><button id='fah' class="button">&#186;F</button><button id='cel' class="button">&#186;C</button>`;
    humContainer.innerHTML = `<h1>Humidity</h1><h2 id=hum>${humidity}%</h2>`;
    cloudContainer.innerHTML = `<h1>Cloud Cover</h1><h2 class=clouds>${cloudCover}%</h2>`;
    descContainer.innerHTML = `<h1>${description}</h1>`;
    console.log(data);
    //Event listeners
    tempContainer.addEventListener("click", (e) => updateTemp(e, tempF, tempC));
}

function convertToFC(kelvin) {
    return {
        fahrenheit: Math.round(((kelvin * (9/5)) - 459.67)),
        celsius: Math.round(kelvin - 273.15)
    }
}

function updateTemp(e, fah, cel) {
    if (e.target.localName === "button") {
        if (e.target.id === "cel") {
            document.getElementById("temp").textContent = `${cel}º C`;
        }
        else {
            document.getElementById("temp").textContent = `${fah}º F`;
        }
    }
}

export {updatePage};