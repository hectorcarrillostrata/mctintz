import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Table() {
  return (
    <>
    <Navbar/>
    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Tables </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Tables</li>
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
          <div className="row">
              <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <h5>Components</h5>
                  <UiSidebar/>
              </div>

              <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                      <div className="col-12">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Table </h5>
                              </div>

                              <div className="p-4">
                                  <div className="table-responsive bg-white shadow rounded">
                                      <table className="table mb-0 table-center">
                                          <thead>
                                              <tr>
                                              <th scope="col" className="border-bottom">#</th>
                                              <th scope="col" className="border-bottom">First</th>
                                              <th scope="col" className="border-bottom">Last</th>
                                              <th scope="col" className="border-bottom">Handle</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th scope="row">1</th>
                                                  <td>Mark</td>
                                                  <td>Otto</td>
                                                  <td>@mdo</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">2</th>
                                                  <td>Jacob</td>
                                                  <td>Thornton</td>
                                                  <td>@fat</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">3</th>
                                                  <td>Harry</td>
                                                  <td>Potter</td>
                                                  <td>@hpt</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Table Hover </h5>
                              </div>

                              <div className="p-4">
                                  <div className="table-responsive bg-white shadow rounded">
                                      <table className="table table-hover mb-0 table-center">
                                          <thead>
                                              <tr>
                                              <th scope="col" className="border-bottom">#</th>
                                              <th scope="col" className="border-bottom">First</th>
                                              <th scope="col" className="border-bottom">Last</th>
                                              <th scope="col" className="border-bottom">Handle</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th scope="row">1</th>
                                                  <td>Mark</td>
                                                  <td>Otto</td>
                                                  <td>@mdo</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">2</th>
                                                  <td>Jacob</td>
                                                  <td>Thornton</td>
                                                  <td>@fat</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">3</th>
                                                  <td>Harry</td>
                                                  <td>Potter</td>
                                                  <td>@hpt</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 mt-4 pt-2">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h5 className="title mb-0"> Table Dark Hover </h5>
                              </div>

                              <div className="p-4">
                                  <div className="table-responsive bg-white shadow rounded">
                                      <table className="table table-dark table-hover mb-0 table-center">
                                          <thead>
                                              <tr>
                                              <th scope="col" className="border-bottom">#</th>
                                              <th scope="col" className="border-bottom">First</th>
                                              <th scope="col" className="border-bottom">Last</th>
                                              <th scope="col" className="border-bottom">Handle</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th scope="row">1</th>
                                                  <td>Mark</td>
                                                  <td>Otto</td>
                                                  <td>@mdo</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">2</th>
                                                  <td>Jacob</td>
                                                  <td>Thornton</td>
                                                  <td>@fat</td>
                                              </tr>
                                              <tr>
                                                  <th scope="row">3</th>
                                                  <td>Harry</td>
                                                  <td>Potter</td>
                                                  <td>@hpt</td>
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
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
