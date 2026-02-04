import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FiSearch} from 'react-icons/fi'

import { blogRecentPost, blogSocial, blogTag } from '../../data/blogData'

export default function BlogSidebar() {
  return (
        <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0 sidebar sticky-bar rounded shadow">
                <div className="card-body">
                    <div className="widget">
                        <form>
                            <div className="input-group mb-3 border rounded">
                                <input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..."/>
                                <button type="submit" className="input-group-text bg-transparent border-0" id="searchsubmit"><FiSearch className=""/></button>
                            </div>
                        </form>
                    </div>

                    <div className="widget mb-4 pb-2">
                        <h5 className="widget-title">Categories</h5>
                        <ul className="list-unstyled mt-4 mb-0 blog-categories">
                            <li><Link href="#">Finance</Link> <span className="float-end">13</span></li>
                            <li><Link href="#">Business</Link> <span className="float-end">09</span></li>
                            <li><Link href="#">Blog</Link> <span className="float-end">18</span></li>
                            <li><Link href="#">Corporate</Link> <span className="float-end">20</span></li>
                            <li><Link href="#">Investment</Link> <span className="float-end">22</span></li>
                        </ul>
                    </div>

                    <div className="widget mb-4 pb-2">
                        <h5 className="widget-title">Recent Post</h5>
                        <div className="mt-1">
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

                    <div className="widget mb-4 pb-2">
                        <h5 className="widget-title">Tags Cloud</h5>
                        <div className="tagcloud mt-4">
                            {blogTag.map((item,index)=>{
                                return(
                                    <Link href="#" className="rounded" key={index}>{item}</Link>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className="widget">
                        <h5 className="widget-title">Follow us</h5>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
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
