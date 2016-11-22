var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&APPID=9beb7211705e0858e94dcd5438f8972b";
var unitsCelcius = "&units=metric";
var unitsFahrenheit = "&units=imperial";

var url = url + cityName.value() + apiKey + unitsCelcius;

var weather = new XMLHttpRequest();
weather.open("GET", url, false);
weather.send(null);

var r = JSON.parse(weather.response);

var temp = r.main.temp;
var city = r.name;
var weatherMain = r.weather.main;
var weatherDescription = r.weather.description;

function getWeather(id, res) {
  document.getElementById(id).innerHTML = res;
}

getWeather("temp", temp);
getWeather("city", city);
getWeather("weather-main", weatherMain);
getWeather("weather-description", weatherDescription);
