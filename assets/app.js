var countries = {
    US:[
      "Chicago"
    ],
    UK:[
      "London"
    ],
    Australia:[
      "Sydney"
    ],
    France:[
      "Paris"
    ]
}



var APIKey = "23f9dd0852e73adbaaf2bb82a2749d8d";

$("#city").change(function () {

  city = $(this).val();

})


$("#country").change(function () {

  var country = $(this).val();
  var cities = countries[country]
  var cityElement = $("#city")
  cityElement.empty()

  for( var i=0; i< cities.length; i++)
  {
    console.log(cities[i])
    $("<option>"+ cities[i]+ "</option>").appendTo("#city")

  }

})

$("#search-weather").click(function () {

  var city = $("#city").val();
  var country = $("#country").val();
  var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&appid=" + APIKey;


  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/" + queryURL,
    method: "GET"
  }).then(function (response) {
    var temp = Math.floor(response.main.temp);
    var minTemp = Math.floor(response.main.temp_min);
    var maxTemp = Math.floor(response.main.temp_max);
    var weather = response.weather[0].main;

    $(".weather").empty().append(weather);
    $(".temp").empty().append(temp);
    $(".minTemp").empty().append(minTemp);
    $(".maxTemp").empty().append(maxTemp);


  })

})

// Exchange Currency 


var queryURL = "http://data.fixer.io/api/latest?access_key=1fa6554da687fd32934b88c7e76bbfba&symbols=EUR,AUD,CAD,PLN,MXN,USD&format=1"

//Exchange-button is from Melanie's HTML
$("#exchange-button").on("click", function () {

  var initialAmount = $("#initial-dollar").val().trim();
  var baseCurrency = $("#convert-from").val();
  var exchangeCurrency = $("#convert-to").val();

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {

      // Log the queryURL, object, and object values 
      console.log(queryURL);
      console.log(response);
      var fromRate = response.rates[baseCurrency]
      var toRate = response.rates[exchangeCurrency]

      var exchangeRate = toRate / fromRate;
      var convertedAmount = exchangeRate * initialAmount;

      // Get a reference to the result <input> element
      var convertedElement = $("#converted-amount")

      // Set its value to the result of the currency exchange calculation
      convertedElement.val(convertedAmount)

      // Same as above, but one line
      //
      // $("#converted-amount").val(convertAmount)
    });

});

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