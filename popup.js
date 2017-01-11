$(document).ready(function() {

  //$("#city-name").hide();

  //$("#search-icon").hover(function() {
  //  $("#city-name").toggle();
  //});

  //$("#city-name").hover(function() {
  //  $("#city-name").toggle();
  //});

  $("#city-name").keypress(function(event) {

    if (event.keyCode == 13) {

      var api = "http://api.openweathermap.org/data/2.5/weather?q=";
      var city = $("#city-name").val();
      var apiKey = "&APPID=9beb7211705e0858e94dcd5438f8972b";
      var unitsCelcius = "&units=metric";
      var unitsFahrenheit = "&units=imperial";

      var url = api + city + apiKey + unitsCelcius;

      jQuery.ajax ({

        url: url,
        dataType: "json",
        success: function(response) {
          $("#temp").html(Math.round(response.main.temp) + "&#186 C");
          $("#temp-min").html("&#x2193 " + response.main.temp_min + " &#186");
          $("#temp-max").html("&#x2191 " + response.main.temp_max + " &#186");
          $("#weather-main").html(response.weather[0].main);
          $("#weather-description").html(", " + response.weather[0].description);
          // ("#weather-icon").attr("src", response.weather[0].icon);

          if (response.weather[0].main === "Clear") {
            $('body').css('backgroundImage', 'url(images/sunny.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }
          else if (response.weather[0].main === "Rain") {
            $('body').css('backgroundImage', 'url(images/rainy.jpg)');
            $("body").css("color", "white");
            $("#city-name").css("color", "white");
          }

        }

      });

    }

  });

});
