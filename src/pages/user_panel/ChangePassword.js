import React from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'
function ChangePassword() {
  return (
   
        <Layout>
            <section className="user-dashbord">
                <div className="container">
                    <div className="row">
                        <Sidenav/>
                        <div className="col-lg-8">
                    <div className="user-profile-details">
                        <div className="account-info">
                            <div className="header-area">
                                <h4 className="title">
                                    Change Password
                                </h4>
                            </div>
                            <div className="edit-info-area">
                                
                                <div className="body">
                                        <div className="edit-info-area-form">
                                                <div className="gocover" style={{background: "url(https://geniuscart.royalscripts.com/assets/images/1564224328loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)"}}></div>
                                                <form id="userform" action="https://geniuscart.royalscripts.com/user/reset" method="POST" enctype="multipart/form-data">
                                                    <div className="alert alert-success validation" style={{display: "none"}}>
      <button type="button" className="close alert-close"><span>×</span></button>
            <p className="text-left"></p> 
      </div>
      <div className="alert alert-danger validation" style={{display: "none"}}>
      <button type="button" className="close alert-close"><span>×</span></button>
            <ul className="text-left">
            </ul>
      </div> 
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                                <input type="password" name="cpass" className="input-field" placeholder="Current Password" value="" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                                <input type="password" name="newpass" className="input-field" placeholder="New Password" value="" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                                <input type="password" name="renewpass" className="input-field" placeholder="Re-Type New Password" value="" required=""/>
                                                        </div>
                                                    </div>

                                                        <div className="form-links">
                                                            <button className="submit-btn button" style={{padding:"0"}}type="submit">Submit</button>
                                                        </div>
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

export default ChangePassword