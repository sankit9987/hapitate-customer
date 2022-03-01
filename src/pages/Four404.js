import React from 'react'
import Layout from '../Components/layout/Layout';
// import '../Components/layout/style/style.css';
import FeaturedProductDetail from '../Components/layout/FeaturedProductDetail';
function Four404() {
  return (
    <Layout>
      <div id="content" class="site-content" tabindex="-1">
        <div class="container">
          <nav class="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span class="delimiter"><i
            class="fa fa-angle-right"></i></span>Erro 404</nav>
          <div class="site-content-inner row">
            <div id="primary" class="content-area">
              <main id="main" class="site-main">
                <article id="post-2917" class="post-2917 page type-page status-publish hentry">
                  <div class="entry-content">
                    <div class="outer-bottom-vs outer-top-sm compare-empty">
                      <h1 className='text-center mb-0'>404!</h1>
                      <h6 class="lead-title text-center text-muted cart-empty mt-0">
                        Nothingwas found at this location. Try searching, or check out the links below.</h6>
                        <hr/>
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

export default Four404