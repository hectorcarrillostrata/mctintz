import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NftNavbar from '../components/navbar/nft-navbar'
import CreatorsSlider from '../components/nft/creators-slider'

import { MdCurrencyBitcoin } from 'react-icons/md'
import { LiaFileCode } from 'react-icons/lia'
import { FiBookmark } from 'react-icons/fi'

import { categories, nftProduct } from '../data/nft'
import NewsletterFooter from '../components/footer/newsletter-footer'
import ScrollToTop from '../components/scroll-to-top'
import CookiesModal from '../components/cookiesModal'

export default function IndexNft() {
  return (
    <>
      <NftNavbar/>
      <section className="bg-home d-flex align-items-center background-effect bg-soft-primary" id="home">
        <div className="container z-index-1">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="title-heading">
                        <h4 className="display-4 fw-bold text-dark mb-4">Discover, <br/> find and sell <br/> monster NFTs</h4>
                        <p className="para-desc mx-auto text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                    
                        <div className="mt-4">
                            <Link href="" className="btn btn-primary"><MdCurrencyBitcoin className=""/> Mint NFT</Link>
                            <Link href="" className="btn btn-soft-primary ms-1"><LiaFileCode className=""/> Explore</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <Image src="/images/nft/home.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>

        <ul className="circles p-0 mb-0">
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
      </section>

      <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h4 className="title mb-4">Browse by Categories</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {categories.map((item,index)=>{
                return(
                  <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2" key={index}>
                      <div className="card features feature-primary explore-feature shadow rounded text-center">
                          <div className="card-body">
                              <div className="icons rounded-circle shadow-lg d-inline-block">
                                  <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                              </div>
                              <div className="content mt-3">
                                  <h6 className="mb-0"><Link href="#" className="title text-dark">{item.title}</Link></h6>
                              </div>
                          </div>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h4 className="title mb-4">Explore Hot Products</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {nftProduct.slice(0,8).map((item,index)=>{
                return(
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                      <div className="card nft nft-item nft-primary rounded shadow overflow-hidden">
                          <div className="nft-image position-relative overflow-hidden">
                              <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid item-img" alt=""/>
                              <div className="overlay"></div>
                              <div className="bid-btn p-3 text-center">
                                  <Link href={`/nft-item-detail/${item.id}`} className="btn btn-pills"><i className="mdi mdi-gavel fs-6 me-2"></i> Bid</Link>
                              </div>
                              <div className="position-absolute top-0 start-0 m-2">
                                  <Link href=""><Image src={item.clientImg} width={36} height={36} className="avatar avatar-sm-sm rounded-pill shadow-md" alt=""/></Link>
                              </div>
                              <div className="position-absolute top-0 end-0 m-2">
                                  <Link href="" className="badge rounded-md bg-light shadow"><i className="mdi mdi-heart align-middle text-danger"></i> <span className="text-dark">{item.like}</span></Link>
                              </div>
                          </div>

                          <div className="card-body p-3">
                              <Link href={`/nft-item-detail/${item.id}`} className="h5 title text-dark">{item.name}</Link>

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
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h4 className="title mb-4">Best Creators</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <CreatorsSlider/>
        </div>
      </section>

      <section className="section" style={{backgroundImage:"url('/images/nft/bg.jpg')", backgroundPosition:'top center'}}>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container">
            <div className="row align-items-end">
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="section-title">
                        <h4 className="title text-white title-dark mb-4">Start your own collection today</h4>
                        <p className="text-white-50 para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="text-md-end">
                        <Link href="" className="btn btn-primary"><FiBookmark/> Creat your collection</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <NewsletterFooter/>
      <ScrollToTop/>
      <CookiesModal/>
    </>
  )
}
