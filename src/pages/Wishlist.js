import React from 'react'
import Layout from '../Components/layout/Layout';
import '../Components/layout/style/style.css';
import FeaturedProductDetail from '../Components/layout/FeaturedProductDetail';
function Wishlist() {
    return (
        <Layout>
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">
                    <nav class="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span class="delimiter"><i
                        class="fa fa-angle-right"></i></span>Wishlist</nav>
                    <div class="site-content-inner row">
                        <div id="primary" class="content-area">
                            <main id="main" class="site-main">
                                <article id="post-15" class="post-15 page type-page status-publish hentry">
                                    <div class="entry-content">
                                        <form id="yith-wcwl-form" action="./wishlist/" method="post"
                                            class="woocommerce yith-wcwl-form wishlist-fragment"
                                            data-fragment-options="{&quot;per_page&quot;:5,&quot;current_page&quot;:1,&quot;pagination&quot;:&quot;no&quot;,&quot;wishlist_id&quot;:false,&quot;action_params&quot;:&quot;&quot;,&quot;no_interactions&quot;:false,&quot;layout&quot;:&quot;&quot;,&quot;wishlist&quot;:false,&quot;is_default&quot;:true,&quot;is_custom_list&quot;:false,&quot;wishlist_token&quot;:&quot;&quot;,&quot;is_private&quot;:false,&quot;count&quot;:0,&quot;page_title&quot;:&quot;My wishlist&quot;,&quot;default_wishlsit_title&quot;:&quot;My wishlist&quot;,&quot;page_links&quot;:false,&quot;is_user_logged_in&quot;:false,&quot;is_user_owner&quot;:true,&quot;can_user_edit_title&quot;:false,&quot;show_price&quot;:true,&quot;show_dateadded&quot;:false,&quot;show_stock_status&quot;:true,&quot;show_add_to_cart&quot;:true,&quot;show_remove_product&quot;:true,&quot;add_to_cart_text&quot;:&quot;Add to cart&quot;,&quot;show_ask_estimate_button&quot;:false,&quot;ask_estimate_url&quot;:&quot;&quot;,&quot;price_excl_tax&quot;:false,&quot;show_cb&quot;:false,&quot;show_quantity&quot;:false,&quot;show_variation&quot;:false,&quot;show_price_variations&quot;:false,&quot;show_update&quot;:false,&quot;enable_drag_n_drop&quot;:false,&quot;enable_add_all_to_cart&quot;:false,&quot;move_to_another_wishlist&quot;:false,&quot;repeat_remove_button&quot;:false,&quot;show_last_column&quot;:true,&quot;heading_icon&quot;:&quot;<i class=\&quot;fa fa-heart-o\&quot;><\/i>&quot;,&quot;share_enabled&quot;:false,&quot;template_part&quot;:&quot;view&quot;,&quot;additional_info&quot;:false,&quot;available_multi_wishlist&quot;:false,&quot;form_action&quot;:&quot;.\/wishlist\/&quot;,&quot;item&quot;:&quot;wishlist&quot;}">
                                            <div class="wishlist-title-container">
                                                <div class="wishlist-title ">
                                                    <h3>My wishlist</h3>
                                                </div>
                                            </div>
                                            <table class="shop_table cart wishlist_table wishlist_view traditional responsive   "
                                                data-pagination="no" data-per-page="5" data-page="1" data-id="" data-token=""
                                                style={{ opacity: "1", position: "static", zoom: "1" }}>
                                                <thead>
                                                    <tr>
                                                        <th class="product-remove">
                                                            <span class="nobr">
                                                            </span>
                                                        </th>
                                                        <th class="product-thumbnail"></th>
                                                        <th class="product-name">
                                                            <span class="nobr">
                                                                Product name </span>
                                                        </th>
                                                        <th class="product-price">
                                                            <span class="nobr">
                                                                Unit price </span>
                                                        </th>
                                                        <th class="product-stock-status">
                                                            <span class="nobr">
                                                                Stock status </span>
                                                        </th>
                                                        <th class="product-add-to-cart">
                                                            <span class="nobr">
                                                            </span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="wishlist-items-wrapper">
                                                    <tr>
                                                        <td colspan="6" class="wishlist-empty">No products added to the wishlist
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="yith_wcwl_wishlist_footer"></div>

                                        </form>
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

export default Wishlist