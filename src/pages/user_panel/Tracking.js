import React from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'
function Tracking() {
    return (
        <Layout>
            <section className="user-dashbord">
                <div className="container">
                    <div className="row">
                        <Sidenav />
                        <div className="col-lg-8">
                            <div className="user-profile-details">
                                <div className="order-history">
                                    <div className="header-area d-flex align-items-center">
                                        <h4 className="title">Order Tracking</h4>
                                    </div>
                                    <div className="order-tracking-content">
                                        <form id="t-form" className="tracking-form">
                                            <input type="text" id="code" placeholder="Get Tracking Code" required="" />
                                            <button type="submit" style={{padding:"0"}} className="button mybtn1">View Tracking</button>
                                            <a href="#" data-toggle="modal" data-target="#order-tracking-modal"></a>
                                        </form>
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

export default Tracking