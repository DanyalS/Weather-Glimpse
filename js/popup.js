$(document).ready(function() {

  $("#city-name").keypress(function(event) {

    // Only triggers function when "Enter" key is pressed
    if (event.keyCode == 13) {

      $("#city-name").blur();

      // Open Weather API
      var api = "http://api.openweathermap.org/data/2.5/weather?q=";
      var city = $("#city-name").val();
      var apiKey = "&APPID=9beb7211705e0858e94dcd5438f8972b";
      var unitsCelcius = "&units=metric";
      var unitsFahrenheit = "&units=imperial";

      var tempUnit = unitsCelcius;

      var url = api + city + apiKey + tempUnit;

      jQuery.ajax ({

        // Fetches data from API when city name entered
        url: url,
        dataType: "json",
        success: function(response) {
          $("#temp").html(Math.round(response.main.temp) + "&#186 C");
          $("#temp-min").html("&#x2193" + Math.round(response.main.temp_min) + "&#186");
          $("#temp-max").html("&#x2191" + Math.round(response.main.temp_max) + "&#186");
          $("#weather-main").html(response.weather[0].main);
          // $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

          // Change background image to match the current weather
          if (response.weather[0].description == "clear sky") {
            $('body').css('backgroundImage', 'url(img/clear-sky.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }
          else if ((response.weather[0].description == "few clouds") || (response.weather[0].description == "scattered clouds") || (response.weather[0].description == "broken clouds") || (response.weather[0].description == "overcast clouds")) {
            $('body').css('backgroundImage', 'url(img/clouds.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }
          else if ((response.weather[0].description == "shower rain") || (response.weather[0].description == "rain")) {
            $('body').css('backgroundImage', 'url(img/rain.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }
          else if (response.weather[0].description == "thunderstorm") {
            $('body').css('backgroundImage', 'url(img/thunderstorm.png)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }
          else if (response.weather[0].description == "snow") {
            $('body').css('backgroundImage', 'url(img/snow.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }
          else if (response.weather[0].description === "mist") {
            $('body').css('backgroundImage', 'url(img/mist.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }

        }

      });

    }

  });

  // Refreshes weather after certain time (currently not working)
  /* function refresh () {
    setTimeout(function() {
      $("weather-info").fadeOut().load("popup.js").fadeIn();
      refresh();
    }, 500);
  } */

});
