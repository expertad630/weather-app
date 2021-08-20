import React, {useState, useEffect} from 'react';

const WeatherCard = ({tempInfo}) => {

    const [weatherState, setWeatherState] = useState("");

    const  {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;


    

    useEffect(() => {
        const curTime = new Date();
        if(weatherMood){
            switch (weatherMood) {
                    
                case "Clouds": 
                    (curTime > date.getHours() && curTime.getMinutes() > date.getMinutes()) ? setWeatherState("wi-night-cloudy") : setWeatherState("wi-day-cloudy");
                    break;
                case "Haze": 
                    (curTime > date.getHours() && curTime.getMinutes() > date.getMinutes()) ? setWeatherState("wi-night-fog") : setWeatherState("wi-day-cloudy");            
                    break;
                case "Clear": 
                    (curTime > date.getHours() && curTime.getMinutes() > date.getMinutes()) ? setWeatherState("wi-night-clear") : setWeatherState("wi-day-cloudy");                        
                    break;
                case "Mist": 
                    (curTime > date.getHours() && curTime.getMinutes() > date.getMinutes()) ? setWeatherState(setWeatherState("wi-night-cloudy-windy")) : setWeatherState("wi-day-cloudy");                
                    break;
                case "Rain": 
                    (curTime > date.getHours() && curTime.getMinutes() > date.getMinutes()) ? setWeatherState(setWeatherState("wi-night-rain")) : setWeatherState("wi-day-rain");  
                    break;
                default:
                    setWeatherState("wi-stars");
                    break;
            }
        }
            
    }, [weatherMood])

    let sec= sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
        <article className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{ temp }&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        { weatherMood }
                    </div>
                    <div className="place">
                        {name}, {country}
                    </div>
                </div>
            </div>
            <div className="date"> {new Date().toLocaleString()} </div>
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside"> {timeStr} PM<br /> sunset </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside"> {humidity} <br /> Humidity</p>
                    </div>
                </div>
                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside"> {pressure} <br /> pressure</p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside"> {speed} <br /> speed</p>
                    </div>
                </div>
            </div>
        </article>
        </>
    )
}

export default WeatherCard;
