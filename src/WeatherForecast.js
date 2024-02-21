import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
function handleResponse(response) {
    console.log(response.data);
}

    let apiKey= "6cf684ae65cc4ec4ead1cd6b7c411e81"; 
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForecast">
<div className="row">
    <div className="col">
      <div className="WeatherForecast-day">Thu</div>
        <WeatherIcon code="01d" size={36} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForcast-temperature-max">19°</span>
            <span className="WeatherForcast-temperature-min">10°</span>
         </div>
         </div>
</div>
    </div>
    );
}
