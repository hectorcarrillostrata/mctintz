'use client'
import React,{useState} from 'react'
import Image from 'next/image';

import { gymSchedule } from '../../data/data';

export default function GymTab() {
    const [productData, setProductData] = useState(gymSchedule);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (criteria) => {
        setSelectedCategory(criteria)
    };
    const filteredData = selectedCategory
    ? productData.filter((item) => item.categories.includes(selectedCategory))
    : productData;


  return (
    <>
        <div className="row justify-content-center">
            <div className="col-12 pt-4 filters-group-wrap text-center">
                <div className="filters-group">
                    <ul className="container-filter filter-border list-inline mb-0 filter-options text-center">
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === null ? 'active' : ''}`} onClick={()=>handleClick(null)}>All</li>
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === 'monday' ? 'active' : ''}`} onClick={()=>handleClick('monday')}>Monday</li>
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === 'tuesday' ? 'active' : ''}`} onClick={()=>handleClick('tuesday')}>Tuesday</li>
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === 'wednesday' ? 'active' : ''}`} onClick={()=>handleClick('wednesday')}>Wednesday</li>
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === 'thursday' ? 'active' : ''}`} onClick={()=>handleClick('thursday')}>Thursday</li>
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === 'friday' ? 'active' : ''}`} onClick={()=>handleClick('friday')}>Friday</li>
                        <li className={`list-inline-item text-uppercase position-relative ${selectedCategory === 'saturday' ? 'active' : ''}`} onClick={()=>handleClick('saturday')}>Saturday</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="grid" className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {filteredData.map((item,index)=>{
                return(
                    <div className="col picture-item mt-4" key={index}>
                        <div className="card schedule-time p-4 rounded shadow text-center m-1">
                            <Image src={item.image} width={65} height={65} className="avatar avatar-small d-block mx-auto" alt=""/>

                            <div className="content mt-4">
                                <h6 className="mb-0 ex-name fw-bold">{item.title}</h6>
                                <small className="text-muted mb-0">{item.time}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}
