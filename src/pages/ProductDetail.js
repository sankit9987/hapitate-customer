import React from 'react';
import Layout from '../Components/layout/Layout';
import FeaturedProductDetail from '../Components/layout/FeaturedProductDetail';
import ProductDescription from '../Components/layout/ProductDescription';
const ProductDetail = () => {
    return (
        <Layout>
            <div className='container-fluid mx-5'>
                <nav className="woocommerce-breadcrumb"><a href="./../../../../index.html">Home</a><span className="delimiter"><i
                    className="fa fa-angle-right"></i></span><a href="./../../../index.html">Shop</a><span className="delimiter"><i
                        className="fa fa-angle-right"></i></span><a
                            href="./../../../../product-category/snacks/index.html">Snacks</a><span className="delimiter"><i
                                className="fa fa-angle-right"></i></span><a
                                    href="./../../../../product-category/snacks/crackers/index.html">Crackers</a><span className="delimiter">
                        <i className="fa fa-angle-right"></i>
                    </span>Crackers (Copy)
                </nav>
            </div>
            <div className="single-product-wrapper row">
                <div className="product-images-wrapper">
                    <span className="onsale">-<span className="percentage">25%</span></span>
                    <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images electro-carousel-loaded"
                        data-columns="5" style={{ opacity: "1", transition: "opacity 0.25s ease-in-out 0s" }}><a href="#"
                            className="woocommerce-product-gallery__trigger">🔍</a>
                        <div className="flex-viewport" style={{ overflow: "hidden", position: "relative", height: "345px" }}>
                            <figure className="woocommerce-product-gallery__wrapper"
                                style={{ width: "400%", transitionDuration: "0s", transform: "translate3d(0px, 0px, 0px)" }}>
                                <div data-thumb="./wp-content/uploads/2021/06/DEMO-100x100.png" data-thumb-alt="ALT TEXT"
                                    className="woocommerce-product-gallery__image flex-active-slide"
                                    style={{ width: "345px", marginRight: "0px", float: "left", display: "block" }}><a
                                        href="./../../../../wp-content/uploads/2021/06/DEMO.png"><img width="500" height="500"
                                            src="./assets/image/hapitate.png" className="wp-post-image"
                                            alt="ALT TEXT" loading="lazy" title="DEMO" data-caption="Caption"
                                            data-src="./wp-content/uploads/2021/06/DEMO.png"
                                            data-large_image="./wp-content/uploads/2021/06/DEMO.png" data-large_image_width="500"
                                            data-large_image_height="500"
                                            srcset="./../../../../wp-content/uploads/2021/06/DEMO.png 500w, ./../../../../wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./../../../../wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./../../../../wp-content/uploads/2021/06/DEMO-100x100.png 100w"
                                            sizes="(max-width: 500px) 100vw, 500px" draggable="false" /></a></div>
                                <div data-thumb="./wp-content/uploads/2021/06/DEMO-100x100.png" data-thumb-alt="ALT TEXT"
                                    className="woocommerce-product-gallery__image"
                                    style={{ width: "345px", marginRight: '0px', float: "left", display: "block" }}><a
                                        href="./../../../../wp-content/uploads/2021/06/DEMO.png"><img width="500" height="500"
                                            src="./assets/image/hapitate.png" className="" alt="ALT TEXT"
                                            loading="lazy" title="DEMO" data-caption="Caption"
                                            data-src="./wp-content/uploads/2021/06/DEMO.png"
                                            data-large_image="./wp-content/uploads/2021/06/DEMO.png" data-large_image_width="500"
                                            data-large_image_height="500"
                                            srcset="./../../../../wp-content/uploads/2021/06/DEMO.png 500w, ./../../../../wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./../../../../wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./../../../../wp-content/uploads/2021/06/DEMO-100x100.png 100w"
                                            sizes="(max-width: 500px) 100vw, 500px" draggable="false" /></a></div>
                            </figure>
                        </div>
                        <ol className="flex-control-nav flex-control-paging">
                            <li><a href="#" alt="ALT TEXT" className="flex-active">1</a></li>
                            <li><a href="#" alt="ALT TEXT">2</a></li>
                        </ol>
                    </div>
                    <div id="electro-wc-product-gallery-61d54d01d9494"
                        className="electro-wc-product-gallery electro-wc-product-gallery--with-images electro-wc-product-gallery--columns-5 images"
                        data-columns="5">
                        <div className="flex-viewport" style={{ overflow: "hidden", position: "relative" }}>
                            <figure className="electro-wc-product-gallery__wrapper"
                                style={{ width: "400%", transitionDuration: "0s", transform: "translate3d(0px, 0px, 0px)" }}>
                                <figure data-thumb="./wp-content/uploads/2021/06/DEMO-100x100.png"
                                    className="electro-wc-product-gallery__image flex-active-slide"
                                    style={{ width: "90px", marginRight: "6px", float: "left", display: "block" }}><a
                                        href="./../../../../wp-content/uploads/2021/06/DEMO.png"><img data-lazyloaded="1"
                                            src="./assets/image/hapitate.png" width="100" height="100"
                                            data-src="./wp-content/uploads/2021/06/DEMO-100x100.png"
                                            className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image error" alt="ALT TEXT"
                                            loading="lazy" title="" data-large-image="./wp-content/uploads/2021/06/DEMO.png"
                                            data-large-image-width="500" data-large-image-height="500"
                                            data-srcset="./wp-content/uploads/2021/06/DEMO-100x100.png 100w, ./wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./wp-content/uploads/2021/06/DEMO.png 500w"
                                            data-sizes="(max-width: 100px) 100vw, 100px" draggable="false"
                                            sizes="(max-width: 100px) 100vw, 100px"
                                            srcset="./wp-content/uploads/2021/06/DEMO-100x100.png 100w, ./wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./wp-content/uploads/2021/06/DEMO.png 500w"
                                            data-was-processed="true" /><noscript><img width="100" height="100"
                                                src="./assets/image/hapitate.png"
                                                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="ALT TEXT"
                                                loading="lazy" title="" data-large-image="./wp-content/uploads/2021/06/DEMO.png"
                                                data-large-image-width="500" data-large-image-height="500"
                                                srcset="./../../../../wp-content/uploads/2021/06/DEMO-100x100.png 100w, ./../../../../wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./../../../../wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./../../../../wp-content/uploads/2021/06/DEMO.png 500w"
                                                sizes="(max-width: 100px) 100vw, 100px" /></noscript></a></figure>
                                <figure data-thumb="./wp-content/uploads/2021/06/DEMO-100x100.png"
                                    className="electro-wc-product-gallery__image"
                                    style={{ width: "90px", marginRight: "6px", float: "left", display: "block" }}><a
                                        href="./../../../../wp-content/uploads/2021/06/DEMO.png"><img data-lazyloaded="1"
                                            src="./assets/image/hapitate.png" width="100" height="100"
                                            data-src="./wp-content/uploads/2021/06/DEMO-100x100.png"
                                            className="attachment-shop_thumbnail size-shop_thumbnail error" alt="ALT TEXT"
                                            loading="lazy" title="" data-large-image="./wp-content/uploads/2021/06/DEMO.png"
                                            data-large-image-width="500" data-large-image-height="500"
                                            data-srcset="./wp-content/uploads/2021/06/DEMO-100x100.png 100w, ./wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./wp-content/uploads/2021/06/DEMO.png 500w"
                                            data-sizes="(max-width: 100px) 100vw, 100px" draggable="false"
                                            sizes="(max-width: 100px) 100vw, 100px"
                                            srcset="./wp-content/uploads/2021/06/DEMO-100x100.png 100w, ./wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./wp-content/uploads/2021/06/DEMO.png 500w"
                                            data-was-processed="true" /><noscript><img width="100" height="100"
                                                src="./assets/image/hapitate.png"
                                                className="attachment-shop_thumbnail size-shop_thumbnail" alt="ALT TEXT" loading="lazy"
                                                title="" data-large-image="./wp-content/uploads/2021/06/DEMO.png"
                                                data-large-image-width="500" data-large-image-height="500"
                                                srcset="./../../../../wp-content/uploads/2021/06/DEMO-100x100.png 100w, ./../../../../wp-content/uploads/2021/06/DEMO-300x300.png 300w, ./../../../../wp-content/uploads/2021/06/DEMO-150x150.png 150w, ./../../../../wp-content/uploads/2021/06/DEMO.png 500w"
                                                sizes="(max-width: 100px) 100vw, 100px" /></noscript></a></figure>
                            </figure>
                        </div>
                        <ol className="flex-control-nav flex-control-paging"></ol>
                    </div>
                    <div className="section-onsale-product">
                        <div className="onsale-product"></div>
                    </div>
                </div>
                <div className="summary entry-summary">
                    <span className="loop-product-categories"><a href="./../../../../product-category/superfoods/trail-mix/index.html"
                        rel="tag">Trail Mix</a></span>
                    <h1 className="product_title entry-title">Trail Mix (Copy)</h1>
                    <div className="brand">
                        <a href="./../../../../index.html?taxonomy=pa_brands&amp;term=demo6"><img data-lazyloaded="1"
                            src="./assets/image/hapitate.png"
                            data-src="./wp-content/uploads/woocommerce-placeholder.png" alt="Demo6" className="error"
                            data-was-processed="true" /><noscript><img
                                src="./assets/image/hapitate.png" alt="Demo6" /></noscript></a>
                    </div>
                    <div className="availability d-flex">
                        Availability: <span className="electro-stock-availability">
                            <p className="stock in-stock">100 in stock</p>
                        </span>
                    </div>
                    <hr className="single-product-title-divider" />
                    <div className="action-buttons d-flex">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5754  wishlist-fragment on-first-load"
                            data-fragment-ref="5754"
                            data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:5754,&quot;parent_product_id&quot;:5754,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                            <div className="yith-wcwl-add-button">
                                <a href="./index.html?add_to_wishlist=5754&amp;_wpnonce=811b4cf642"
                                    className="add_to_wishlist single_add_to_wishlist" data-product-id="5754" data-product-type="simple"
                                    data-original-product-id="5754" data-title="Add to wishlist" rel="nofollow">
                                    <i className="fa fa-heart-o"></i> <span>Add to wishlist</span>
                                </a>
                            </div>
                        </div>
                        <a href="./../../../../index.html?action=yith-woocompare-add-product&amp;id=5754"
                            className="add-to-compare-link" data-product_id="5754">Compare</a>
                    </div>
                    <div className="woocommerce-product-details__short-description">
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
                    <p className="price"><span className="electro-price"><ins><span className="woocommerce-Price-amount amount"><bdi><span
                        className="woocommerce-Price-currencySymbol">₹</span>300.00</bdi></span></ins> <del><span
                            className="woocommerce-Price-amount amount"><bdi><span
                                className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></p>
                    <div className="wcfm-clearfix"></div>
                    <div className="wcfmmp_sold_by_container_advanced">
                        <div className="wcfmmp_sold_by_label">
                            Store<div className="wcfm_vendor_badges"></div>
                        </div>
                        <div className="wcfmmp_sold_by_container_left">
                            <img data-lazyloaded="1"
                                src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"
                                data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"
                                className="litespeed-loaded" data-was-processed="true" /><noscript><img
                                    src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png" /></noscript>
                        </div>
                        <div className="wcfmmp_sold_by_container_right">
                            <div className="wcfmmp_sold_by_wrapper">
                                <div className="wcfmmp_sold_by_store"><a className="wcfm_dashboard_item_title" target="_blank"
                                    href="./../../../../store/hapitate-demo/index.html">Hapitate Demo</a></div>
                            </div>
                            <div className="wcfmmp-store-rating" title="No reviews yet!">
                                <span style={{ width: "0%" }}>
                                    <strong className="rating">0</strong> out of 5 </span>
                            </div>
                        </div>
                    </div>
                    <div className="wcfm-clearfix"></div>
                    <p className="stock in-stock">100 in stock</p>
                    <form className="cart" action="./shop/superfoods/trail-mix/trail-mix-copy/" method="post"
                        enctype="multipart/form-data">
                        <div className="quantity hidden hidden-xs-up">

                        </div>
                        <button type="submit" name="add-to-cart" value="5754" className="single_add_to_cart_button button alt"><i className="fa fa-cart-arrow-down px-3" aria-hidden="true"></i>Add to
                            cart</button>
                    </form>
                    <div className="wcfm_clearfix"></div>
                    <div className="wcfmmp_shipment_processing_display">Item will be shipped in 1-2 business days</div>
                    <div className="wcfm_clearfix"></div>
                    <div className="wcfm_ele_wrapper wcfm_catalog_enquiry_button_wrapper">
                        <div className="wcfm-clearfix"></div>
                        <a href="#" className="wcfm_catalog_enquiry  wcfm_login_popup" data-store="3" data-product="5754"
                            style={{ marginRight: "10px", background: "#17a2b8", borderBottomColor: "#17a2b8", color: "#ffffff" }}><span
                                className="fa fa-question-circle"></span>&nbsp;&nbsp;<span className="add_enquiry_label">Ask a
                                    Question</span></a>
                        <div className="wcfm-clearfix"></div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-2'>
                    </div>
                    <div className='col-lg-10'>
            <ProductDescription/>
            <section className="related products px-5 py-5">
                <h2>Related products</h2>
                <ul data-view="grid" data-bs-toggle="regular-products"
                    className="products products list-unstyled row g-0 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                    <li
                        className="product type-product post-5735 status-publish first instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                        <div className="product-outer product-item__outer">
                            <div className="product-inner product-item__inner">
                                <div className="product-loop-header product-item__header">
                                    <span className="loop-product-categories"><a
                                        href="./../../../../product-category/snacks/roasted-mix/index.html" rel="tag">Roasted
                                        Mix</a></span><a href="./../../roasted-mix/roasted-mix/index.html"
                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                        <div className="product-thumbnail product-item__thumbnail">
                                            <span className="onsale">-<span className="percentage">50%</span></span>
                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/06/DEMO-300x300.png" width="300"
                                                height="300" data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail error"
                                                alt="ALT TEXT" loading="lazy" data-was-processed="true"/><noscript><img width="300"
                                                    height="300" src="./../../../../wp-content/uploads/2021/06/DEMO-300x300.png"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                        </div>
                                    </a>
                                </div>
                                <div className="product-loop-body product-item__body">
                                    <span className="loop-product-categories"><a
                                        href="./../../../../product-category/snacks/roasted-mix/index.html" rel="tag">Roasted
                                        Mix</a></span><a href="./../../roasted-mix/roasted-mix/index.html"
                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <h2 className="woocommerce-loop-product__title">Roasted Mix</h2>
                                    </a>
                                    <div className="wcfmmp_sold_by_container"><a href="./../../roasted-mix/roasted-mix/index.html"
                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <div className="wcfm-clearfix"></div>
                                    </a>
                                        <div className="wcfmmp_sold_by_wrapper"><a href="./../../roasted-mix/roasted-mix/index.html"
                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                            <span className="wcfmmp_sold_by_label">Store:&nbsp;</span><img data-lazyloaded="1"
                                                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                className="wcfmmp_sold_by_logo"
                                                data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                    className="wcfmmp_sold_by_logo"
                                                    src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                        className="wcfm_dashboard_item_title" target="_blank"
                                                        href="./../../../../store/hapitate-demo/index.html">Hapitate Demo</a>
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
                                        <div className="star-rating" title="Rated 0 out of 5"><span style={{width:"0%"}}><strong
                                            className="rating">0</strong> out of 5</span></div> (0)
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
                                        <span className="price"><span className="electro-price" style={{position: "relative"}}><ins><span
                                            className="woocommerce-Price-amount amount"><bdi><span
                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                            <del style={{position:"absolute",left:"0",top:"-14px"}}><span
                                                className="woocommerce-Price-amount amount"><bdi><span
                                                    className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                        <div className="add-to-cart-wrap show-in-mobile" data-bs-toggle="tooltip"
                                            data-bs-title="Add to cart" data-bs-original-title="" title=""><a
                                                href="./index.html?add-to-cart=5735" data-quantity="1"
                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                data-product_id="5735" data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1"
                                                aria-label="Add “Roasted Mix” to your cart" rel="nofollow">Add to cart</a></div>
                                    </div>
                                    <div className="hover-area">
                                        <div className="action-buttons">
                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5735  wishlist-fragment on-first-load"
                                                data-fragment-ref="5735"
                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5735,&quot;parent_product_id&quot;:5735,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                <div className="yith-wcwl-add-button">
                                                    <a href="./index.html?add_to_wishlist=5735&amp;_wpnonce=811b4cf642"
                                                        className="add_to_wishlist single_add_to_wishlist" data-product-id="5735"
                                                        data-product-type="simple" data-original-product-id="5735"
                                                        data-title="Add to wishlist" rel="nofollow">
                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i> <span>Add to wishlist</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <a href="./../../../../index.html?action=yith-woocompare-add-product&amp;id=5735"
                                                className="add-to-compare-link" data-product_id="5735">Compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="product type-product post-5736 status-publish instock product_cat-roasted-mix product_tag-roasted-mix has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-simple">
                        <div className="product-outer product-item__outer">
                            <div className="product-inner product-item__inner">
                                <div className="product-loop-header product-item__header">
                                    <span className="loop-product-categories"><a
                                        href="./../../../../product-category/snacks/roasted-mix/index.html" rel="tag">Roasted
                                        Mix</a></span><a href="./../../roasted-mix/roasted-mix-copy/index.html"
                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)</h2>
                                        <div className="product-thumbnail product-item__thumbnail">
                                            <span className="onsale">-<span className="percentage">50%</span></span>
                                            <img data-lazyloaded="1" src="./wp-content/uploads/2021/06/DEMO-300x300.png" width="300"
                                                height="300" data-src="./wp-content/uploads/2021/06/DEMO-300x300.png"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail error"
                                                alt="ALT TEXT" loading="lazy" data-was-processed="true"/><noscript><img width="300"
                                                    height="300" src="./assets/image/Slider-BG.jpg"
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt="ALT TEXT" loading="lazy"/></noscript>
                                        </div>
                                    </a>
                                </div>
                                <div className="product-loop-body product-item__body">
                                    <span className="loop-product-categories"><a
                                        href="./../../../../product-category/snacks/roasted-mix/index.html" rel="tag">Roasted
                                        Mix</a></span><a href="./../../roasted-mix/roasted-mix-copy/index.html"
                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <h2 className="woocommerce-loop-product__title">Roasted Mix (Copy)</h2>
                                    </a>
                                    <div className="wcfmmp_sold_by_container"><a href="./../../roasted-mix/roasted-mix-copy/index.html"
                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <div className="wcfm-clearfix"></div>
                                    </a>
                                        <div className="wcfmmp_sold_by_wrapper"><a
                                            href="./../../roasted-mix/roasted-mix-copy/index.html"
                                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                            <span className="wcfmmp_sold_by_label">Store:&nbsp;</span><img data-lazyloaded="1"
                                                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                className="wcfmmp_sold_by_logo"
                                                data-src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/><noscript><img
                                                    className="wcfmmp_sold_by_logo"
                                                    src="https://hapitate.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png"/></noscript>&nbsp;</a><a
                                                        className="wcfm_dashboard_item_title" target="_blank"
                                                        href="./../../../../store/hapitate-demo/index.html">Hapitate Demo</a>
                                        </div>
                                        <div className="wcfm-clearfix"></div>
                                        <div className="wcfmmp-store-rating" title="No reviews yet!">
                                            <span style={{width:" 0"}}>
                                                <strong className="rating">0</strong> out of 5 </span>
                                        </div>
                                        <div className="wcfm-clearfix"></div>
                                        <div className="wcfm_vendor_badges"></div>
                                        <div className="wcfm-clearfix"></div>
                                    </div>
                                    <div className="product-rating">
                                        <div className="star-rating" title="Rated 0 out of 5"><span style={{width:"0%"}}><strong
                                            className="rating">0</strong> out of 5</span></div> (0)
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
                                    <div className="product-sku">SKU: D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1</div>
                                </div>
                                <div className="product-loop-footer product-item__footer">
                                    <div className="price-add-to-cart">
                                        <span className="price"><span className="electro-price" style={{position: "relative"}}><ins><span
                                            className="woocommerce-Price-amount amount"><bdi><span
                                                className="woocommerce-Price-currencySymbol">₹</span>200.00</bdi></span></ins>
                                            <del style={{position:"absolute",left:"0",top:"-14px"}}><span
                                                className="woocommerce-Price-amount amount"><bdi><span
                                                    className="woocommerce-Price-currencySymbol">₹</span>399.00</bdi></span></del></span></span>
                                        <div className="add-to-cart-wrap show-in-mobile" data-bs-toggle="tooltip"
                                            data-bs-title="Add to cart" data-bs-original-title="" title=""><a
                                                href="./index.html?add-to-cart=5736" data-quantity="1"
                                                className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                data-product_id="5736" data-product_sku="D02-1-1-1-1-1-1-1-2-1-1-1-1-1-1-1"
                                                aria-label="Add “Roasted Mix (Copy)” to your cart" rel="nofollow">Add to cart</a>
                                        </div>
                                    </div>
                                    <div className="hover-area">
                                        <div className="action-buttons">
                                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5736  wishlist-fragment on-first-load"
                                                data-fragment-ref="5736"
                                                data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5736,&quot;parent_product_id&quot;:5736,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                <div className="yith-wcwl-add-button">
                                                    <a href="./index.html?add_to_wishlist=5736&amp;_wpnonce=811b4cf642"
                                                        className="add_to_wishlist single_add_to_wishlist" data-product-id="5736"
                                                        data-product-type="simple" data-original-product-id="5736"
                                                        data-title="Add to wishlist" rel="nofollow">
                                                        <i className="yith-wcwl-icon fa fa-heart-o"></i> <span>Add to wishlist</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <a href="./../../../../index.html?action=yith-woocompare-add-product&amp;id=5736"
                                                className="add-to-compare-link" data-product_id="5736">Compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            </div>
            </div>
            <FeaturedProductDetail />
        </Layout>
    )
}

export default ProductDetail