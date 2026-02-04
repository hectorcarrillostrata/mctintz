import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import UserDetail from '../components/account/user-detail'
import AccountingTab from '../components/account/accounting-tab'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiUser, FiUserCheck, FiMail, FiBookmark, FiMessageCircle, FiPhone, FiGlobe, FiKey} from 'react-icons/fi'

export default function AccountSetting() {
  return (
    <>
     <Navbar navlight={true}/> 
     <UserDetail/>

    <section className="section mt-60">
      <div className="container mt-lg-3">
          <div className="row">
              <AccountingTab/>

              <div className="col-lg-8 col-12">
                  <div className="card border-0 rounded shadow">
                      <div className="card-body">
                          <h5 className="text-md-start text-center">Personal Detail :</h5>

                          <div className="mt-3 text-md-start text-center d-sm-flex">
                              <Image src="/images/client/05.jpg" width={110} height={110} className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4" alt=""/>
                              
                              <div className="mt-md-4 mt-3 mt-sm-0">
                                  <Link href="#" className="btn btn-primary mt-2">Change Picture</Link>
                                  <Link href="#" className="btn btn-outline-primary mt-2 ms-2">Delete</Link>
                              </div>
                          </div>

                          <form>
                              <div className="row mt-4">
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">First Name</label>
                                          <div className="form-icon position-relative">
                                              <FiUser className="fea icon-sm icons"/>
                                              <input name="name" id="first" type="text" className="form-control ps-5" placeholder="First Name :"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Last Name</label>
                                          <div className="form-icon position-relative">
                                              <FiUserCheck className="fea icon-sm icons"/>
                                              <input name="name" id="last" type="text" className="form-control ps-5" placeholder="Last Name :"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Your Email</label>
                                          <div className="form-icon position-relative">
                                              <FiMail className="fea icon-sm icons"/>
                                              <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Your email :"/>
                                          </div>
                                      </div> 
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <label className="form-label">Occupation</label>
                                          <div className="form-icon position-relative">
                                              <FiBookmark className="fea icon-sm icons"/>
                                              <input name="name" id="occupation" type="text" className="form-control ps-5" placeholder="Occupation :"/>
                                          </div>
                                      </div> 
                                  </div>
                                  <div className="col-lg-12">
                                      <div className="mb-3">
                                          <label className="form-label">Description</label>
                                          <div className="form-icon position-relative">
                                              <FiMessageCircle className="fea icon-sm icons"/>
                                              <textarea name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Description :"></textarea>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-sm-12">
                                      <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save Changes"/>
                                  </div>
                              </div>
                          </form>

                          
                          <div className="row">
                              <div className="col-md-6 mt-4 pt-2">
                                  <h5>Contact Info :</h5>

                                  <form>
                                      <div className="row mt-4">
                                          <div className="col-lg-12">
                                              <div className="mb-3">
                                                  <label className="form-label">Phone No. :</label>
                                                  <div className="form-icon position-relative">
                                                      <FiPhone className="fea icon-sm icons"/>
                                                      <input name="number" id="number" type="number" className="form-control ps-5" placeholder="Phone :"/>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="col-lg-12">
                                              <div className="mb-3">
                                                  <label className="form-label">Website :</label>
                                                  <div className="form-icon position-relative">
                                                      <FiGlobe className="fea icon-sm icons"/>
                                                      <input name="url" id="url" type="url" className="form-control ps-5" placeholder="Url :"/>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="col-lg-12 mt-2 mb-0">
                                              <button className="btn btn-primary">Add</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                              
                              <div className="col-md-6 mt-4 pt-2"> 
                                  <h5>Change password :</h5>
                                  <form>
                                      <div className="row mt-4">
                                          <div className="col-lg-12">
                                              <div className="mb-3">
                                                  <label className="form-label">Old password :</label>
                                                  <div className="form-icon position-relative">
                                                      <FiKey className="fea icon-sm icons"/>
                                                      <input type="password" className="form-control ps-5" placeholder="Old password" required=""/>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="col-lg-12">
                                              <div className="mb-3">
                                                  <label className="form-label">New password :</label>
                                                  <div className="form-icon position-relative">
                                                      <FiKey className="fea icon-sm icons"/>
                                                      <input type="password" className="form-control ps-5" placeholder="New password" required=""/>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="col-lg-12">
                                              <div className="mb-3">
                                                  <label className="form-label">Re-type New password :</label>
                                                  <div className="form-icon position-relative">
                                                      <FiKey className="fea icon-sm icons"/>
                                                      <input type="password" className="form-control ps-5" placeholder="Re-type New password" required=""/>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="col-lg-12 mt-2 mb-0">
                                              <button className="btn btn-primary">Save password</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>

                  
                  <div className="rounded shadow mt-4">
                      <div className="p-4 border-bottom">
                          <h5 className="mb-0">Account Notifications :</h5>
                      </div>

                      <div className="p-4">
                          <div className="d-flex justify-content-between pb-4">
                              <h6 className="mb-0">When someone mentions me</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="noti1"/>
                                  <label className="form-check-label" htmlFor="noti1"></label>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between py-4 border-top">
                              <h6 className="mb-0">When someone follows me</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti2"/>
                                  <label className="form-check-label" htmlFor="noti2"></label>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between py-4 border-top">
                              <h6 className="mb-0">When shares my activity</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="noti3"/>
                                  <label className="form-check-label" htmlFor="noti3"></label>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between py-4 border-top">
                              <h6 className="mb-0">When someone messages me</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="noti4"/>
                                  <label className="form-check-label" htmlFor="noti4"></label>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="rounded shadow mt-4">
                      <div className="p-4 border-bottom">
                          <h5 className="mb-0">Marketing Notifications :</h5>
                      </div>

                      <div className="p-4">
                          <div className="d-flex justify-content-between pb-4">
                              <h6 className="mb-0">There is a sale or promotion</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="noti5"/>
                                  <label className="form-check-label" htmlFor="noti5"></label>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between py-4 border-top">
                              <h6 className="mb-0">Company news</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="noti6"/>
                                  <label className="form-check-label" htmlFor="noti6"></label>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between py-4 border-top">
                              <h6 className="mb-0">Weekly jobs</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti7"/>
                                  <label className="form-check-label" htmlFor="noti7"></label>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between py-4 border-top">
                              <h6 className="mb-0">Unsubscribe News</h6>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti8"/>
                                  <label className="form-check-label" htmlFor="noti8"></label>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="rounded shadow mt-4">
                      <div className="p-4 border-bottom">
                          <h5 className="mb-0 text-danger">Delete Account :</h5>
                      </div>

                      <div className="p-4">
                          <h6 className="mb-0">Do you want to delete the account? Please press below "Delete" button</h6>
                          <div className="mt-4">
                              <button className="btn btn-danger">Delete Account</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
