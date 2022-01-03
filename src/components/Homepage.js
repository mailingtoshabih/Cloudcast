import React, {useState, useEffect} from 'react'
import '../App.css'
import Weatherinfo from './Weatherinfo';
import Nodata from './Nodata';







export default function Homepage() {


      const [input, setInput] = useState("Delhi");
      const [city, setCity] = useState("");

      const [type, setType] = useState("");




      const onChange = (event) => {

            setInput(event.target.value);
      }



      useEffect(() => {
            
            const fetchApi = async () => {

                  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=95a49361fc979fd286449b5e02bb7c61`;
                  const response = await fetch(url);
                  const responseJSON = await response.json();

                  setCity(responseJSON.main);
                  // console.log(city.main.temp);
                  setType(responseJSON.weather);
            }


            fetchApi();
      }, [input])



      const search = () => {
            setInput(input);
      }

















      // if (city.temp < 20){
      //       document.body.style.backgroundImage = {cold}
      // }





      // let tempInput = input.charAt(0).toUpperCase() + input.slice(1);




     

      return (
            <>
                  <div className='container text-center'>


                       

                        <div>
                              <h1 className="display-1">Cloudcast</h1>
                              <input className='opacity-75 text-center' type="text"
                              placeholder="City Name..."
                              value ={input}
                              onChange={onChange}

                              style={{
                                    padding : '1rem',
                                    width : '50%',
                                    height : '3rem',
                                    margin: '10px',
                                    marginTop : '2%',
                                    borderRadius : '10px',
                                    border : 'none',
                                    
                              }}

                              />
                              


                        </div>

                        <div className="container">

                              <button className="btn btn-dark" type="button" onClick={search} style={{
                                    borderRadius : '0.7rem'
                              }}>Search</button>

                              <hr style={{width : 'auto', height: '3px'}}/>



                              {!city || !type ? <Nodata nodata ={"Enter the name of city"}/> : (
                                    
                                    <>

                                    <div>
                                          <Weatherinfo input= {input.charAt(0).toUpperCase() + input.slice(1)} 
                                                temperature={city.temp} 
                                                weatherDesc = {type[0].description}
                                                weatherType = {type[0].main}
                                                
                                                feelsLike={city.feels_like} 
                                                minTemp={city.temp_min} 
                                                maxTemp={city.temp_max} 
                                                humidity={city.humidity} 
                                                pressure={city.pressure}/>
                                    </div>

                                    </>
                              )}


                        </div>





                  </div>
            </>
      )
}
