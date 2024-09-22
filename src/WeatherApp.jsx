import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
   
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Patna",
        feel_like:10,
        humidity:33,
        temp:9,
        tempMax:16,
        tempMin:7,
        weather:"Overcast"
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }

    return (
        <div>
            <h1 style={{textAlign:"center",textDecoration:"underline"}}>Weather App By Lalit Kumar</h1>
            <SearchBox update={updateInfo}/>
            <InfoBox InfoBox={weatherInfo}/>
        </div>
    )
}