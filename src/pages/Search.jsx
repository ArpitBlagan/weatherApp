import axios from 'axios';
import React, { useState,useEffect } from 'react'
const key="2cdb7c6b6ab62d399d26747944ad114c";
const Search = () => {
    const [name,setN]=useState("");
    const [error,setE]=useState("");
    const [data,setD]=useState();
    const handleC=async(e)=>{
        e.preventDefault();
        try{
            const data=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`);
            console.log(data.data);
            setD(data.data);
        }
        catch(err){
            setD();setE("asdf")
            console.log("err",err);
        }
    }
  return (
    <div  className='flex flex-col h-screen justify-center align-middle text-center font-serif'>
        <div className='flex flex-col p-2'>
            <label>City Name: </label>
            <input className='p-4 rounded-md bg-black required:true mb-2' placeholder='enter city name' value={name}
                onChange={(e)=>{setN(e.target.value)}}
            />
            <button className='bg-black rounded pl-3 pr-3 p-1 w-20' onClick={handleC}>Check weather</button>
        </div> 
        <div>
        {data?
        <div className=''> 
                    <div className='mb-5 text-white font-light font-serif text-lg text-center'><h4>{data.name}</h4></div>
                    <div className='flex justify-between'>
                    <div><img style={{height:'70px'}} src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"}/>
                        <div>{data.weather[0].main} <div>desciption:{data.weather[0].description}</div></div>
                    </div>
                    <div>
                        <div>Humidity: {data.main.humidity} F</div>
                        <div>Sea level: {data.main.sea_level} M</div>
                        <div>Temperature: {data.main.temp} F</div>
                        <div>Pressure: {data.main.pressure} Hpa</div>
                        <div>Wind speed: {data.wind.speed} Km/h</div>
                    </div>
                    </div>
                    </div>
            
        :<div></div>}
        {error?<div className='text-white font-extrabold font-serif text-lg text-center'>There is no City with name {name}</div>:<div></div>
        }
        </div>
        <div>{error||data?<button className='rounded bg-black p-3' 
        onClick={(e)=>{e.preventDefault();setD(null);setE("");setN("")}}    
     >Clear</button>:<div></div>}</div>
    </div>
  )
}

export default Search