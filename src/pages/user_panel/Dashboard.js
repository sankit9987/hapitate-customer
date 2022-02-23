import React from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'
function Dashboard() {
    return (
        <Layout>
            <section className="user-dashbord">
                <div className="container">
                    <div className="row">
                        <Sidenav/>
                        <div className="col-lg-8">
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <div className="user-profile-details">
                                        <div className="account-info">
                                            <div className="header-area">
                                                <h4 className="title">
                                                    Account Information
                                                </h4>
                                            </div>
                                            <div className="edit-info-area">
                                            </div>
                                            <div className="main-info">
                                                <h5 className="title">User</h5>
                                                <ul className="list">
                                                    <li>
                                                        <p><span className="user-title">Email:</span> user@gmail.com</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="user-title">Phone:</span> 34534534534</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="user-title">Fax:</span> 34534534534</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="user-title">City:</span> Test City</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="user-title">Zip:</span> 1231</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="user-title">Address:</span> Test Address</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="user-profile-details h100">
                                        <div className="account-info wallet h100">
                                            <div className="header-area">
                                                <h4 className="title">
                                                    My Balance
                                                </h4>
                                            </div>
                                            <div className="edit-info-area">
                                            </div>
                                            <div className="main-info">
                                                <h3 className="title w-title">Affiliate Bonus:</h3>
                                                <h3 className="title w-price">$2963.69</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row row-cards-one mb-3">
                                <div className="col-md-6 col-xl-6">
                                    <div className="card c-info-box-area">
                                        <div className="c-info-box box2">
                                            <p>32</p>
                                        </div>
                                        <div className="c-info-box-content">
                                            <h6 className="title">Total Orders</h6>
                                            <p className="text">All Time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-6">
                                    <div className="card c-info-box-area">
                                        <div className="c-info-box box1">
                                            <p>472</p>
                                        </div>
                                        <div className="c-info-box-content">
                                            <h6 className="title">Pending Orders</h6>
                                            <p className="text">All Time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="user-profile-details">
                                        <div className="account-info wallet">
                                            <div className="header-area">
                                                <h4 className="title">
                                                    Recent Orders
                                                </h4>
                                            </div>
                                            <div className="edit-info-area">
                                            </div>
                                            <div className="main-info">
                                                <div className="mr-table allproduct mt-4">
                                                    <div className="table-responsiv">
                                                        <table id="example" className="table table-hover dt-responsive" cellspacing="0"
                                                            width="100%">
                                                            <thead>
                                                                <tr>
                                                                    <th>#Order</th>
                                                                    <th>Date</th>
                                                                    <th>Order Total</th>
                                                                    <th>Order Status</th>
                                                                    <th>View</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                
                                                                <tr>
                                                                    <td>
                                                                        S2VePk6oaW
                                                                    </td>
                                                                    <td>
                                                                        16 Feb 2022
                                                                    </td>
                                                                    <td>
                                                                        ₹3964.63
                                                                    </td>
                                                                    <td>
                                                                        <div className="order-status completed">
                                                                            Completed
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a className="button mybtn2 sm"
                                                                            href="https://geniuscart.royalscripts.com/user/order/860">
                                                                            VIEW ORDER
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        KkitPX9gus
                                                                    </td>
                                                                    <td>
                                                                        14 Feb 2022
                                                                    </td>
                                                                    <td>
                                                                        $130
                                                                    </td>
                                                                    <td>
                                                                        <div className="order-status pending">
                                                                            Pending
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a className="button mybtn2 sm"
                                                                            href="https://geniuscart.royalscripts.com/user/order/858">
                                                                            VIEW ORDER
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        wrGqcAoRg8
                                                                    </td>
                                                                    <td>
                                                                        13 Feb 2022
                                                                    </td>
                                                                    <td>
                                                                        $142
                                                                    </td>
                                                                    <td>
                                                                        <div className="order-status pending">
                                                                            Pending
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a className="button mybtn2 sm"
                                                                            href="https://geniuscart.royalscripts.com/user/order/857">
                                                                            VIEW ORDER
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
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

export default Dashboard