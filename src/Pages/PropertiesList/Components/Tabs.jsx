import React, { useState } from 'react';
import '../../../styles/Tab.css';
import { PropertiesListCard } from '../../../data/data';
import Cards from '../../../Components/Cards';
import ListCards from './ListCards'

const Tabs = () => {

    const [tab, setTab] = useState(1);

    return (
        <div className='tab-wrapper'>
            <div className="container">
                <div className='tab-header'>
                    <p>8 Prpoerties Found</p>
                    <div className='tab-main' style={{ paddingRight: '40px' }}>
                        <div className="tab-icons">
                            <i className={ tab === 1 ? "fa-solid fa-th-large active":"fa-solid fa-th-large"} onClick={() => setTab(1)}></i>
                            <i class={tab === 2 ? "fa-solid fa-bars active" : "fa-solid fa-bars"} onClick={() => setTab(2)}></i>
                        </div>
                        <div className="tab-form">
                            <select className="uk-select uk-form-width-medium">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='tab-content'>
                    {tab === 1 && (
                        <div className='tab-list1'>
                           {PropertiesListCard.map((item, index) => {
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
                    )}
                    {tab === 2 && (
                        <>
                            <ListCards />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Tabs