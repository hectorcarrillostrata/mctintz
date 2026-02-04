import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import JobNavbar from '../components/navbar/job-navbar'
import Counter from '../components/counter'
import Footer from '../components/footer/footer'
import PartnerOne from '../components/partner/partner-one'
import ScrollToTop from '../components/scroll-to-top'

import { RiPresentationFill } from 'react-icons/ri'
import { FiAirplay } from 'react-icons/fi'
import { MdImageSearch} from 'react-icons/md'

export default function JobAbout() {
  return (
    <>
    <JobNavbar navlight={true}/> 

    <section className="bg-half-170 bg-primary d-table w-100 " style={{backgroundImage:"url('/images/job/bg.png')"}}>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title text-white title-dark mb-0"> About us</h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-job">Careers</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">About us</li>
                  </ul>
              </nav>
          </div>
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
          <div className="row align-items-center" id="counter">
              <div className="col-md-6">
                  <Image src="/images/job/resume-folder.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-lg-4">
                      <div className="d-flex mb-4">
                          <span className="text-primary h1 mb-0 display-1 fw-bold"><Counter end={15}/><span className='h3'>+</span></span>
                          <span className="h6 align-self-end ms-2">Years <br/> Experience</span>
                      </div>
                      <div className="section-title">
                          <h4 className="title mb-4">Who we are ?</h4>
                          <p className="text-muted">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                          <Link href="#" className="btn btn-primary mt-3">Contact us</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="container mt-4">
          <PartnerOne/>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h6 className="text-primary">Work Process</h6>
                      <h4 className="title mb-4">How do we works ?</h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                      <div className="icons text-center rounded mx-auto">
                          <RiPresentationFill className="h3 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Resume</h5>
                          <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                      <div className="icons text-center mx-auto rounded">
                          <FiAirplay className="h3 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Interviews</h5>
                          <p className="text-muted mb-0">Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
                  <div className="card features feature-primary feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                      <div className="icons text-center rounded mx-auto">
                          <MdImageSearch className="h3 mb-0"/>
                      </div>

                      <div className="card-body">
                          <h5 className="text-dark">Job Approval</h5>
                          <p className="text-muted mb-0">Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
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
