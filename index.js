let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentTime = now.getHours();
let currentDay = days[now.getDay()];
let currentMinute = now.getMinutes();

let today = `Today is ${currentDay}, it is ${currentTime}:${currentMinute}.`;
let day = document.querySelector("div .day");
day.innerHTML = today;

function search(event) {
  event.preventDefault();
  let update = document.querySelector("#city");
  let pinpoint = document.querySelector("#cityWeather");
  pinpoint.innerHTML = update.value;
  searchCity(update.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function newForecast(response) {
  console.log(response);
  console.log(response.data.main.temp);
  console.log(response.data.main.feels_like);
  console.log(response.data.main.humidity);
  console.log(response.data.weather[0].description);
  let newTemp = document.querySelector("#today");
  newTemp.innerHTML = `${Math.round(response.data.main.temp)}℃`;

  let newFeel = document.querySelector("#feels-like");
  newFeel.innerHTML = `Feels like ${Math.round(
    response.data.main.feels_like
  )}℃`;

  let newHumidity = document.querySelector("#humidity");
  newHumidity.innerHTML = `Humidity: ${Math.round(
    response.data.main.humidity
  )}%`;

  let newDescrption = document.querySelector("#weather-description");
  newDescrption.innerHTML = `Today will have ${response.data.weather[0].description}`;

  let newCity = document.querySelector("#cityWeather");
  newCity.innerHTML = response.data.name;
}

function searchCity(city) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newForecast);
}
searchCity("Jacksonville");

function myWeather() {
  let lat = 30.3322;
  let lon = -81.6556;
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newForecast);
}
let exact = document.querySelector("button");
exact.addEventListener("click", myWeather);
