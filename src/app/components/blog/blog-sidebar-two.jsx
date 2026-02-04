import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { blogRecentPost, blogSocial, blogTag } from '../../data/blogData'

export default function BlogSidebarTwo() {
  return (
        <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0 sidebar sticky-bar ms-lg-4">
                <div className="card-body p-0">
                    <div className="text-center">
                        <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                            Author
                        </span>

                        <div className="mt-4">
                            <Image src="/images/client/03.jpg" width={110} height={110} className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" alt=""/>

                            <Link href="/blog-about" className="text-primary h5 mt-4 mb-0 d-block">Cristina Jota</Link>
                            <small className="text-muted d-block">Photographer & Blogger</small>
                        </div>
                    </div>

                    <div className="widget mt-4">
                        <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                            Recent Post
                        </span>

                        <div className="mt-4">
                            {blogRecentPost.map((item,index)=>{
                                return(
                                    <div className="d-flex align-items-center mt-3" key={index}>
                                        <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded" style={{width:'auto'}} alt=""/>
                                        <div className="flex-1 ms-3">
                                            <Link href="#" className="d-block title text-dark">{item.title}</Link>
                                            <span className="text-muted">{item.date}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="widget mt-4">
                        <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                            Tagclouds
                        </span>
                        
                        <div className="tagcloud text-center mt-4">
                            {blogTag.map((item,index)=>{
                                return(
                                    <Link href="#" className="rounded" key={index}>{item}</Link>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className="widget mt-4">
                        <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                            Social Media
                        </span>

                        <ul className="list-unstyled social-icon social text-center mb-0 mt-4">
                            {blogSocial.map((item,index)=>{
                                let Icon = item
                                return(
                                    <li className="list-inline-item" key={index} style={{margin:'0 2px'}}><Link href="#" className="rounded"><Icon className="fea icon-sm fea-social"/></Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}
