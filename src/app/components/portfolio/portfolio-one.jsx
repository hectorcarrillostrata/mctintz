'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { creativePortfolioData, creativePortfolioImage } from '../../data/portfolio'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PortfolioOne() {
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 filters-group-wrap">
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
        </div>

        <div className="container-fluid">
            <div id="grid" className="row mt-4 p-0">
                {filteredData.slice(0,8).map((item,index)=>{
                return(
                    <div className="col-lg-3 col-md-6 col-12 spacing" key={index}>
                        <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <Link href="#" scroll={false} onClick={()=>openBox(item.id)} className="lightbox d-inline-block" title="">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                </Link>
                                <div className="content p-3">
                                    <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-dark title">{item.name}</Link></h5>
                                    <h6 className="text-muted tag mb-0">{item.title}</h6>
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
    </>
  )
}
