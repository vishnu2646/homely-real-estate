import React from 'react'
import Slider from './Components/Slider'
import NewProperty from './Components/NewProperty'
import PopularCategory from './Components/PopularCategory'
import Testimonials from './Components/Testimonials'
import Cards from '../../Components/Cards'
import { normalCardData } from '../../data/data'
import Hero from './Components/Hero'
import Agents from './Components/Agents'

const Home = () => {
    return (
        <>
            <Hero />
            <div className='container1' style={{ backgroundColor:"#EBF1F5" }}>
                <div style={{ display:"flex", alignItems: "center", justifyContent: 'space-between', padding: '40px' }} >
                    {normalCardData.map((card, index) => {
                        return(
                            <Cards normalCard hometitle={card.hometitle} homecontent={card.homecontent} icon={card.icon} key={index} />
                        )
                    })}
                </div>
            </div>
            <Slider />
            <PopularCategory />
            <Testimonials />
            <NewProperty />
            <Agents />
        </>
    )
}

export default Home