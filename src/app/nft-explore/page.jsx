import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NftNavbar from '../components/navbar/nft-navbar'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'

import { nftProduct } from '../data/nft'

export default function NftExplore() {
  return (
    <>
    <NftNavbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Explore Items </h4>
                  </div>
              </div>  
          </div>
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="/index-nft">NFTs</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Explore</li>
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
            {nftProduct.map((item,index)=>{
              return(
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                      <div className="card nft nft-item nft-primary rounded shadow overflow-hidden">
                          <div className="nft-image position-relative overflow-hidden">
                              <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid item-img" alt=""/>
                              <div className="overlay"></div>
                              <div className="bid-btn p-3 text-center">
                                  <Link href={`nft-item-detail/${item.id}`} className="btn btn-pills"><i className="mdi mdi-gavel fs-6 me-2"></i> Bid</Link>
                              </div>
                              <div className="position-absolute top-0 start-0 m-2">
                                  <Link href=""><Image src={item.clientImg} width={36} height={36} className="avatar avatar-sm-sm rounded-pill shadow-md" alt=""/></Link>
                              </div>
                              <div className="position-absolute top-0 end-0 m-2">
                                  <Link href="" className="badge rounded-md bg-light shadow"><i className="mdi mdi-heart align-middle text-danger"></i> <span className="text-dark">{item.like}</span></Link>
                              </div>
                          </div>

                          <div className="card-body p-3">
                              <Link href={`nft-item-detail/${item.id}`} className="h5 title text-dark">{item.name}</Link>

                              <div className="d-flex align-items-center justify-content-between mt-2">
                                  <span className="text-muted">{item.stock}</span>
                                  <span className="text-dark">Price: <span className="link">{item.price}</span></span>
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
