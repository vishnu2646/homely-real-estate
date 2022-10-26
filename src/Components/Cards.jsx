import React from "react";
import "../styles/Card.css";

const Cards = (props) => {
    const classname = props.isPopularCards ? "card" : "normal-card";
    return (
        <div className={classname}>
            {props.isPopularCards && (
                <>
                    <img src={props.image} alt="card-img" />
                    <div className="card-top-left-content">
                        <h3 className="uk-card-title card-title">{props.title}</h3>
                        <button className="uk-button uk-button-primary">
                            {props.properties} Properties
                        </button>
                    </div>
                </>
            )}

            {props.isNewProperties && (
                <div className="uk-card uk-card-default new-properties-card" style={{ padding: "0px" }}>
                    <div className="uk-card-header" style={{ padding: "0px" }}>
                        <img src={props.image} alt="Avatar" className="new-properties-image" />
                        <div className="card-top-right-content">
                            <span className="uk-label uk-label-success">{props.label}</span>
                        </div>
                        <div className="card-bottom-left-content">
                            <span style={{ color: "#fff" }}> $ <strong>{props.price}</strong> </span>
                        </div>
                        <div className="card-bottom-right-content">
                            <span className="uk-label">{props.homeType}</span>
                        </div>
                        <div className="hover-content">
                            <div className="new-properties-content" style={{ padding: "5%" }}>
                                <h4 style={{ color: "#48a0dc" }}>{props.title}</h4>
                                <p><i className="fa-solid fa-location-dot" style={{ color:"#48a0dc" }}></i> {props.location}</p>

                                <hr className="uk-divider-icon" />

                                <ul style={{ display:"flex", alignItems: "center", justifyContent: "space-evenly" }}>
                                    <li><i className="fa-solid fa-bed"></i> {props.beds} Beds</li>
                                    <li><i className="fa-solid fa-toilet"></i> {props.baths} baths</li>
                                    <li><i className="fa-solid fa-up-right-and-down-left-from-center"></i> {props.area} Sq Ft</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <ul style={{ display:"flex", alignItems: "center", justifyContent: "space-evenly" }}>
                                    <li><i className="fa-regular fa-calendar"></i> {props.postedDays} days ago</li>
                                    <li><i className="fa-regular fa-heart"></i></li>
                                    <li><i className="fa-solid fa-share-nodes"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {props.normalCard && (
                <div className="card" style={{ backgroundColor: "#fff", width:"100%", height:"250px", marginTop: "20px" }}>
                    <div className="card-icons">
                        <i className={props.icon}></i>
                    </div>
                    <div style={{ padding: '10px', marginTop:"-15px" }}>
                        <h3 style={{ textAlign: "center", fontWeight: 600, fontSize: '18px' }}>{props.hometitle}</h3>
                        <p style={{ textAlign: "center", fontWeight: 200, fontSize: '14px' }}>{props.homecontent}</p>
                    </div>
                </div>
            )}

            {props.isAgents && (
                <div class="uk-card uk-card-default agent-cards">
                    <div class="uk-card-media-top">
                        <img src={props.image} alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{props.name}</h3>
                        <p className="agent-content">
                            <i className="fa-solid fa-tag uk-margin-small-right"></i>
                            {props.agentType}
                        </p>
                        <p className="agent-content">
                            <i className="fa-solid fa-envelope uk-margin-small-right"></i>
                            {props.agentemail}
                        </p>
                        <p className="agent-content">
                            <i className="fa-solid fa-phone uk-margin-small-right"></i>
                            {props.agentphone}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
