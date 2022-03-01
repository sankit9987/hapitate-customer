import React from 'react'
import Layout from '../Components/layout/Layout'
import {Link} from 'react-router-dom'
function Register() {
    return (
        <Layout>
            <div className='container'>
                <nav className="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span className="delimiter"><i className="fa fa-angle-right"></i></span>My account</nav>
            </div>
            <section className="login-signup ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9  ">
                            <nav className="comment-log-reg-tabmenu core-nav">
                                <div className="full-container">
                                    <div
                                        className="nav nav-tabs"
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <Link
                                            className="nav-item nav-link  "
                                            id="nav-log-tab"
                                            data-toggle="tab"
                                            to="/login"
                                            role="tab"
                                            aria-controls="nav-log"
                                            aria-selected="false"
                                        >
                                            Vendor Login
                                        </Link>
                                        <Link
                                            className="nav-item nav-link active"
                                            id="nav-reg-tab"
                                            data-toggle="tab"
                                            to="/register"
                                            role="tab"
                                            aria-controls="nav-reg"
                                            aria-selected="true"
                                        >
                                            Vendor Register
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show "
                                    id="nav-log"
                                    role="tabpanel"
                                    aria-labelledby="nav-log-tab"
                                >
                                    <div className="login-area">
                                        <div className="header-area">
                                            <h2 className="title text-center py-4 text-success">
                                                Vendor Registration
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="error" class="alert d-none alert-danger alert-dismissible fade show my-2" role="alert">
                                <strong >Password didn't Match...</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form
                                className="mloginform py-3"
                                action="#"
                                
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="far fa-user"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Full Name"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="far fa-envelope"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Email Address"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-phone-volume"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Phone Number"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="far fa-map-marker-alt"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Address"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-shopping-bag"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                
                                                className="form-control"
                                                placeholder="Address 2"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="far fa-shopping-cart"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                               
                                                placeholder="Shop Name"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-shopping-cart"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Shop Number"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-key"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="password"
                                                
                                                className="form-control"
                                                placeholder="Password"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-key"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Confirm password"
                                                aria-label="confirem-password"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-shopping-cart"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="city"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-shopping-cart"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Post Code"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="fal fa-shopping-cart"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                placeholder="Website"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn main-button form-control my-4"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register