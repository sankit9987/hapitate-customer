import React, { useState, useEffect } from 'react'
import Layout from '../Components/layout/Layout'
import { Link } from 'react-router-dom'
import ApiService from "../services/api.service";
import toast from "react-hot-toast";
import { TokenService } from "../services/storage.service";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { update } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { store } from "../store";
import { auth } from "../api";
function Login() {
    const temp = {
        email: "",
        password: "",
        user_type: "Customer"
    }
    const user = useSelector((state) => state.auth);
    const [values, setValues] = useState(temp)
    // const history = useHistory()

    useEffect(() => {
        if (user.login) {
            // history.push('/dashboard')
        }
    }, [user])

    const onChangeHandler = (e) => {
        let { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await ApiService.post(auth.POST, values)
            .then((response) => {
                if (response.status == 200) {
                    TokenService.saveToken(response.data.token);
                    TokenService.saveData(response.data);
                    store.dispatch(update(response.data))
                    // history.push("/dashboard");
                    toast.success("Successfully logged in!");

                }
            })
            .catch((error) => {
                toast.error("Invalid Credentials!");
            });
    };
    return (
        <Layout>
            <div className='container'>
                <nav className="woocommerce-breadcrumb"><a href="./../index.html">Home</a><span className="delimiter"><i className="fa fa-angle-right"></i></span>Login</nav>
            </div>
            <section className="login-signup">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <nav className="comment-log-reg-tabmenu core-nav">
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
                            <div id="msg1" className="d-none">
                                Authenticating...
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show"
                                    id="nav-log"
                                    role="tabpanel"
                                    aria-labelledby="nav-log-tab"
                                >
                                    <div className="login-area">
                                        <div className="header-area">
                                            <h2 className="title text-center py-4 text-success">
                                                Vendor Login
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form
                                className="mloginform py-4"

                                method="POST"
                            >
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon1"
                                        >
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        class="form-control"

                                        required
                                        placeholder="Type Email Address"
                                        name="email"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon1"
                                        >
                                            <i class="fa fa-key"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        class="form-control"

                                        name="password"
                                        required
                                        placeholder="Type Password"

                                        aria-label="password"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                                <div className="form-forgot-pass">
                                    <div className="left">
                                        <input
                                            type="checkbox"
                                            className="mx-1"
                                            name="remember"
                                            id="mrp"
                                        />
                                        <label for="mrp">
                                            Remember Password
                                        </label>
                                        <a
                                            href="https://geniuscart.royalscripts.com/user/forgot"
                                            className="float-right p-2"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>

                                </div>
                                <button
                                    type="submit"
                                    className="submit-btn  main-button  form-control"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default Login