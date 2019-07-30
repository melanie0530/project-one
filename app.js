


var queryURL = "http://data.fixer.io/api/latest?access_key=1fa6554da687fd32934b88c7e76bbfba&symbols=EUR,AUD,CAD,PLN,MXN,USD&format=1"


$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        // Log the queryURL, object, and object values 
        console.log(queryURL);
        console.log(response);
        var usDollar = response.rates.USD
        var usdEUR = 1 / usDollar
        var usdAUD = response.rates.AUD / usDollar
        var usdCAD = response.rates.CAD / usDollar
        var usdMXN = response.rates.MXN / usDollar
        var usdPLN = response.rates.PLN / usDollar

        //Logging the rates. These show full conversion rates.
        console.log("Euro rate: " + usdEUR);
        console.log("AUD rate: " + usdAUD);
        console.log("CAD rate: " + usdCAD);
        console.log("MXN rate: " + usdMXN)
        console.log("PLN rate: " + usdPLN);
      

        //Transferring data to HTML
        $(".date").html("<h1>The exchange rate based on today's date: " + response.date);
        $(".cad-rate").text("1 US Dollar is " + usdCAD.toFixed(2) + " Canadian Dollars.");
        $(".mxn-rate").text("1 US Dollar is " + usdMXN.toFixed(2) + " Mexican Pesos.");
        $(".euro-rate").text("1 US Dollar is " + usdEUR.toFixed(2) + " Euros.");
        $(".aud-rate").text("1 US Dollar is " + usdAUD.toFixed(2) + " Australian Dollars.");
        $(".pln-rate").text("1 US Dollar is " + usdPLN.toFixed(2) + " Poland Zloty.");
    });
