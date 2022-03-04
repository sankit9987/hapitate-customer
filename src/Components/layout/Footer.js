import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="footer-newsletter text-light" style={{backgroundColor:"#0b1c28"}}>
                <div className="container pl-2">
                    <div className="footer-newsletter-inner row d-flex justify-content-between">
                        <div className="newsletter-content col-lg-7 ">
                            <h5 className="newsletter-title text-light "><i className="fa fa-paper-plane pr-2" aria-hidden="true"></i>Subscribe to our Newsletters</h5>
                            <span className="newsletter-marketing-text">...and receive
                                <strong>Latest Health Tracking Updates</strong>
                            </span>
                        </div>
                        <div className="newsletter-form col-lg-5 py-3 align-self-center">
                            <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-5358 mc4wp-form-basic" method="post" data-id="5358" data-name="Subscribe">
                                <div className="mc4wp-form-fields">
                                    <div className="input-group">
                                        <input type="email" name="EMAIL" className="form-control " placeholder="Enter your email address" autocomplete="off" required="" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary sidecurve"  type="submit">Subscribe</button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-widgets mx-4">
                <div className="footer-bottom-widgets-inner row">
                    <div className="footer-contact col-md-5">
                        <div className="footer-logo">
                            <img src="./assets/image/hapitate.png" alt="Hapitate" width="143" height="48" />
                        </div>
                        <div className="footer-address">
                            <strong className="footer-address-title">Follow Us : </strong>
                            <address>For latest Products and Brands on social Media that can keep you updated about your Healthy
                                Lifestyle.</address>
                        </div>
                        <div className="footer-social-icons">
                            <ul className="social-icons list-unstyled  align-items-center">
                                <li><a className="fa fa-facebook-square" target="_blank" href="#"></a></li>
                                <li><a className="fa fa-whatsapp" target="_blank" href="#"></a></li>
                                <li><a className="fa fa-pinterest" target="_blank" href="#"></a></li>
                                <li><a className="fa fa-linkedin" target="_blank" href="#"></a></li>
                                <li><a className="fa fa-instagram" target="_blank" href="#"></a></li>
                                <li><a className="fa fa-youtube-play" target="_blank" href="#"></a></li>
                                <li><a className="fa fa-rss" target="_blank" href="./feed/index.html"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom-widgets-menu col-md">
                        <div className="footer-bottom-widgets-menu-inner row g-0 row-cols-xl-4">
                            <div className="columns col">
                                <aside id="nav_menu-1" className="widget clearfix widget_nav_menu">
                                    <div className="body">
                                        <h4 className="widget-title">Know More</h4>
                                        <div className="menu-footer-menu-1-container">
                                            <ul id="menu-footer-menu-1" className="menu">
                                                <li id="menu-item-5525"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5525">
                                                    <a href="#">About Us</a></li>
                                                <li id="menu-item-5526"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5526">
                                                    <a href="#">Blog</a></li>
                                                <li id="menu-item-5543"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5543">
                                                    <a href="#">FAQ</a></li>
                                                <li id="menu-item-5527"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5527">
                                                    <a href="#">Career</a></li>
                                                <li id="menu-item-5528"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5528">
                                                    <a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="columns col">
                                <aside id="nav_menu-2" className="widget clearfix widget_nav_menu">
                                    <div className="body">
                                        <h4 className="widget-title">Support</h4>
                                        <div className="menu-footer-menu-2-container">
                                            <ul id="menu-footer-menu-2" className="menu">
                                                <li id="menu-item-5530"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5530">
                                                    <Link to="/dashboard">My account</Link></li>
                                                <li id="menu-item-5531"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5531">
                                                    <a href="#">Track your Order</a></li>
                                                <li id="menu-item-5545"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5545">
                                                    <Link to="/wishlist">My Wishlist</Link></li>
                                                <li id="menu-item-5544"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5544">
                                                    <Link to="/compare">Compare</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="columns col">
                                <aside id="nav_menu-3" className="widget clearfix widget_nav_menu">
                                    <div className="body">
                                        <h4 className="widget-title">Store Policy</h4>
                                        <div className="menu-footer-menu-3-container">
                                            <ul id="menu-footer-menu-3" className="menu">
                                                <li id="menu-item-5536"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5536">
                                                    <a href="#">Return Policy</a></li>
                                                <li id="menu-item-4114"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4114">
                                                    <a href="#">Terms of Use</a></li>
                                                <li id="menu-item-5534"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-5534">
                                                    <a href="#">Privacy Policy</a></li>
                                                <li id="menu-item-5535"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5535">
                                                    <a href="#">Payments</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="columns col">
                                <aside id="nav_menu-9" className="widget clearfix widget_nav_menu">
                                    <div className="body">
                                        <h4 className="widget-title">Join Us</h4>
                                        <div className="menu-footer-menu-4-container">
                                            <ul id="menu-footer-menu-4" className="menu">
                                                <li id="menu-item-5540"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5540">
                                                    <Link to="/login">Sell on Hapitate</Link></li>
                                                
                                                <li id="menu-item-5539"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5539">
                                                    <a href="#">Advertise on Hapitate</a></li>
                                                <li id="menu-item-5541"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5541">
                                                    <a href="mailto:customercare@hapitate.com">eMail Us</a></li>
                                                <li id="menu-item-5542"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5542">
                                                    <a href="https://wa.me/+919111591591">Chat with Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-bar ml-2">
                <div className="container">
                    <div className="float-start copyright">Latest Updated on July 2021 : Hapitate.com | 100% Purchase Protection &amp;
                        Secure Payment Gateway :</div>
                    <div className="float-end payment">
                            <ul className="cash-card card-inline">
                                    <img data-lazyloaded="1" src="./assets/image/patment-icon.png"
                                        className="h-auto litespeed-loaded" data-src="./wp-content/uploads/2017/02/patment-icon.png"
                                        alt="" width="324" height="38" data-was-processed="true"/>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer