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
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
                </ol>
                <div className="carousel-inner d-flex justify-content-between">
                    <div className="carousel-item active " style={{ backgroundImage: `url(./assets/image/Slider-BG.jpg)` }}>
                        <div className='row'>
                            <div className='col-lg-7 justify-content-start'>
                                <h3 className='text-muted' style={{ textAlign: "center", fontSize: "393%", fontWeight: "100" }}>Plant-Based</h3>
                                <h1 style={{ textAlign: "center", fontSize: "393%" }}><b>Nutrition</b></h1>
                                <img className="d-block w-100" src="./assets/image/hapitate.png" alt="First slide" style={{ height: "120px", width: "70px" }} />
                            </div>
                            <div className='col-lg-5 justify-content-end pt-3'>
                                <h1 style={{ fontWeight: "100", margin: "0" }} className="d-flex"><i className="fa fa-chevron-circle-right " aria-hidden="true"></i><p className="px-2">Better Metabolism</p></h1>
                                <h1 style={{ fontWeight: "100", margin: "0" }} className="d-flex"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><p className="px-2">Better Immunity</p></h1>
                                <h1 style={{ fontWeight: "100", margin: "0" }} className="d-flex"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><p className="px-2">Better Strength</p></h1>
                                <p className='mx-5'><button><b>START BUYING <i className="fa fa-angle-right mx-3 d-none" aria-hidden="true"></i></b></button></p>
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
                style={{ position: "relative", left: "-31.5px", boxSizing: "border-box", width: "1263px" }}>
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
            <FeaturedProductDetail/>
        </Layout >
    )
}

export default Main;