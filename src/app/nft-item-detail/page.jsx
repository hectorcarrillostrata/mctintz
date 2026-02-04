import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NftNavbar from '../components/navbar/nft-navbar'
import NftModal from '../components/nft/nft-modal'
import ScrollToTop from '../components/scroll-to-top'
import NewsletterFooter from '../components/footer/newsletter-footer'

import { nftProduct } from '../data/nft'

export default function NftItemDetail() {
  return (
    <>
    <NftNavbar/>

    <section className="bg-half-100">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="sticky-bar">
                        <Image src="/images/nft/1.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                    </div>
                </div>

                <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="nft nft-primary">
                        <h4 className="mb-3">Deep Sea Phantasy</h4>
                        <p className="text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>
                    
                        <h5 className="mt-4">Creator:</h5>

                        <div className="d-flex align-items-center mt-3">
                            <Image src="/images/client/01.jpg" width={45} height={45} className="avatar avatar-md-sm rounded-pill shadow" alt=""/>

                            <div className="ms-2">
                                <Link href="" className="title text-dark h6">Calvin Carlo</Link>
                            </div>
                        </div>

                        <h5 className="mt-4">Details:</h5>

                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>

                        <h5 className="mt-4 text-muted">Bid Price</h5>
                        <h6 className="mb-0">1.252ETH / $4578</h6>

                        <NftModal/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="mb-4">Related Items</h4>
                        <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {nftProduct.slice(0,4).map((item,index)=>{
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
    </section>
    <NewsletterFooter/>
    <ScrollToTop/>
    </>
  )
}
