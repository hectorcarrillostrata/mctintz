'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { casesData } from '../data/cases'
import {FiChevronRight} from 'react-icons/fi'

export default function CasesFilter() {
    let [ selectCategory, setSelectCategory] = useState(null)

    let filteredData = selectCategory ? casesData.filter((item)=>item.category === selectCategory):casesData
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                    <ul className="container-filter list-inline mb-0 filter-options text-center">
                        <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === null ? 'active' : '' }`} onClick={()=>setSelectCategory(null)}>All</li>
                        <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'business' ? 'active' : '' }`} onClick={()=>setSelectCategory('business')}>Business</li>
                        <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'marketing' ? 'active' : '' }`} onClick={()=>setSelectCategory('marketing')}>Marketing</li>
                        <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'finance' ? 'active' : '' }`} onClick={()=>setSelectCategory('finance')}>Finance</li>
                        <li className={`list-inline-item categories-name border text-dark rounded ${selectCategory === 'human' ? 'active' : '' }`} onClick={()=>setSelectCategory('human')}>Human Research</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="grid" className="row">
            {filteredData.map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2 picture-item" data-groups='["business"]' key={index}>
                        <div className="card blog border-0 work-container work-primary work-classic shadow rounded-md overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', heightL:'auto'}} className="img-fluid work-image" alt=""/>
                            <div className="card-body">
                                <div className="content">
                                    {item.tag === 'Business' && <Link href="#" className="badge badge-link bg">{item.tag}</Link>}
                                    {item.tag === 'Marketing' && <Link href="#" className="badge badge-link bg-warning">{item.tag}</Link>}
                                    {item.tag === 'Finance' && <Link href="#" className="badge badge-link bg-success">{item.tag}</Link>}
                                    {item.tag === 'HR' && <Link href="#" className="badge badge-link bg-info">{item.tag}</Link>}
                                    
                                    <h5 className="mt-3"><Link href={`/page-case-detail/${item.id}`} className="text-dark title">{item.title}</Link></h5>
                                    <p className="text-muted">{item.desc}</p>
                                    <Link href={`/page-case-detail/${item.id}`} className="link h6">Read More <FiChevronRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
