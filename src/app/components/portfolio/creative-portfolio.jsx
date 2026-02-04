'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { creativePortfolioData, creativePortfolioImage } from '../../data/portfolio'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {FiCamera} from 'react-icons/fi'

export default function CreativePortfolio({container, col, grid}) {
    let [ selectCategory, setSelectCategory] = useState(null)
    let [open, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(0)

    let filteredData = selectCategory ? creativePortfolioData.filter((item)=>item.category === selectCategory):creativePortfolioData

    const slides = creativePortfolioImage.map((image) => ({ src: image }));

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
                            <ul className="container-filter filter-border list-inline mb-0 filter-options text-center">
                                <li className={`list-inline-item text-uppercase position-relative ${selectCategory === null ? 'active' : '' }`} onClick={()=>setSelectCategory(null)}>All</li>
                                <li className={`list-inline-item text-uppercase position-relative ${selectCategory === 'branding' ? 'active' : '' }`} onClick={()=>setSelectCategory('branding')}>Branding</li>
                                <li className={`list-inline-item text-uppercase position-relative ${selectCategory === 'designing' ? 'active' : '' }`} onClick={()=>setSelectCategory('designing')}>Designing</li>
                                <li className={`list-inline-item text-uppercase position-relative ${selectCategory === 'photography' ? 'active' : '' }`} onClick={()=>setSelectCategory('photography')}>Photography</li>
                                <li className={`list-inline-item text-uppercase position-relative ${selectCategory === 'development' ? 'active' : '' }`} onClick={()=>setSelectCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {container === "container" && 
                        <div className={col}>
                            <div id="grid" className="row">
                                {filteredData.map((item,index)=>{
                                    return(
                                        <div className={grid} key={index}>
                                            <div className="card border-0 work-container work-primary work-creative position-relative d-block overflow-hidden rounded">
                                                <div className="card-body p-0">
                                                    <div className="position-relative overflow-hidden">
                                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                                        <div className="overlay-grid"></div>
                                                    </div>
                                                    <div className="content p-4">
                                                        <Link href="" className="text-white title h5 d-block mb-2">{item.name}</Link>
                                                        <p className="text-white-50 tag h6 mb-0">{item.title}</p>
                                                    </div>
                                                    <div className="icons text-center p-4">
                                                        <Link href="#" scroll={false} onClick={()=>openBox(item.id)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"></FiCamera></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                slides={slides}
                                index={activeIndex} 
                            />
                        </div>
                    }
                    {container === 'container-fluid' && 
                    <div className={col}>
                        {filteredData.map((item,index)=>{
                            return(
                                <div className={grid} key={index}>
                                    <div className="card border-0 work-container work-primary work-creative position-relative d-block overflow-hidden rounded">
                                        <div className="card-body p-0">
                                            <div className="position-relative overflow-hidden">
                                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                                <div className="overlay-grid"></div> 
                                            </div>
                                            <div className="content p-4">
                                                <Link href="" className="text-white title h5 d-block mb-2">{item.name}</Link>
                                                <p className="text-white-50 tag h6 mb-0">{item.title}</p>
                                            </div>
                                            <div className="icons text-center p-4">
                                                <Link href="#" scroll={false} onClick={()=>openBox(item.id)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={slides}
                            index={activeIndex} 
                        />
                    </div> 
                    }
                </div>
                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item"><a className="page-link" href="#" aria-label="Previous">Prev</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#" aria-label="Next">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
