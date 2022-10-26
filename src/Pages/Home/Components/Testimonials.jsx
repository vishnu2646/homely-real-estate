import React from 'react'
import CardHeader from '../../../Components/CardHeader'

const Testimonials = () => {
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: '#48A1DD', marginTop: "5%", padding: "5%" }}>
            <CardHeader 
                lightContent="Our"
                strongContent="Testimonials"
                isTestimonials
            />
        </div>
    )
}

export default Testimonials