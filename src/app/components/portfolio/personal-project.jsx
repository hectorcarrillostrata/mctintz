'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { projectData, projectImage } from '../../data/portfolio';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {FiCamera, FiArrowRight} from 'react-icons/fi'

export default function PersonalProject() {
    let [ selectCategory, setSelectCategory] = useState(null)
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    let filteredData = selectCategory ? projectData.filter((item)=>item.category === selectCategory):projectData

    const slides = projectImage.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index - 1);
        setOpen(true)
    }

   
  return (
        <section className="section bg-light" id="project">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">My Projects</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

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

                <div id="grid" className="row">
                    {filteredData.map((item,index)=>{
                        return(
                            <div className="col-lg-3 col-md-6 col-12 spacing picture-item" key={index}>
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
                                        <Lightbox
                                            open={open}
                                            close={() => setOpen(false)}
                                            slides={slides}
                                            index={activeIndex} 
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            <Link href="#" className="text-primary h6 mb-0">See More <span className="h5 mb-0 ms-1"><FiArrowRight className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
