import React from 'react'
import CardHeader from '../../../Components/CardHeader'
import '../../../styles/Slider.css'
import { sliders } from '../../../data/data'

const Slider = () => {

    const handleScroll = (direction) => {

        var sliderScroll = document.getElementById('slider-content');

        if(direction === 'left') {
            sliderScroll.scrollLeft = sliderScroll.scrollLeft - 303;

        } else if (direction === 'right') {
            sliderScroll.scrollLeft = sliderScroll.scrollLeft + 303;

        }   
        
    }

    return (
        <div style={{ height: "100vh", backgroundColor:"#EBF1F5" }}>
            <CardHeader 
                lightContent="Featured"
                strongContent="Properties"
                content="Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor"
            />
            <>
                <div className='slider-controls'>
                    <button className='uk-button uk-button-default' onClick={() => handleScroll('left')}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className='uk-button uk-button-default' onClick={() => handleScroll('right')}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                {/* Slider Body Content */}
                <div className='slider-content' id='slider-content'>
                    {sliders.map((slider, index) => {
                        return(
                            <>
                                <img src={slider.image} className="slider-img" alt="slider-img" style={{ width: "25%", height: "200px"}} key={index}/>
                            </>
                        )
                    })}
                </div>
            </>
        </div>
    )
}

export default Slider