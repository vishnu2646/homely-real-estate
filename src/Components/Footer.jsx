/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/Footer.css';
import divider from '../assets/divider-half.png'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-main">
                <div className="container" style={{ display: 'flex', padding: "30px", gap: "30px" }}>
                    <div className="col">
                        <img src="http://nightshiftcreative.co/static/homely/images/logo-white.png" className='footer-logo' alt="" />
                        <p style={{ fontWeight: 300 }}>Lorem ipsum dolor amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus at a nisl. Mauris vitae turpis quis eros egestas tempor sit amet a arcu. Duis egestas hendrerit diam.</p>
                        <hr />
                    </div>
                    <div className="col">
                        <h5>From the Blog</h5>
                        <img src={divider} alt="" />
                        <h6>Open House at 123 Smith Drive</h6>
                        <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus at a nisl. Mauris vitae turpis quis eros egestas tempor sit amet a arcu. Duis egestas hendrerit diam.</p>
                        <a href="">Read More</a>
                        <h6>Open House at 123 Smith Drive</h6>
                        <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus at a nisl. Mauris vitae turpis quis eros egestas tempor sit amet a arcu. Duis egestas hendrerit diam.</p>
                        <a href="">Read More</a>
                    </div>
                    <div className="col">
                        <h5>Get In Touch</h5>
                        <img src={divider} alt="" />
                        <p>123 Smith Drive</p>
                        <p>Annapolis, MD 21012</p>
                        <p> United States </p>
                        <b class="open-hours">Open Hours</b> <br />
                        Mondy - Friday: 9 am - 5 pm
                        Saturday: 9 am - 1pm
                        <p class="footer-phone"><i class="fa-solid fa-phone icon"></i> (123) 456-7890</p>
                    </div>
                    <div className="col">
                        <h5> Newsletter </h5>
                        <img src={divider} alt="" />
                        <p>
                            <b>Subscribe to our newsletter!</b>
                            Vel lorem ipsum. Lorem molestie odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        </p>
                        <br />
                        <form class="subscribe-form" method="post" action="#">
                            <input type="text" name="email" placeholder='Your Mail' className='uk-input' />
                            <br />
                            <br />
                            <input type="submit" name="submit" value="SEND" className="uk-button uk-button-primary" />
                        </form>
                    </div>
                </div>
                <span style={{ marginTop: 0, padding: "10px", display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor:"#262A35", height: "10vh" }}>
                    © 2022  |  VP - A theme by <a href="/" target="_blank"> VP Creations </a>  |  All Rights Reserved
                </span>
            </div>
        </div>
    )
}

export default Footer