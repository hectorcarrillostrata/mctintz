'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { manu } from '@/app/data/data'

export default function FoodTab() {
    let [selectedCategory, setSelectedCategory] = useState(null);

    const filteredData = selectedCategory
    ? manu.filter((item) => item.categories === selectedCategory)
    : manu;
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };
  return (
        <section className="section bg-light pt-0" style={{backgroundImage:"url('/images/restaurant/food-menu.png')", backgroundPosition:'bottom', backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12 filters-group-wrap text-center mt-4 pt-1">
                        <div className="card filters-group p-4 shadow">
                            <ul className="container-filter filter-border mb-0 list-unstyled filter-options">
                                <li className={`text-uppercase position-relative border-0 ${selectedCategory === null ? 'active' : ''}`} onClick={()=>matchCategory(null)}>All</li>
                                <li className={`text-uppercase position-relative border-0 ${selectedCategory === 'break' ? 'active' : ''}`} onClick={()=>matchCategory('break')}>Breakfast</li>
                                <li className={`text-uppercase position-relative border-0 ${selectedCategory === 'lunch' ? 'active' : ''}`} onClick={()=>matchCategory('lunch')}>Lunch</li>
                                <li className={`text-uppercase position-relative border-0 ${selectedCategory === 'dinner' ? 'active' : ''}`} onClick={()=>matchCategory('dinner')}>Dinner</li>
                                <li className={`text-uppercase position-relative border-0 ${selectedCategory === 'tea' ? 'active' : ''}`} onClick={()=>matchCategory('tea')}>Tea & Coffee</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-8 col-12">
                        <div className="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-2" id="grid">
                            {filteredData.map((item,index)=>{
                                return(
                                    <div className="col picture-item mt-4 pt-1" key={index}>
                                        <div className="card border-0 work-container work-primary work-creative position-relative d-block overflow-hidden rounded">
                                            <div className="card-body p-0">
                                                <div className="position-relative overflow-hidden">
                                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                    <div className="overlay-grid"></div>
                                                </div>
                                                <div className="content p-3 text-center">
                                                    <Link href="" className="text-white title h5 d-block mb-2">{item.name}</Link>
                                                    <p className="mb-0 text-primary h5 fw-semibold">{item.amount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
