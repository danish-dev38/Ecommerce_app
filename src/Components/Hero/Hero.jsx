import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men_model from "../../assets/men_model.png"

const Hero = () => {
    return (
        <div className='hero'>
          <div className="hero-left">
               <h1>Best Deals ! Best Prices!</h1>
            
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt='' height="50px"/>
            </div>
              <p>collections</p>
              <p>for everyone</p>
              <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt='' height='20px' />
         </div>
         </div>
         
            <div className="hero-right">
                 <img src={men_model} alt='' height="400px"/>
            </div>
        </div>
    )
}

export default Hero
