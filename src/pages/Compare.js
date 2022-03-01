import React from 'react'
import Layout from '../Components/layout/Layout';
import '../Components/layout/style/style.css';
import FeaturedProductDetail from '../Components/layout/FeaturedProductDetail';
function Compare() {
    return (
        <Layout>
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">
                    <nav class="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span class="delimiter"><i
                        class="fa fa-angle-right"></i></span>Compare</nav>
                    <div class="site-content-inner row">
                        <div id="primary" class="content-area">
                            <main id="main" class="site-main">
                                <article id="post-2917" class="post-2917 page type-page status-publish hentry">
                                    <div class="entry-content">
                                        <div class="outer-bottom-vs outer-top-sm compare-empty">
                                            <h6 class="lead-title text-center cart-empty">
                                                No products were added to the compare table</h6>
                                            <p class="return-to-shop">
                                                <a class="wc-backward btn button" href="./../shop/index.html">
                                                    <i class="fa fa-reply pr-2"></i>
                                                    Return To Shop </a>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <FeaturedProductDetail />
        </Layout >
    )
}

export default Compare