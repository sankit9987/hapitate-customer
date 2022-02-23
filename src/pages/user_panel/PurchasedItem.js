import React from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'

function PrurchasedItem() {
    return (
        <Layout>
            <section className="user-dashbord">
                <div className="container">
                    <div className="row">
                        <Sidenav />
                        <div className="col-lg-8">
                            <div className="user-profile-details">
                                <div className="order-history">
                                    <div className="header-area">
                                        <h4 className="title">
                                            Purchased Items
                                        </h4>
                                    </div>
                                    <div className="mr-table allproduct mt-4">
                                        <div className="table-responsiv">
                                            <table id="example" className="table table-hover dt-responsive" cellspacing="0" width="100%">
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
                                                            5v8K9rLfwn
                                                        </td>
                                                        <td>
                                                            16 Feb 2022
                                                        </td>
                                                        <td>
                                                            $640
                                                        </td>
                                                        <td>
                                                            <div className="order-status completed">
                                                            Completed
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="button mybtn2 sm" href="https://geniuscart.royalscripts.com/user/order/862">
                                                                VIEW ORDER
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    <tr>
                                                        <td>
                                                            VpJJPOKapy
                                                        </td>
                                                        <td>
                                                            30 Jan 2021
                                                        </td>
                                                        <td>
                                                            $930
                                                        </td>
                                                        <td>
                                                            <div className="order-status pending">
                                                                Pending
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a className="button mybtn2 sm" href="https://geniuscart.royalscripts.com/user/order/22">
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
            </section>
        </Layout>

    )
}

export default PrurchasedItem