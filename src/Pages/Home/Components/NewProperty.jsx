import React from 'react'
import CardHeader from '../../../Components/CardHeader'
import Cards from '../../../Components/Cards'
import { newPropertiesCard } from '../../../data/data'

const NewProperty = () => {
    return (
        <div style={{ marginTop: "5%", height: "100vh" }}>
            <CardHeader 
                lightContent="Recently Added" 
                strongContent="Properties" 
                content="Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor" 
            />
            <div className='new-properties-cards'>
                {newPropertiesCard.map((item, index) => {
                    return(
                        <Cards 
                            key={index}
                            image={item.image} 
                            isNewProperties 
                            label={item.label1}
                            price={item.price}
                            homeType={item.homeType}
                            title={item.details.title}
                            location={item.details.location}
                            beds={item.details.interiors.beds}
                            baths={item.details.interiors.baths}
                            area={item.details.interiors.area}
                            postedDays={item.postedDays}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default NewProperty