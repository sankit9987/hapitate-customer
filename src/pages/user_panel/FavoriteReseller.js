import React from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'
function FavoriteReseller() {
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
                                        <h4 className="title">Favorite Sellers</h4>
                                    </div>
                                    <div className="mr-table allproduct message-area  mt-4">
                                        <div className="table-responsiv">
                                            <table id="example" className="table table-hover dt-responsive" cellspacing="0" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th>Shop Name</th>
                                                        <th>Owner Name</th>
                                                        <th>Address</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr className="conv">

                                                        <td>Test Stores</td>
                                                        <td>User</td>
                                                        <td>Space Needle 400 Broad St, Seattles</td>

                                                        <td>
                                                            <a target="_blank" href="https://geniuscart.royalscripts.com/store/Test-Stores" className="link view"><i className="fa fa-eye"></i></a>
                                                            <a href="javascript:;" data-toggle="modal" data-target="#confirm-delete" data-href="https://geniuscart.royalscripts.com/user/favorite/seller/15/delete" className="link remove"><i className="fa fa-trash"></i></a>
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

export default FavoriteReseller