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
									Withdraw Now
									<Link className="button mybtn1" to="/withdraw"> <i className="fa fa-arrow-left"></i> Back</Link>
								</h4>
							</div>

                                                <div className="gocover" style={{background: "url(https://geniuscart.royalscripts.com/assets/images/1564224328loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)"}}></div>
                         <form id="userform" className="form-horizontal" action="https://geniuscart.royalscripts.com/user/affilate/withdraw/create" method="POST" enctype="multipart/form-data">

                                                

                                                    <div className="alert alert-success validation" style={{display: "none"}}>
      <button type="button" className="close alert-close"><span>×</span></button>
            <p className="text-left"></p> 
      </div>
      <div className="alert alert-danger validation" style={{display: "none"}}>
      <button type="button" className="close alert-close"><span>×</span></button>
            <ul className="text-left">
            </ul>
      </div> 
                                <div className="form-group">
                                    <label className="control-label col-sm-12" for="name">Current Balance $2963.69</label>
                                </div>



                                <div className="form-group">
                                    <label className="control-label col-sm-4" for="name">Withdraw Method *

                                    </label>
                                    <div className="col-sm-12">
                                        <select className="form-control" name="methods" id="withmethod" required="">
                                            <option value="">Select Withdraw Method</option>
                                            <option value="Paypal">Paypal</option>
                                            <option value="Skrill">Skrill</option>
                                            <option value="Payoneer">Payoneer</option>
                                            <option value="Bank">Bank</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-12" for="name">Withdraw Amount *

                                    </label>
                                    <div className="col-sm-12">
                                        <input name="amount" placeholder="Withdraw Amount" className="form-control" type="text" value="" required=""/>
                                    </div>
                                </div>

                                <div id="paypal" style={{display: "none"}}>

                                    <div className="form-group">
                                        <label className="control-label col-sm-12" for="name">Enter Account Email *

                                        </label>
                                        <div className="col-sm-12">
                                            <input name="acc_email" placeholder="Enter Account Email" className="form-control" value="" type="email"/>
                                        </div>
                                    </div>

                                </div>
                                <div id="bank" style={{display: "none"}}>

                                    <div className="form-group">
                                        <label className="control-label col-sm-12" for="name">Enter IBAN/Account No *

                                        </label>
                                        <div className="col-sm-12">
                                            <input name="iban" value="" placeholder="Enter IBAN/Account No" className="form-control" type="text"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-12" for="name">Enter Account Name *

                                        </label>
                                        <div className="col-sm-12">
                                            <input name="acc_name" value="" placeholder="Enter Account Name" className="form-control" type="text"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-12" for="name">Enter Address *

                                        </label>
                                        <div className="col-sm-12">
                                            <input name="address" value="" placeholder="Enter Address" className="form-control" type="text"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-12" for="name">Enter Swift Code *

                                        </label>
                                        <div className="col-sm-12">
                                            <input name="swift" value="" placeholder="Enter Swift Code" className="form-control" type="text"/>
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label className="control-label col-sm-12" for="name">Additional Reference(Optional) *

                                    </label>
                                    <div className="col-sm-12">
                                        <textarea className="form-control" name="reference" rows="6" placeholder="Additional Reference(Optional)"></textarea>
                                    </div>
                                </div>

                                <div id="resp" className="col-md-12">
                                    <span className="help-block">
                                        <strong>Withdraw Fee $5 and 5% will deduct from your account.</strong>
                                    </span>
                                </div>

                                <hr/>
                                <div className="add-product-footer">
                                    <button name="addProduct_btn" style={{padding:"0"}} type="submit" className="button mybtn1">Withdraw</button>
                                </div>
                            </form>

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