
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
       '<button class="card-btn"></button>' +
     '</div>' +
    '</div>' )
     $(".city").html($("#search").val().toUpperCase() );
     $(".temp").html("<p> Temperature: "+ response.current.temp + "(F)</p>")
     $(".humidity").html("<p> Humidity: "+ response.current.humidity + "%</p>");
     $(".uvi").html("<p> UV Index: "+ response.current.uvi + "</p>")
     $(".wind").html("<p> Wind Speed: "+ response.current.wind_speed + "(mph)</p>")
     $(".card-btn").html("Save")
     $(".card").css("border", "gray solid 2px")
     
    function addIcon () {
        var imgURL = "http://openweathermap.org/img/wn/"
        var iconURL = imgURL + response.current.weather[0].icon+ '@2x.png'
        $(document).ready(function(){
            var image = new Image();
            image.src = iconURL;
            $('.icon').append(image)
        })};
        
    function fiveDay() {
        for(var i=5;i>0;i--){
            var day = response.daily[i].dt
            var realTime = moment.unix(day).format("MM/DD/YYYY")
           $(".card").after('<div class="fiveDay"><div class="card-body"><div class="day'+[i]+'">Day: '+ realTime +'</div></div>'+
           '<div class="card-body"><div class="temp'+[i]+'">Average Temperature: '+response.daily[i].temp.day+'(F)</div></div>' +
           '<div class="card-body"><div class="humidity'+[i]+'">Humidity: '+response.daily[i].humidity+'%</div></div></div>')
        }
        $(".card").after("<h2>5-Day Forecast: </h2>")
    }
addIcon();
fiveDay();     
 }
 
