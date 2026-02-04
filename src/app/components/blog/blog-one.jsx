import { blogData } from '@/app/data/blogData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaRegComment, FaRegCalendar } from 'react-icons/fa'
import { FiHeart, FiChevronRight } from 'react-icons/fi'
import { LuUser } from 'react-icons/lu'

export default function BlogOne() {
  return (
        <div className="row">
            {blogData.slice(0,3).map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card blog blog-primary rounded border-0 shadow">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="card-img-top rounded-top" alt="..."/>
                                <div className="overlay rounded-top"></div>
                            </div>
                            <div className="card-body content">
                                <h5><Link href={`/blog-detail/${item.id}`} className="card-title title text-dark">{item.title}</Link></h5>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><FiHeart className=" me-1"/>33</Link></li>
                                        <li className="list-inline-item"><Link href="#" className="text-muted comments"><FaRegComment className="me-1"/>08</Link></li>
                                    </ul>
                                    <Link href={`/blog-detail/${item.id}`} className="text-muted readmore">Read More <FiChevronRight/></Link>
                                </div>
                            </div>
                            <div className="author">
                                <small className="user d-block"><LuUser /> {item.name}</small>
                                <small className="date"><FaRegCalendar className='me-1'/>{item.date}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
