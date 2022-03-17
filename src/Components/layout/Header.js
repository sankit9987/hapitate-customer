import React from 'react'
import './style/style.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className=" top-bar d-xl-block">
            <div className=" container d-flex justify-content-between clearfix">
                <ul id="menu-top-bar-left" className="nav nav-inline float-start electro-animate-dropdown flip py-2">
                    <li id="menu-item-3233" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3233">
                        <Link title="Welcome to Your Healthy Appetite Store" to="/">Welcome to Your Healthy Appetite Store
                        </Link>
                    </li>
                </ul>
                <ul id="menu-top-bar-right" style={{marginRight: "-41%"}} className="nav nav-inline float-end py-2 electro-animate-dropdown flip">
                    <li id="menu-item-5596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5596">
                        <a title="Shop" href="#">
                            <i className="fa fa-shopping-bag px-2" ></i>Shop
                        </a>
                    </li>
                    <li id="menu-item-5565" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5565">
                        <Link title="My Account" to="/dashboard">
                            <i className="fa fa-user px-2" ></i>My Account
                        </Link>
                    </li>
                    <li id="menu-item-4105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4105">
                        <Link title="Track Your Order" to="/tracking">
                            <i className="fa fa-truck" aria-hidden="true"></i>Track Your Order
                        </Link>
                    </li>

                    <li id="menu-item-5566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5566"><a title="Sell on Hapitate" href="https://vendor.hapitate.in/" target="_blank">
                        <i className="fa fa-map-marker px-2" ></i>Sell on Hapitate
                    </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className='container' id="header">
                <div className=" header-logo-area d-flex justify-content-between" style={{ marginBottom: "2%" }}>
                    <div className="header-site-branding"style={{marginLeft:"-20px"}}>
                        <Link to="/" className="header-logo-link">
                            <img src="./assets/image/hapitate.png" alt="Hapitate" className="img-header-logo pl-3 ml-2 pt-3" width="100%" height="40" />
                        </Link>
                        <div id="mobile" className='d-none'>
                        <div className="header-icon header-icon__user-account dropdown animate-dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="My Account" data-bs-original-title="" title="">
                            <Link className="dropdown-toggle" to="/my-account" data-bs-toggle="dropdown"><i className="fa fa-user-o" aria-hidden="true"></i></Link>
                            
                        </div>
                        <div className="header-icon header-icon__cart animate-dropdown dropdown" data-bs-toggle="tooltip"  data-bs-placement="bottom" data-bs-title="Cart" data-bs-original-title="" title="">
                            <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                <span class="cart-items-count count header-icon-counter">1</span>
                                <span className="cart-items-total-price total-price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">₹</span>0.00</bdi></span></span>
                            </a>
                           
                        </div>
                        </div>
                    </div>
                    <div className="input-group col-lg-4 pt-2" style={{marginRight: "4%"}}>
                        <div className="input-search-field">
                            <div className="search input-group mb-3">
                                <input type="text" className="form-control input" placeholder="Search for Healthy Products" name="email" style={{ border: '2px solid #060632' }} aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="input-group-prepend ">
                                    <span className="input-group-text sidecurve" id="basic-addon1">
                                        <i className="fa fa-search "></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="header-icons col-auto d-flex justify-content-end align-items-center" style={{marginRight: "-6%"}}>
                        <div className="header-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Compare" data-bs-original-title="" title="">
                           
                              <a href='/compare' className='link'> 
                              <div className="tooltip"><i className="fa fa-retweet iconhover" aria-hidden="true"></i>
                                <span className="tooltiptext">Compare</span>
                              </div>
                                
                               
                             </a>
                           
                        </div>
                        <div className="header-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Wishlist" data-bs-original-title="" title="">
                            <Link to="/wishlist" style={{ color: '#FFF' }}>
                                <i className="fa fa-heart-o iconhover" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="header-icon header-icon__user-account dropdown animate-dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="My Account" data-bs-original-title="" title="">
                            <a className="dropdown-toggle link" href="/my-account"   data-bs-toggle="dropdown"><i className="fa fa-user-o iconhover" aria-hidden="true"></i></a>
                            <ul className="dropdown-menu dropdown-menu-user-account">
                                <li>
                                    <div className="register-sign-in-dropdown-inner">
                                        <div className="sign-in">
                                            <p>Returning Customer ?</p>
                                            <div className="sign-in-action"><a href="#" className="sign-in-button">Sign in</a></div>
                                        </div>
                                        <div className="register">
                                            <p>Don't have an account ?</p>
                                            <div className="register-action"><a href="#">Register</a></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="header-icon header-icon__cart animate-dropdown dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cart" data-bs-original-title="" title="">
                            <a className="dropdown-toggle link" href="#" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-bag-shopping"></i>
                                <span className="cart-items-count count header-icon-counter">0</span>
                                <span className="cart-items-total-price total-price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">₹</span>0.00</bdi></span></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-mini-cart border-bottom-0-last-child">
                                <li>
                                    <div className="widget_shopping_cart_content border-bottom-0-last-child">
                                        <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
            <div className='container-fluid'>
                <nav className="navbar navbar-dark   navbar-expand-lg" id="myNavbar">

                    <ul className="navbar-nav   nav-fill">

                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b> Breakfast</b></a>
                            <div className="dropdown-menu dropdown-menu" aria-labelledby="servicesDropdown">

                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Oats</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Poha</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Amaranth</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Cereals</a>
                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/breakfast.png" width="150" height="150" data-src="../assets/image/breakfast.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/breakfast.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/breakfast.png 500w" data-was-processed="true" />
                                        </div>
                                    </div>
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Granola</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Muesli</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Quinoa</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Nutty Magic</a>
                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/breakfast2.png" width="150" height="150" data-src="./wp-content/uploads/2021/07/breakfast2-150x150.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/breakfast2.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/breakfast2.png 500w" data-was-processed="true" />
                                        </div>
                                    </div>
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Porridge</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Ready to Eat</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Spreads & Dips</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Beverages</a>
                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/breakfast3.png" width="150" height="150" data-src="./assets/image/breakfast3.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/breakfast3.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/breakfast3.png  500w" data-was-processed="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid vc_custom_1625223403740">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_single_image wpb_content_element vc_align_left">
                                                    <figure class="wpb_wrapper vc_figure">
                                                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/cc.png" width="1153" height="120"
                                                                data-src="./wp-content/uploads/2021/07/cc.png"
                                                                class="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy"
                                                                data-srcset="./wp-content/uploads/2021/07/cc.png 1153w, ./wp-content/uploads/2021/07/cc-300x31.png 300w, ./wp-content/uploads/2021/07/cc-1024x107.png 1024w, ./wp-content/uploads/2021/07/cc-768x80.png 768w, ./wp-content/uploads/2021/07/cc-600x62.png 600w"
                                                                data-sizes="(max-width: 1153px) 100vw, 1153px" sizes="(max-width: 1153px) 100vw, 1153px"
                                                                srcset="./wp-content/uploads/2021/07/cc.png 1153w, ./wp-content/uploads/2021/07/cc-300x31.png 300w, ./wp-content/uploads/2021/07/cc-1024x107.png 1024w, ./wp-content/uploads/2021/07/cc-768x80.png 768w, ./wp-content/uploads/2021/07/cc-600x62.png 600w"
                                                                data-was-processed="true" /><noscript><img width="1153" height="120"
                                                                    src="./wp-content/uploads/2021/07/cc.png"
                                                                    class="vc_single_image-img attachment-full" alt="" loading="lazy"
                                                                    srcset="./wp-content/uploads/2021/07/cc.png 1153w, ./wp-content/uploads/2021/07/cc-300x31.png 300w, ./wp-content/uploads/2021/07/cc-1024x107.png 1024w, ./wp-content/uploads/2021/07/cc-768x80.png 768w, ./wp-content/uploads/2021/07/cc-600x62.png 600w"
                                                                    sizes="(max-width: 1153px) 100vw, 1153px" /></noscript>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Snacks</b></a>
                            <div className="dropdown-menu dropdown-menu" aria-labelledby="servicesDropdown">

                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>   Cookies</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Crackers</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Snacking Bars</a>

                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/snack1.png" width="150" height="150" data-src="./assets/image/snack1.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/snack1.png 150w, ./assets/image/snack1.png 300w, ./assets/image/snack1.png 100w, ./assets/image/snack1.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/snack1.png 500w" data-was-processed="true" />
                                        </div>
                                    </div>
                                    <div className='py-4 d-flex px-3'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Indian Mix</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Puffs</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Roasted Mix</a>
                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/snack2.png" width="150" height="150" data-src="./assets/image/snack2.png" className=" vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/snack2.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/snack2.png 500w" data-was-processed="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_single_image wpb_content_element vc_align_left">
                                                    <figure class="wpb_wrapper vc_figure">
                                                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/layouts2.png" width="1153"
                                                                height="120" data-src="./wp-content/uploads/2021/07/layouts2.png"
                                                                class="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy"
                                                                data-srcset="./wp-content/uploads/2021/07/layouts2.png 1153w, ./wp-content/uploads/2021/07/layouts2-300x31.png 300w, ./wp-content/uploads/2021/07/layouts2-1024x107.png 1024w, ./wp-content/uploads/2021/07/layouts2-768x80.png 768w, ./wp-content/uploads/2021/07/layouts2-600x62.png 600w"
                                                                data-sizes="(max-width: 1153px) 100vw, 1153px" sizes="(max-width: 1153px) 100vw, 1153px"
                                                                srcset="./wp-content/uploads/2021/07/layouts2.png 1153w, ./wp-content/uploads/2021/07/layouts2-300x31.png 300w, ./wp-content/uploads/2021/07/layouts2-1024x107.png 1024w, ./wp-content/uploads/2021/07/layouts2-768x80.png 768w, ./wp-content/uploads/2021/07/layouts2-600x62.png 600w"
                                                                data-was-processed="true" /><noscript><img width="1153" height="120"
                                                                    src="./wp-content/uploads/2021/07/layouts2.png"
                                                                    class="vc_single_image-img attachment-full" alt="" loading="lazy"
                                                                    srcset="./wp-content/uploads/2021/07/layouts2.png 1153w, ./wp-content/uploads/2021/07/layouts2-300x31.png 300w, ./wp-content/uploads/2021/07/layouts2-1024x107.png 1024w, ./wp-content/uploads/2021/07/layouts2-768x80.png 768w, ./wp-content/uploads/2021/07/layouts2-600x62.png 600w"
                                                                    sizes="(max-width: 1153px) 100vw, 1153px" /></noscript>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Beveranges</b></a>
                            <div className="dropdown-menu dropdown-menu" style={{ marginLeft: "-153%" }} aria-labelledby="servicesDropdown">

                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>   Exotic Coffee</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Health Drinks</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Herbal Tea</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Plant Based</a>
                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/Beverages.png" width="1400" height="250" data-src="./assets/image/Beverages.png" className="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/Beverages.png 1024w, ./assets/image/Beverages.png 768w, ./assets/image/Beverages.png 600w" data-sizes="(max-width: 1400px) 100vw, 1400px" sizes="(max-width: 1400px) 100vw, 1400px" srcSet="./assets/image/Beverages.png 1400w, ./assets/image/Beverages.png 300w, ./assets/image/Beverages.png 1024w, ./assets/image/Beverages.png 768w, ./assets/image/Beverages.png 600w" data-was-processed="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_single_image wpb_content_element vc_align_left">
                                                    <figure class="wpb_wrapper vc_figure">
                                                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/layouts3.png" width="1153"
                                                                height="124" data-src="./wp-content/uploads/2021/07/layouts3.png"
                                                                class="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy"
                                                                data-srcset="./wp-content/uploads/2021/07/layouts3.png 1153w, ./wp-content/uploads/2021/07/layouts3-300x32.png 300w, ./wp-content/uploads/2021/07/layouts3-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts3-768x83.png 768w, ./wp-content/uploads/2021/07/layouts3-600x65.png 600w"
                                                                data-sizes="(max-width: 1153px) 100vw, 1153px" sizes="(max-width: 1153px) 100vw, 1153px"
                                                                srcset="./wp-content/uploads/2021/07/layouts3.png 1153w, ./wp-content/uploads/2021/07/layouts3-300x32.png 300w, ./wp-content/uploads/2021/07/layouts3-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts3-768x83.png 768w, ./wp-content/uploads/2021/07/layouts3-600x65.png 600w"
                                                                data-was-processed="true" /><noscript><img width="1153" height="124"
                                                                    src="./wp-content/uploads/2021/07/layouts3.png"
                                                                    class="vc_single_image-img attachment-full" alt="" loading="lazy"
                                                                    srcset="./wp-content/uploads/2021/07/layouts3.png 1153w, ./wp-content/uploads/2021/07/layouts3-300x32.png 300w, ./wp-content/uploads/2021/07/layouts3-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts3-768x83.png 768w, ./wp-content/uploads/2021/07/layouts3-600x65.png 600w"
                                                                    sizes="(max-width: 1153px) 100vw, 1153px" /></noscript>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Grocery</b></a>
                            <div className="dropdown-menu dropdown-menu" style={{ marginLeft: "-201%" }} aria-labelledby="servicesDropdown">

                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/breakfast3.png" width="150" height="150" data-src="./assets/image/Grocery1.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/Grocery1.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/Grocery1.png 500w" data-was-processed="true" />
                                        </div>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Grains</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Pulses</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Flours</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Organic Fruits & Vegetable's</a>
                                        </div>

                                    </div>
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/Grocery2.png" width="150" height="150" data-src="./assets/image/Grocery2.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/Grocery2.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/Grocery2.png 500w" data-was-processed="true" />
                                        </div>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Desi Ghee</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Pure Cooking Oil</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Spices & Herbs</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Natural Salts</a>
                                        </div>

                                    </div>
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/Grocery2.png" width="150" height="150" data-src="./assets/image/Grocery2.png" className="vc_single_image-img attachment-thumbnail litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/Grocery2.png 500w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcSet="./assets/image/Grocery2.png 500w" data-was-processed="true" />
                                        </div>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Sugar Replacements</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> After Meals</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Healthy Spreads</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Dairy & Alternatives</a>
                                        </div>

                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_single_image wpb_content_element vc_align_left">
                                                    <figure class="wpb_wrapper vc_figure">
                                                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/layouts4.png" width="1153"
                                                                height="124" data-src="./wp-content/uploads/2021/07/layouts4.png"
                                                                class="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy"
                                                                data-srcset="./wp-content/uploads/2021/07/layouts4.png 1153w, ./wp-content/uploads/2021/07/layouts4-300x32.png 300w, ./wp-content/uploads/2021/07/layouts4-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts4-768x83.png 768w, ./wp-content/uploads/2021/07/layouts4-600x65.png 600w"
                                                                data-sizes="(max-width: 1153px) 100vw, 1153px" sizes="(max-width: 1153px) 100vw, 1153px"
                                                                srcset="./wp-content/uploads/2021/07/layouts4.png 1153w, ./wp-content/uploads/2021/07/layouts4-300x32.png 300w, ./wp-content/uploads/2021/07/layouts4-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts4-768x83.png 768w, ./wp-content/uploads/2021/07/layouts4-600x65.png 600w"
                                                                data-was-processed="true" /><noscript><img width="1153" height="124"
                                                                    src="./wp-content/uploads/2021/07/layouts4.png"
                                                                    class="vc_single_image-img attachment-full" alt="" loading="lazy"
                                                                    srcset="./wp-content/uploads/2021/07/layouts4.png 1153w, ./wp-content/uploads/2021/07/layouts4-300x32.png 300w, ./wp-content/uploads/2021/07/layouts4-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts4-768x83.png 768w, ./wp-content/uploads/2021/07/layouts4-600x65.png 600w"
                                                                    sizes="(max-width: 1153px) 100vw, 1153px" /></noscript>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>SuperFoods</b></a>
                            <div className="dropdown-menu dropdown-menu" style={{ marginLeft: "-236%" }} aria-labelledby="servicesDropdown">

                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Meal Replacements</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Protein Bars</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Super Seeds</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Trail Mix </a>
                                        </div>
                                        <div>
                                            <img data-lazyloaded="1" src="./assets/image/Superfoods.png" width="1400" height="250" data-src="./assets/image/Superfoods.png" className="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy" data-srcSet="./assets/image/Superfoods.png 1400w,./assets/image/Superfoods.png 300w, ./assets/image/Superfoods.png 1024w, ./assets/image/Superfoods.png 768w, ./assets/image/Superfoods.png 600w" data-sizes="(max-width: 1400px) 100vw, 1400px" sizes="(max-width: 1400px) 100vw, 1400px" srcSet="./assets/image/Superfoods.png 1400w,./assets/image/Superfoods.png 300w, ./assets/image/Superfoods.png 1024w, ./assets/image/Superfoods.png 768w, ./assets/image/Superfoods.png 600w" data-was-processed="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_single_image wpb_content_element vc_align_left">
                                                    <figure class="wpb_wrapper vc_figure">
                                                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/layouts5.png" width="1153"
                                                                height="124" data-src="./wp-content/uploads/2021/07/layouts5.png"
                                                                class="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy"
                                                                data-srcset="./wp-content/uploads/2021/07/layouts5.png 1153w, ./wp-content/uploads/2021/07/layouts5-300x32.png 300w, ./wp-content/uploads/2021/07/layouts5-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts5-768x83.png 768w, ./wp-content/uploads/2021/07/layouts5-600x65.png 600w"
                                                                data-sizes="(max-width: 1153px) 100vw, 1153px" sizes="(max-width: 1153px) 100vw, 1153px"
                                                                srcset="./wp-content/uploads/2021/07/layouts5.png 1153w, ./wp-content/uploads/2021/07/layouts5-300x32.png 300w, ./wp-content/uploads/2021/07/layouts5-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts5-768x83.png 768w, ./wp-content/uploads/2021/07/layouts5-600x65.png 600w"
                                                                data-was-processed="true" /><noscript><img width="1153" height="124"
                                                                    src="./wp-content/uploads/2021/07/layouts5.png"
                                                                    class="vc_single_image-img attachment-full" alt="" loading="lazy"
                                                                    srcset="./wp-content/uploads/2021/07/layouts5.png 1153w, ./wp-content/uploads/2021/07/layouts5-300x32.png 300w, ./wp-content/uploads/2021/07/layouts5-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts5-768x83.png 768w, ./wp-content/uploads/2021/07/layouts5-600x65.png 600w"
                                                                    sizes="(max-width: 1153px) 100vw, 1153px" /></noscript>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Nutrition’s</b></a>
                            <div className="dropdown-menu dropdown-menu" style={{ marginLeft: "-457%" }} aria-labelledby="servicesDropdown">
                                <div className="dropdown-header"><h4>Women's Care</h4> </div>
                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='pt-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Women's Sport Nutrition</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Protein Blends</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Detox Mix</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Keto Friendly</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Metabolism</a>
                                        </div>

                                    </div>
                                    <div className='py-4'>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Skin & Hair Care</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Acne Control</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Hormonal Balance</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Pregnant Moms</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Bone Strength</a>

                                    </div>
                                    <div className='py-4'>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Blood Pressure</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>   Heart & Brain</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Hypertension's</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Weight Gain</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Weight Loss</a>
                                    </div>
                                    <div className='py-4'>
                                        <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/womenscaree.png" width="950" height="300" data-src="./wp-content/uploads/2021/07/womenscaree.png" className="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy" data-srcSet="./wp-content/uploads/2021/07/womenscaree.png 950w, ./wp-content/uploads/2021/07/womenscaree-300x95.png 300w, ./wp-content/uploads/2021/07/womenscaree-768x243.png 768w, ./wp-content/uploads/2021/07/womenscaree-600x189.png 600w" data-sizes="(max-width: 950px) 100vw, 950px" sizes="(max-width: 950px) 100vw, 950px" srcSet="./wp-content/uploads/2021/07/womenscaree.png 950w, ./wp-content/uploads/2021/07/womenscaree-300x95.png 300w, ./wp-content/uploads/2021/07/womenscaree-768x243.png 768w, ./wp-content/uploads/2021/07/womenscaree-600x189.png 600w" data-was-processed="true" />
                                    </div>
                                </div>


                                <div className="dropdown-header"><h4>Men's Care</h4> </div>
                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Men's Nutrition Food</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Lean Muscle</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Muscle Gain</a>
                                        </div>

                                    </div>
                                    <div className='py-4'>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Detox</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Hypertension</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Blood Pressure Control</a>


                                    </div>
                                    <div className='py-4'>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Protein Blend</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>   Weight Management</a>

                                    </div>
                                    <div className='py-2'>
                                        <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png" width="950" height="300" data-src="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png" className="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy" data-srcSet="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png 950w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-300x95.png 300w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-768x243.png 768w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-600x189.png 600w" data-sizes="(max-width: 950px) 100vw, 950px" sizes="(max-width: 950px) 100vw, 950px" srcSet="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png 950w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-300x95.png 300w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-768x243.png 768w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-600x189.png 600w" data-was-processed="true" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link " href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Kid’s Nutrition</b></a>
                            {/* <a className="nav-link " href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" style={{ whiteSpace: 'nowrap' }} aria-expanded="false">Kid’s Nutrition</a> */}
                        </li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Pet Lovers</b></a>
                            <div className="dropdown-menu dropdown-menu" style={{ marginLeft: "-653%" }} aria-labelledby="servicesDropdown">

                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className='py-4 d-flex'>
                                        <div>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Grain Free Food</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Treats</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Skin Care</a>
                                            <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Grooming</a>
                                        </div>

                                    </div>
                                    <div className='py-4'>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Clothing</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Accessories</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Crates & Beds</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i> Furniture’s</a>

                                    </div>
                                    <div className='py-4'>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Leash, Collar & Harness</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>   Scratchers</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Toys</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>  Bowls & Feeders</a>

                                    </div>
                                    <div className='py-4'>
                                        <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/petscare.png" width="950" height="300" data-src="./wp-content/uploads/2021/07/petscare.png" className="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy" data-srcSet="./wp-content/uploads/2021/07/petscare.png 950w, ./wp-content/uploads/2021/07/petscare-300x95.png 300w, ./wp-content/uploads/2021/07/petscare-768x243.png 768w, ./wp-content/uploads/2021/07/petscare-600x189.png 600w" data-sizes="(max-width: 950px) 100vw, 950px" sizes="(max-width: 950px) 100vw, 950px" srcSet="./wp-content/uploads/2021/07/petscare.png 950w, ./wp-content/uploads/2021/07/petscare-300x95.png 300w, ./wp-content/uploads/2021/07/petscare-768x243.png 768w, ./wp-content/uploads/2021/07/petscare-600x189.png 600w" data-was-processed="true" />
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_single_image wpb_content_element vc_align_left">
                                                    <figure class="wpb_wrapper vc_figure">
                                                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/layouts6.png" width="1153"
                                                                height="124" data-src="./wp-content/uploads/2021/07/layouts6.png"
                                                                class="vc_single_image-img attachment-full litespeed-loaded" alt="" loading="lazy"
                                                                data-srcset="./wp-content/uploads/2021/07/layouts6.png 1153w, ./wp-content/uploads/2021/07/layouts6-300x32.png 300w, ./wp-content/uploads/2021/07/layouts6-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts6-768x83.png 768w, ./wp-content/uploads/2021/07/layouts6-600x65.png 600w"
                                                                data-sizes="(max-width: 1153px) 100vw, 1153px" sizes="(max-width: 1153px) 100vw, 1153px"
                                                                srcset="./wp-content/uploads/2021/07/layouts6.png 1153w, ./wp-content/uploads/2021/07/layouts6-300x32.png 300w, ./wp-content/uploads/2021/07/layouts6-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts6-768x83.png 768w, ./wp-content/uploads/2021/07/layouts6-600x65.png 600w"
                                                                data-was-processed="true" /><noscript><img width="1153" height="124"
                                                                    src="./wp-content/uploads/2021/07/layouts6.png"
                                                                    class="vc_single_image-img attachment-full" alt="" loading="lazy"
                                                                    srcset="./wp-content/uploads/2021/07/layouts6.png 1153w, ./wp-content/uploads/2021/07/layouts6-300x32.png 300w, ./wp-content/uploads/2021/07/layouts6-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts6-768x83.png 768w, ./wp-content/uploads/2021/07/layouts6-600x65.png 600w"
                                                                    sizes="(max-width: 1153px) 100vw, 1153px" /></noscript>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Header