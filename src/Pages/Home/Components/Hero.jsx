import React from 'react'
import Image1 from '../../../assets/slider-7.jpg'
import '../styles/Hero.css'

const Hero = () => {
    
    return (
        <div 
            className='hero' 
            style={{  
                height: "100vh",
                width: "100%",
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image1})`,
                backgroundImageRepeat: "no-repeat",
                backgroundSize: "contain",
                position: "relative"
            }}
        >
            <div className='hero-content'>
                <h1>Find your new home today.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec risus egestas, vestibulum arcu.</p>
                <div className="tab">
                    <ul>
                        <li className='active'>All</li>
                        <li className=''>For Sale</li>
                        <li className=''>For Rent</li>
                    </ul>
                    <div className="tab-form">
                        <input type="text" name="place" id="tabform" placeholder='Enter an address or city..' />
                        <button className='uk-button uk-button-primary' style={{ fontWeight: 400 }}>GO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero