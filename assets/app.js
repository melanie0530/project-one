var city = "london";
var country = "england";

var APIKey = "23f9dd0852e73adbaaf2bb82a2749d8d";




$("#city").change(function () {

  city = $(this).val();

})



$("#country").change(function () {

  country = $(this).val();

})

var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&appid=" + APIKey;


$.ajax({
  url: "https://cors-anywhere.herokuapp.com/" + queryURL,
  method: "GET"
}).then(function (response) {
  var temp = Math.floor(response.main.temp);
  var weather = response.weather[0].main;

  $(".weather").append(weather);


})

// $.getJSON(
//   "api.openweathermap.org/data/2.5/weather?q="+ city +","+ country + "&units=imperial&appid=" + APIKey,

//   function(data){
//    console.log(data);

//    var temp = Math.floor(data.main.temp);
//    var weather=data.weather[0].main;

//    $(".weather").append(weather);
//    $(".temp").append("src",icon);

//   }
// )



    // // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    //   "q="+ city +","+ country + "&units=imperial&appid=" + APIKey;

    // // Here we run our AJAX call to the OpenWeatherMap API
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // })
    //   // We store all of the retrieved data inside of an object called "response"
    //   .then(function(response) {

    //     // Log the queryURL
    //     console.log(queryURL);

    //     // Log the resulting object
    //     console.log(response);

    //     // Transfer content to HTML
    //     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    //     $(".wind").text("Wind Speed: " + response.wind.speed);
    //     $(".humidity").text("Humidity: " + response.main.humidity);
    //     $(".temp").text("Temperature (F) " + response.main.temp);

    //     // Log the data in the console as well
    //     console.log("Wind Speed: " + response.wind.speed);
    //     console.log("Humidity: " + response.main.humidity);
    //     console.log("Temperature (F): " + response.main.temp);
    //   });