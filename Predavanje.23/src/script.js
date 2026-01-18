import axios from 'axios'
import{getUserLocation} from "./components/location";
import {getCurrentWeatherForLocation, getWeatherForUpcomingDays} from "./components/weatherApi";


let location = localStorage.getItem("location") ||getUserLocation();
localStorage.setItem("location",location);

document.getElementById("changeLocation").addEventListener("click", () => {

    location = getUserLocation();
    localStorage.setItem("location",location);

})


    const response = await getCurrentWeatherForLocation(location);

// Skolski vezba 1
    if(!response.data.current.is_day){
        document.querySelector("body").style.backgroundColor = "#383838"
    }

/*
Moj nacin vezba 1
let body = document.querySelector("body");

if(!response.data.current.is_day){
    body.style.backgroundColor = "darkgray"
} else {
    body.style.backgroundColor = "lightblue"
}
 */

const forecastResponse = await getWeatherForUpcomingDays(location,3);


for(let forecast of forecastResponse.data.forecast.forecastday){
    console.log("Na dan: "+forecast.date+" maximalna temperatura ce biti: "+forecast.day.maxtemp_c+", a minimalna: "+forecast.day.mintemp_c);
}























