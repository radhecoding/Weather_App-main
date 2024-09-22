import './SearchBox.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({update}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    
    let API_URL="http://api.openweathermap.org/data/2.5/weather";
    let API_KEY="acaccfcdeecb7908dee91263ce105d3f";

    

    let WeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); 
            let jsonRes=await response.json();
            let info={
                city:city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                feel_like: jsonRes.main.feels_like,
                humidity:jsonRes.main.humidity,
                weather: jsonRes.weather[0].description,
            }
            console.log(info);
            return info;
        }
        catch(err){
            throw err;
        }
        
    }
    let handleChange=(eve)=>{
        setCity(eve.target.value)
    
    } 
    let eventHandler=async (eve)=>{
        try{
            eve.preventDefault();
            console.log(city);
            let newinfo=await WeatherInfo();
            setCity("");
            update(newinfo);
        }
        catch(err){
            setError(true);
        }
    }
    
    
    return (
        <div className="SearchBox">

            <form onSubmit={eventHandler}>
            <TextField id="city" label="City Name" value={city} onChange={handleChange}  required/><br></br><br />
            <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p style={{color:"red"}}>No Such Place exist in API!</p>}

        </div>
    )
}