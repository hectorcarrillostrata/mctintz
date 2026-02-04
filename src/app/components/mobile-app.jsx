import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FiChevronRight, FiSmartphone} from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'
import { RiGooglePlayLine } from 'react-icons/ri'

export default function MobileApp() {
  return (
    <div className="row align-items-center">
        <div className="col-lg-5 col-md-5 col-12">
            <Image src="/images/illustrator/envelope-yellow.svg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid mx-auto d-block" alt=""/>
        </div>

        <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title">
                <div className="alert alert-light alert-pills text-dark" role="alert">
                    <span className="badge text-bg-primary rounded-pill me-1">Apps</span>
                    <span className="content">Download now <FiChevronRight className="align-middle"/></span>
                </div>
                <h4 className="title mb-4">Available for your <br/> Smartphones</h4>
                <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <div className="my-4">
                    <Link href="#" className="btn btn-lg btn-dark mt-2 me-2 d-inline-flex align-items-center"><FaApple className='me-1'/> App Store</Link>
                    <Link href="#" className="btn btn-lg btn-dark mt-2 d-inline-flex align-items-center"><RiGooglePlayLine className='me-1'/> Play Store</Link>
                </div>

                <div className="d-inline-block">
                    <div className="pt-4 d-flex align-items-center border-top">
                        <FiSmartphone className="fea icon-md me-2 text-primary"></FiSmartphone>
                        <div className="content">
                            <h6 className="mb-0">Install app now on your cellphones</h6>
                            <Link href="#" className="text-primary h6">Learn More <FiChevronRight/></Link>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
