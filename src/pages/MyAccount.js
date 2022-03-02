import React from 'react'
import Layout from '../Components/layout/Layout'
function MyAccount() {
  return (
    <Layout>
        <div id="content" className="site-content" tabindex="-1">
    <div className="container">
        <nav className="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span className="delimiter"><i
                    className="fa fa-angle-right"></i></span>My account</nav>
        <div className="site-content-inner row">
            <div id="primary" className="content-area">
                <main id="main" className="site-main">
                    <article id="post-14" className="post-14 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="woocommerce">
                                <div className="customer-login-form">
                                    <span className="or-text">or</span>
                                    <div className="woocommerce-notices-wrapper"></div>
                                    <div className="u-columns col2-set" id="customer_login">
                                        <div className="u-column1 col-1">
                                            <h2>Login</h2>
                                            <form className="woocommerce-form woocommerce-form-login login" method="post">
                                                <p className="before-login-text">
                                                    Welcome back! Sign in to your account.</p>
                                                <p
                                                    className="woocommerce-form-row woocommerce-form-row--wide form-row-wide">
                                                    <label for="username">Username or email address&nbsp;<span
                                                            className="required">*</span></label>
                                                    <input type="text"
                                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                                        name="username" id="username" autocomplete="username" value=""/>
                                                </p>
                                                <p
                                                    className="woocommerce-form-row woocommerce-form-row--wide form-row-wide">
                                                    <label for="password">Password&nbsp;<span
                                                            className="required">*</span></label>
                                                    <span className="password-input"><input
                                                            className="woocommerce-Input woocommerce-Input--text input-text"
                                                            type="password" name="password" id="password"
                                                            autocomplete="current-password"/><span
                                                            className="show-password-input"></span></span>
                                                </p>
                                                <p className="">
                                                    <label
                                                        className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                        <input
                                                            className="woocommerce-form__input woocommerce-form__input-checkbox"
                                                            name="rememberme" type="checkbox" id="rememberme"
                                                            value="forever"/> <span>Remember me</span>
                                                    </label>
                                                    <input type="hidden" id="woocommerce-login-nonce"
                                                        name="woocommerce-login-nonce" value="67787194c7"/><input
                                                        type="hidden" name="_wp_http_referer"
                                                        value="/hapitate/my-account/"/> <button type="submit"
                                                        className="woocommerce-button button woocommerce-form-login__submit"
                                                        name="login" value="Log in">Log in</button>
                                                </p>
                                                <p className="woocommerce-LostPassword lost_password">
                                                    <a href="./lost-password/index.html">Lost your password?</a>
                                                </p>
                                            </form>
                                        </div>
                                        <div className="u-column2 col-2">
                                            <h2>Register</h2>
                                            <form method="post"
                                                className="woocommerce-form woocommerce-form-register register">
                                                <p className="before-register-text">
                                                    Create new account today to reap the benefits of a personalized
                                                    shopping experience.</p>
                                                <p
                                                    className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label for="reg_email">Email address&nbsp;<span
                                                            className="required">*</span></label>
                                                    <input type="email"
                                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                                        name="email" id="reg_email" autocomplete="email" value=""/>
                                                </p>
                                                <p>A link to set a new password will be sent to your email address.</p>
                                                <p className="form-row form-row-wide mailchimp-newsletter"><input
                                                        className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                                        id="mailchimp_woocommerce_newsletter" type="checkbox"
                                                        name="mailchimp_woocommerce_newsletter" value="1" checked=""/>
                                                    <label for="mailchimp_woocommerce_newsletter"
                                                        className="woocommerce-form__label woocommerce-form__label-for-checkbox inline"><span>Subscribe
                                                            to our newsletter</span></label></p>
                                                <div className="clear"></div>
                                                <div className="woocommerce-privacy-policy-text">
                                                    <p>Your personal data will be used to support your experience
                                                        throughout this website, to manage access to your account, and
                                                        for other purposes described in our <a
                                                            href="./../privacy-policy/index.html"
                                                            className="woocommerce-privacy-policy-link"
                                                            target="_blank">privacy policy</a>.</p>
                                                </div>
                                                <p className="woocommerce-form-row form-row">
                                                    <input type="hidden" id="woocommerce-register-nonce"
                                                        name="woocommerce-register-nonce" value="26cbcbd603"/><input
                                                        type="hidden" name="_wp_http_referer"
                                                        value="/hapitate/my-account/"/> <button type="submit"
                                                        className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                                        name="register" value="Register">Register</button>
                                                </p>
                                                <div className="register-benefits">
                                                    <h3>Sign up today and you will be able to :</h3>
                                                    <ul>
                                                        <li>✅Speed your way through checkout</li>
                                                        <li>✅Track your orders easily</li>
                                                        <li>✅Keep a record of all your purchases</li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    </div>
</div>
    </Layout>
  )
}

export default MyAccount