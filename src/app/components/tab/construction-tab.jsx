'use client'
import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { constructionData } from '../../data/data';

import {FiArrowRight} from 'react-icons/fi'

export default function ConstructionTab() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredData = selectedCategory
    ? constructionData.filter((item) => item.category === selectedCategory)
    : constructionData;

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

  return (
        <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="row">
                <div className="col-12 filters-group-wrap">
                    <div className="filters-group">
                        <ul className="container-filter list-inline mb-0 filter-options">
                            <li className={`list-inline-item categories-name border text-dark rounded ${selectedCategory === null ? 'active' : ''}`} onClick={()=>matchCategory(null)}>All</li>
                            <li className={`list-inline-item categories-name border text-dark rounded ${selectedCategory === 'offices' ? 'active' : ''}`} onClick={()=>matchCategory('offices')}>Offices</li>
                            <li className={`list-inline-item categories-name border text-dark rounded ${selectedCategory === 'buildings' ? 'active' : ''}`} onClick={()=>matchCategory('buildings')}>Buildings</li>
                            <li className={`list-inline-item categories-name border text-dark rounded ${selectedCategory === 'roads' ? 'active' : ''}`} onClick={()=>matchCategory('roads')}>Roads</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="grid" className="row">
                {filteredData.map((item,index) =>{
                    return(
                        <div className="col-lg-6 col-12 mt-3 pt-2 mb-1 picture-item" key={index}>
                            <div className="card border-0 work-container work-primary work-classic shadow overflow-hidden">
                                <div className="card-body p-0">
                                    <Link href="/portfolio-detail-one"><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid work-image" alt=""/></Link>
                                    <div className="content p-4">
                                        <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-dark title">{item.name}</Link></h5>
                                        <h6 className="text-muted tag mb-0">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <div className="d-block d-md-none">
                        <Link href="#" className="btn btn-soft-primary">See More <FiArrowRight className="fea icon-sm"/></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
