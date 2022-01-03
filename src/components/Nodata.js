import React from 'react'

export default function Nodata({nodata}) {
      return (
            <div>
                  


                  <div className="container text-center opacity-75 my-2" style={{
                              backgroundColor : 'white', 
                              height : '25rem', 
                              padding : '20px',      
                              borderRadius : '20px',
                              }}>

                              
                              <h1 className='display-4 opacity-100'>{nodata}</h1>

                  </div>



            </div>
      )
}
