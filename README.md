# weatherDashboard

## Description
My app queries openweathermap.org. I am doing two queries in this app, one to the One Call api (consisting of all weather data by longitude and latitude) and the other called Geocaching api (given a city or country name it will produce their longitude and latitude). I utilized geocaching to get the longitude and latitude of the city or country that is entered into the search bar. This immediately is used to get the One Call api to query the weather for that geographical area. 

Given the responses from One Call API, I can then query the specific information from the API object. In this case I took temperature, humidity, UV index, and wind speed. For the five day forcast I included date, average temperature, and humidity

![Weather Dashboard](sanFran_search.PNG)
[Link to the Website](https://sambalogna.github.io/weatherDashboard/)

## Key Coding Snippets