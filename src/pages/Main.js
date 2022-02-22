import React from 'react';
import Layout from '../Components/layout/Layout';
import '../Components/layout/style/style.css';
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
                                <p className='mx-5'><button><b>START BUYING <i class="fa fa-angle-right mx-3 d-none" aria-hidden="true"></i></b></button></p>
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
            {/* <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                    </div> */}

            {/* <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">

                            <rs-fullwidth-wrap id="rev_slider_10_1_forcefullwidth" style={{ marginTop: "0px", marginBottom: "0px" }}>
                                <rs-module-wrap id="rev_slider_10_1_wrapper" data-source="gallery" style={{ visibility: "visiblem", background: "url(&quot;https://hapitate.com/wp-content/uploads/2021/07/Slider-BG.jpg&quot;) center center / cover no-repeat transparent", padding: "0px", margin: "0px auto", height: "422px", display: "block", width: "1263px", position: "absolute", overflow: "visible", "left": "-47px" }}>
                                    <rs-module id="rev_slider_10_1" style={{ height: "422px", width: "1263px", maxHeight: "422px", dataVersion: "6.5.5", dataIdcheck: "true", class: "revslider-initialised ,rev_redraw_on_blurfocus", dataSlideactive: "rs-29" }}>


                                        <rs-bullets style={{ opacity: "1", width: "98px", height: "8px", transform: "translate(-100px, -26px)", top: "100%", left: " 50%", class: "tp-bullets custom horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal noSwipe" }}>
                                            <rs-bullet data-key="rs-29" className="tp-bullet selected" style={{ left: "0px", top: "0px" }}></rs-bullet>
                                            <rs-bullet data-key="rs-30" className="tp-bullet" style={{ left: "18px", top: "0px" }}></rs-bullet>
                                            <rs-bullet data-key="rs-31" className="tp-bullet" style={{ left: "36px", top: "0px" }}></rs-bullet>
                                            <rs-bullet data-key="rs-32" className="tp-bullet" style={{ left: "54px", top: "0px" }}></rs-bullet>
                                            <rs-bullet data-key="rs-33" className="tp-bullet" style={{ left: "72px", top: "0px" }}></rs-bullet>
                                            <rs-bullet data-key="rs-34" className="tp-bullet" style={{ left: "90px", top: "0px" }}></rs-bullet>
                                        </rs-bullets>
                                        <rs-progress style={{ visibility: "hidden" }}>
                                            <rs-progress-bar style={{ background: "rgba(255, 255, 255, 0.5)", transformOrigin: "0% 50%", transform: "translate3d(0px, 0px, 0px) scale(0.6709, 1)" }}></rs-progress-bar>
                                        </rs-progress>
                                        <rs-slides style={{ visibility: "visible", maxHeight: "none", height: "100%", width: "100%", overflow: "hidden" }}>
                                            <rs-slide style={{ position: "absolute", overflow: "hidden", height: "100%", width: "100%", zIndex: "20", opacity: "1", visibility: "inherit", dataKey: "rs-29", dataTitle: "Slide", dataDuration: "6369ms", dataIn: "o:0", dataOut: "a:false", dataOriginalindex: "1", dataOrigindex: "0", dataDescription: "", dataSba: "", dataScrollBased: "false", dataRspausetimeronce: "0", dataIsactiveslide: "true" }}>
                                                <rs-sbg-px>
                                                    <rs-sbg-wrap data-key="rs-29">

                                                        <rs-sbg data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" className="" data-bgcolor="transparent" style={{ width: "100%", height: "100%", dataSrcRsRef: "./wp-content/plugins/revslider/public/assets/assets/transparent.png" }}><canvas style={{width: "100%", height: "100%", backgroundColor: "transparent", opacity: "1", filter: "none"}} width="1263" height="422"></canvas></rs-sbg>
                                                    </rs-sbg-wrap>
                                                </rs-sbg-px>
                                                <noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" title="Home" className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" data-no-retina /></noscript>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 132.5px; top: 27px; z-index: 8; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-2" data-type="image" data-rsp_ch="on" data-xy="xo:13px,13px,10px,8px;y:m;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:680px,680px,544px,477px;h:367px,367px,293px,257px;" data-frame_0="x:50,50,40,35;" data-frame_1="st:300;sp:1200;" data-frame_999="o:0;st:w;sR:7700;" style="z-index: 8; color: rgb(255, 255, 255); width: 680px; height: 367px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true"><img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/2021/07/wholetruth.png" className="tp-rs-img rs-lazyload litespeed-loading" width="2086" height="1126" data-lazyload="//hapitate.com/wp-content/uploads/2021/07/wholetruth.png" data-no-retina="" data-reference="//hapitate.com/wp-content/uploads/2021/07/wholetruth.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/2021/07/wholetruth.png" style="position: relative; height: 100%; width: 100%;" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="2086" height="1126" data-lazyload="//hapitate.com/wp-content/uploads/2021/07/wholetruth.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 893px; top: 33px; z-index: 10; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-5" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:45px,45px,36px,31px;yo:33px,33px,26px,22px;" data-text="w:normal;s:45,45,36,31;l:90,90,72,63;ls:-4,-4,-3,-2;fw:800;" data-dim="minh:0px,none,none,none;" data-frame_0="x:-50,-50,-40,-35;" data-frame_1="st:550;sp:1000;" data-frame_999="o:0;st:w;sR:8700;" style="z-index: 10; font-family: Poppins; height: auto; width: auto; color: rgb(0, 0, 0); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: left; line-height: 90px; letter-spacing: -4px; font-weight: 800; font-size: 45px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">Snack Box
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 804px; top: 33px; z-index: 9; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-6" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:266px,266px,213px,187px;yo:33px,33px,26px,22px;" data-text="w:normal;s:45,45,36,31;l:90,90,72,63;ls:-4,-4,-3,-2;fw:800;" data-dim="minh:0px,none,none,none;" data-frame_0="x:50,50,40,35;" data-frame_1="st:500;sp:1000;" data-frame_999="o:0;st:w;sR:8700;" style="z-index: 9; font-family: Poppins; height: auto; width: auto; color: rgb(0, 0, 0); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: left; line-height: 90px; letter-spacing: -4px; font-weight: 800; font-size: 45px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">The
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 879.5px; top: 81px; z-index: 11; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-8" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:243px,243px,194px,170px;yo:81px,81px,64px,56px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:21px,21px,16px,14px;h:28px,28px,22px,19px;" data-frame_0="y:50,50,40,35;" data-frame_1="st:600;sp:1000;" data-frame_999="o:0;st:w;sR:8700;" style="z-index: 11; color: rgb(255, 255, 255); width: 21px; height: 28px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true"><img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/2021/07/1598122563877.png" className="tp-rs-img rs-lazyload litespeed-loading" width="23" height="30" data-lazyload="//hapitate.com/wp-content/uploads/2021/07/1598122563877.png" data-no-retina="" data-reference="//hapitate.com/wp-content/uploads/2021/07/1598122563877.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/2021/07/1598122563877.png" style="position: relative; height: 100%; width: 100%;" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="23" height="30" data-lazyload="//hapitate.com/wp-content/uploads/2021/07/1598122563877.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 850.5px; top: 15px; z-index: 12; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-9" data-type="text" data-color="#893852" data-rsp_ch="on" data-xy="x:r;xo:231px,231px,184px,161px;yo:15px,15px,12px,10px;" data-text="w:normal;s:35,35,28,24;l:60,60,48,42;ls:-1,-1,0,0;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:660;sp:1000;" data-frame_999="o:0;st:w;sR:8700;" style="z-index: 12; font-family: &quot;Shadows Into Light&quot;; height: auto; width: auto; color: rgb(137, 56, 82); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: left; line-height: 60px; letter-spacing: -1px; font-weight: 400; font-size: 35px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">whole
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 807.5px; top: 98px; z-index: 13; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-11" data-type="text" data-color="#821c3c" data-rsp_ch="on" data-xy="x:r;xo:48px,48px,38px,33px;y:m;yo:-83px,-83px,-66px,-57px;" data-text="w:normal;s:30,30,24,21;l:60,60,48,42;ls:-1,-1,0,0;" data-dim="minh:0px,none,none,none;" data-frame_0="y:50,50,40,35;" data-frame_1="st:750;sp:1000;" data-frame_999="o:0;st:w;sR:8700;" style="z-index: 13; font-family: &quot;Shadows Into Light&quot;; height: auto; width: auto; color: rgb(130, 28, 60); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: left; line-height: 60px; letter-spacing: -1px; font-weight: 400; font-size: 30px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">Muesli, Quinoa, Nuts &amp; Seeds.
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 848.5px; top: 329px; z-index: 17; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;"><a id="slider-10-slide-29-layer-12" className="rs-layer rev-btn rev-hiddenicon" href="https://hapitate.com/product-category/snacks/" target="_self" data-type="button" data-rsp_ch="on" data-xy="x:r;xo:93px,93px,74px,64px;y:b;yo:49px,49px,39px,34px;" data-text="w:normal;s:17,17,13,11;l:20,20,16,14;ls:1,1,0,0;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,9;r:35,35,28,25;b:12,12,10,9;l:35,35,28,25;" data-border="bor:30px,30px,30px,30px;" data-frame_0="y:bottom;" data-frame_1="st:1000;sp:1000;" data-frame_999="o:0;st:w;sR:8700;" data-frame_hover="c:#4ad594;bgc:#fff;bor:30px,30px,30px,30px;sp:200;" style="z-index: 17; background-color: rgb(74, 213, 148); font-family: Roboto; text-transform: uppercase; height: auto; width: auto; color: rgb(255, 255, 255); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: left; line-height: 20px; letter-spacing: 1px; font-weight: 400; font-size: 17px; padding: 12px 35px; border-radius: 30px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" data-idcheck="true" data-stylerecorder="true" data-initialised="true">Start Buying <i className="fa-chevron-right" data-stylerecorder="true" style="text-align: left; letter-spacing: 0px; font-weight: 400;"></i>
                                                        </a></rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 842px; top: 214px; z-index: 16; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-17" data-type="text" data-color="#912748" data-rsp_ch="on" data-xy="x:r;xo:72px,72px,57px,50px;y:m;yo:23px,23px,18px,15px;" data-text="w:normal;s:14,14,11,9;l:40,40,32,28;ls:1,1,0,0;fw:700;a:center;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:900;sp:1000;" data-frame_999="o:0;st:w;" style="z-index: 16; font-family: Roboto; height: auto; width: auto; color: rgb(145, 39, 72); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: center; line-height: 40px; letter-spacing: 1px; font-weight: 700; font-size: 14px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">No false claims • No half-truths
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 829px; top: 169px; z-index: 14; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-24" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:61px,61px,48px,42px;y:m;yo:-22px,-22px,-17px,-14px;" data-text="w:normal;s:14,14,11,9;l:40,40,32,28;ls:1,1,0,0;fw:700;a:center;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:800;sp:1000;" data-frame_999="o:0;st:w;" style="z-index: 14; font-family: Roboto; height: auto; width: auto; color: rgb(0, 0, 0); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: center; line-height: 40px; letter-spacing: 1px; font-weight: 700; font-size: 14px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">• no added color • no preservatives
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap" style="position: absolute; display: block; pointer-events: auto; left: 829px; top: 192px; z-index: 15; visibility: visible; perspective: 601px;">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position: absolute; display: block; overflow: visible;">
                                                            <rs-layer id="slider-10-slide-29-layer-25" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:59px,59px,47px,41px;y:m;yo:1px,1px,0,0;" data-text="w:normal;s:14,14,11,9;l:40,40,32,28;ls:1,1,0,0;fw:700;a:center;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:850;sp:1000;" data-frame_999="o:0;st:w;" style="z-index: 15; font-family: Roboto; height: auto; width: auto; color: rgb(0, 0, 0); text-decoration: none; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; text-align: center; line-height: 40px; letter-spacing: 1px; font-weight: 700; font-size: 14px; transform-origin: 50% 50%; opacity: 1; transform: translate(0px, 0px); visibility: visible;" className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">• no added flavor • no soy or gluten
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                            </rs-slide>
                                            <rs-slide style="position: absolute; overflow: hidden; height: 100%; width: 100%;" data-key="rs-30" data-title="Slide" data-duration="6369ms" data-in="o:0;" data-out="a:false;" data-originalindex="2" data-origindex="1" data-description="" data-sba="" data-scroll-based="false">
                                                <rs-sbg-px>
                                                    <rs-sbg-wrap data-key="rs-30">

                                                        <rs-sbg data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" className="" data-bgcolor="transparent" style="width: 100%; height: 100%;" data-src-rs-ref="./wp-content/plugins/revslider/public/assets/assets/transparent.png"><canvas style="width: 100%; height: 100%;"></canvas></rs-sbg>
                                                    </rs-sbg-wrap>
                                                </rs-sbg-px>
                                                <noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" alt="Slide" title="Home" className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" data-no-retina /></noscript>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-26" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:-31px,-31px,-24px,-21px;y:m;yo:3px,3px,2px,1px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:716px,716px,573px,503px;h:418px,418px,334px,293px;" data-frame_0="x:-50,-50,-40,-35;" data-frame_1="st:400;sp:1000;sR:400;" data-frame_999="o:0;st:w;sR:4969;" style="z-index:8;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-drinks.png" className="tp-rs-img rs-lazyload litespeed-loading" width="985" height="575" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-drinks.png" data-no-retina="" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-drinks.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-drinks.png" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="985" height="575" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-drinks.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-28" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:27px,27px,21px,18px;y:m;yo:37px,37px,29px,25px;" data-text="w:normal;s:18,18,14,12;l:70,70,56,49;ls:-1,-1,0,0;fw:500;" data-dim="minh:0px,none,none,none;" data-frame_0="x:50,50,40,35;" data-frame_1="st:900;sp:1000;sR:900;" data-frame_999="o:0;st:w;sR:4469;" style="z-index:12;font-family:'Poppins';text-transform:uppercase;" className="rs-layer" data-idcheck="true"><i className="fa-check-circle"></i> green-tea extracts
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-33" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:27px,27px,21px,18px;yo:25px,25px,20px,17px;" data-text="w:normal;s:80,80,64,56;l:90,90,72,63;ls:-4,-4,-3,-2;fw:800;" data-dim="minh:0px,none,none,none;" data-frame_0="y:50,50,40,35;" data-frame_1="st:580;sp:1000;sR:580;" data-frame_999="o:0;st:w;sR:4789;" style="z-index:9;font-family:'Poppins';" className="rs-layer" data-idcheck="true">PROTEIN
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-34" data-type="text" data-color="#4ad594" data-rsp_ch="on" data-xy="xo:99px,99px,79px,69px;yo:83px,83px,66px,57px;" data-text="w:normal;s:65,65,52,45;l:110,110,88,77;ls:-6,-6,-4,-3;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:650;sp:1000;sR:650;" data-frame_999="o:0;st:w;sR:4719;" style="z-index:11;font-family:'Montserrat';" className="rs-layer" data-idcheck="true">FOR ALL
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-37" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:27px,27px,21px,18px;y:m;yo:-15px,-15px,-12px,-10px;" data-text="w:normal;s:18,18,14,12;l:70,70,56,49;ls:-1,-1,0,0;fw:500;" data-dim="minh:0px,none,none,none;" data-frame_0="x:50,50,40,35;" data-frame_1="st:770;sp:1000;sR:770;" data-frame_999="o:0;st:w;sR:4599;" style="z-index:14;font-family:'Poppins';text-transform:uppercase;" className="rs-layer" data-idcheck="true"><i className="fa-check-circle"></i> natural chicory root fiber
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-39" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:27px,27px,21px,18px;y:m;yo:11px,11px,8px,7px;" data-text="w:normal;s:18,18,14,12;l:70,70,56,49;ls:-1,-1,0,0;fw:500;" data-dim="minh:0px,none,none,none;" data-frame_0="x:50,50,40,35;" data-frame_1="st:850;sp:1000;sR:850;" data-frame_999="o:0;st:w;sR:4519;" style="z-index:13;font-family:'Poppins';text-transform:uppercase;" className="rs-layer" data-idcheck="true"><i className="fa-check-circle"></i> Anti-biotic free whey
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;"><a id="slider-10-slide-30-layer-43" className="rs-layer rev-btn rev-hiddenicon" href="https://hapitate.com/product-category/beverages/" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="xo:30px,30px,24px,21px;y:b;yo:37px,37px,29px,25px;" data-text="w:normal;s:17,17,13,11;l:20,20,16,14;ls:1,1,0,0;" data-dim="h:50px,50px,40px,35px;minh:0px,none,none,none;" data-padding="t:12,12,10,9;r:35,35,28,25;b:12,12,10,9;l:35,35,28,25;" data-border="bor:30px,30px,30px,30px;" data-frame_0="y:50,50,40,35;" data-frame_1="st:1020;sp:1000;sR:1020;" data-frame_999="o:0;st:w;sR:4349;" data-frame_hover="c:#4ad594;bgc:#fff;boc:#ffcc00;bor:30px,30px,30px,30px;sp:200;" style="z-index:15;background-color:#4ad594;font-family:'Roboto';text-transform:uppercase;" data-idcheck="true">Start Buying <i className="fa-chevron-right"></i>
                                                        </a></rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-30-layer-59" data-type="text" data-color="#ff2d2d" data-rsp_ch="on" data-xy="xo:29px,29px,23px,20px;yo:81px,81px,64px,56px;" data-text="w:normal;s:46,46,36,31;l:60,60,48,42;ls:-1,-1,0,0;" data-dim="minh:0px,none,none,none;" data-btrans="rZ:-20;" data-frame_0="x:-50,-50,-40,-35;" data-frame_1="st:600;sp:1000;" data-frame_999="o:0;st:w;sR:5469;" style="z-index:10;font-family:'Shadows Into Light';" className="rs-layer" data-idcheck="true">Drinks
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                            </rs-slide>
                                            <rs-slide style="position: absolute; overflow: hidden; height: 100%; width: 100%;" data-key="rs-31" data-title="Slide" data-in="o:0;" data-out="a:false;" data-originalindex="3" data-origindex="2" data-description="" data-sba="" data-scroll-based="false">
                                                <rs-sbg-px>
                                                    <rs-sbg-wrap data-key="rs-31">

                                                        <rs-sbg data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" className="" data-bgcolor="transparent" style="width: 100%; height: 100%;"><canvas style="width: 100%; height: 100%;"></canvas></rs-sbg>
                                                    </rs-sbg-wrap>
                                                </rs-sbg-px>
                                                <noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" alt="Slide" title="Home" className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" data-no-retina /></noscript>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-31-layer-45" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:3px,3px,2px,1px;y:m;yo:42px,42px,33px,28px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:182px,182px,145px,127px;h:276px,276px,221px,194px;" data-frame_0="x:-50,-50,-40,-35;" data-frame_1="st:500;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:8;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload litespeed-loaded" width="212" height="321" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element.png" data-no-retina="" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="212" height="321" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-31-layer-46" data-type="image" data-rsp_ch="on" data-xy="x:c;xo:72px,72px,57px,50px;y:m;yo:45px,45px,36px,31px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:180px,180px,144px,126px;h:273px,273px,218px,191px;" data-frame_0="x:50,50,40,35;" data-frame_1="st:600;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:9;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload litespeed-loaded" width="425" height="646" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element11.png" data-no-retina="" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="425" height="646" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/true-element11.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-31-layer-48" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:145px,145px,116px,101px;y:m;yo:11px,11px,8px,7px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:233px,233px,186px,163px;h:402px,402px,321px,281px;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:400;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:10;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload litespeed-loaded" width="556" height="959" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-seeds.png" data-no-retina="" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="556" height="959" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/healthy-seeds.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-31-layer-52" data-type="text" data-color="#5e5e5e" data-rsp_ch="on" data-xy="xo:21px,21px,16px,14px;yo:24px,24px,19px,16px;" data-text="w:normal;s:90,90,72,63;l:110,110,88,77;ls:-6,-6,-4,-3;fw:100;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:700;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:11;font-family:'Montserrat';" className="rs-layer" data-idcheck="true">Fiber Rich
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-31-layer-53" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:27px,27px,21px,18px;yo:107px,107px,85px,74px;" data-text="w:normal;s:80,80,64,56;l:90,90,72,63;ls:-4,-4,-3,-2;fw:800;" data-dim="minh:0px,none,none,none;" data-frame_0="x:-50,-50,-40,-35;" data-frame_1="st:800;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:12;font-family:'Poppins';" className="rs-layer" data-idcheck="true">Breakfast
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-31-layer-54" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:30px,30px,24px,21px;y:m;yo:2px,2px,1px,0;" data-text="w:normal;s:26,26,20,17;l:40,40,32,28;ls:1,1,0,0;" data-dim="minh:0px,none,none,none;" data-frame_0="y:50,50,40,35;" data-frame_1="st:900;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:13;font-family:'Roboto';" className="rs-layer" data-idcheck="true"><i className="fa-arrow-circle-right"></i> High-Protein <i className="fa-check-circle"></i> Plant-Based
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;"><a id="slider-10-slide-31-layer-55" className="rs-layer rev-btn rev-hiddenicon" href="https://hapitate.com/product-category/breakfast/" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="xo:95px,95px,76px,66px;y:b;yo:70px,70px,56px,49px;" data-text="w:normal;s:17,17,13,11;l:20,20,16,14;ls:1,1,0,0;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,9;r:35,35,28,25;b:12,12,10,9;l:35,35,28,25;" data-border="bor:30px,30px,30px,30px;" data-frame_0="y:bottom;" data-frame_1="st:1000;sp:1000;" data-frame_999="o:0;st:w;" data-frame_hover="c:#4ad594;bgc:#fff;bor:30px,30px,30px,30px;sp:200;" style="z-index:14;background-color:#4ad594;font-family:'Roboto';text-transform:uppercase;" data-idcheck="true">Start buying <i className="fa-chevron-right"></i>
                                                        </a></rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                            </rs-slide>
                                            <rs-slide style="position: absolute; overflow: hidden; height: 100%; width: 100%;" data-key="rs-32" data-title="Slide" data-in="o:0;" data-out="a:false;" data-originalindex="4" data-origindex="3" data-description="" data-sba="" data-scroll-based="false">
                                                <rs-sbg-px>
                                                    <rs-sbg-wrap data-key="rs-32">

                                                        <rs-sbg data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" className="" data-bgcolor="transparent" style="width: 100%; height: 100%;"><canvas style="width: 100%; height: 100%;"></canvas></rs-sbg>
                                                    </rs-sbg-wrap>
                                                </rs-sbg-px>
                                                <noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" alt="Slide" title="Home" className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" data-no-retina /></noscript>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-32-layer-60" data-type="image" data-rsp_ch="on" data-xy="y:b;yo:-7px,-7px,-5px,-4px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:728px,728px,582px,511px;h:291px,291px,233px,204px;" data-frame_0="y:50,50,40,35;" data-frame_1="st:400;sp:1000;" data-frame_999="o:0;st:w;" style="z-index:8;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload litespeed-loaded" width="709" height="283" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/oziva.png" data-no-retina="" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="709" height="283" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/oziva.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-32-layer-63" data-type="text" data-color="#8e8e93" data-rsp_ch="on" data-xy="xo:45px,45px,36px,31px;yo:4px,4px,3px,2px;" data-text="w:normal;s:52,52,41,36;l:90,90,72,63;fw:200;" data-dim="minh:0px,none,none,none;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:500;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;" style="z-index:9;font-family:'Montserrat';" className="rs-layer" data-idcheck="true">Plant-Based
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-32-layer-64" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:44px,44px,35px,30px;yo:69px,69px,55px,48px;" data-text="w:normal;s:74,74,59,51;l:90,90,72,63;ls:-4,-4,-3,-2;fw:800;" data-dim="minh:0px,none,none,none;" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:600;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;" style="z-index:10;font-family:'Poppins';" className="rs-layer" data-idcheck="true">Nutrition
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-32-layer-65" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:54px,54px,43px,37px;yo:71px,71px,56px,49px;" data-text="w:normal;s:32,32,25,21;l:45,45,36,31;ls:2,2,1,0;fw:300;" data-dim="minh:0px,none,none,none;" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:800;sp:1000;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;" style="z-index:12;font-family:'Raleway';" className="rs-layer" data-idcheck="true"><i className="fa-chevron-circle-right"></i> Better Immunity
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-32-layer-66" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:16px,16px,12px,10px;yo:23px,23px,18px,15px;" data-text="w:normal;s:32,32,25,21;l:45,45,36,31;ls:2,2,1,0;fw:300;" data-dim="minh:0px,none,none,none;" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:700;sp:1000;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;" style="z-index:11;font-family:'Raleway';" className="rs-layer" data-idcheck="true"><i className="fa-chevron-circle-right"></i> Better Metabolism
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-32-layer-67" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:65px,65px,52px,45px;yo:120px,120px,96px,84px;" data-text="w:normal;s:32,32,25,21;l:45,45,36,31;ls:2,2,1,0;fw:300;" data-dim="minh:0px,none,none,none;" data-frame_0="x:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:900;sp:1000;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;" style="z-index:13;font-family:'Raleway';" className="rs-layer" data-idcheck="true"><i className="fa-chevron-circle-right"></i> Better Strength
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;"><a id="slider-10-slide-32-layer-68" className="rs-layer rev-btn rev-hiddenicon" href="https://hapitate.com/product-category/wellness/" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="x:r;xo:97px,97px,77px,67px;y:m;yo:2px,2px,1px,0;" data-text="w:normal;s:17,17,13,11;l:20,20,16,14;ls:1,1,0,0;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,9;r:35,35,28,25;b:12,12,10,9;l:35,35,28,25;" data-border="bor:30px,30px,30px,30px;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:1000;sp:1000;" data-frame_999="o:0;st:w;" data-frame_hover="c:#4ad594;bgc:#fff;bor:30px,30px,30px,30px;sp:200;" style="z-index:14;background-color:#4ad594;font-family:'Roboto';text-transform:uppercase;" data-idcheck="true">Start Buying <i className="fa-chevron-right"></i>
                                                        </a></rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                            </rs-slide>
                                            <rs-slide style="position: absolute; overflow: hidden; height: 100%; width: 100%;" data-key="rs-33" data-title="Slide" data-duration="6369ms" data-anim="ms:600ms;" data-in="o:0;" data-out="a:false;" data-originalindex="5" data-origindex="4" data-description="" data-sba="" data-scroll-based="false">
                                                <rs-sbg-px>
                                                    <rs-sbg-wrap data-key="rs-33">
                                                        <rs-sbg data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" className="" data-bgcolor="transparent" style="width: 100%; height: 100%;"><canvas style="width: 100%; height: 100%;"></canvas></rs-sbg>
                                                    </rs-sbg-wrap>
                                                </rs-sbg-px>
                                                <noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" title="Home" className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" data-no-retina /></noscript>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-33-layer-0" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:-71px,-71px,-56px,-49px;y:b;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:427px,427px,341px,299px;h:324px,324px,259px,227px;" data-blendmode="darken" data-frame_0="x:-50,-50,-40,-35;" data-frame_1="st:300;sp:1200;sR:300;" data-frame_999="o:0;st:w;sR:7500;" data-frame_hover="e:power0.in;" data-loop_999="e:power1.out;yym:t;yys:t;" style="z-index:8;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload litespeed-loaded" width="1265" height="959" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/plantpower.png" data-no-retina="" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="1265" height="959" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/plantpower.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-33-layer-4" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:24px,24px,19px,16px;yo:17px,17px,13px,11px;" data-text="w:normal;s:42,42,33,28;l:52,52,41,36;fw:900;" data-dim="minh:0px,none,none,none;" data-frame_0="y:50,50,40,35;" data-frame_1="st:890;sp:1110;sR:890;" data-frame_999="o:0;st:w;sR:7000;" style="z-index:10;font-family:'Roboto';text-transform:uppercase;" className="rs-layer" data-idcheck="true">ISOLATES, SUPPLEMENTS, SUPERFOODS
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-33-layer-7" data-type="text" data-color="#4ad594" data-rsp_ch="on" data-xy="xo:387px,387px,309px,271px;yo:39px,39px,31px,27px;" data-text="w:normal;s:40,40,32,28;l:92,92,73,64;fw:300;" data-frame_0="y:-50,-50,-40,-35;" data-frame_1="st:1020;sp:1080;sR:1020;" data-frame_999="o:0;st:w;sR:6900;" style="z-index:11;font-family:'Montserrat';" className="rs-layer" data-idcheck="true">FOR HEALTHY GOALS
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;"><a id="slider-10-slide-33-layer-14" className="rs-layer rev-btn rev-hiddenicon" href="https://hapitate.com/product-category/wellness/mens-fitness/" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="xo:452px,452px,361px,316px;y:b;yo:20px,20px,16px,14px;" data-text="w:normal;s:17,17,13,11;l:20,20,16,14;ls:1,1,0,0;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,9;r:35,35,28,25;b:12,12,10,9;l:35,35,28,25;" data-border="bor:30px,30px,30px,30px;" data-frame_0="y:50,50,40,35;" data-frame_1="st:1470;sp:1000;" data-frame_999="o:0;st:w;sR:6590;" data-frame_hover="c:#4ad594;bgc:#fff;bor:30px,30px,30px,30px;sp:200;" style="z-index:20;background-color:#4ad594;font-family:'Roboto';text-transform:uppercase;" data-idcheck="true">Start Buying <i className="fa-chevron-right"></i>
                                                        </a></rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-33-layer-70" data-type="image" data-rsp_ch="on" data-xy="y:b;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:560px,560px,448px,393px;h:331px,331px,265px,232px;" data-frame_999="o:0;st:w;" style="z-index:21;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" data-src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload litespeed-loaded" width="1440" height="852" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/plant-powe.png" data-no-retina="" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="1440" height="852" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/plant-powe.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                            </rs-slide>
                                            <rs-slide style="position: absolute; overflow: hidden; height: 100%; width: 100%;" data-key="rs-34" data-title="Slide" data-in="o:0;" data-out="a:false;" data-originalindex="6" data-origindex="5" data-description="" data-sba="" data-scroll-based="false">
                                                <rs-sbg-px>
                                                    <rs-sbg-wrap data-key="rs-34">
                                                        <rs-sbg data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" className="" data-bgcolor="transparent" style="width: 100%; height: 100%;" data-src-rs-ref="./wp-content/plugins/revslider/public/assets/assets/transparent.png"><canvas style="width: 100%; height: 100%;"></canvas></rs-sbg>
                                                    </rs-sbg-wrap>
                                                </rs-sbg-px>
                                                <noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" alt="Slide" title="Home" className="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="./wp-content/plugins/revslider/public/assets/assets/transparent.png" data-no-retina /></noscript>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-34-layer-3" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:-122px,-122px,-97px,-85px;y:b;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:922px,922px,738px,648px;h:241px,241px,192px,168px;" data-frame_999="o:0;st:w;" style="z-index:11;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/pet-shop.png" className="tp-rs-img rs-lazyload litespeed-loading" width="999" height="261" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/pet-shop.png" data-no-retina="" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/pet-shop.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/pet-shop.png" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="999" height="261" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/pet-shop.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-34-layer-10" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:61px,61px,48px,42px;y:m;yo:86px,86px,68px,59px;" data-text="w:normal;s:42,42,33,28;l:60,60,48,42;ls:-1,-1,0,0;" data-dim="minh:0px,none,none,none;" data-frame_999="o:0;st:w;" style="z-index:12;font-family:'Shadows Into Light';" className="rs-layer" data-idcheck="true">its Time for
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-34-layer-13" data-type="text" data-color="#f7004e" data-rsp_ch="on" data-xy="xo:61px,61px,48px,42px;y:m;yo:120px,120px,96px,84px;" data-text="w:normal;s:28,28,22,19;l:50,50,40,35;fw:900;" data-dim="minh:0px,none,none,none;" data-frame_999="o:0;st:w;" style="z-index:13;font-family:'Roboto';text-transform:uppercase;" className="rs-layer" data-idcheck="true">- PREMIUM -
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-34-layer-15" data-type="text" data-color="#000000" data-rsp_ch="on" data-xy="xo:52px,52px,41px,36px;y:m;yo:150px,150px,120px,105px;" data-text="w:normal;s:20,20,16,14;l:45,45,36,31;ls:2,2,1,0;fw:700;" data-dim="minh:0px,none,none,none;" data-frame_999="o:0;st:w;" style="z-index:14;font-family:'Raleway';" className="rs-layer" data-idcheck="true">HEALTHY TREATS
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-34-layer-72" data-type="image" data-rsp_ch="on" data-xy="xo:-24px,-24px,-19px,-16px;yo:15px,15px,12px,10px;" data-text="w:normal;s:20,20,16,14;l:0,0,20,17;" data-dim="w:345px,345px,276px,242px;h:286px,286px,229px,201px;" data-frame_999="o:0;st:w;" style="z-index:6;" className="rs-layer" data-idcheck="true"><img data-lazyloaded="1" src="//hapitate.com/wp-content/uploads/revslider/NewSlider/pets.png" className="tp-rs-img rs-lazyload litespeed-loading" width="1024" height="850" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/pets.png" data-no-retina="" data-reference="//hapitate.com/wp-content/uploads/revslider/NewSlider/pets.png" data-src-rs-ref="//hapitate.com/wp-content/uploads/revslider/NewSlider/pets.png" data-was-processed="true" /><noscript><img src="./wp-content/plugins/revslider/public/assets/assets/dummy.png" className="tp-rs-img rs-lazyload" width="1024" height="850" data-lazyload="//hapitate.com/wp-content/uploads/revslider/NewSlider/pets.png" data-no-retina /></noscript>
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;">
                                                            <rs-layer id="slider-10-slide-34-layer-74" data-type="text" data-color="#fc1b62" data-rsp_ch="on" data-xy="x:r;xo:44px,44px,35px,30px;yo:5px,5px,4px,3px;" data-text="w:normal;s:96,96,76,66;l:110,110,88,77;ls:-6,-6,-4,-3;" data-dim="minh:0px,none,none,none;" data-frame_999="o:0;st:w;" style="z-index:8;font-family:'Montserrat';" className="rs-layer" data-idcheck="true">PET LOVERS
                                                            </rs-layer>
                                                        </rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                                <rs-layer-wrap className="rs-parallax-wrap " style=" position:absolute;display:block;;pointer-events:none">
                                                    <rs-loop-wrap style="position:absolute;display:block;">
                                                        <rs-mask-wrap style="position:absolute;display:block;"><a id="slider-10-slide-34-layer-76" className="rs-layer rev-btn rev-hiddenicon" href="https://hapitate.com/product-category/pet-lovers/" target="_self" data-type="button" data-color="#000000" data-rsp_ch="on" data-xy="x:r;yo:109px,109px,87px,76px;" data-text="w:normal;s:17,17,13,11;l:20,20,16,14;ls:1,1,0,0;" data-dim="minh:0px,none,none,none;" data-padding="t:12,12,10,9;r:35,35,28,25;b:12,12,10,9;l:35,35,28,25;" data-border="bor:30px,30px,30px,30px;" data-frame_999="o:0;st:w;" data-frame_hover="c:#4ad594;bgc:#fff;bor:30px,30px,30px,30px;sp:200;" style="z-index:10;background-color:#4ad594;font-family:'Roboto';text-transform:uppercase;" data-idcheck="true">Start Buying from the Widest Range of Pet Essentials <i className="fa-chevron-right"></i>
                                                        </a></rs-mask-wrap>
                                                    </rs-loop-wrap>
                                                </rs-layer-wrap>
                                            </rs-slide>
                                        </rs-slides>
                                    </rs-module>
                                    <script type="text/javascript" src="data:text/javascript;base64,c2V0UkVWU3RhcnRTaXplKHtjOidyZXZfc2xpZGVyXzEwXzEnLHJsOlsxMjQwLDEwMjQsNzc4LDQ4MF0sZWw6WzQyMS45ODksNzY4LDk2MCw3MjBdLGd3OlsxMDI0LDEwMjQsODIwLDcyMF0sZ2g6WzQyMiw0MjIsMjM1LDMyMF0sdHlwZTonc3RhbmRhcmQnLGp1c3RpZnk6JycsbGF5b3V0OidmdWxsd2lkdGgnLG1oOiIwIn0pO2lmKHdpbmRvdy5SU19NT0RVTEVTIT09dW5kZWZpbmVkJiZ3aW5kb3cuUlNfTU9EVUxFUy5tb2R1bGVzIT09dW5kZWZpbmVkJiZ3aW5kb3cuUlNfTU9EVUxFUy5tb2R1bGVzLnJldnNsaWRlcjEwMSE9PXVuZGVmaW5lZCl7d2luZG93LlJTX01PRFVMRVMubW9kdWxlcy5yZXZzbGlkZXIxMDEub25jZT0hMTt3aW5kb3cucmV2YXBpMTA9dW5kZWZpbmVkO3dpbmRvdy5SU19NT0RVTEVTLmNoZWNrTWluaW1hbCgpfQ==" defer=""></script>
                                </rs-module-wrap>
                                <rs-fw-forcer style="height:422px"></rs-fw-forcer>
                            </rs-fullwidth-wrap>
                        </div>
                    </div>
                </div>
            </div> */}
        </Layout >
    )
}

export default Main;