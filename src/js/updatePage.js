import {icons} from "./weatherIcons";

function updatePage(data) {
    const tempContainer = document.getElementById("left-container");
    const humContainer = document.getElementById("upper");
    const cloudContainer = document.getElementById("lower");
    const descContainer = document.getElementById("desc-container");
    const body = document.querySelector("body");
    let tempF = convertToFC(data.main.temp).fahrenheit;
    let tempC = convertToFC(data.main.temp).celsius;
    let humidity = data.main.humidity;
    let cloudCover = data.clouds.all;
    let description = data.weather[0].description;
    let id = data.weather[0].id.toString();
    let hour = new Date().getHours();
    let time;
    let weatherIcon;

    // Determine which background to show based on obj
    if (hour > 17 || hour < 4) {
        time = icons.night;
        tempContainer.style.background = `url(${icons.background.night}) no-repeat center`;
        body.style.background = `url(${icons.backgroundBody.night}) no-repeat center fixed`;
        body.style.backgroundSize = "cover";
    }
    else {
        time = icons.day;
        tempContainer.style.background = `url(${icons.background.day}) no-repeat center`;
        body.style.background = `url(${icons.backgroundBody.day}) no-repeat center fixed`;
        body.style.backgroundSize = "cover";
    }
    weatherIcon = determineIcon(id, time);
    tempContainer.innerHTML = `<img id=icon src=${weatherIcon}><h1 id=temp>${tempF}&#186 F</h1><button id='fah' class="button">&#186;F</button><button id='cel' class="button">&#186;C</button>`;
    humContainer.innerHTML = `<h1>Humidity</h1><h2 id=hum>${humidity}%</h2>`;
    cloudContainer.innerHTML = `<h1>Clouds</h1><h2 class=clouds>${cloudCover}%</h2>`;
    descContainer.innerHTML = `<h1 id=description>${data.name}: ${description}</h1>`;

    //Event listeners
    tempContainer.addEventListener("click", (e) => updateTemp(e, tempF, tempC));
}
// Converts Kelvin to Fahrenheit and Celsius
function convertToFC(kelvin) {
    return {
        fahrenheit: Math.round(((kelvin * (9/5)) - 459.67)),
        celsius: Math.round(kelvin - 273.15)
    }
}
// Updates current temp based on which button was clicked
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

function updateTenDay(data) {
    const tenContainer = document.getElementById("ten-forecast");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayCount = 0;
    let dayNum = new Date().getDay() - 1;
    let content = data.list.map((day, id) => {
        let forecastId = day.weather[0].id.toString();
        let forecastIcon = determineIcon(forecastId, icons.day);
        dayNum++;
        if (dayNum === days.length) {
            dayNum = 0;
        }
        return (
            `<div class='day'>
                '<h1>${days[dayNum]}</h1>
                <img src='${forecastIcon}'/>
                <h1 class='day-temp-max'>${convertToFC(day.temp.max).fahrenheit}&#186;F</h1>
                <h2 class='day-temp-min'>${convertToFC(day.temp.min).fahrenheit}&#186;F</h2>
            </div>`
        )
    }).join("");
    tenContainer.innerHTML = content;
    tenContainer.style.display = "flex";
}  

function determineIcon(code, obj) {
    let icon;
    // Determine which weather icon to show based on weather code
    if (/^2\d{2}$/.test(code)) {
        icon = obj.thunderstorm;
    }
    else if (/^3|5\d{2}$/.test(code)) {
        icon = obj.rainy;
    }
    else if (/^6\d{2}$/.test(code)) {
        icon = obj.snow;
    }
    else if (code === "800") {
        icon = obj.clear;
    }
    else if (/^[801]|[802]$/.test(code)) {
        icon = obj.mostly;
    }
    else if (/^[8\d{2}]|[701]|[721]|[741]$/.test(code)) {
        icon = obj.cloudy;
    }
    else {
        icon = obj.clear;
    }
    return icon;
}

export {updatePage, updateTenDay};