import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import RealEstateNavbar from '../components/navbar/real-estate-navbar'
import HeroSection from '../components/react-estate/hero-section'
import FormTab from '../components/react-estate/form-tab'
import RealEstateAbout from '../components/react-estate/real-estate-about'
import ClientSingle from '../components/client/client-single'
import { teamOne, teamSocial } from '../data/team'
import Footer from '../components/footer/footer'
import CookiesModal from '../components/cookiesModal'
import ScrollToTop from '../components/scroll-to-top'

import { blogData, propertyData } from '../data/real-estate'

import { FiHome, FiHeart, FiCamera, FiChevronRight, FiMessageCircle } from 'react-icons/fi'
import { LiaCompressArrowsAltSolid } from 'react-icons/lia'
import { LuBedDouble, LuBath, LuUser, LuCalendarDays } from 'react-icons/lu'

export default function RealEstate() {
  return (
    <>
    <RealEstateNavbar/>
    <HeroSection/>

    <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-11 col-12 text-center mt-sm-0 pt-sm-0">
                <FormTab/>                        
            </div>
        </div>
    </div>

    <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <span className="badge rounded-pill bg-soft-primary">Process</span>
                    <h4 className="title mt-3 mb-4">How it work</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <RealEstateAbout/>
    </div>

    <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <span className="badge rounded-pill bg-soft-primary">Featured Items</span>
                    <h4 className="title mt-3 mb-4">Latest Property</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row">
            {propertyData.slice(0,6).map((item,index)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card shop-list border-0 shadow position-relative overflow-hidden">
                        <div className="shop-image position-relative overflow-hidden shadow">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            <ul className="list-unstyled shop-icons">
                                <li className="list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-primary" style={{margin:'0 2px'}}><FiHome/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-primary" style={{margin:'0 2px'}}><FiHeart/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-primary" style={{margin:'0 2px'}}><FiCamera/></Link></li>
                            </ul>
                        </div>
                        <div className="card-body content p-4">
                            <Link href={`/property-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>

                            <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center">
                                <li className="d-flex align-items-center me-3">
                                    <LiaCompressArrowsAltSolid className="fs-5 me-1 text-primary"/>
                                    <span className="text-muted">{item.sqf}</span>
                                </li>

                                <li className="d-flex align-items-center me-3">
                                    <LuBedDouble className="fs-5 me-1 text-primary"/>
                                    <span className="text-muted">{item.beds}</span>
                                </li>

                                <li className="d-flex align-items-center">
                                    <LuBath className="fs-5 me-1 text-primary"/>
                                    <span className="text-muted">{item.baths}</span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                <li className="list-inline-item mb-0">
                                    <span className="text-muted">Price</span>
                                    <p className="fw-semibold mb-0">{item.price}</p>
                                </li>
                                <li className="list-inline-item mb-0 text-muted">
                                    <span className="text-muted">Rating</span>
                                    <ul className="fw-semibold text-warning list-unstyled mb-0">
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mb-0 text-dark">5.0(30)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
            })}

            <div className="col-12 mt-4 pt-2">
                <div className="text-center">
                    <Link href="/property-grid" className="mt-3 h6 text-primary">View More Properties <FiChevronRight className="align-middle"/></Link>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-100 mt-60">
        <div className="rounded shadow py-5" style={{backgroundImage:"url('/images/real/1.jpg')", backgroundPosition:'center'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card rounded p-4">
                            <ClientSingle/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <h4 className="title mb-4">Our Experts</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>
        </div>

        <div className="row">
            {teamOne.map((item,index)=>{
            return(
                <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card team team-primary bg-light text-center rounded shadow border-0">
                        <div className="card-body">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt=""/>
                                <ul className="list-unstyled mb-0 team-icon">
                                {teamSocial.map((el,index)=>{
                                    let Icon = el
                                    return(
                                    <li className="list-inline-item" key={index} style={{margin:"0 2px"}}><Link href="#" className="btn btn-primary btn-pills btn-sm btn-icon"><Icon className="icons"/></Link></li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="content pt-3">
                                <h5 className="mb-0"><Link href="#" className="name text-dark">{item.name}</Link></h5>
                                <small className="designation text-muted">Commercial Broker</small>
                            </div>
                        </div>
                    </div>
                </div>
            )
            })}
        </div>
    </div>
    </section>

    <section className="section pt-0" style={{backgroundImage:"url('/images/real/build.png')", backgroundPosition:"bottom", backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Latest Blog & News</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogData.map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card blog blog-primary rounded border-0 shadow">
                                    <div className="position-relative">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:"auto"}} className="card-img-top rounded-top" alt=""/>
                                        <div className="overlay rounded-top"></div>
                                    </div>
                                    <div className="card-body content">
                                        <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className="me-1"/>33</Link></li>
                                                <li className="list-inline-item"><Link href="#" className="text-muted comments"><FiMessageCircle className="me-1"/>08</Link></li>
                                            </ul>
                                            <Link href="/blog-detail" className="text-muted readmore">Read More <FiChevronRight className="align-middle"/></Link>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                                        <small className="date"><LuCalendarDays className="me-1"/>{item.date}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    </section>

    <Footer/>
    <CookiesModal/>
    <ScrollToTop/>
    </>
  )
}
