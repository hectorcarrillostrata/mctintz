'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { productData } from '../../data/shop'

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';
import ShopIcon from './shop-icon'

export default function RelatedProductSlider() {
    const settings = {
        container: '.tiny-four-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
  return (
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <h5 className="mb-0">Related Products</h5>
                </div>

                <div className="col-12 mt-4">
                    <div className="tiny-four-item">
                        <TinySlider settings={settings}>
                            {productData.slice(0,9).map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card shop-list border-0 position-relative m-2">
                                            <ul className="label list-unstyled mb-0">
                                                {item.tag.map((el,index)=>{
                                                    return(
                                                    <li key={index}><Link href="#" className={`${el === 'New' ? 'badge badge-link rounded-pill bg-primary' : ''} ${el === 'Featured' ? 'badge badge-link rounded-pill bg-success' : ''} ${el === 'Sale' ? 'badge badge-link rounded-pill bg-warning' : ''}`}>{el}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                            <div className="shop-image overflow-hidden rounded shadow">
                                                <Link href={`/shop-product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                                                <Link href="shop-product-detail.html" className="overlay-work">
                                                    <Image src={item.image2} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                </Link>
                                                <ShopIcon id={item.id}/>
                                            </div>
                                            <div className="card-body content pt-4 p-2">
                                                <Link href={`/shop-product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                                <div className="d-flex justify-content-between mt-1">
                                                    <h6 className="text-dark small fst-italic mb-0 mt-1">{item.descRate}<del className="text-danger ms-2">{item.rate}</del> </h6>
                                                    <ul className="list-unstyled text-warning mb-0">
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </TinySlider>
                    </div>
                </div>
            </div>
        </div> 
  )
}
