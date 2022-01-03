import React from 'react'

export default function Card() {

      return (
            <div>
                  <div className='my-3'>

                 

                        <div className="card my-3  shadow-lg p-3 mb-5" style={{
                              width:'23rem', margin:'19px',
                              border: 'none',
                              // border: `4px solid white`,
                              borderRadius: '1rem',
                              backgroundColor : 'white'
                              }}>



                              <div className="card-body">

                                    <h5 className="card-title">{task.Name}</h5>

                                    {/* <h6 className="card-subtitle mb-2 text-muted">Date</h6>*/}
                                    <button type="button" className="btn btn-danger btn-sm my-3" onClick={handleDelete} style={{borderRadius : '0.5rem'}}>Remove</button>
                                    <button type="button" className="btn btn-secondary btn-sm my-1 mx-2" onClick={handleEdit} style={{borderRadius : '0.5rem'}}>Edit</button>
                                    

                                    <p className="card-text my-3">{task.Description}</p>
                                    
                              </div>


                        </div>
                  </div>
                        
            </div>
      )
}
