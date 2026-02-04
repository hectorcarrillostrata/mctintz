import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CryptoNavbar from '../components/navbar/crypto-navbar'
import {FiSearch} from 'react-icons/fi'
import Charts from '../components/crypto/chart'
import { coinList } from '../data/crypto'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function CryptoMarket() {
  return (
    <>
    <CryptoNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100" style={{backgroundImage:"url('/images/shape02.png')", backgroundPosition:'top left'}}>
      <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <span className="text-muted">In the past 24 hours</span>
                      <h4 className="mt-2 mb-4">Market is up <span className="text-success">15.78%</span></h4>
                      <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                      <div className="text-center subcribe-form mt-4 pt-2">
                          <form>
                              <div className="form-icon position-relative">
                                  <FiSearch className="fea icon-sm icons mt-1"/>
                                  <input type="text" id="text" name="text" className="rounded-pill bg-white-50 form-control ps-5" placeholder="Search assets..."/>
                              </div>
                              <button type="submit" className="btn btn-pills btn-primary">Search</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="section-title mb-4">
                      <h4>Top Movers</h4>
                  </div>
              </div>
          </div>

          <Charts/>

          <div className="row justify-content-center">
              <div className="col-12 mt-4 pt-2">
                  <div className="table-responsive bg-white shadow rounded">
                      <table className="table mb-0 table-center">
                          <thead>
                              <tr>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth:'250px'}}>Name</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Price</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Change(%)</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Change($)</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width:'150px'}}>Marketcap</th>
                                  <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end" style={{width:'100px'}}>Trade</th>
                              </tr>
                          </thead>

                          <tbody>
                              {coinList.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                      <th className="p-3">
                                          <div className="align-items-center">
                                              <Image src={item.image} className="me-3" width={32} height={32} alt=""/>
                                              <p className="mb-0 d-inline fw-normal h6">{item.name} <span className="text-muted">{item.sName}</span> </p>
                                          </div>
                                      </th>
                                      <td className="p-3">{item.price}</td>
                                      <td className={`p-3 ${item.status === 'loss' ? 'text-danger' : 'text-success'}`}>{item.perChange}</td>
                                      <td className={`p-3 ${item.status === 'loss' ? 'text-danger' : 'text-success'}`}>{item.change}</td>
                                      <td className="text-muted p-3">{item.marketcap}</td>
                                      <td className="p-3 text-end"><Link href="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                    </tr>
                                )
                              })}
                          </tbody>
                      </table>
                  </div>
              </div>

              <div className="col-12 mt-4 pt-2">
                  <div className="d-md-flex align-items-center text-center justify-content-between">
                      <span className="text-muted me-3">Showing 1 - 15 out of 452</span>
                      <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                          <li className="page-item"><Link className="page-link" href="" aria-label="Previous">Prev</Link></li>
                          <li className="page-item active"><Link className="page-link" href="">1</Link></li>
                          <li className="page-item"><Link className="page-link" href="">2</Link></li>
                          <li className="page-item"><Link className="page-link" href="">3</Link></li>
                          <li className="page-item"><Link className="page-link" href="" aria-label="Next">Next</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <NewsletterFooter/>
    <ScrollToTop/>
    </>
  )
}
