/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Cards = () => {
    return (
        <div>
            <div className="property property-row shadow-hover">
                <a href="#" className="property-img">
                    <div className="img-fade"></div>
                    <div className="property-tag button status">For Sale</div>
                    <div className="property-price">$150,000</div>
                    <div className="property-color-bar"></div>
                    <img src="images/property-img1.jpg" alt="" />
                </a>
                <div className="property-content">
                    <div className="property-title">
                    <h4><a href="#">Modern Family Home</a></h4>
                    <p className="property-address"><i className="fa fa-map-marker icon"></i>123 Smith Dr, Annapolis, MD</p>
                    <div className="clear"></div>
                    <p className="property-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...</p>
                    </div>
                    <table className="property-details">
                    <tbody><tr>
                        <td><i className="fa fa-bed"></i> 3 Beds</td>
                        <td><i className="fa fa-tint"></i> 2 Baths</td>
                        <td><i className="fa fa-expand"></i> 25,000 Sq Ft</td>
                    </tr>
                    </tbody></table>
                </div>
                <div className="property-footer">
                    <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span>
                    <span className="right">
                    <a href="#"><i className="fa fa-heart-o icon"></i></a>
                    <a href="#"><i className="fa fa-share-alt"></i></a>
                    <a href="#" className="button button-icon"><i className="fa fa-angle-right"></i>Details</a>
                    </span>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    )
}

export default Cards