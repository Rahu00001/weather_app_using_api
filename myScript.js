const weather = document.querySelector(".weather-icon");
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const apikey = "c1c6f460d6eca8fe460acbd4a7de378f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=c1c6f460d6eca8fe460acbd4a7de378f');

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".city").innerHTML = data.name;

    if (data.weather[0].main == "Clouds") {
        weather.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weather.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weather.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weather.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weather.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weather.src = "images/snow.png";
    } else if (data.weather[0].main == "Wind") {
        weather.src = "images/wind.png";
    } else if (data.weather[0].main == "Haze") {
        weather.src = "images/wind.png";
    }
    document.querySelector(".error").style.display = 'none';
    document.querySelector(".weather").style.display = "block";
}
btn.addEventListener("click", () => {
    checkWeather(search.value);
});