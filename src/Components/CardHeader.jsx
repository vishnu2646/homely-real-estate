import React from 'react'

const CardHeader = ({lightContent, strongContent, content, isTestimonials }) => {
    const imageUrl = isTestimonials ? 'http://nightshiftcreative.co/static/homely/images/divider-white.png' : 'http://nightshiftcreative.co/static/homely/images/divider.png';
    return (
        <>
            <h2 className='uk-heading-medium' style={{ fontWeight: 100, fontSize: "2rem", textAlign: "center", color: isTestimonials ? '#fff' : '#121212' }}>
                {lightContent}  <strong>{strongContent}</strong>
            </h2>
            <img src={imageUrl} className='home-types-image' alt="decoratoin" />
            <p className='home-types-content' style={{ textAlign: "center" }}>{content}</p>
        </>
    )
}

export default CardHeader