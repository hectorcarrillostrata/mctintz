import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import VideoCenter from '../components/video/video-center'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import { FiClock, FiShoppingCart, FiLock } from 'react-icons/fi'
import { LuSignal } from 'react-icons/lu'
import { PiBookOpenText, PiCubeBold } from 'react-icons/pi'
import { LiaBookReaderSolid } from 'react-icons/lia'
import { MdOutlineEventNote } from 'react-icons/md'

export default function CourseDetail() {
  return (
    <>
     <Navbar navlight={true}/> 
    <section className="bg-half-260 bg-primary d-table w-100" style={{backgroundImage:"url('/images/course/detail.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <span className="badge text-bg-success h6 rounded-pill py-2">$79 full course</span>
                      <h2 className="title text-white title-dark mt-3 mb-0"> Become a Professional Graphic Designer </h2>

                      <ul className="list-unstyled mt-3 mb-0">
                          <li className="align-items-center justify-content-center list-inline-item mx-1">
                              <Image src="/images/client/05.jpg" width={36} height={36} className="avatar avatar-ex-small rounded-pill shadow" alt=""/>
                              <Link href="#" className="text-white title-dark ms-1">Cristina Murphy</Link>
                          </li>
                      </ul>
                  </div>
              </div>  
          </div>

          <ul className="list-unstyled mt-4 mb-0 position-middle-bottom">
              <li className="align-items-center justify-content-center list-inline-item mx-2">
                  <FiClock className="fs-5 text-white title-dark align-middle"/>
                  <span className="text-white-50 ms-1">10 Weeks</span>
              </li>

              <li className="align-items-center justify-content-center list-inline-item mx-2">
                  <LuSignal className="fs-5 text-white title-dark align-middle"/>
                  <span className="text-white-50 ms-1">All Levels</span>
              </li>
              
              <li className="align-items-center justify-content-center list-inline-item mx-2">
                  <PiBookOpenText className="fs-5 text-white title-dark align-middle"/>
                  <span className="text-white-50 ms-1">16 Lessons</span>
              </li>
              
              <li className="align-items-center justify-content-center list-inline-item mx-2">
                  <PiCubeBold className="fs-5 text-white title-dark align-middle"/>
                  <span className="text-white-50 ms-1">0 Quiz</span>
              </li>
              
              <li className="align-items-center justify-content-center list-inline-item mx-2">
                  <LiaBookReaderSolid className="fs-5 text-white title-dark align-middle"/>
                  <span className="text-white-50 ms-1">5 Students</span>
              </li>
              
              <li className="align-items-center justify-content-center list-inline-item mx-2">
                  <FiShoppingCart className="fs-5 text-white title-dark align-middle me-1"/>
                  <Link href="#!" className="text-white">Buy Now</Link>
              </li>
          </ul>
      </div> 
    </section>

    <div className="position-relative">
      <div className="shape overflow-hidden text-color-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
      </div>
    </div>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="section-title">
                      <h4 className="title mb-4">Overview</h4>
                      <p className="text-muted">Ooh, name it after me! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. Why would I want to know that? What’s with you kids? Every other day it’s food, food, food. Alright, I’ll get you some stupid food.</p>
                      <p className="text-muted">It’s a T. It goes “tuh”. You seem malnourished. Are you suffering from intestinal parasites? I suppose I could part with ‘one’ and still be feared… And I’d do it again! And perhaps a third time! But that would be it.</p>
                      <p className="text-muted">I’m just glad my fat, ugly mama isn’t alive to see this day. I can explain. It’s very valuable. I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him.</p>
                      <p className="text-muted">Bender, we’re trying our best. Kif might! You can crush me but you can’t crush my spirit! Kif, I have mated with a woman. Inform the men. I’m Santa Claus!</p>
                      <p className="text-muted mb-0">What are you hacking off? Is it my torso?! ‘It is!’ My precious torso! You, a bobsleder!? That I’d like to see! And I’d do it again! And perhaps a third time! But that would be it. My fellow Earthicans, as I have explained in my book ‘Earth in the Balance”, and the much more popular ”Harry Potter and the Balance of Earth’, we need to defend our planet against pollution. Also dark wizards.</p>
                  </div>

                  <div className="row">
                      <div className="col-md-6 mt-4 pt-2"><Image src="/images/course/de01.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/></div>
                      <div className="col-md-6 mt-4 pt-2">
                          <div className="position-relative">
                              <Image src="/images/course/de02.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="rounded img-fluid mx-auto d-block" alt=""/>
                              <VideoCenter/>
                          </div>
                      </div>
                  </div>

                  <div className="section-title mt-4 pt-2">
                      <h4 className="title mb-0">Curriculum</h4>

                      <div className="row">
                          <div className="col-md-6 mt-4 pt-2">
                              <h5 className="mb-0">Introductions</h5>

                              <div className="table-responsive bg-white shadow rounded mt-4">
                                  <table className="table mb-0 table-center">
                                      <thead>
                                          <tr>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth:'100px'}}>Lessons</th>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                          </tr>
                                      </thead>
      
                                      <tbody>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 1</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 2</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 3</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 4</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <h5 className="mb-0">Mastery</h5>

                              <div className="table-responsive bg-white shadow rounded mt-4">
                                  <table className="table mb-0 table-center">
                                      <thead>
                                          <tr>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth:'100px'}}>Lessons</th>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                          </tr>
                                      </thead>
      
                                      <tbody>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 11</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 12</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 13</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 14</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <h5 className="mb-0">Final Thoughts</h5>

                              <div className="table-responsive bg-white shadow rounded mt-4">
                                  <table className="table mb-0 table-center">
                                      <thead>
                                          <tr>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth:'100px'}}>Lessons</th>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                          </tr>
                                      </thead>
      
                                      <tbody>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 21</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 22</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 23</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 24</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <h5 className="mb-0">Bonus</h5>

                              <div className="table-responsive bg-white shadow rounded mt-4">
                                  <table className="table mb-0 table-center">
                                      <thead>
                                          <tr>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth:'100px'}}>Lessons</th>
                                              <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">Time</th>
                                          </tr>
                                      </thead>
      
                                      <tbody>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 31</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><span className="badge bg-soft-primary">Read Free</span></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 32</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 33</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                          <tr>
                                              <th className="p-3">
                                                  <div className="align-items-center">
                                                      <MdOutlineEventNote className="h6 mb-0"/>
                                                      <p className="mb-0 d-inline fw-normal h6 ms-1"><Link href="#" className="text-muted">Lesson 34</Link></p>
                                                  </div>
                                              </th>
                                              <td className="p-3 text-end"><FiLock className="uil uil-lock"/></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="section-title mt-4 pt-2">
                      <h4 className="title mb-0">Instructor</h4>

                      <div className="d-md-flex align-items-center mt-4 pt-2">
                          <Image src="/images/client/05.jpg" width={110} height={110} className="avatar avatar-medium rounded-pill" alt=""/>

                          <div className="ms-md-3 mt-4 mt-sm-0">
                              <Link href="#" className="text-dark h5">Cristina Murphy</Link>
                              <p className="text-muted mb-0 mt-2">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
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
