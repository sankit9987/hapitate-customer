import React from 'react'
import Layout from '../Components/layout/Layout'
import {Link} from 'react-router-dom'
function Register() {
    return (
        <Layout>
            <div className='container'>
                <nav className="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span className="delimiter"><i className="fa fa-angle-right"></i></span>Register</nav>
            </div>
            <section className="login-signup">
            <div className="container ">
                <div className="row  justify-content-center">
        <div className='col-lg-8 shadow-lg'>
            <nav className="comment-log-reg-tabmenu core-nav py-3">
                            <div className="full-container">
                                <div
                                    className="nav nav-tabs"
                                    id="nav-tab"
                                    role="tablist"
                                >
                                    <Link
                                        id="nav-log-tab"
                                        className="nav-item nav-link login active"
                                        data-toggle="tab"
                                        to="/login"
                                        role="tab"
                                        aria-controls="nav-log"
                                        aria-selected="true"
                                    >
                                        Vendor Login
                                    </Link>
                                    <Link
                                        className="nav-item nav-link"
                                        id="nav-reg-tab"
                                        data-toggle="tab"
                                        to="/register"
                                        role="tab"
                                        aria-controls="nav-reg"
                                        aria-selected="false"
                                    >
                                        Vendor Register
                                    </Link>
                                </div>
                            </div>
                        </nav>
            <div class="entry-content">
    <div id="wcfm-main-contentainer">
        <div id="wcfm-content">
            <div class="wcfm-membership-wrapper">
               
                <div id="wcfm_membership_container">
                    <form id="wcfm_membership_registration_form" class="wcfm">
                        <div class="wcfm-container">
                            <div id="wcfm_membership_registration_form_expander" class="wcfm-content">
                                <p class="user_name wcfm_ele wcfm_title"><strong>Username<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="user_name">Username<span
                                        class="required">*</span></label><input type="text" id="user_name"
                                    name="user_name" class="wcfm-text wcfm_ele " value="" placeholder=""
                                    data-required="1" data-required_message="Username: This field is required."/>
                                <p class="user_email wcfm_ele wcfm_title"><strong>Email<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="user_email">Email<span
                                        class="required">*</span></label><input type="text" id="user_email"
                                    name="user_email" class="wcfm-text wcfm_ele " value="" placeholder=""
                                    data-required="1" data-required_message="Email: This field is required."/>
                                <div class="wcfm_email_verified">
                                    <input type="text" name="wcfm_email_verified_input" data-required="1"
                                        data-required_message="Email Verification Code: This field is required."
                                        class="wcfm-text wcfm_email_verified_input" placeholder="Verification Code"
                                        value=""/>
                                    <input type="button" name="wcfm_email_verified_button"
                                        class="wcfm-text wcfm_submit_button wcfm_email_verified_button"
                                        value="Re-send Code"/>
                                    <div class="wcfm_clearfix"></div>
                                </div>
                                <div class="wcfm-message email_verification_message" tabindex="-1"></div>
                                <div class="wcfm_clearfix"></div>
                                <p class="first_name wcfm_ele wcfm_title"><strong>First Name</strong></p>
                                <label class="screen-reader-text" for="first_name">First Name</label><input type="text"
                                    id="first_name" name="first_name" class="wcfm-text wcfm_ele " value=""
                                    placeholder=""/>
                                <p class="last_name wcfm_ele wcfm_title"><strong>Last Name</strong></p>
                                <label class="screen-reader-text" for="last_name">Last Name</label><input type="text"
                                    id="last_name" name="last_name" class="wcfm-text wcfm_ele " value="" placeholder=""/>
                                <p class="store_name wcfm_ele wcfm_title"><strong>Store Name<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="store_name">Store Name<span
                                        class="required">*</span></label><input type="text" id="store_name"
                                    name="store_name" class="wcfm-text wcfm_ele wcfm_name_input" value="" placeholder=""
                                    data-required="1" data-required_message="Store Name: This field is required."/>
                                <p class="description wcfm_store_slug_verified wcfm_page_options_desc"
                                    data-avail="Available" data-unavail="Un-available">./store/<span
                                        class="wcfm_store_slug">[your_store]</span></p>
                                <p class="addr_1 wcfm_title wcfm_ele"><strong>Address 1<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="addr_1">Address 1<span
                                        class="required">*</span></label><input type="text" id="addr_1"
                                    name="wcfmvm_static_infos[address][addr_1]" class="wcfm-text wcfm_ele" value=""
                                    placeholder="" data-required="1"
                                    data-required_message="Address 1: This field is required."/>
                                <p class="addr_2 wcfm_title wcfm_ele"><strong>Address 2</strong></p>
                                <label class="screen-reader-text" for="addr_2">Address 2</label><input type="text"
                                    id="addr_2" name="wcfmvm_static_infos[address][addr_2]" class="wcfm-text wcfm_ele"
                                    value="" placeholder=""/>
                                <p class="country wcfm_title wcfm_ele"><strong>Country<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="country">Country<span
                                        class="required">*</span></label><select id="country"
                                    name="wcfmvm_static_infos[address][country]"
                                    class="country_select wcfm-select wcfm_ele wcfmvm_country_to_select select2-hidden-accessible"
                                    data-required="1" data-required_message="Country: This field is required."
                                    style={{width: "60%"}} tabindex="-1" aria-hidden="true">
                                    <option value="">-Select a location-</option>
                                    <optgroup label="-------------------------------------">
                                        <option value="IN">India</option>
                                    </optgroup>
                                </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                    style={{width: "60%"}}><span class="selection"><span
                                            class="select2-selection select2-selection--single" role="combobox"
                                            aria-haspopup="true" aria-expanded="false" tabindex="0"
                                            aria-labelledby="select2-country-container"><span
                                                class="select2-selection__rendered" id="select2-country-container"
                                                title="-Select a location-">-Select a location-</span><span
                                                class="select2-selection__arrow" role="presentation"><b
                                                    role="presentation"></b></span></span></span><span
                                        class="dropdown-wrapper" aria-hidden="true"></span></span>
                                <p class="city wcfm_title wcfm_ele"><strong>City/Town</strong></p>
                                <label class="screen-reader-text" for="city">City/Town</label><input type="text"
                                    id="city" name="wcfmvm_static_infos[address][city]" class="wcfm-text wcfm_ele"
                                    value="" placeholder=""/>
                                <p class="state wcfm_title wcfm_ele"><strong>State/County</strong></p>
                                <label class="screen-reader-text" for="state">State/County</label><input type="text"
                                    name="wcfmvm_static_infos[address][state]" id="state" data-name="undefined" value=""
                                    class="wcfm-text wcfmvm_state_to_select"/>
                                <p class="zip wcfm_title wcfm_ele"><strong>Postcode/Zip<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="zip">Postcode/Zip<span
                                        class="required">*</span></label><input type="text" id="zip"
                                    name="wcfmvm_static_infos[address][zip]" class="wcfm-text wcfm_ele" value=""
                                    placeholder="" data-required="1"
                                    data-required_message="Postcode/Zip: This field is required."/>
                                <p class="phone wcfm_title wcfm_ele"><strong>Store Phone<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="phone">Store Phone<span
                                        class="required">*</span></label><input type="text" id="phone"
                                    name="wcfmvm_static_infos[phone]" class="wcfm-text wcfm_ele" value="" placeholder=""
                                    data-required="1" data-required_message="Store Phone: This field is required."/>
                                <p class="2bee9bc0b571882abb6d1619291eab49 wcfm_title"><strong>Direct Number<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="2bee9bc0b571882abb6d1619291eab49">Direct
                                    Number<span class="required">*</span></label><input type="number"
                                    id="2bee9bc0b571882abb6d1619291eab49" name="wcfmvm_custom_infos[direct-number]"
                                    class="wcfm-text" value="" placeholder="" data-required="1"
                                    data-required_message="Direct Number: This field is required."/>
                                <p class="387a1e5d48aa0a4d2e697b584599e85e wcfm_title"><strong>Company
                                        Incorporation<span class="required">*</span></strong><span
                                        class="img_tip wcfmfa fa-question" data-tip="Company Registration Certificate"
                                        data-hasqtip="0"></span></p>
                                <label class="screen-reader-text" for="387a1e5d48aa0a4d2e697b584599e85e">Company
                                    Incorporation<span class="required">*</span></label><input type="file"
                                    id="387a1e5d48aa0a4d2e697b584599e85e" name="387a1e5d48aa0a4d2e697b584599e85e"
                                    class="wcfm_ele" value="" placeholder="" data-required="1"
                                    data-required_message="Company Incorporation: This field is required."/>
                                <p class="4795214b53939d236ff277506ba7021b wcfm_title"><strong>Company PAN Card<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="4795214b53939d236ff277506ba7021b">Company PAN
                                    Card<span class="required">*</span></label><input type="text"
                                    id="4795214b53939d236ff277506ba7021b" name="wcfmvm_custom_infos[company-pan-card]"
                                    class="wcfm-text" value="" placeholder="" data-required="1"
                                    data-required_message="Company PAN Card: This field is required."/>
                                <p class="5732e71c206c61354958298bc83e434c wcfm_title"><strong>FSSAI License<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="5732e71c206c61354958298bc83e434c">FSSAI
                                    License<span class="required">*</span></label><input type="file"
                                    id="5732e71c206c61354958298bc83e434c" name="5732e71c206c61354958298bc83e434c"
                                    class="wcfm_ele" value="" placeholder="" data-required="1"
                                    data-required_message="FSSAI License: This field is required."/>
                                <p class="1475bb2f5e77fd787a7260aa5834c42a wcfm_title"><strong>GST Number<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="1475bb2f5e77fd787a7260aa5834c42a">GST Number<span
                                        class="required">*</span></label><input type="text"
                                    id="1475bb2f5e77fd787a7260aa5834c42a" name="wcfmvm_custom_infos[gst-number]"
                                    class="wcfm-text" value="" placeholder="" data-required="1"
                                    data-required_message="GST Number: This field is required."/>
                                <p class="passoword wcfm_ele wcfm_title"><strong>Password<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="passoword">Password<span
                                        class="required">*</span></label><input type="password" id="passoword"
                                    name="passoword" class="wcfm-text wcfm_ele " value="" placeholder=""
                                    data-required="1" data-required_message="Password: This field is required."
                                    data-mismatch_message="Password and Confirm-password are not same."/>
                                <div id="password_strength" name="password_strength" class="">
                                    <div id="password-strength-status"></div>
                                </div>
                                <p class="confirm_pwd wcfm_ele wcfm_title"><strong>Confirm Password<span
                                            class="required">*</span></strong></p>
                                <label class="screen-reader-text" for="confirm_pwd">Confirm Password<span
                                        class="required">*</span></label><input type="password" id="confirm_pwd"
                                    name="confirm_pwd" class="wcfm-text wcfm_ele " value="" placeholder=""
                                    data-required="1" data-required_message="Confirm Password: This field is required."/>
                                <input type="checkbox" id="terms" name="wcfmvm_static_infos[terms]"
                                    class="wcfm-checkbox" value="Agree" data-required="1"
                                    data-required_message="Terms &amp; Conditions: This field is required."/>
                                <p class="terms_title wcfm_title">
                                    <strong>
                                        <span class="required">*</span>
                                        Agree&nbsp;&nbsp;<a target="_blank"
                                            href="./../terms-and-conditions/index.html">Terms &amp; Conditions</a>
                                    </strong>
                                </p>
                            </div>
                            <div class="wcfm-clearfix"></div>
                        </div>
                        <div class="wcfm-clearfix"></div>
                        <div class="wcfm-message" tabindex="-1"></div>
                        <div id="wcfm_membership_registration_submit" class="wcfm_form_simple_submit_wrapper">
                            <input type="submit" name="save-data" value="Register" id="wcfm_membership_register_button"
                                class="wcfm_submit_button"/>
                        </div>
                        <div class="wcfm-clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>
        </Layout>
    )
}

export default Register