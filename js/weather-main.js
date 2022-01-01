const API_KEY = "f284512523d9d2914d540027ea516b78";
const forecast = document.querySelector("#weather-main");
const weather = document.querySelector("#weather-main span:first-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-main span:first-child");
      const city = document.querySelector("#weather-main span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
      const sky = data.weather[0].main;
      paintIcon(sky);
    });
}

function paintIcon(sky) {
  const weatherIcon = document.createElement("i");
  weather.appendChild(weatherIcon);
  if (sky === "Clear") {
    weatherIcon.setAttribute("class", "far fa-sun");
  } else if (
    sky === "Scattered clouds" ||
    sky === "Few clouds" ||
    sky === "Broken clouds" ||
    sky === "Overcast clouds" ||
    sky === "Clouds"
  ) {
    weatherIcon.setAttribute("class", "fas fa-cloud");
  } else if (
    sky === "Shower rain" ||
    sky === "Light rain" ||
    sky === "Moderate rain" ||
    sky === "Rain"
  ) {
    weatherIcon.setAttribute("class", "fas fa-umbrella");
  } else if (sky === "Thunderstorm") {
    weatherIcon.setAttribute("class", "fas fa-poo-storm");
  } else if (sky === "Snow") {
    weatherIcon.setAttribute("class", "fas fa-snowflake");
  } else {
    weatherIcon.setAttribute("class", "fas fa-smog");
  }
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
