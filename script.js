// API Variables
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "9d7987e2b4471546e970f9e3bb62ab52";

// Input, Button and Weather Icon variables
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

    // Mergin API Key and URL with the input field
    async function checkWeather(city) {
  
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
    
    // Getting object data from JSON
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Weather icon change based on temp
    switch (data.weather [0].main) {
        case "Clear":
            weatherIcon.src = "img/clear.png";
            break;
        case "Clouds":
            weatherIcon.src = "img/clouds.png";
            break;
        case "Rain":
            weatherIcon.src = "img/rain.png";
            break;
        case "Mist":
            weatherIcon.src = "img/fog.png";
            break;
        case "Drizzle":
            weatherIcon.src = "img/drizzle.png";
            break;    
        case "Snow":
            weatherIcon.src = "img/snow.png";
            break;     
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

    // Triggering function with button click
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });





