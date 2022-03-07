import React from 'react';
import Layout from '../Components/layout/Layout';
import '../Components/layout/style/style.css';
import FeaturedProductDetail from '../Components/layout/FeaturedProductDetail';

function Main() {
    return (
        <Layout>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner d-flex justify-content-between">
                    <div className="carousel-item active " style={{ backgroundImage: `url("./assets/image/Slider-BG.jpg")`, backgroundSize: "cover", backgroundRepeat: "round" }}>
                        <div className='row'>
                            <div className='col-lg-7 justify-content-start'>
                                <h3 className='text-muted' style={{ textAlign: "center", fontSize: "393%", fontWeight: "100" }}>Plant-Based</h3>
                                <h1 style={{ textAlign: "center", fontSize: "393%" }}><b>Nutrition</b></h1>
                                <img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/oziva.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" class="tp-rs-img rs-lazyload litespeed-loaded" width="709" height="283" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/oziva.png" data-no-retina="" data-was-processed="true" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/oziva.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/oziva.png"  style={{ position: "relative", height:" 100%" ,width: "100%" }} />
                            </div>
                            <div className='col-lg-5 justify-content-end pt-3'>
                                <h1 style={{ fontWeight: "100", margin: "0" }} className="d-flex"><i className="fa fa-chevron-circle-right " style={{ fontSize: "55%" }} aria-hidden="true"></i><p className="px-2" style={{ fontSize: "40%" }}>Better Metabolism</p></h1>
                                <h1 style={{ fontWeight: "100", margin: "0" }} className="d-flex"><i className="fa fa-chevron-circle-right" style={{ fontSize: "55%" }} aria-hidden="true"></i><p className="px-2" style={{ fontSize: "40%" }}>Better Immunity</p></h1>
                                <h1 style={{ fontWeight: "100", margin: "0" }} className="d-flex"><i className="fa fa-chevron-circle-right" style={{ fontSize: "55%" }} aria-hidden="true"></i><p className="px-2" style={{ fontSize: "40%" }}>Better Strength</p></h1>
                                <p className='mx-5'><button><b>START BUYING <i className="fa fa-angle-right mx-3 " aria-hidden="true"></i></b></button></p>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url("./assets/image/Slider-BG.jpg")`, backgroundSize: "cover", backgroundRepeat: "round" }}>
                        <div className='row'>
                            <div className='col-lg-7 justify-content-start'>
                                <h3 className='text-muted ' style={{ textAlign: "center", fontSize: "393%", fontWeight: "100" }}>Fiber Rich</h3>
                                <h1 className="text-dark" style={{ textAlign: "center", fontSize: "393%" }}><b>Breakfast</b></h1>
                                <div className='d-flex justify-content-center'>
                                    <h3> <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>High-Protein</h3>
                                    <h3 className="pl-2"><i className="fa fa-check-circle" aria-hidden="true"></i>Plant-Based</h3>
                                </div>
                                <p className='mx-5 text-center py-5'><button><b>START BUYING </b></button></p>

                            </div>
                            <div className='col-lg-5 justify-content-end pt-3'>
                            <div className='d-flex'>
                            <img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element11.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" class="tp-rs-img rs-lazyload error" width="425" height="646" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element11.png" data-no-retina="" data-was-processed="true" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element11.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element11.png" style={{position: "relative", height: "100%",width: "34%"}}/>
                            <img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-seeds.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" class="tp-rs-img rs-lazyload error" width="556" height="959" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-seeds.png" data-no-retina="" data-was-processed="true" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-seeds.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-seeds.png" style={{position: "relative", height: "100%", width: "34%"}}/>
                            <img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" class="tp-rs-img rs-lazyload error" width="212" height="321" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element.png" data-no-retina="" data-was-processed="true" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element.png" style={{position: "relative", height: "100%", width: "34%"}}></img>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" id="banner"
                className="vc_row wpb_row vc_row-fluid ml-3"
                style={{ position: "relative", boxSizing: "border-box", width: "104%" }}>
                <div className="wpb_column vc_column_container vc_col-sm-11 ">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="features-list clearfix row row-cols-lg-5">
                                <div className="feature">
                                    <div className="media">
                                        <div className="media-left media-middle feature-icon">
                                            <i className="ec ec-tag"></i>
                                        </div>
                                        <div className="media-body media-middle feature-text">
                                            <strong>Only Best</strong> Brands
                                        </div>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="media">
                                        <div className="media-left media-middle feature-icon">
                                            <i className="ec ec-customers"></i>
                                        </div>
                                        <div className="media-body media-middle feature-text">
                                            <strong>99% Positive</strong> Feedbacks
                                        </div>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="media">
                                        <div className="media-left media-middle feature-icon">
                                            <i className="ec ec-payment"></i>
                                        </div>
                                        <div className="media-body media-middle feature-text">
                                            <strong>Secured</strong> Payment System
                                        </div>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="media">
                                        <div className="media-left media-middle feature-icon">
                                            <i className="ec ec-returning"></i>
                                        </div>
                                        <div className="media-body media-middle feature-text">
                                            <strong>Easy &amp; Free</strong>Return Policy
                                        </div>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="media">
                                        <div className="media-left media-middle feature-icon">
                                            <i className="ec ec-transport"></i>
                                        </div>
                                        <div className="media-body media-middle feature-text">
                                            Feedbacks<strong>Free Delivery</strong> from ₹ 499</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true"
                className="vc_row wpb_row container pt-2 pr-5"
                style={{ position: "relative", left: "-29.5px", boxSizing: "border-box", width: "862px" }}>
                <div className="col-xs-12 col-lg-4 col-sm-6 wpb_column vc_column_container vc_col-sm-4">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div
                                className="da-block justify-content-between flex-nowrap align-items-stretch overflow-auto row row-cols-md-2 row-cols-xl-1">
                                <div className="da">
                                    <div className="da-inner p-3 position-relative">
                                        <a className="da-media d-flex stretched-link" href="#">
                                            <div className="da-media-left me-3">
                                                <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/03.png"
                                                    data-src="./wp-content/uploads/2021/07/03.png" alt="" className="litespeed-loaded"
                                                    data-was-processed="true" /><noscript><img
                                                        src="./wp-content/uploads/2021/07/03.png" alt="" /></noscript>
                                            </div>
                                            <div className="da-media-body">
                                                <div className="da-text">
                                                    Catch Healthy<br />
                                                    <strong>Party Stocks</strong>
                                                </div>
                                                <div className="da-action">
                                                    Shop now<i className="fa fa-check-circle" aria-hidden="true"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-4 col-sm-6 wpb_column vc_column_container vc_col-sm-4">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div
                                className="da-block justify-content-between flex-nowrap align-items-stretch overflow-auto row row-cols-md-2 row-cols-xl-1">
                                <div className="da">
                                    <div className="da-inner p-3 position-relative">
                                        <a className="da-media d-flex stretched-link" href="#">
                                            <div className="da-media-left me-3">
                                                <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/testsnack.png"
                                                    data-src="./wp-content/uploads/2021/07/testsnack.png" alt=""
                                                    className="litespeed-loaded" data-was-processed="true" /><noscript><img
                                                        src="./wp-content/uploads/2021/07/testsnack.png" alt="" /></noscript>
                                            </div>
                                            <div className="da-media-body">
                                                <div className="da-text">
                                                    Grab &amp; Go<br />
                                                    The Travel<br />
                                                    Munch</div>
                                                <div className="da-action">
                                                    Shop now<i className="fa fa-check-circle" aria-hidden="true"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-4 col-sm-6 wpb_column vc_column_container vc_col-sm-4">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div
                                className="da-block justify-content-between flex-nowrap align-items-stretch overflow-auto row row-cols-md-2 row-cols-xl-1">
                                <div className="da">
                                    <div className="da-inner p-3 position-relative">
                                        <a className="da-media d-flex stretched-link" href="#">
                                            <div className="da-media-left me-3">
                                                <img data-lazyloaded="1" src="./wp-content/uploads/2021/07/01.png"
                                                    data-src="./wp-content/uploads/2021/07/01.png" alt="" className="litespeed-loaded"
                                                    data-was-processed="true" /><noscript><img
                                                        src="./wp-content/uploads/2021/07/01.png" alt="" /></noscript>
                                            </div>
                                            <div className="da-media-body">
                                                <div className="da-text">
                                                    Booster for<br />
                                                    <b>Workout Mode</b>
                                                </div>
                                                <div className="da-action">
                                                    Shop now<i className="fa fa-check-circle" aria-hidden="true"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true"
    className="vc_row wpb_row col-lg-12 vc_row-fluid vc_column-gap-35 "
    style={{position: "relative", left: "-14.5px", boxSizing: "border-box",/* width: "1263px"*/}}>
    <div className="wpb_column vc_column_container vc_col-sm-6">
        <div className="vc_column-inner">
            <div className="wpb_wrapper">
                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="home-vertical-nav departments-menu-v2">
                                    <div className="dropdown show-dropdown">
                                        <div className="vertical-menu-title departments-menu-v2-title">
                                            <span className="title">Organic Breakfast For Energetic Day.</span>
                                            <a href="#">View All</a>
                                        </div>
                                        <ul id="menu-breakfast" className="yamm dropdown-menu">
                                            <li id="menu-item-7645"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7645">
                                                <a title="Oats" target="_blank"
                                                    href="#">Oats</a></li>
                                            <li id="menu-item-7646"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7646">
                                                <a title="Poha" target="_blank"
                                                    href="#">Poha</a></li>
                                            <li id="menu-item-7653"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7653">
                                                <a title="Cereals" target="_blank"
                                                    href="./product-category/breakfast/cereals/index.html">Cereals</a>
                                            </li>
                                            <li id="menu-item-7648"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7648">
                                                <a title="Super Seeds" target="_blank"
                                                    href="#">Super
                                                    Seeds</a></li>
                                            <li id="menu-item-7647"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7647">
                                                <a title="Nutty Magic" target="_blank"
                                                    href="#">Nutty
                                                    Magic</a></li>
                                            <li id="menu-item-7649"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7649">
                                                <a title="Ready to Eat" target="_blank"
                                                    href="#">Ready to
                                                    Eat</a></li>
                                            <li id="menu-item-7650"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7650">
                                                <a title="Trail Mix" target="_blank"
                                                    href="#">Trail
                                                    Mix</a></li>
                                            <li id="menu-item-7651"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7651">
                                                <a title="Beverages" target="_blank"
                                                    href="#">Beverages</a></li>
                                            <li id="menu-item-7652"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7652">
                                                <a title="Spreads &amp; Dips" target="_blank"
                                                    href="#">Spreads
                                                    &amp; Dips</a></li>
                                        </ul>
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
                                        <a href="#" target="_blank"
                                            className="vc_single_image-wrapper   vc_box_border_grey"><img
                                                data-lazyloaded="1"
                                                src="./wp-content/uploads/2021/07/verticalreadytoeat_breakfast.png"
                                                width="301" height="433"
                                                data-src="./wp-content/uploads/2021/07/verticalreadytoeat_breakfast.png"
                                                className="vc_single_image-img attachment-full litespeed-loaded"
                                                alt="ready to eat healthy breakfast" loading="lazy"
                                                data-srcset="./wp-content/uploads/2021/07/verticalreadytoeat_breakfast.png 301w, ./wp-content/uploads/2021/07/verticalreadytoeat_breakfast-209x300.png 209w"
                                                data-sizes="(max-width: 301px) 100vw, 301px"
                                                sizes="(max-width: 301px) 100vw, 301px"
                                                srcset="./wp-content/uploads/2021/07/verticalreadytoeat_breakfast.png 301w, ./wp-content/uploads/2021/07/verticalreadytoeat_breakfast-209x300.png 209w"
                                                data-was-processed="true"/><noscript><img width="301" height="433"
                                                    src="./wp-content/uploads/2021/07/verticalreadytoeat_breakfast.png"
                                                    className="vc_single_image-img attachment-full"
                                                    alt="ready to eat healthy breakfast" loading="lazy"
                                                    srcset="./wp-content/uploads/2021/07/verticalreadytoeat_breakfast.png 301w, ./wp-content/uploads/2021/07/verticalreadytoeat_breakfast-209x300.png 209w"
                                                    sizes="(max-width: 301px) 100vw, 301px"/></noscript></a>
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
                <div className="products-carousel-tabs">
                    <ul className="nav nav-inline" style={{marginLeft:"0px"}}>
                        <li className="nav-item">
                            <a className="nav-link active" href="#home-tab-61d54c0aba765-0" data-bs-toggle="tab">
                                Granola </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home-tab-61d54c0aba765-1" data-bs-toggle="tab">
                                Muesli </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home-tab-61d54c0aba765-2" data-bs-toggle="tab">
                                Amaranth </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home-tab-61d54c0aba765-3" data-bs-toggle="tab">
                                Quinoa </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home-tab-61d54c0aba765-4" data-bs-toggle="tab">
                                Porridge </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="home-tab-61d54c0aba765-0" role="tabpanel">
                            <div className="woocommerce columns-3 ">
                                <ul data-view="grid" data-bs-toggle="regular-products"
                                    className="products products list-unstyled row g-0 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5">
                                    <li
                                        className="product type-product post-5737 status-publish first instock product_cat-snacking-bars product_tag-roasted-mix has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <img data-lazyloaded="1"
                                                                src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail litespeed-loaded"
                                                                alt="ALT TEXT" loading="lazy"
                                                                data-was-processed="true"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"
                                                                style={{position: "relative"}}><span
                                                                    className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>189.00</bdi></span>
                                                                – <span className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>299.00</bdi></span></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Select options"
                                                            data-bs-original-title="" title=""><a
                                                                href="#"
                                                                data-quantity="1"
                                                                className="button product_type_variable add_to_cart_button"
                                                                data-product_id="5737"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1"
                                                                aria-label="Select options for “Snacking Bars”"
                                                                rel="nofollow">Select options</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5737  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5737"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5737,&quot;parent_product_id&quot;:5737,&quot;product_type&quot;:&quot;variable&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5737"
                                                                        data-product-type="variable"
                                                                        data-original-product-id="5737"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5737">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5736 status-publish instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail litespeed-loaded"
                                                                alt="ALT TEXT" loading="lazy"
                                                                data-was-processed="true"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="#" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5736"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix (Copy)” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5736  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5736"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5736,&quot;parent_product_id&quot;:5736,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5736"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5736"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5736">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5735 status-publish last instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail litespeed-loaded"
                                                                alt="ALT TEXT" loading="lazy"
                                                                data-was-processed="true"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1</div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="#" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5735"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5735  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5735"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5735,&quot;parent_product_id&quot;:5735,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5735"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5735"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5735">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane " id="home-tab-61d54c0aba765-1" role="tabpanel">
                            <div className="woocommerce columns-3 ">
                                <ul data-view="grid" data-bs-toggle="regular-products"
                                    className="products products list-unstyled row g-0 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5">
                                    <li
                                        className="product type-product post-5737 status-publish first instock product_cat-snacking-bars product_tag-roasted-mix has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><span
                                                                    className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>189.00</bdi></span>
                                                                – <span className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>299.00</bdi></span></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Select options"
                                                            data-bs-original-title="" title=""><a
                                                                href="#"
                                                                data-quantity="1"
                                                                className="button product_type_variable add_to_cart_button"
                                                                data-product_id="5737"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1"
                                                                aria-label="Select options for “Snacking Bars”"
                                                                rel="nofollow">Select options</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5737  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5737"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5737,&quot;parent_product_id&quot;:5737,&quot;product_type&quot;:&quot;variable&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5737"
                                                                        data-product-type="variable"
                                                                        data-original-product-id="5737"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5737">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5736 status-publish instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}> <strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="./index.html?add-to-cart=5736" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5736"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix (Copy)” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5736  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5736"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5736,&quot;parent_product_id&quot;:5736,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5736"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5736"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5736">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5735 status-publish last instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1</div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="./index.html?add-to-cart=5735" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5735"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5735  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5735"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5735,&quot;parent_product_id&quot;:5735,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5735"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5735"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5735">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane " id="home-tab-61d54c0aba765-2" role="tabpanel">
                            <div className="woocommerce columns-3 ">
                                <ul data-view="grid" data-bs-toggle="regular-products"
                                    className="products products list-unstyled row g-0 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5">
                                    <li
                                        className="product type-product post-5737 status-publish first instock product_cat-snacking-bars product_tag-roasted-mix has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><span
                                                                    className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>189.00</bdi></span>
                                                                – <span className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>299.00</bdi></span></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Select options"
                                                            data-bs-original-title="" title=""><a
                                                                href="#"
                                                                data-quantity="1"
                                                                className="button product_type_variable add_to_cart_button"
                                                                data-product_id="5737"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1"
                                                                aria-label="Select options for “Snacking Bars”"
                                                                rel="nofollow">Select options</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5737  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5737"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5737,&quot;parent_product_id&quot;:5737,&quot;product_type&quot;:&quot;variable&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5737"
                                                                        data-product-type="variable"
                                                                        data-original-product-id="5737"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5737">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5736 status-publish instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="./index.html?add-to-cart=5736" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5736"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix (Copy)” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5736  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5736"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5736,&quot;parent_product_id&quot;:5736,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5736"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5736"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5736">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5735 status-publish last instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1</div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="./index.html?add-to-cart=5735" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5735"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5735  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5735"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5735,&quot;parent_product_id&quot;:5735,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5735"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5735"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5735">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane " id="home-tab-61d54c0aba765-3" role="tabpanel">
                            <div className="woocommerce columns-3 ">
                                <ul data-view="grid" data-bs-toggle="regular-products"
                                    className="products products list-unstyled row g-0 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5">
                                    <li
                                        className="product type-product post-5737 status-publish first instock product_cat-snacking-bars product_tag-roasted-mix has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><span
                                                                    className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>189.00</bdi></span>
                                                                – <span className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>299.00</bdi></span></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Select options"
                                                            data-bs-original-title="" title=""><a
                                                                href="#"
                                                                data-quantity="1"
                                                                className="button product_type_variable add_to_cart_button"
                                                                data-product_id="5737"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1"
                                                                aria-label="Select options for “Snacking Bars”"
                                                                rel="nofollow">Select options</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5737  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5737"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5737,&quot;parent_product_id&quot;:5737,&quot;product_type&quot;:&quot;variable&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5737"
                                                                        data-product-type="variable"
                                                                        data-original-product-id="5737"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5737">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5736 status-publish instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="#" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5736"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix (Copy)” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5736  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5736"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5736,&quot;parent_product_id&quot;:5736,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5736"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5736"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5736">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5735 status-publish last instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1</div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="#" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5735"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5735  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5735"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5735,&quot;parent_product_id&quot;:5735,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5735"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5735"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5735">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane " id="home-tab-61d54c0aba765-4" role="tabpanel">
                            <div className="woocommerce columns-3 ">
                                <ul data-view="grid" data-bs-toggle="regular-products"
                                    className="products products list-unstyled row g-0 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5">
                                    <li
                                        className="product type-product post-5737 status-publish first instock product_cat-snacking-bars product_tag-roasted-mix has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Snacking Bars</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Snacking Bars</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><span
                                                                    className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>189.00</bdi></span>
                                                                – <span className="woocommerce-Price-amount amount"><bdi><span
                                                                            className="woocommerce-Price-currencySymbol">₹</span>299.00</bdi></span></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Select options"
                                                            data-bs-original-title="" title=""><a
                                                                href="#"
                                                                data-quantity="1"
                                                                className="button product_type_variable add_to_cart_button"
                                                                data-product_id="5737"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1-1"
                                                                aria-label="Select options for “Snacking Bars”"
                                                                rel="nofollow">Select options</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5737  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5737"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5737,&quot;parent_product_id&quot;:5737,&quot;product_type&quot;:&quot;variable&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5737"
                                                                        data-product-type="variable"
                                                                        data-original-product-id="5737"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5737">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5736 status-publish instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)
                                                        </h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span sstyle={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1
                                                    </div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="#" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5736"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix (Copy)” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5736  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5736"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5736,&quot;parent_product_id&quot;:5736,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5736"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5736"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5736">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="product type-product post-5735 status-publish last instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                                        <div className="product-outer product-item__outer">
                                            <div className="product-inner product-item__inner">
                                                <div className="product-loop-header product-item__header">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                        <div className="product-thumbnail product-item__thumbnail">
                                                            <span className="onsale">-<span
                                                                    className="percentage">50%</span></span>
                                                            <img data-lazyloaded="1"
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2NmZDRkYiIvPjwvc3ZnPg=="
                                                                width="300" height="300"
                                                                data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                alt="ALT TEXT" loading="lazy"/><noscript><img width="300"
                                                                    height="300"
                                                                    src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="product-loop-body product-item__body">
                                                    <span className="loop-product-categories"><a
                                                            href="#"
                                                            rel="tag">Roasted Mix</a></span><a
                                                        href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                                    </a>
                                                    <div className="wcfmmp_sold_by_container"><a
                                                            href="#"
                                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                            <div className="wcfm-clearfix"></div>
                                                        </a>
                                                        <div className="wcfmmp_sold_by_wrapper"><a
                                                                href="#"
                                                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                                <span
                                                                    className="wcfmmp_sold_by_label">Store:&nbsp;</span><img
                                                                    data-lazyloaded="1"
                                                                    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                                    className="wcfmmp_sold_by_logo"
                                                                    data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                                        className="wcfmmp_sold_by_logo"
                                                                        src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                                className="wcfm_dashboard_item_title" target="_blank"
                                                                href="#">Hapitate
                                                                Demo</a>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                                            <span style={{width: "0%"}}>
                                                                <strong className="rating">0</strong> out of 5 </span>
                                                        </div>
                                                        <div className="wcfm-clearfix"></div>
                                                        <div className="wcfm_vendor_badges"></div>
                                                        <div className="wcfm-clearfix"></div>
                                                    </div>
                                                    <div className="product-rating">
                                                        <div className="star-rating" title="Rated 0 out of 5"><span
                                                                style={{width: "0%"}}><strong className="rating">0</strong> out
                                                                of 5</span></div> (0)
                                                    </div>
                                                    <div className="product-short-description">
                                                        <p><strong>Health Benefits</strong></p>
                                                        <ul>
                                                            <li>High Protein Immunity Booster</li>
                                                            <li>Healthier Skin, Hairs &amp; Nails</li>
                                                            <li>Healthy Blood Pressure Level</li>
                                                            <li>Lowers Bad Cholesterol</li>
                                                            <li>Baked Not Fried</li>
                                                            <li>Made with Fruit &amp; Nuts</li>
                                                            <li>Organic Super Seeds</li>
                                                            <li>No Processed Sugar</li>
                                                            <li>Rich in Fibre</li>
                                                            <li>Heart Health with Antioxidants</li>
                                                            <li>Boosts Immunity</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1</div>
                                                </div>
                                                <div className="product-loop-footer product-item__footer">
                                                    <div className="price-add-to-cart">
                                                        <span className="price"><span className="electro-price"><ins><span
                                                                        className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                                                <del><span className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                                        <div className="add-to-cart-wrap show-in-mobile"
                                                            data-bs-toggle="tooltip" data-bs-title="Add to cart"
                                                            data-bs-original-title="" title=""><a
                                                                href="#" data-quantity="1"
                                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                                data-product_id="5735"
                                                                data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1"
                                                                aria-label="Add “Roasted Mix” to your cart"
                                                                rel="nofollow">Add to cart</a></div>
                                                    </div>
                                                    <div className="hover-area">
                                                        <div className="action-buttons">
                                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5735  wishlist-fragment on-first-load"
                                                                data-fragment-ref="5735"
                                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5735,&quot;parent_product_id&quot;:5735,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                                <div className="yith-wcwl-add-button">
                                                                    <a href="#"
                                                                        className="add_to_wishlist single_add_to_wishlist"
                                                                        data-product-id="5735"
                                                                        data-product-type="simple"
                                                                        data-original-product-id="5735"
                                                                        data-title="Add to wishlist" rel="nofollow">
                                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i>
                                                                        <span>Add to wishlist</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a href="#"
                                                                className="add-to-compare-link"
                                                                data-product_id="5735">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            <FeaturedProductDetail />
        </Layout >
    )
}

export default Main;