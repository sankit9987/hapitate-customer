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
                                <img className="d-block w-100" src="./assets/image/hapitate.png" alt="First slide" style={{ height: "120px", width: "70px" }} />
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

                                <img className="d-block w-100" src="./assets/image/hapitate.png" alt="First slide" style={{ height: "120px", width: "70px" }} />
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
                style={{ position: "relative", left: "-31.5px", boxSizing: "border-box", width: "100%" }}>
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
                className="vc_row wpb_row vc_row-fluid"
                style={{ position: "relative", left: "-31.5px", boxSizing: "border-box", width: "1263px" }}>
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
            <FeaturedProductDetail />
        </Layout >
    )
}

export default Main;