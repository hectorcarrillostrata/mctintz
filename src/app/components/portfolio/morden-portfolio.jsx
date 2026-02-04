'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { classicPortfolio } from '../../data/portfolio'

import {LuUser, LuCalendarDays} from 'react-icons/lu'

export default function MordenPortfolio({col, grid, container}) {
    let [ selectCategory, setSelectCategory] = useState(null)

    let filteredData = selectCategory ? classicPortfolio.filter((item)=>item.category === selectCategory):classicPortfolio

  return (
        <section className="section">
            <div className={container}>
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
                {container === "container" && 
                    <div className="row justify-content-center">
                        <div className={col}>
                            <div id="grid" className="row">
                                {filteredData.map((item,index)=>{
                                    return(
                                        <div className={grid} key={index}>
                                            <div className="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                                                <div className="card-body p-0">
                                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt="work-image"/>
                                                    <div className="overlay-work"></div>
                                                    <div className="content">
                                                        <Link href="/portfolio-detail-one" className="title text-white d-block fw-bold">{item.name}</Link>
                                                        <small className="text-white-50">{item.title}</small>
                                                    </div>
                                                    <div className="client">
                                                        <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                                                        <small className="date"><LuCalendarDays className="me-1"/>{item.date}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
                {container === "container-fluid" && 
                    <div className="row justify-content-center">
                        <div id="grid" className={col}>
                            {filteredData.map((item,index)=>{
                                return(
                                    <div className={grid} key={index}>
                                        <div className="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                                            <div className="card-body p-0">
                                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt="work-image"/>
                                                <div className="overlay-work"></div>
                                                <div className="content">
                                                    <Link href="/portfolio-detail-one" className="title text-white d-block fw-bold">{item.name}</Link>
                                                    <small className="text-white-50">{item.title}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="user d-block"><LuUser className=""/> Calvin Carlo</small>
                                                    <small className="date"><LuCalendarDays className="me-1"/>{item.date}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }

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
        </section>
  )
}
