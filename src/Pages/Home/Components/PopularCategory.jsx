import React from 'react'
import CardHeader from '../../../Components/CardHeader'
import Cards from '../../../Components/Cards'
import { HomeCards } from '../../../data/data'

const PopularCategory = () => {
    return (
        <>
            <CardHeader 
                lightContent="Browse Our Most" 
                strongContent="Popular Categories" 
                content="Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor" 
            />
            <div className='container home-cards'>
                {HomeCards.map((item, index)=> {
                    return(
                        <Cards key={index} image={item.image} title={item.title} properties={item.properties} isPopularCards/>
                    )
                })}
            </div>
        </>
    )
}

export default PopularCategory