import React from 'react'

const Home = () => {
  return (
    <div className='wrapper'>
     <div className="left_container">
        <div className="logo">
            <img src="Logo.png" alt="" />
        </div>
     <div className="tagline">
     <p >Stay on top of</p>
     <p>time tracking</p>
     </div>
        <div className="vector__wrapper">
            <img  className="vector_pic" src="Illustration.png" alt="" />
        </div>
     </div>
     <div className="form_container">
   <div className='form_card'>
    <h2>Create Account</h2>
    
   </div>
     </div>
    </div>
  )
}

export default Home