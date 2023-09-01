import {useState,useEffect} from 'react'
import axios from 'axios';
import Search from './Search';
const Main = () => {
    const key='2cdb7c6b6ab62d399d26747944ad114c';
    const [error, setE] = useState(null);
    const [data,setD]=useState(null);
const getInfo=async(latitude,longitude)=>{
  try{
    const data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`);
    console.log(data.data);setD(data.data)}
    catch(err){
      console.log(err);
    }
}
  const getLocation = () => {
    const timeoutMs = 10000; // Set your desired timeout in milliseconds
    const options = { timeout: timeoutMs };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          const la=position.coords.latitude;
          const lo=position.coords.longitude;
          getInfo(la,lo);
          setE(null);
        },
        (err) => {
          setE(err.message);
        },options
      );
    } else {
      setE('Geolocation is not supported by this browser.');
    }
  };
    useEffect(()=>{
        getLocation();
        console.log(error);
    },[])
  return (
    <div className='h-screen flex flex-row justify-center align-middle'>
        <div className='flex flex-row'>
            <div className='current flex flex-col justify-center p-10 text-white'>
                <div className='flex flex-col justify-center'>
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
                :<div className='text-white font-extrabold font-serif text-lg text-center'>{error}</div>}
                
                </div>
            </div>
            <div style={{width:'400px'}} className='bg-blue-black text-white'>
            <div className='flex flex-col justify-center text-white'>
                <Search/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main