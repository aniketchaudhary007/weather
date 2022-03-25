import React from 'react';
import './App.css';

const  WeatherInformation = ({ weatherInfo }) => {
   
     if (Object.keys(weatherInfo).length === 0) {
       return null;
     }

     if (weatherInfo.error) {
       return (
         <div className="table">
           <div className="error">
             No matching location found.
         </div>
         </div>
       );
     };

     return (
       <div className="table">
         <div className="main">
           {weatherInfo.current.temp_c}&deg;C
           <span className="location">
             {weatherInfo.location.name}, {weatherInfo.location.country}
           </span>
        </div>
         <div className="metaData">
           <div className="metaDataTable">
             <div className="row">
               <div className="column">Localtime</div>
               <div className="column">{weatherInfo.location.localtime}</div>
             </div>
             <div className="row">
               <div className="column">Feels like</div>
               <div className="column">{weatherInfo.current.feelslike_c}&deg;C</div>
             </div>
             <div className="row">
               <div className="column">Humidity</div>
               <div className="column">{weatherInfo.current.humidity}&#37;</div>
             </div>
             <div className="row">
               <div className="column">Wind speed</div>
               <div className="column">{weatherInfo.current.wind_kph}kmph</div>
             </div>
             <div className="row">
               <div className="column">Precipitation</div>
              <div className="column">{weatherInfo.current.precip_mm}mm</div>
             </div>
           </div>
         </div>
       </div>
     );
};
export default WeatherInformation;