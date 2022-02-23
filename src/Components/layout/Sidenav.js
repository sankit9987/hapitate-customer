import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div className="col-lg-4">
            <div className="user-profile-info-area">
                <ul className="links">
                    <li className="">
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </li>

                    <li className="">
                        <Link to="/order">
                            Purchased Items
                        </Link>
                    </li>

                    <li className="">
                        <Link to="/withdraw">Withdraw</Link>
                    </li>



                    <li className="">
                        <Link to="/tracking">Order Tracking</Link>
                    </li>

                    <li className="">
                        <Link to="/favorite-reseller">Favorite Sellers</Link>
                    </li>

                    <li className="">
                        <Link to="/messages">Messages</Link>
                    </li>

                    <li className="">
                        <Link to="/tickets">Tickets</Link>
                    </li>

                    <li className="">
                        <Link to="/disputs">Disputes</Link>
                    </li>

                    <li className="">
                        <Link to="/edit-profile">
                            Edit Profile
                        </Link>
                    </li>

                    <li className="">
                        <Link to="/change-password">
                            Change Password
                        </Link>
                    </li>

                    <li>
                        <Link to="https://geniuscart.royalscripts.com/user/logout">
                            Logout
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12 text-center">
                    <Link to="https://geniuscart.royalscripts.com/user/package" style={{padding:"0"}} className="button mybtn1 lg">
                        <i className="fa fa-dollar-sign"></i> Pricing Plans
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidenav