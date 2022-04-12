var longitude;
var latitude;

$("#btnInput").on("click", function(event) {
    event.preventDefault();
     
    var geoURL = buildGeoURL();
    $.ajax({ url: geoURL, method:"GET"}).then(getLonLat)
});
function buildGeoURL () {
    geoURL = "http://api.openweathermap.org/geo/1.0/direct?"
    geoParams = {
    };
    geoParams.q = $("#search").val().trim();
    console.log(geoParams.q)
    geoParams.limit = '1'
    geoParams.appid = "10a435f0f1bcc2310fbd0c0b7e3018c3"
    //console.log(geoURL+$.param(geoParams))
    return geoURL+$.param(geoParams)
}
function getLonLat(response) {
    longitude = response[0].lon
    latitude = response[0].lat
    function buildQueryURL(){
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?"
        var queryParams = {  
        };
        queryParams.lat = response[0].lat;
        queryParams.lon = response[0].lon;
        queryParams.units = "imperial"
        //console.log(queryParams.units)
        queryParams.appid = "10a435f0f1bcc2310fbd0c0b7e3018c3"
        //console.log(queryParams.appid)
    
       //console.log(queryURL+$.param(queryParams));
        return queryURL+$.param(queryParams)
    }
        var queryURL = buildQueryURL();
        $.ajax({ url: queryURL, method:"GET"}).then(updatePage)
    //clicking once will save the PREVIOUS SESSIONS HISTORY TO THE CURRENTLY SEARCHED CITY HISTORY.Clicking search a second time for the currently displayed location
    //will correctly save the output to a history tab. 
    $("#btnInput").on("click", saveQuery);
    function saveQuery(){
        console.log(queryURL)
        var queryURLSave = queryURL
        if (queryURLSave) {
            localStorage.setItem('query', queryURLSave);
        }     
    }
    var querySave = localStorage.getItem('query')
    //console.log(querySave)
    //console.log(localStorage)

    $("section").after('<div><button id="lastSearch">'+ geoParams.q+'</button></div>')
    $("#lastSearch").on("click",function(){
        $.ajax({url:querySave, method:"GET"}).then(updatePage)
    })
} 
   

    

