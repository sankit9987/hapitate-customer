import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'

function Withdraw() {
    return (
        <Layout>
            <section className="user-dashbord">
                <div className="container">
                    <div className="row">
                        <Sidenav/>
                        <div className="col-lg-8">
    <div className="user-profile-details">
        <div className="order-history">
            <div className="header-area">
                <h4 className="title">
                    My Withdraws
                    <Link className="button mybtn1" to="/withdraw/create"> <i
                            className="fa fa-plus"></i> Withdraw Now</Link>
                </h4>
            </div>
            <div className="mr-table allproduct mt-4">
                <div className="table-responsiv">
                    <table id="example" className="table table-hover dt-responsive" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Withdraw Date</th>
                                <th>Method</th>
                                <th>Account</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
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

export default Withdraw