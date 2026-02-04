'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PhotographyNavbar from '../components/navbar/photography-navbar'
import PhotoAboutBanner from '../components/photography/photo-about-banner'
import SmallFooterTwo from '../components/footer/small-footer-two'
import ScrollToTop from '../components/scroll-to-top'

import { imagePortfolio, portfolio } from '../data/photography'

import {FiCamera, FiArrowRight} from 'react-icons/fi'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function PhotoGraphyPortfolio() {

  let [ selectCategory, setSelectCategory] = useState(null)
  let [open, setOpen] = useState(false);
  let [activeIndex, setActiveIndex] = useState(0)

  let filteredData = selectCategory ? imagePortfolio.filter((item)=>item.category === selectCategory):imagePortfolio

    const slides = portfolio.map((image) => ({ src: image }));

    const openBox = (index) =>{
        setActiveIndex(index-1);
        setOpen(true)
    }
  return (
    <>
     <PhotographyNavbar/> 
     <PhotoAboutBanner title='Portfolio'/>

    <section className="section pt-5">
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

          <div className="row g-4 mt-2" id="grid">
            <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
              >
                  <Masonry gutter='15px'>
                      {filteredData.map((item,index)=>{
                        return(
                          <div className="picture-item" data-groups='["branding"]' key={index}>
                              <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                  <div className="card-body p-0">
                                      <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                      <div className="overlay"></div>
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
                  </Masonry>
              </ResponsiveMasonry>
            
          </div>

          <div className="row">
              <div className="col mt-4 pt-2">
                  <div className="text-center">
                      <Link href="#" className="text-primary">See More <FiArrowRight/></Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <SmallFooterTwo/>
    <ScrollToTop/>
    </>
  )
}
