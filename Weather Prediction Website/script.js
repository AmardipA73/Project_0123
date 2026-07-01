function getWeather(){

    let city =
    document.getElementById("city").value;

    document.getElementById("cityName")
    .innerHTML = city;

    let temperatures = [
        "22°C",
        "25°C",
        "28°C",
        "30°C",
        "18°C"
    ];

    let weatherTypes = [
        "Sunny ☀️",
        "Cloudy ☁️",
        "Rainy 🌧️",
        "Storm 🌩️"
    ];

    let randomTemp =
    temperatures[Math.floor(Math.random()
    * temperatures.length)];

    let randomWeather =
    weatherTypes[Math.floor(Math.random()
    * weatherTypes.length)];

    document.getElementById("temp")
    .innerHTML = randomTemp;

    document.getElementById("weather")
    .innerHTML = randomWeather;

    document.getElementById("humidity")
    .innerHTML =
    "Humidity: " +
    Math.floor(Math.random()*100) + "%";

    document.getElementById("wind")
    .innerHTML =
    "Wind Speed: " +
    Math.floor(Math.random()*20) + " km/h";

}