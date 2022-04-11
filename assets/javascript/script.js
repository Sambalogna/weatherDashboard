
//https://api.openweathermap.org/data/2.5/weather?q=
//{city name},{state code},{country code}&appid={API key}
//parameters:
// q  is for city name, state code and country code divided by comma
// appid is for the API key
// units ours is imperial
function buildQueryURL(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?"
    var queryParams = {

    };
    queryParams.q = $("#search").val().trim();
    console.log(queryParams.q)
    queryParams.units = "imperial"
    console.log(queryParams.units)
    queryParams.appid = "10a435f0f1bcc2310fbd0c0b7e3018c3"
    console.log(queryParams.appid)

    console.log(queryURL+$.param(queryParams));
    return queryURL+$.param(queryParams)
}

    function updatePage() {
        $(".city").html("<h2>" + response.name + " here dat weather </h2>");
        $(".wind").html("<p> This is how fast the wind go: "+ response.wind.speed + "</p>")
        $(".humidity").html("<p> Humidity is: "+ response.main.humidity+ "</p>");
        $(".temp").html("<p> Temperature (F): "+ response.main.temp + "</p>")
        $(".FEELZ").html("<p> It feels like: "+ response.main.feels_like + "(F)</p>")
    }
    // function clear () {
    //     $(".container").empty();
    // }

    //AJAX call
    $("#btnInput").on("click", function(event) {
        event.preventDefault(); 
        // clear();
        var queryURL = buildQueryURL();
    $.ajax({ url: queryURL, method:"GET"}).then(function(response){
        console.log(response)
        $(".city").html("<h2>" + response.name + " here dat weather </h2>");
        $(".wind").html("<p> This is how fast the wind go: "+ response.wind.speed + "</p>")
        $(".humidity").html("<p> Humidity is: "+ response.main.humidity+ "</p>");
        $(".temp").html("<p> Temperature (F): "+ response.main.temp + "</p>")
        $(".FEELZ").html("<p> It feels like: "+ response.main.feels_like + "(F)</p>")
  
    
    });

    });
  