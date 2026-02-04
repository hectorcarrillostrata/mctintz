import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FiSearch} from 'react-icons/fi'
import { category, colorOption, topProduct } from '../../data/shop'

export default function ShopSidebar() {
  return (
        <div className="col-lg-3 col-md-4 col-12">
            <div className="card border-0 sidebar sticky-bar">
                <div className="card-body p-0">
                    <div className="widget">
                        <form>
                            <div className="input-group mb-3 border rounded">
                                <input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..."/>
                                <button type="submit" className="input-group-text bg-white border-0 bg-transparent" id="searchsubmit"><FiSearch className="#"/></button>
                            </div>
                        </form>
                    </div>

                    <div className="widget mt-4 pt-2">
                        <h5 className="widget-title">Categories</h5>
                        <ul className="list-unstyled mt-4 mb-0 blog-categories">
                            {category.map((item,index)=>{
                                return(
                                    <li key={index}><Link href="#">{item}</Link></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="widget mt-4 pt-2">
                        <h5 className="widget-title">Color</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            {colorOption.map((item,index)=>{
                                return(
                                    <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className={`btn btn-sm btn-icon btn-pills ${item}`}><span className="d-none">.</span></Link></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="widget mt-4 pt-2">
                        <h5 className="widget-title">Top Products</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            {topProduct.map((item,index)=>{
                                return(
                                    <li className="d-flex align-items-center mt-2" key={index}>
                                        <Link href="#">
                                            <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" alt=""/>
                                        </Link>
                                        <div className="flex-1 content ms-3">
                                            <Link href="#" className="text-dark h6">{item.name}</Link>
                                            <h6 className="text-dark small fst-italic mb-0 mt-1">{item.descRate} <del className="text-danger ms-2">{item.rate}</del> </h6>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}
