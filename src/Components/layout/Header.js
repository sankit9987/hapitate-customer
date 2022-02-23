import React from 'react'
import './style/style.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="top-bar d-xl-block">
            <div className="clearfix d-flex justify-content-between">
                <ul id="menu-top-bar-left" className="nav nav-inline float-start electro-animate-dropdown flip py-2">
                    <li id="menu-item-3233" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3233">
                        <a title="Welcome to Your Healthy Appetite Store" href="#">Welcome to Your Healthy Appetite Store
                        </a>
                    </li>
                </ul>
                <ul id="menu-top-bar-right" className="nav nav-inline float-end py-2 electro-animate-dropdown flip">
                    <li id="menu-item-5596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5596">
                        <a title="Shop" href="./shop/index.html">
                            <i className="fa fa-shopping-bag px-2" ></i>Shop
                        </a>
                    </li>
                    <li id="menu-item-5565" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5565">
                        <Link title="My Account" to="my-account">
                            <i className="fa fa-user-o px-2" ></i>My Account
                        </Link>
                    </li>
                    <li id="menu-item-4105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4105">
                        <a title="Track Your Order" href="./track-your-order/index.html">
                            <i className="fa fa-truck" aria-hidden="true"></i>Track Your Order
                        </a>
                    </li>

                    <li id="menu-item-5566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5566"><a title="Sell on Hapitate" href="https://vendor.hapitate.in/" target="_blank">
                        <i className="fa fa-map-marker px-2" ></i>Sell on Hapitate
                    </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className='row'>
            <div className=" header-logo-area d-flex justify-content-between" style={{ marginBottom: "2%" }}>
                <div className="header-site-branding col-lg-2">
                    <a href="./index.html" className="header-logo-link">
                        <img src="./assets/image/hapitate.png" alt="Hapitate" className="img-header-logo pt-3" width="135" style={{ margin: "-24px 34%" }} height="40" />
                    </a>
                </div>
                <div className="input-group col-lg-4">
                    <div className=" input-search-field">
                        <div className="search input-group mb-3">
                            <input type="email" className="form-control input" placeholder="Type Email Address"name="email" aria-label="Username"aria-describedby="basic-addon1"/>
                            <div className="input-group-prepend ">
                                <span className="input-group-text sidecurve" id="basic-addon1">
                                    <i className="fa fa-search "></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header-icons col-auto d-flex justify-content-end align-items-center">
                    <div className="header-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Compare" data-bs-original-title="" title="">
                        <a href="./compare/index.html">
                        <i className="fa fa-retweet" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="header-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Wishlist" data-bs-original-title="" title="">
                        <a href="./wishlist/index.html">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="header-icon header-icon__user-account dropdown animate-dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="My Account" data-bs-original-title="" title="">
                        <a className="dropdown-toggle" href="./my-account/index.html" data-bs-toggle="dropdown"><i className="fa fa-user-o" aria-hidden="true"></i></a>
                        <ul className="dropdown-menu dropdown-menu-user-account">
                            <li>
                                <div className="register-sign-in-dropdown-inner">
                                    <div className="sign-in">
                                        <p>Returning Customer ?</p>
                                        <div className="sign-in-action"><a href="./my-account/index.html" className="sign-in-button">Sign in</a></div>
                                    </div>
                                    <div className="register">
                                        <p>Don't have an account ?</p>
                                        <div className="register-action"><a href="./my-account/index.html">Register</a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="header-icon header-icon__cart animate-dropdown dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cart" data-bs-original-title="" title="">
                        <a className="dropdown-toggle" href="./cart/index.html" data-bs-toggle="dropdown">
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
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
            <div className='container-fluid '>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>Breakfast</b>    </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>Snacks</b>   </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>Beverages</b>   </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>Grocery</b>   </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>SuperFoods</b>   </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>Nutrition's</b>   </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <b>Kid's Nutrition</b>   </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  <b>Pet Lover's</b>  </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Header