var countries = {
    US:[
      "Chicago","Sacramento","Los Angeles","New York","Washington D.C","San Francisco","Seattle","Boston","Denver","Philadelphia","New Orleans","Nashville","Miami","Phoenix","Columbus","Indianapolis","Dallas","Bar Harbor","Wichita"
    ],
    UK:[
      "London","Bristol","Liverpool","Edinburgh","Glasgow","Birmingham","Manchester","York","Cardiff","Belfast","Leeds","Newcastle"
    ],
    Australia:[
      "Sydney","Melbourne","Brisbase","Adelaide","Perth","Darwin","Hobart","Gold Coast","Cairns","Townville","Newcastle","Launceston"
    ],
    France:[
      "Paris","Bordeaux","Nice","Marseille","Lyon","Toulouse","Lille"
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
  }).then(function (response) 
  {
    var temp = Math.floor(response.main.temp);
    var minTemp = Math.floor(response.main.temp_min);
    var maxTemp = Math.floor(response.main.temp_max);
    var weather = response.weather[0].main;
    var weatherDes = response.weather[0].description;
    var iconcode = response.weather[0].icon;
    var weatherIcon = "https://openweathermap.org/img/w/" + iconcode + ".png";
    var city = response.name;
    var country = response.sys.country;

    $(".weather").empty().append(weather);
    $(".weather-description").empty().append(weatherDes);
    $(".temp").empty().append(temp,"°F");
    $(".minTemp").empty().append(minTemp,"°F");
    $(".maxTemp").empty().append(maxTemp,"°F");
    $(".weather-icon").empty().attr('src',weatherIcon);
    $(".weather-city").empty().append(city," ,");
    $(".weather-country").empty().append(country);

    $("#weather-in").empty().append("Weather In <br> ");
    $("#current-temp").empty().append("Current Tempterature: ");
    $("#min-temp").empty().append("Minimum Tempterature: ");
    $("#max-temp").empty().append("Maximum Tempterature: ");

  //   <button type="button" class = "weather"></button>

  //   $(".weather").click(function () {
  //     alert(weather-description);
  //   })

   })

})



// Exchange Currency 


var queryURL = "http://data.fixer.io/api/latest?access_key=1fa6554da687fd32934b88c7e76bbfba&symbols=EUR,AUD,CAD,PLN,MXN,USD&format=1"

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



    
    