const date = document.querySelector("#date");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const tempImg = document.querySelector("#temp-img");
const description = document.querySelector("#description");
const tempMax = document.querySelector("#tempMax");
const tempMin = document.querySelector("#tempMin");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

// setting date
date.innerHTML = `${month} ${day}, ${year}`;

const app = document.querySelector(".app");

const getWeather = async () => {
  try {
    const cityName = document.getElementById("search-input").value || "delhi";
    const API_KEY = "bfe40e05d9371e69717cc8e8daa9bf71";
    const weatherDataFetch = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&units=metric&appid=" +
        API_KEY
    );
    const weatherData = await weatherDataFetch.json();

    city.innerHTML = `${weatherData?.name}`;
    description.innerHTML = `${weatherData?.weather[0]?.main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png"/>`;
    temp.innerHTML = `<h2>${Math.round(weatherData?.main?.temp)}°C</h2>`;
    tempMax.innerHTML = `${weatherData?.main?.temp_max}°C`;
    tempMin.innerHTML = `${weatherData?.main?.temp_min}°C`;
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
};

getWeather();
