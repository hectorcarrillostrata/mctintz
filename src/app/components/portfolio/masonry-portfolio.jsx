'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { masonaryData, masonaryImage } from '../../data/portfolio'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {FiCamera} from 'react-icons/fi'

export default function MasonryPortfolio({container, col, grid}) {
    let [ selectCategory, setSelectCategory] = useState(null)
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    const slides = masonaryImage.map((image) => ({ src: image }));

    let filteredData = selectCategory ? masonaryData.filter((item)=>item.category === selectCategory):masonaryData

    const openBox = (index) =>{
        setActiveIndex(index-1);
        setOpen(true)
    }
  return (
    <>
        <section className="section">
            <div className={container}>
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 filters-group-wrap">
                        <div className="filters-group">
                            <ul className="container-filter list-inline mb-0 filter-options text-center">
                                <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === null ? 'active' : '' }`} onClick={()=>setSelectCategory(null)}>All</li>
                                <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'branding' ? 'active' : '' }`} onClick={()=>setSelectCategory('branding')}>Branding</li>
                                <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'designing' ? 'active' : '' }`} onClick={()=>setSelectCategory('designing')}>Designing</li>
                                <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'photography' ? 'active' : '' }`} onClick={()=>setSelectCategory('photography')}>Photography</li>
                                <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'development' ? 'active' : '' }`} onClick={()=>setSelectCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className={col}>
                        <div id="grid" className="row">
                            <ResponsiveMasonry
                                columnsCountBreakPoints={grid}
                            >
                                <Masonry>
                                    {filteredData.map((item,index)=>{
                                        return(
                                            <div className="spacing" data-groups='["branding"]' key={index}>
                                                <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                                    <div className="card-body p-0">
                                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                        <div className="overlay-work"></div>
                                                        <div className="content">
                                                            <h5 className="mb-1"><Link href="/portfolio-detail-one" className="text-white title">{item.name}</Link></h5>
                                                            <h6 className="text-white-50 tag mt-1 mb-0">{item.title}</h6>
                                                        </div>
                                                        <div className="icons text-center">
                                                            <Link href="#" scroll={false} onClick={()=>openBox(item.id)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                       <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={slides}
                            index={activeIndex} 
                        />
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
                </div>
            </div>
        </section>
    </>
  )
}
