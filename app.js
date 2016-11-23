$(document).ready(function () {
  $("#city-name").keypress(function (event) {

    if (event.keyCode == 13) {

      var api = "http://api.openweathermap.org/data/2.5/weather?q=";
      var apiKey = "&APPID=9beb7211705e0858e94dcd5438f8972b";
      var unitsCelcius = "&units=metric";
      var unitsFahrenheit = "&units=imperial";

      var url = api + $("#city-name").val() + apiKey + unitsCelcius;

      jQuery.ajax ({

        url: url,
        dataType: "json",
        success: function(response) {
          $("#temp").html(response.main.temp);
          $("#temp-min").html(response.main.temp_min);
          $("#temp-max").html(response.main.temp_max);
          $("#weather-main").html(response.weather.main);
          $("#weather-description").html(response.weather.description);
        }

      });

    }
  });
});
