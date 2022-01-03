import React from 'react'
import cold from './cold.jpg'
import autumn from './autumn.jpg'
import sunny from './sunny.jpg'
import fire from './fire.jpg'
import zero from './zero.jpg'











export default function Weatherinfo(props) {

      const {input, temperature, weatherDesc, weatherType, feelsLike, minTemp, maxTemp, pressure, humidity} = props;
      

      
      if (temperature < 0){
            document.body.style.backgroundImage = `url(${zero})`;
      }
      if (temperature < 20 && temperature > 0){
            document.body.style.backgroundImage = `url(${cold})`;
      }
      if (temperature > 20 && temperature < 27){
            document.body.style.backgroundImage = `url(${autumn})`;
      }
      if (temperature > 27 && temperature < 60){
            document.body.style.backgroundImage = `url(${sunny})`;
      }
      if (temperature > 60){
            document.body.style.backgroundImage = `url(${fire})`;
      }
     









      return (
            <>
                  <div className='container'>
                  <div className="row  text-center my-2">


                        <div className="col text-center opacity-75 mx-2 my-2" style={{
                              backgroundColor : 'white', 
                              padding : '25px',       
                              borderRadius : '20px'}}>

                              
                              <h1 className='display-1 my-3'>{temperature}° Celcius{" "}</h1>
                              
                              <div>
                              <h6  className='display-2'>{" "}{input}{" "}</h6>
                              </div>
                              <h6  className='display-6'>{weatherDesc}</h6>
                              <h6  className='display-6'>{weatherType}</h6>
                              
                              

                        </div>



                        <div className="col text-center opacity-75 my-2" style={{
                              backgroundColor : 'white', 
                              padding : '20px',
                              borderRadius : '20px'}}>

                              
                              

                              <ul class="list-group">

                                    <li class="list-group-item">
                                          <h6 className='display-6'>Feels like : {feelsLike}° C</h6>
                                    </li>
                                    <li class="list-group-item">

                                          <h6 className='display-6'>Humdity : {humidity}%</h6>
                                    </li>
                                    <li class="list-group-item">
                                          <h6 className='display-6'>Lowest  : {minTemp}°C</h6>

                                    </li>
                                    <li class="list-group-item">

                                          <h6 className='display-6'>Highest : {maxTemp}°C</h6>
                                    </li>
                                    <li class="list-group-item">

                                          <h6 className='display-6'>Pressure : {pressure} mb</h6>
                                    </li>
                              
                              </ul>
                              

                        </div>



                  </div>
                  </div>

            </>
      )
}
