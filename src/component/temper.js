import React, { useEffect, useState } from 'react';
import WeatherCard from './weatherCard';

const Temper = () => {

    const [searchValue,setSearchValue] = useState("Ranaghat");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=93810d7614bc26803c9e049f7236182d`;

            const res = await fetch(url);
            const data = await res.json();

            const {temp,humidity,pressure} = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const{speed} = data.wind;
            const { country, sunset, sunrise} = data.sys;
            // console.log(sunrise)

            const myNewWatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunrise,
                sunset,
            };
            setTempInfo(myNewWatherInfo);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        document.title= `Expert Weather | ${searchValue}`;
    }, [searchValue])

    useEffect (
        () =>{
            getWeatherInfo();
        },[]
    );

    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search ..." autoFocus id="search" value={ searchValue } onChange={ (e) => setSearchValue(e.target.value) } className="searchTerm" />
                <button  className="searchButton" type="button" onClick={getWeatherInfo}>
                    Search 🔍
                </button>
            </div>
        </div>
        <WeatherCard tempInfo={tempInfo}/>
            
        </>
    )
};

export default Temper;
