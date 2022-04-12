
 function updatePage(response) {
     console.log(response)
     
    $(".container-fluid").html('<div class="card" style="width: 18rem;">' +
        '<div class="card-body">' +
        '<h5 class="card-title city"></h5>' +
        '<p class="card-text">' +
         '<div class="temp"></div>' +
         '<div class="humidity"></div>' +
         '<div class="uvi"></div>' +
         '<div class="wind"></div>' +
         '<div class= "icon"></div>' +
        '</p>' +
       '<a href="#" class="card-link"></a>' +
     '</div>' +
    '</div>' +
    '<div class="card" style="width: 18rem;"> <div class="card-header day1"></div> <ul class="list-group list-group-flush">' +
    '<li class="list-group-item temperature1"></li>'+
    '<li class="list-group-item humidity1"></li>' +
    '<li class="list-group-item"></li>' +
    '</ul> </div>')

     $(".city").html($("#search").val().toUpperCase() );
     $(".temp").html("<p> Temperature: "+ response.current.temp + "(F)</p>")
     $(".humidity").html("<p> Humidity: "+ response.current.humidity + "%</p>");
     $(".uvi").html("<p> UV Index: "+ response.current.uvi + "</p>")
     $(".wind").html("<p> Wind Speed: "+ response.current.wind_speed + "(mph)</p>")
     $(".card-link").html("Save")
     $(".card").css("border", "gray solid 2px")
     
    function addIcon () {
        var imgURL = "http://openweathermap.org/img/wn/"
        var iconURL = imgURL + response.current.weather[0].icon+ '@2x.png'
        $(document).ready(function(){
            var image = new Image();
            image.src = iconURL;
            $('.icon').append(image)
        })};
addIcon();
    
 }
 

