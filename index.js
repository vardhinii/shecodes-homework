let date = new Date();

let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let h5 = document.querySelector("h5");

let days = [
  "Sunday",
  "Monday",
  "Tueusday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[date.getMonth()];

h5.innerHTML = `${day}, ${hours}:${minutes}`;

function getCity(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#place");
  displayCity(changeCity.value);
}

function displayCity(city) {
  let apiKey = "2fa9ddec71ce08d23a59a79b1d873ee1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getTemp);
}

let city = document.querySelector("#form");
city.addEventListener("submit", getCity);

function getTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = temperature;
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#country").innerHTML = response.data.sys.country;
  document.querySelector("#high").innerHTML = response.data.main.temp_max;
  document.querySelector("#low").innerHTML = response.data.main.temp_min;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
  document.querySelector("#clouds").innerHTML = response.data.clouds.all;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function showCurrentLocation(position) {
  let apiKey = "2fa9ddec71ce08d23a59a79b1d873ee1";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", getCurrentLocation);
/*function getInF(event) {
  event.preventDefault();
  let tempinC = 26;
  let tempinF = (tempinC * 9) / 5 + 32;
  let place = document.querySelector("#place");
  let h3 = document.querySelector("h3");
  h3.innerHTML = "Currently " + tempinF + "&degF in " + place.value + " ☀️";
  let value = document.querySelector("#f");
  value.innerHTML = "&degC";
}
let viewinF = document.querySelector("#f");
viewinF.addEventListener("click", getInF);

function getInC(event) {
  event.preventDefault();
  let tempinF = 78.8;
  let tempinC = ((tempinF - 32) * 5) / 9;
  let place = document.querySelector("#place");
  let h3 = document.querySelector("h3");
  h3.innerHTML = "Currently " + tempinC + "&degC in " + place.value + " ☀️";
  let value = document.querySelector("#f");
  value.innerHTML = "&degF";
}

let viewinC = document.querySelector("#f");
viewinC.addEventListener("dblclick", getInC);*/
