import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NftNavbar from '../components/navbar/nft-navbar'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

import { creators } from '../data/nft'
import {FiArrowRightCircle} from 'react-icons/fi'

export default function NftCreatore() {
  return (
    <>
     <NftNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Creators List </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><a href="/">Landrick</a></li>
                      <li className="breadcrumb-item"><a href="/index-nft">NFTs</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Creator</li>
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
            {creators.map((item,index)=>{
              return(
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card nft nft-primary nft-creator border-0 rounded-md shadow">
                        <div className="card-body p-3">
                            <div className="pb-3 border-bottom">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="badge bg-soft-primary rounded-pill">No. #{item.id}</span>

                                    <Link href="/nft-explore" className="text-dark h5 mb-0 read-more"><FiArrowRightCircle/></Link>
                                </div>
                            </div>

                            <div className="content mt-3">
                                <div className="position-relative text-center">
                                    <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded-pill shadow" alt=""/>
                                    
                                    <div className="author mt-2">
                                        <Link href={`/account-profile/${item.id}`} className="text-dark h6 name">{item.name}</Link>
                                        <small className="d-block fw-bold mt-1">{item.value}<span className="text-muted">ETH</span></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>

          <div className="row">
              <div className="col-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0">
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                      <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
    <NewsletterFooter/>
    <ScrollToTop/>
    </>
  )
}
