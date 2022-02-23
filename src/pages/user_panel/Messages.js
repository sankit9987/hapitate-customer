import React, { useState } from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'
import { Button, Modal } from 'react-bootstrap';
function Messages() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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
                    <h4 className="title">Messages</h4>
                    <a data-toggle="modal" data-target="#vendorform" className="button mybtn1 ml-3" href="javascript:;"onClick={handleShow}> <i className="fa fa-envelope"></i>
                      Compose Message
                    </a>
                  </div>
                  <div className="mr-table allproduct message-area  mt-4">
                    <div className="table-responsiv">
                      <table id="example" className="table table-hover dt-responsive" cellspacing="0" width="100%">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Sent</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr className="conv">

                            <td>Vendor</td>
                            <td>something</td>
                            <td>11 months ago</td>
                            <td>
                              <a href="https://geniuscart.royalscripts.com/user/message/12" className="link view"><i className="fa fa-eye"></i></a>
                              <a href="javascript:;" data-toggle="modal" data-target="#confirm-delete" data-href="https://geniuscart.royalscripts.com/user/message/12/delete" className="link remove"><i className="fa fa-trash"></i></a>
                            </td>

                          </tr>


                          <tr className="conv">
                            <td>Vendor</td>
                            <td>tess</td>
                            <td>10 months ago</td>
                            <td>
                              <a href="https://geniuscart.royalscripts.com/user/message/14" className="link view"><i className="fa fa-eye"></i></a>
                              <a href="javascript:;" data-toggle="modal" data-target="#confirm-delete" data-href="https://geniuscart.royalscripts.com/user/message/14/delete" className="link remove"><i className="fa fa-trash"></i></a>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="vendorformLabel">Send Message</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="contact-form">
                        <form id="emailreply">
                          
                            <ul>

                              <li>
                                <input type="email" className="input-field" id="eml" name="email"
                                  placeholder="Email *" required=""/>
                              </li>


                              <li>
                                <input type="text" className="input-field" id="subj" name="subject"
                                  placeholder="Subject *" required=""/>
                              </li>

                              <li>
                                <textarea className="input-field textarea" name="message" id="msg"
                                  placeholder="Your Message *" required=""></textarea>
                              </li>

                                </ul>
                                <button className="submit-btn form-control button" id="emlsub" type="submit">Send Message</button>
                              </form>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Layout>


        )
}

        export default Messages