import React, { useState } from 'react'
import Layout from '../../Components/layout/Layout'
import Sidenav from '../../Components/layout/Sidenav'
import '../../Components/layout/style/style.css';
import { Modal, Button } from 'react-bootstrap'
function Disputs() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                      Disputes <a data-toggle="modal" data-target="#vendorform" className="button mybtn1 " href="javascript:;" onClick={handleShow}> <i className="fa fa-envelope"></i> Add Dispute</a>
                    </h4>
                  </div>
                  <div className="mr-table allproduct message-area  mt-4">
                    <div className="table-responsiv">
                      <table id="example" className="table table-hover dt-responsive" cellspacing="0" width="100%">
                        <thead>
                          <tr>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr className="conv">

                            <td>test</td>
                            <td>serere</td>

                            <td>10 months ago</td>
                            <td>
                              <a href="https://geniuscart.royalscripts.com/user/admin/message/9" className="link view"><i className="fa fa-eye"></i></a>
                              <a href="javascript:;" data-toggle="modal" data-target="#confirm-delete" data-href="https://geniuscart.royalscripts.com/user/admin/message/9/delete" className="link remove"><i className="fa fa-trash"></i></a>
                            </td>

                          </tr>


                          <tr className="conv">

                            <td>message/.</td>
                            <td>20</td>

                            <td>5 days ago</td>
                            <td>
                              <a href="https://geniuscart.royalscripts.com/user/admin/message/114" className="link view"><i className="fa fa-eye"></i></a>
                              <a href="javascript:;" data-toggle="modal" data-target="#confirm-delete" data-href="https://geniuscart.royalscripts.com/user/admin/message/114/delete" className="link remove"><i className="fa fa-trash"></i></a>
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
          <h5 className="modal-title" id="vendorformLabel">Add Dispute</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"onClick={handleClose}>
              <span aria-hidden="true">×</span>
            </button>
        </div>
      <div className="modal-body">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-form">
                <form id="emailreply1">
                  <ul>
                    <li>
                      <input type="text" className="input-field" id="order" name="order_numkber" placeholder="Order Number *" required=""/>
                    </li>

                    <li>
                      <input type="text" className="input-field" id="subj1" name="subject" placeholder="Subject *" required=""/>
                    </li>
                    <li>
                      <textarea className="input-field textarea" name="message" id="msg1" placeholder="Your Message *" required=""></textarea>
                    </li>
                  </ul>

                  <button className="button submit-btn form-control" id="emlsub1" type="submit">Send</button>
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

export default Disputs