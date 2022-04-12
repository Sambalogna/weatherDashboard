var longitude;
var latitude;

function buildGeoURL () {
    geoURL = "http://api.openweathermap.org/geo/1.0/direct?"
    geoParams = {
    };
    geoParams.q = $("#search").val().trim();
    console.log(geoParams.q)
    geoParams.limit = '1'
    geoParams.appid = "10a435f0f1bcc2310fbd0c0b7e3018c3"
    console.log(geoURL+$.param(geoParams))
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
    
       console.log(queryURL+$.param(queryParams));
        return queryURL+$.param(queryParams)
    }
        var queryURL = buildQueryURL();
        $.ajax({ url: queryURL, method:"GET"}).then(updatePage)
   
}
$("#btnInput").on("click", function(event) {
    event.preventDefault();
     
    var geoURL = buildGeoURL();
    $.ajax({ url: geoURL, method:"GET"}).then(getLonLat)
});
    
$(".card-btn").on("click",saveQuery) 
function saveQuery(){
    console.log('i was clicked')
 for(var i = 0; i < 10; i++)
 var queryURLSave = queryURL
 if (queryURLSave) {
     localStorage.setItem('query'+[i], queryURLSave);
 }
var querySave = localStorage.getItem('query'+[0])
console.log(querySave)
}   