import React from 'react'
import { Link } from 'react-router-dom';


function Header2() {
  return (
    <div>
        <div className="top-bar hidden-lg-down py-2 d-none d-xl-block">
    <div className="container clearfix">
        <ul id="menu-top-bar-left" className="nav nav-inline float-start electro-animate-dropdown flip" style={{    marginRight: "-3%"}}>
            <li id="menu-item-3233" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3233"><a
                    title="Welcome to Your Healthy Appetite Store" href="#">Welcome to Your Healthy Appetite Store</a>
            </li>
        </ul>
        <ul id="menu-top-bar-right" style={{    marginRight: "-2%"}} className="nav nav-inline float-end electro-animate-dropdown flip">
            <li id="menu-item-5596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5596"><a
                    title="Shop" href="#"><i class="fa-solid fa-bag-shopping"></i>Shop</a></li>
            <li id="menu-item-5565" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5565"><Link title="My Account" to="/dashboard">
                            <i className="fa fa-user px-2" ></i>My Account
                        </Link></li>
            <li id="menu-item-4105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4105"><Link title="Track Your Order" to="/tracking">
                            <i className="fa fa-truck" aria-hidden="true"></i>Track Your Order
                        </Link></li>
            <li id="menu-item-5566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5566"><a title="Sell on Hapitate" href="https://vendor.hapitate.in/" target="_blank">
                        <i className="fa fa-map-marker px-2" ></i>Sell on Hapitate
                    </a></li>
        </ul>
    </div>
</div>
<div className="sticky-wrapper stick-here">
    <header id="masthead" className="site-header header-v3 stick-this">
        <div className="container hidden-lg-down d-none d-xl-block">
            <div className="masthead row align-items-center">
                <div className="header-logo-area d-flex justify-content-between align-items-center" style={{marginLeft: "-1%"}}>
                    <div className="header-site-branding">
                        <a href="/" className="header-logo-link">
                            <img src="./assets/image/hapitate.png" alt="Hapitate"
                                className="img-header-logo" width="143" height="48"/>
                        </a>
                    </div>
                    <div className="off-canvas-navigation-wrapper off-canvas-hide-in-desktop d-xl-none">
                        <div className="off-canvas-navbar-toggle-buttons clearfix">
                            <button className="navbar-toggler navbar-toggle-hamburger " type="button">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                            <button className="navbar-toggler navbar-toggle-close " type="button">
                                <i className="ec ec-close-remove"></i>
                            </button>
                        </div>
                        <div className="off-canvas-navigation light" id="default-oc-header">
                            <ul id="menu-all-departments-menu" className="nav nav-inline yamm">
                                <li id="menu-item-5466"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5466"><a
                                        title="Login &amp; Signup" href="./my-account/index.html"><i
                                            className="ec ec-user"></i>Login &amp; Signup</a></li>
                                <li id="menu-item-5450"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5450"><a
                                        title="Value of the Day" href="./value-of-the-day/index.html">Value of the
                                        Day</a></li>
                                <li id="menu-item-5451"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5451"><a
                                        title="Top 100 Offers" href="./top-100-offers/index.html">Top 100 Offers</a>
                                </li>
                                <li id="menu-item-5465"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5465"><a
                                        title="New Arrivals" href="./new-arrivals/index.html">New Arrivals</a></li>
                                <li id="menu-item-5467"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5467"><a
                                        title="My Orders" href="https://hapitate.com/my-account/orders/">My Orders</a>
                                </li>
                                <li id="menu-item-5477"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5477"><a
                                        title="Compare" href="./compare/index.html">Compare</a></li>
                                <li id="menu-item-5473"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5473"><a
                                        title="My Wishlist" href="./wishlist/index.html">My Wishlist</a></li>
                                <li id="menu-item-5472"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5472"><a
                                        title="Track your Order" href="./track-your-order/index.html">Track your
                                        Order</a></li>
                                <li id="menu-item-5476"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5476"><a
                                        title="Lost Password" href="https://hapitate.com/my-account/lost-password/">Lost
                                        Password</a></li>
                                <li id="menu-item-5474"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5474"><a
                                        title="Help Center" href="./contact/index.html">Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <form className="navbar-search col" method="get" action="./" autocomplete="off">
                    <label className="sr-only screen-reader-text visually-hidden" for="search">Search for:</label>
                    <div className="input-group" style={{width:"106%",marginLeft: "-2%"}}>
                        <div className="input-search-field">
                            <span className="twitter-typeahead" style={{position: "relative", display: "inline-block"}}><input
                                    type="text" id="search"
                                    className="form-control search-field product-search-field tt-input" dir="ltr" value=""
                                    name="s" placeholder="Search for Healthy Products" autocomplete="off"
                                    spellcheck="false" aria-activedescendant="" aria-owns="search_listbox"
                                    role="combobox" aria-readonly="true" aria-autocomplete="list"
                                    style={{position: "relative", verticalAlign: "top" ,borderTopLeftRadius: "27px",borderBottomLeftRadius: "27px"}}/><span role="status"
                                    aria-live="polite"
                                    style={{position: "absolute", padding: "0px", border: "0px", height: "1px", width: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap"}}></span>
                                <pre aria-hidden="true" style={{position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: "Inter, &quot;Open Sans&quot HelveticaNeue-Light, Helvetica Neue Light&quot,Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif", fontSize: "14px", fontStyle: "normal", fontVariant: "normal", fontWeight: "400", wordSpacing: "0px", letterSpacing: "0px", textIndent: "0px", textRendering: "auto", textTransform: "none"}}></pre>
                                <div role="listbox" className="tt-menu"
                                    style={{position: "absolute", top: "100%", left: "0px", zIndex: "100", display: "none"}}>
                                    <div role="presentation" className="tt-dataset tt-dataset-search"></div>
                                </div>
                            </span>
                        </div>
                        <div className="input-group-btn" style={{marginTop: "-2px"}}>
                            <input type="hidden" id="search-param" name="post_type" value="product"/>
                            <button type="submit" className="" style={{backgroundColor: "#0b1c28",borderTopRightRadius: "27px",borderBottomRightRadius: "27px"}}><i className="fa fa-search" style={{color:"white"}}></i></button>
                        </div>
                    </div>
                </form>
                <div className="header-icons col-auto d-flex justify-content-end align-items-center" style={{marginRight:"-2%"}}>
                    <div className="header-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Compare"
                        data-bs-original-title="" title="">
                        <Link to="/compare">
                                <i className="fa fa-retweet" aria-hidden="true"></i>
                            </Link>
                    </div>
                    <div className="header-icon" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        data-bs-title="Wishlist" data-bs-original-title="" title="">
                        <Link to="/wishlist">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                            </Link>
                    </div>
                    <div className="header-icon header-icon__user-account dropdown animate-dropdown"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="My Account"
                        data-bs-original-title="" title="">
                        <Link className="dropdown-toggle" to="/my-account" data-bs-toggle="dropdown"><i className="fa fa-user-o" aria-hidden="true"></i></Link>
                        <ul className="dropdown-menu dropdown-menu-user-account">
                            <li>
                                <div className="register-sign-in-dropdown-inner">
                                    <div className="sign-in">
                                        <p>Returning Customer ?</p>
                                        <div className="sign-in-action"><a href="./my-account/index.html"
                                                className="sign-in-button">Sign in</a></div>
                                    </div>
                                    <div className="register">
                                        <p>Don't have an account ?</p>
                                        <div className="register-action"><a href="./my-account/index.html">Register</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="header-icon header-icon__cart animate-dropdown dropdown" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" data-bs-title="Cart" data-bs-original-title="" title="">
                        <a className="dropdown-toggle" href="./cart/index.html" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-bag-shopping"></i>
                            <span className="cart-items-count count header-icon-counter">0</span>
                            <span className="cart-items-total-price total-price"><span
                                    className="woocommerce-Price-amount amount"><bdi><span
                                            className="woocommerce-Price-currencySymbol">₹</span>0.00</bdi></span></span>
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
            </div>
            <div className="electro-navbar-primary electro-animate-dropdown" style={{backgroundColor:"#0b1c28"}}>
                <div className="container">
                    <ul id="menu-navbar-primary" style={{marginLeft: "-1.6%"}} className="nav navbar-nav yamm">
                        <li id="menu-item-5791"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5791 dropdown">
                            <a title="Breakfast" href="#" style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}} className="dropdown-toggle"
                                aria-haspopup="true" data-hover="dropdown">Breakfast</a>
                            <ul role="menu" className="dropdown-menu">
                                <li id="menu-item-5797"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5797">
                                    <div className="yamm-content">
                                        <p></p>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/oats/">▶
                                                                                        &nbsp;&nbsp;Oats</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/poha/">▶
                                                                                        &nbsp;&nbsp;Poha</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/amaranth/">▶
                                                                                        &nbsp;&nbsp;Amaranth</a><br/>
                                                                                    <a href="https://hapitate.com/product-category/healthy-breakfast/cereals/">▶
                                                                                        &nbsp;&nbsp;Cereals</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/breakfast1-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast1-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast1-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast1.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/breakfast1-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast1-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast1-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast1.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="/assets/image/breakfast.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/breakfast2-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast2-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast2-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast2.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a style={{color:"white"}}
                                                                                        href="#">▶
                                                                                        &nbsp;&nbsp;Granola</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/muesli/">▶
                                                                                        &nbsp;&nbsp;Muesli</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/quinoa/">▶
                                                                                        &nbsp;&nbsp;Quinoa</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/nutty-magic/">▶
                                                                                        &nbsp;&nbsp;Nutty Magic</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/breakfast2-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast2-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast2-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast2.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/breakfast2-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast2-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast2-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast2.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="/assets/image/breakfast.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/breakfast2-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast2-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast2-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast2.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/porridge/">▶
                                                                                        &nbsp;&nbsp;Porridge</a><br/><a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/ready-to-eat/">▶
                                                                                        &nbsp;&nbsp;Ready to
                                                                                        Eat</a><br/><a
                                                                                        href="https://hapitate.com/product-category/healthy-breakfast/healthy-spreads-dips/">▶
                                                                                        &nbsp;&nbsp;Spreads &amp;
                                                                                        Dips</a><br/><a
                                                                                        href="#"style={{color:"white"}}>▶
                                                                                        &nbsp;&nbsp;Beverages</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                    src="/assets/image/breakfast.png"
                                                                                    width="150" height="150"
                                                                                    data-src="/assets/image/breakfast.png"
                                                                                    className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                    alt="" loading="lazy"
                                                                                    data-srcset="./wp-content/uploads/2021/07/breakfast3-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast3-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast3-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast3.png 500w"
                                                                                    data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                    sizes="(max-width: 150px) 100vw, 150px"
                                                                                    srcset="./wp-content/uploads/2021/07/breakfast3-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast3-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast3-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast3.png 500w"
                                                                                    data-was-processed="true"/><noscript><img
                                                                                        width="150" height="150"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail"
                                                                                        alt="" loading="lazy"
                                                                                        srcset="./wp-content/uploads/2021/07/breakfast2-150x150.png 150w, ./wp-content/uploads/2021/07/breakfast2-300x300.png 300w, ./wp-content/uploads/2021/07/breakfast2-100x100.png 100w, ./wp-content/uploads/2021/07/breakfast2.png 500w"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid vc_custom_1625223403740">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1153" height="120"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/cc.png 1153w, ./wp-content/uploads/2021/07/cc-300x31.png 300w, ./wp-content/uploads/2021/07/cc-1024x107.png 1024w, ./wp-content/uploads/2021/07/cc-768x80.png 768w, ./wp-content/uploads/2021/07/cc-600x62.png 600w"
                                                                        data-sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        srcset="./wp-content/uploads/2021/07/cc.png 1153w, ./wp-content/uploads/2021/07/cc-300x31.png 300w, ./wp-content/uploads/2021/07/cc-1024x107.png 1024w, ./wp-content/uploads/2021/07/cc-768x80.png 768w, ./wp-content/uploads/2021/07/cc-600x62.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1153" height="120"
                                                                            src="./wp-content/uploads/2021/07/cc.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/cc.png 1153w, ./wp-content/uploads/2021/07/cc-300x31.png 300w, ./wp-content/uploads/2021/07/cc-1024x107.png 1024w, ./wp-content/uploads/2021/07/cc-768x80.png 768w, ./wp-content/uploads/2021/07/cc-600x62.png 600w"
                                                                            sizes="(max-width: 1153px) 100vw, 1153px"/></noscript>
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
                        </li>
                        <li id="menu-item-5793"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5793 dropdown">
                            <a title="Snacks" href="" className="dropdown-toggle"
                                aria-haspopup="true" style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}} data-hover="dropdown">Snacks</a>
                            <ul role="menu" className=" dropdown-menu">
                                <li id="menu-item-5808"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5808">
                                    <div className="yamm-content">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div
                                                            className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p style={{textAlign: "left"}}><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/cookies/">&nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        &nbsp; &nbsp; &nbsp;▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/cookies/">Cookies</a>
                                                                                </p>
                                                                                <p style={{textAlign: "left"}}><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/crackers/">&nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        &nbsp; &nbsp; &nbsp;▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/crackers/">Crackers</a>
                                                                                </p>
                                                                                <p style={{textAlign: "left"}}><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/snacking-bars/">&nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        &nbsp; &nbsp; &nbsp;▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/snacking-bars/">Snacking
                                                                                        Bars</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/snack1-150x150.png 150w, ./wp-content/uploads/2021/07/snack1-300x300.png 300w, ./wp-content/uploads/2021/07/snack1-100x100.png 100w, ./wp-content/uploads/2021/07/snack1.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/snack1-150x150.png 150w, ./wp-content/uploads/2021/07/snack1-300x300.png 300w, ./wp-content/uploads/2021/07/snack1-100x100.png 100w, ./wp-content/uploads/2021/07/snack1.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="./wp-content/uploads/2021/07/snack1-150x150.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/snack1-150x150.png 150w, ./wp-content/uploads/2021/07/snack1-300x300.png 300w, ./wp-content/uploads/2021/07/snack1-100x100.png 100w, ./wp-content/uploads/2021/07/snack1.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div
                                                            className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p style={{textAlign: "left"}}><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/indian-mix/">&nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/indian-mix/">Indian
                                                                                        Mix</a></p>
                                                                                <p style={{textAlign: "left"}}><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/puffs/">&nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/puffs/">Puffs</a>
                                                                                </p>
                                                                                <p style={{textAlign: "left"}}><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/roasted-mix/">&nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        &nbsp; &nbsp; &nbsp; &nbsp;▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/nutritional-snacks/roasted-mix/">Roasted
                                                                                        Mix</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/Snack2-150x150.png 150w, ./wp-content/uploads/2021/07/Snack2-300x300.png 300w, ./wp-content/uploads/2021/07/Snack2-100x100.png 100w, ./wp-content/uploads/2021/07/Snack2.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/Snack2-150x150.png 150w, ./wp-content/uploads/2021/07/Snack2-300x300.png 300w, ./wp-content/uploads/2021/07/Snack2-100x100.png 100w, ./wp-content/uploads/2021/07/Snack2.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="./wp-content/uploads/2021/07/Snack2-150x150.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/Snack2-150x150.png 150w, ./wp-content/uploads/2021/07/Snack2-300x300.png 300w, ./wp-content/uploads/2021/07/Snack2-100x100.png 100w, ./wp-content/uploads/2021/07/Snack2.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1153" height="120"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/layouts2.png 1153w, ./wp-content/uploads/2021/07/layouts2-300x31.png 300w, ./wp-content/uploads/2021/07/layouts2-1024x107.png 1024w, ./wp-content/uploads/2021/07/layouts2-768x80.png 768w, ./wp-content/uploads/2021/07/layouts2-600x62.png 600w"
                                                                        data-sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        srcset="./wp-content/uploads/2021/07/layouts2.png 1153w, ./wp-content/uploads/2021/07/layouts2-300x31.png 300w, ./wp-content/uploads/2021/07/layouts2-1024x107.png 1024w, ./wp-content/uploads/2021/07/layouts2-768x80.png 768w, ./wp-content/uploads/2021/07/layouts2-600x62.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1153" height="120"
                                                                            src="./wp-content/uploads/2021/07/layouts2.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/layouts2.png 1153w, ./wp-content/uploads/2021/07/layouts2-300x31.png 300w, ./wp-content/uploads/2021/07/layouts2-1024x107.png 1024w, ./wp-content/uploads/2021/07/layouts2-768x80.png 768w, ./wp-content/uploads/2021/07/layouts2-600x62.png 600w"
                                                                            sizes="(max-width: 1153px) 100vw, 1153px"/></noscript>
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
                        </li>
                        <li id="menu-item-5788"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5788 dropdown">
                            <a title="Beverages" href="#" style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}} className="dropdown-toggle"
                                aria-haspopup="true" data-hover="dropdown">Beverages</a>
                            <ul role="menu" className=" dropdown-menu">
                                <li id="menu-item-5873"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5873">
                                    <div className="yamm-content">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                            <div className="wpb_column vc_column_container vc_col-sm-3">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/vita-beverages/exotic-coffee/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/vita-beverages/exotic-coffee/">Exotic
                                                                        Coffee</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/vita-beverages/health-drinks/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/vita-beverages/health-drinks/">Health
                                                                        Drinks</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/vita-beverages/herbal-tea/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/vita-beverages/herbal-tea/">Herbal
                                                                        Tea</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/vita-beverages/plant-based/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/vita-beverages/plant-based/">Plant
                                                                        Based</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-9">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1400" height="250"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/Beverages-Final.png 1400w, ./wp-content/uploads/2021/07/Beverages-Final-300x54.png 300w, ./wp-content/uploads/2021/07/Beverages-Final-1024x183.png 1024w, ./wp-content/uploads/2021/07/Beverages-Final-768x137.png 768w, ./wp-content/uploads/2021/07/Beverages-Final-600x107.png 600w"
                                                                        data-sizes="(max-width: 1400px) 100vw, 1400px"
                                                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                                                        srcset="./wp-content/uploads/2021/07/Beverages-Final.png 1400w, ./wp-content/uploads/2021/07/Beverages-Final-300x54.png 300w, ./wp-content/uploads/2021/07/Beverages-Final-1024x183.png 1024w, ./wp-content/uploads/2021/07/Beverages-Final-768x137.png 768w, ./wp-content/uploads/2021/07/Beverages-Final-600x107.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1400" height="250"
                                                                            src="./wp-content/uploads/2021/07/Beverages-Final.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/Beverages-Final.png 1400w, ./wp-content/uploads/2021/07/Beverages-Final-300x54.png 300w, ./wp-content/uploads/2021/07/Beverages-Final-1024x183.png 1024w, ./wp-content/uploads/2021/07/Beverages-Final-768x137.png 768w, ./wp-content/uploads/2021/07/Beverages-Final-600x107.png 600w"
                                                                            sizes="(max-width: 1400px) 100vw, 1400px"/></noscript>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1153" height="124"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/layouts3.png 1153w, ./wp-content/uploads/2021/07/layouts3-300x32.png 300w, ./wp-content/uploads/2021/07/layouts3-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts3-768x83.png 768w, ./wp-content/uploads/2021/07/layouts3-600x65.png 600w"
                                                                        data-sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        srcset="./wp-content/uploads/2021/07/layouts3.png 1153w, ./wp-content/uploads/2021/07/layouts3-300x32.png 300w, ./wp-content/uploads/2021/07/layouts3-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts3-768x83.png 768w, ./wp-content/uploads/2021/07/layouts3-600x65.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1153" height="124"
                                                                            src="./wp-content/uploads/2021/07/layouts3.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/layouts3.png 1153w, ./wp-content/uploads/2021/07/layouts3-300x32.png 300w, ./wp-content/uploads/2021/07/layouts3-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts3-768x83.png 768w, ./wp-content/uploads/2021/07/layouts3-600x65.png 600w"
                                                                            sizes="(max-width: 1153px) 100vw, 1153px"/></noscript>
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
                        </li>
                        <li id="menu-item-5790"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5790 dropdown">
                            <a title="Grocery" href="" className="dropdown-toggle" style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}}
                                aria-haspopup="true" data-hover="dropdown">Grocery</a>
                            <ul role="menu" className=" dropdown-menu">
                                <li id="menu-item-5872"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5872">
                                    <div className="yamm-content">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/grocery1-150x150.png 150w, ./wp-content/uploads/2021/07/grocery1-300x300.png 300w, ./wp-content/uploads/2021/07/grocery1-100x100.png 100w, ./wp-content/uploads/2021/07/grocery1.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/grocery1-150x150.png 150w, ./wp-content/uploads/2021/07/grocery1-300x300.png 300w, ./wp-content/uploads/2021/07/grocery1-100x100.png 100w, ./wp-content/uploads/2021/07/grocery1.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="./wp-content/uploads/2021/07/grocery1-150x150.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/grocery1-150x150.png 150w, ./wp-content/uploads/2021/07/grocery1-300x300.png 300w, ./wp-content/uploads/2021/07/grocery1-100x100.png 100w, ./wp-content/uploads/2021/07/grocery1.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/grocery/grains/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/grains/">Grains</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/pulses/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/pulses/">Pulses</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/stone-grounded-flours/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/stone-grounded-flours/">Flours</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/organic-fruits-vegetables/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/organic-fruits-vegetables/">Organic
                                                                                        Fruits &amp; Vegetable's</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/Grocery22-150x150.png 150w, ./wp-content/uploads/2021/07/Grocery22-300x300.png 300w, ./wp-content/uploads/2021/07/Grocery22-100x100.png 100w, ./wp-content/uploads/2021/07/Grocery22.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/Grocery22-150x150.png 150w, ./wp-content/uploads/2021/07/Grocery22-300x300.png 300w, ./wp-content/uploads/2021/07/Grocery22-100x100.png 100w, ./wp-content/uploads/2021/07/Grocery22.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="./wp-content/uploads/2021/07/Grocery22-150x150.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/Grocery22-150x150.png 150w, ./wp-content/uploads/2021/07/Grocery22-300x300.png 300w, ./wp-content/uploads/2021/07/Grocery22-100x100.png 100w, ./wp-content/uploads/2021/07/Grocery22.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/grocery/desi-ghee/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/desi-ghee/">Desi
                                                                                        Ghee</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/pure-cooking-oil/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/pure-cooking-oil/">Pure
                                                                                        Cooking Oil</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/spices-herbs/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/spices-herbs/">Spices
                                                                                        &amp; Herbs</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/natural-salts/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/natural-salts/">Natural
                                                                                        Salts</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_single_image wpb_content_element vc_align_left">
                                                                            <figure className="wpb_wrapper vc_figure">
                                                                                <div
                                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img data-lazyloaded="1"
                                                                                        src="/assets/image/breakfast.png"
                                                                                        width="150" height="150"
                                                                                        data-src="/assets/image/breakfast.png"
                                                                                        className="vc_single_image-img attachment-thumbnail litespeed-loaded"
                                                                                        alt="" loading="lazy"
                                                                                        data-srcset="./wp-content/uploads/2021/07/Grocery3-150x150.png 150w, ./wp-content/uploads/2021/07/Grocery3-300x300.png 300w, ./wp-content/uploads/2021/07/Grocery3-100x100.png 100w, ./wp-content/uploads/2021/07/Grocery3.png 500w"
                                                                                        data-sizes="(max-width: 150px) 100vw, 150px"
                                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                                        srcset="./wp-content/uploads/2021/07/Grocery3-150x150.png 150w, ./wp-content/uploads/2021/07/Grocery3-300x300.png 300w, ./wp-content/uploads/2021/07/Grocery3-100x100.png 100w, ./wp-content/uploads/2021/07/Grocery3.png 500w"
                                                                                        data-was-processed="true"/><noscript><img
                                                                                            width="150" height="150"
                                                                                            src="./wp-content/uploads/2021/07/Grocery3-150x150.png"
                                                                                            className="vc_single_image-img attachment-thumbnail"
                                                                                            alt="" loading="lazy"
                                                                                            srcset="./wp-content/uploads/2021/07/Grocery3-150x150.png 150w, ./wp-content/uploads/2021/07/Grocery3-300x300.png 300w, ./wp-content/uploads/2021/07/Grocery3-100x100.png 100w, ./wp-content/uploads/2021/07/Grocery3.png 500w"
                                                                                            sizes="(max-width: 150px) 100vw, 150px"/></noscript>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/grocery/sugar-replacements/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/sugar-replacements/">Sugar
                                                                                        Replacements</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/after-meals/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/after-meals/">After
                                                                                        Meals</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/healthy-spreads/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/healthy-spreads/">Healthy
                                                                                        Spreads</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/grocery/dairy-alternatives/">▶
                                                                                        &nbsp;</a><a
                                                                                        href="https://hapitate.com/product-category/grocery/dairy-alternatives/">Dairy
                                                                                        &amp; Alternatives</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1153" height="124"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/layouts4.png 1153w, ./wp-content/uploads/2021/07/layouts4-300x32.png 300w, ./wp-content/uploads/2021/07/layouts4-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts4-768x83.png 768w, ./wp-content/uploads/2021/07/layouts4-600x65.png 600w"
                                                                        data-sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        srcset="./wp-content/uploads/2021/07/layouts4.png 1153w, ./wp-content/uploads/2021/07/layouts4-300x32.png 300w, ./wp-content/uploads/2021/07/layouts4-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts4-768x83.png 768w, ./wp-content/uploads/2021/07/layouts4-600x65.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1153" height="124"
                                                                            src="./wp-content/uploads/2021/07/layouts4.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/layouts4.png 1153w, ./wp-content/uploads/2021/07/layouts4-300x32.png 300w, ./wp-content/uploads/2021/07/layouts4-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts4-768x83.png 768w, ./wp-content/uploads/2021/07/layouts4-600x65.png 600w"
                                                                            sizes="(max-width: 1153px) 100vw, 1153px"/></noscript>
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
                        </li>
                        <li id="menu-item-5787"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5787 dropdown">
                            <a title="Superfoods" href="#"style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}}
                                className="dropdown-toggle" aria-haspopup="true" data-hover="dropdown">Superfoods</a>
                            <ul role="menu" className=" dropdown-menu">
                                <li id="menu-item-5871"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5871">
                                    <div className="yamm-content">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                            <div className="wpb_column vc_column_container vc_col-sm-3">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/grocery/meal-replacements/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/grocery/meal-replacements/">Meal
                                                                        Replacements</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/superfoods/protein-bars/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/superfoods/protein-bars/">Protein
                                                                        Bars</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/superfoods/super-seeds/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/superfoods/super-seeds/">Super
                                                                        Seeds</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/superfoods/trail-mix/">&nbsp;
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                        &nbsp; &nbsp;▶ &nbsp;</a><a
                                                                        href="https://hapitate.com/product-category/superfoods/trail-mix/">Trail
                                                                        Mix&nbsp;</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-9">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1400" height="250"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/Superfoodsfinal.png 1400w, ./wp-content/uploads/2021/07/Superfoodsfinal-300x54.png 300w, ./wp-content/uploads/2021/07/Superfoodsfinal-1024x183.png 1024w, ./wp-content/uploads/2021/07/Superfoodsfinal-768x137.png 768w, ./wp-content/uploads/2021/07/Superfoodsfinal-600x107.png 600w"
                                                                        data-sizes="(max-width: 1400px) 100vw, 1400px"
                                                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                                                        srcset="./wp-content/uploads/2021/07/Superfoodsfinal.png 1400w, ./wp-content/uploads/2021/07/Superfoodsfinal-300x54.png 300w, ./wp-content/uploads/2021/07/Superfoodsfinal-1024x183.png 1024w, ./wp-content/uploads/2021/07/Superfoodsfinal-768x137.png 768w, ./wp-content/uploads/2021/07/Superfoodsfinal-600x107.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1400" height="250"
                                                                            src="./wp-content/uploads/2021/07/Superfoodsfinal.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/Superfoodsfinal.png 1400w, ./wp-content/uploads/2021/07/Superfoodsfinal-300x54.png 300w, ./wp-content/uploads/2021/07/Superfoodsfinal-1024x183.png 1024w, ./wp-content/uploads/2021/07/Superfoodsfinal-768x137.png 768w, ./wp-content/uploads/2021/07/Superfoodsfinal-600x107.png 600w"
                                                                            sizes="(max-width: 1400px) 100vw, 1400px"/></noscript>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1153" height="124"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/layouts5.png 1153w, ./wp-content/uploads/2021/07/layouts5-300x32.png 300w, ./wp-content/uploads/2021/07/layouts5-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts5-768x83.png 768w, ./wp-content/uploads/2021/07/layouts5-600x65.png 600w"
                                                                        data-sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        srcset="./wp-content/uploads/2021/07/layouts5.png 1153w, ./wp-content/uploads/2021/07/layouts5-300x32.png 300w, ./wp-content/uploads/2021/07/layouts5-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts5-768x83.png 768w, ./wp-content/uploads/2021/07/layouts5-600x65.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1153" height="124"
                                                                            src="./wp-content/uploads/2021/07/layouts5.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/layouts5.png 1153w, ./wp-content/uploads/2021/07/layouts5-300x32.png 300w, ./wp-content/uploads/2021/07/layouts5-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts5-768x83.png 768w, ./wp-content/uploads/2021/07/layouts5-600x65.png 600w"
                                                                            sizes="(max-width: 1153px) 100vw, 1153px"/></noscript>
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
                        </li>
                        <li id="menu-item-5789"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5789 dropdown">
                            <a title="Nutrition's" href="#" style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}} className="dropdown-toggle"
                                aria-haspopup="true" data-hover="dropdown">Nutrition’s</a>
                            <ul role="menu" className=" dropdown-menu">
                                <li id="menu-item-5870"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5870">
                                    <div className="yamm-content">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><strong>Women's Care</strong></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/womens-sport-nutrition/">Women's
                                                                        Sport Nutrition</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/protein-blends/">Protein
                                                                        Blends</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/detox-mix/">Detox
                                                                        Mix</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/keto-friendly/">Keto
                                                                        Friendly</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/metabolism/">Metabolism</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/skin-hair-care/">Skin
                                                                        &amp; Hair Care</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/acne-control/">Acne
                                                                        Control</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/hormonal-balance/">Hormonal
                                                                        Balance</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/pregnant-moms/">Pregnant
                                                                        Moms</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/bone-strength/">Bone
                                                                        Strength</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/blood-pressure/">Blood
                                                                        Pressure</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/heart-brain/">Heart
                                                                        &amp; Brain</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/hypertensions/">Hypertension's</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/weight-gain/">Weight
                                                                        Gain</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/wellness-supplements/womens-care/weight-loss/">Weight
                                                                        Loss</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="950" height="300"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/womenscaree.png 950w, ./wp-content/uploads/2021/07/womenscaree-300x95.png 300w, ./wp-content/uploads/2021/07/womenscaree-768x243.png 768w, ./wp-content/uploads/2021/07/womenscaree-600x189.png 600w"
                                                                        data-sizes="(max-width: 950px) 100vw, 950px"
                                                                        sizes="(max-width: 950px) 100vw, 950px"
                                                                        srcset="./wp-content/uploads/2021/07/womenscaree.png 950w, ./wp-content/uploads/2021/07/womenscaree-300x95.png 300w, ./wp-content/uploads/2021/07/womenscaree-768x243.png 768w, ./wp-content/uploads/2021/07/womenscaree-600x189.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="950" height="300"
                                                                            src="./wp-content/uploads/2021/07/womenscaree.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/womenscaree.png 950w, ./wp-content/uploads/2021/07/womenscaree-300x95.png 300w, ./wp-content/uploads/2021/07/womenscaree-768x243.png 768w, ./wp-content/uploads/2021/07/womenscaree-600x189.png 600w"
                                                                            sizes="(max-width: 950px) 100vw, 950px"/></noscript>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><strong>Men's Fitness</strong></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/mens-sports-nutrition/">Men's
                                                                                        Nutrition</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/lean-muscle/">Lean
                                                                                        Muscle</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/muscle-gain/">Muscle
                                                                                        Gain</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/detox/">Detox</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/hypertension/">Hypertension</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/blood-pressure-control/">Blood
                                                                                        Pressure Control</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                                <div className="vc_column-inner">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="wpb_text_column wpb_content_element ">
                                                                            <div className="wpb_wrapper">
                                                                                <p><a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/protein-blend/">Protein
                                                                                        Blend</a><br/>
                                                                                    <a
                                                                                        href="https://hapitate.com/product-category/wellness-supplements/mens-fitness/weight-management/">Weight
                                                                                        Management</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="950" height="300"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png 950w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-300x95.png 300w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-768x243.png 768w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-600x189.png 600w"
                                                                        data-sizes="(max-width: 950px) 100vw, 950px"
                                                                        sizes="(max-width: 950px) 100vw, 950px"
                                                                        srcset="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png 950w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-300x95.png 300w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-768x243.png 768w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-600x189.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="950" height="300"
                                                                            src="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/Mens-Fitnesss-copy.png 950w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-300x95.png 300w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-768x243.png 768w, ./wp-content/uploads/2021/07/Mens-Fitnesss-copy-600x189.png 600w"
                                                                            sizes="(max-width: 950px) 100vw, 950px"/></noscript>
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
                        </li>
                        <li id="menu-item-5792" 
                            className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5792"><a style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}}
                                title="Kid's Nutrition" href="#">Kid’s
                                Nutrition</a></li>
                        <li id="menu-item-5786"
                            className="yamm-fw menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-5786 dropdown">
                            <a title="Pet Lovers" href="#" style={{color:"white",backgroundColor:"rgb(11, 28, 40)",fontSize:"0.875rem"}}
                                className="dropdown-toggle" aria-haspopup="true" data-hover="dropdown">Pet Lovers</a>
                            <ul role="menu" className=" dropdown-menu">
                                <li id="menu-item-5869"
                                    className="menu-item menu-item-type-post_type menu-item-object-mas_static_content menu-item-5869">
                                    <div className="yamm-content">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/grain-free-food/">▶
                                                                        Grain Free Food</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/treats/">▶
                                                                        Treats</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/skin-care/">▶
                                                                        Skin Care</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/grooming/">▶
                                                                        Grooming</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/clothing/">▶
                                                                        Clothing</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/accessories/">▶
                                                                        Accessories</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/crates-beds/">▶
                                                                        Crates &amp; Beds</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/furnitures/">▶
                                                                        Furniture’s</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/leash-collar-harness/">▶
                                                                    </a><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/leash-collar-harness/">Leash,
                                                                        Collar &amp; Harness</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/scratchers/">▶
                                                                    </a><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/scratchers/">Scratchers</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/toys/">▶
                                                                    </a><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/toys/">Toys</a><br/>
                                                                    <a
                                                                        href="https://hapitate.com/product-category/pet-lovers/bowls-feeders/">▶
                                                                    </a><a
                                                                        href="https://hapitate.com/product-category/pet-lovers/bowls-feeders/">Bowls
                                                                        &amp; Feeders</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="950" height="300"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/petscare.png 950w, ./wp-content/uploads/2021/07/petscare-300x95.png 300w, ./wp-content/uploads/2021/07/petscare-768x243.png 768w, ./wp-content/uploads/2021/07/petscare-600x189.png 600w"
                                                                        data-sizes="(max-width: 950px) 100vw, 950px"
                                                                        sizes="(max-width: 950px) 100vw, 950px"
                                                                        srcset="./wp-content/uploads/2021/07/petscare.png 950w, ./wp-content/uploads/2021/07/petscare-300x95.png 300w, ./wp-content/uploads/2021/07/petscare-768x243.png 768w, ./wp-content/uploads/2021/07/petscare-600x189.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="950" height="300"
                                                                            src="./wp-content/uploads/2021/07/petscare.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/petscare.png 950w, ./wp-content/uploads/2021/07/petscare-300x95.png 300w, ./wp-content/uploads/2021/07/petscare-768x243.png 768w, ./wp-content/uploads/2021/07/petscare-600x189.png 600w"
                                                                            sizes="(max-width: 950px) 100vw, 950px"/></noscript>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_empty_space" style={{height: "20px"}}><span
                                                                className="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                                            <figure className="wpb_wrapper vc_figure">
                                                                <div
                                                                    className="vc_single_image-wrapper   vc_box_border_grey">
                                                                    <img data-lazyloaded="1"
                                                                        src="/assets/image/breakfast.png"
                                                                        width="1153" height="124"
                                                                        data-src="/assets/image/breakfast.png"
                                                                        className="vc_single_image-img attachment-full litespeed-loaded"
                                                                        alt="" loading="lazy"
                                                                        data-srcset="./wp-content/uploads/2021/07/layouts6.png 1153w, ./wp-content/uploads/2021/07/layouts6-300x32.png 300w, ./wp-content/uploads/2021/07/layouts6-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts6-768x83.png 768w, ./wp-content/uploads/2021/07/layouts6-600x65.png 600w"
                                                                        data-sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        sizes="(max-width: 1153px) 100vw, 1153px"
                                                                        srcset="./wp-content/uploads/2021/07/layouts6.png 1153w, ./wp-content/uploads/2021/07/layouts6-300x32.png 300w, ./wp-content/uploads/2021/07/layouts6-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts6-768x83.png 768w, ./wp-content/uploads/2021/07/layouts6-600x65.png 600w"
                                                                        data-was-processed="true"/><noscript><img
                                                                            width="1153" height="124"
                                                                            src="./wp-content/uploads/2021/07/layouts6.png"
                                                                            className="vc_single_image-img attachment-full"
                                                                            alt="" loading="lazy"
                                                                            srcset="./wp-content/uploads/2021/07/layouts6.png 1153w, ./wp-content/uploads/2021/07/layouts6-300x32.png 300w, ./wp-content/uploads/2021/07/layouts6-1024x110.png 1024w, ./wp-content/uploads/2021/07/layouts6-768x83.png 768w, ./wp-content/uploads/2021/07/layouts6-600x65.png 600w"
                                                                            sizes="(max-width: 1153px) 100vw, 1153px"/></noscript>
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container hidden-xl-up d-xl-none">
            <div className="mobile-header-v1 row align-items-center handheld-stick-this">
                <div className="off-canvas-navigation-wrapper off-canvas-hide-in-desktop d-xl-none">
                    <div className="off-canvas-navbar-toggle-buttons clearfix">
                        <button className="navbar-toggler navbar-toggle-hamburger " type="button">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        <button className="navbar-toggler navbar-toggle-close " type="button">
                            <i className="ec ec-close-remove"></i>
                        </button>
                    </div>
                    <div className="off-canvas-navigation light" id="default-oc-header">
                        <ul id="menu-all-departments-menu-1" className="nav nav-inline yamm">
                            <li id="menu-item-5466"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5466"><a
                                    title="Login &amp; Signup" href="./my-account/index.html"><i
                                        className="ec ec-user"></i>Login &amp; Signup</a></li>
                            <li id="menu-item-5450"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5450"><a
                                    title="Value of the Day" href="./value-of-the-day/index.html">Value of the Day</a>
                            </li>
                            <li id="menu-item-5451"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5451"><a
                                    title="Top 100 Offers" href="./top-100-offers/index.html">Top 100 Offers</a></li>
                            <li id="menu-item-5465"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5465"><a
                                    title="New Arrivals" href="./new-arrivals/index.html">New Arrivals</a></li>
                            <li id="menu-item-5467"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5467"><a
                                    title="My Orders" href="https://hapitate.com/my-account/orders/">My Orders</a></li>
                            <li id="menu-item-5477"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5477"><a
                                    title="Compare" href="./compare/index.html">Compare</a></li>
                            <li id="menu-item-5473"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5473"><a
                                    title="My Wishlist" href="./wishlist/index.html">My Wishlist</a></li>
                            <li id="menu-item-5472"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5472"><a
                                    title="Track your Order" href="./track-your-order/index.html">Track your Order</a>
                            </li>
                            <li id="menu-item-5476"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5476"><a
                                    title="Lost Password" href="https://hapitate.com/my-account/lost-password/">Lost
                                    Password</a></li>
                            <li id="menu-item-5474"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5474"><a
                                    title="Help Center" href="./contact/index.html">Help Center</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-logo">
                    <a href="./index.html" className="header-logo-link">
                        <img src="./assets/image/hapitate.png" alt="Hapitate" className="img-header-logo"
                            width="143" height="48"/>
                    </a>
                </div>
                <div className="handheld-header-links">
                    <ul className="columns-3">
                        <li className="search">
                            <a>Search</a>
                            <div className="site-search">
                                <div className="widget woocommerce widget_product_search">
                                    <form role="search" method="get" className="woocommerce-product-search" action="./">
                                        <label className="screen-reader-text"
                                            for="woocommerce-product-search-field-0">Search for:</label>
                                        <span className="twitter-typeahead"
                                            style={{position: "relative", display: "inline-block"}}><input type="search"
                                                id="woocommerce-product-search-field-0" className="search-field tt-input"
                                                placeholder="Search products…" value="" name="s" spellcheck="false"
                                                dir="auto" aria-activedescendant=""
                                                aria-owns="woocommerce-product-search-field-0_listbox" role="combobox"
                                                aria-readonly="true" aria-autocomplete="list"
                                                style={{position: "relative", verticalAlign: "top"}}/><span role="status"
                                                aria-live="polite"
                                                style={{position: "absolute", padding: "0px", border: "0px", height: "1px", width: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap"}}></span>
                                            <pre aria-hidden="true"
                                                style={{position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: "Inter, Open Sans, HelveticaNeue-Light, Helvetica Neue Light,Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif", fontSize: "14px", fontStyle: "normal", fontVariant: "normal", fontWeight: "400", wordSpacing: "0px", letterSpacing: "0px", textIndent: "0px", textRendering: "auto", textTransform: "none"}}></pre>
                                            <div role="listbox" className="tt-menu"
                                                style={{position: "absolute", top: "100%", left: "0px", zIndex: "100", display: "none"}}>
                                                <div role="presentation" className="tt-dataset tt-dataset-search"></div>
                                            </div>
                                        </span>
                                        <button type="submit" value="Search">Search</button>
                                        <input type="hidden" name="post_type" value="product"/>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="my-account">
                            <a href="./my-account/index.html"><i class="fa fa-user-o" aria-hidden="true"></i></a>
                        </li>
                        <li className="cart">
                            <a className="footer-cart-contents" href="./cart/index.html" title="View your shopping cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                                <span className="cart-items-count count">0</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="site-search">
                    <div className="widget woocommerce widget_product_search">
                        <form role="search" method="get" className="woocommerce-product-search" action="./">
                            <label className="screen-reader-text" for="woocommerce-product-search-field-1">Search
                                for:</label>
                            <span className="twitter-typeahead" style={{position: "relative", display: "inline-block"}}><input
                                    type="search" id="woocommerce-product-search-field-1" className="search-field tt-input"
                                    placeholder="Search products…" value="" name="s" spellcheck="false" dir="auto"
                                    aria-activedescendant="" aria-owns="woocommerce-product-search-field-1_listbox"
                                    role="combobox" aria-readonly="true" aria-autocomplete="list"
                                    style={{position: "relative", verticalAlign: "top"}}/><span role="status"
                                    aria-live="polite"
                                    style={{position: "absolute", padding: "0px", border: "0px", height: "1px", width: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap"}}></span>
                                <pre aria-hidden="true"
                                    style={{position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: "Inter, &quot;Open Sans&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif", fontSize: "14px", fontStyle: "normal", fontVariant: "normal", fontWeight: "400", wordSpacing: "0px", letterSpacing: "0px", textIndent: "0px", textRendering: "auto", textTransform: "none"}}></pre>
                                <div role="listbox" className="tt-menu"
                                    style={{position: "absolute", top: "100%", left: "0px", zIndex: "100", display: "none"}}>
                                    <div role="presentation" className="tt-dataset tt-dataset-search"></div>
                                </div>
                            </span>
                            <button type="submit"><i class="fa fa-search"></i></button>
                            <input type="hidden" name="post_type" value="product"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div></div>
  )
}

export default Header2