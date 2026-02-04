import React from 'react'
import Link from 'next/link'

import ForumsNavbar from '../components/navbar/forums-navbar'
import ForumsSidebar from '../components/forums-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

import {FiMessageCircle} from 'react-icons/fi'
import { forumsData } from '../data/data'

export default function Forums() {
  return (
    <>
      <ForumsNavbar/> 
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h3 className="fw-bold mb-0"> Welcome Landrick Forums </h3>
                    </div>
                </div>
            </div>
            
            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Forums</li>
                    </ul>
                </nav>
            </div>
        </div>
      </section>
      <div className="position-relative">
          <div className="shape overflow-hidden text-color-white">
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
              </svg>
          </div>
      </div>

      <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="text-center subcribe-form mb-2">
                        <form style={{maxWidth:'800px'}}>
                            <input type="text" id="name" name="name" className="rounded-pill shadow" placeholder="Search forums..." required/>
                            <button type="submit" className="btn btn-pills btn-primary">Search Forums</button>
                        </form>
                    </div>

                    <div className="table-responsive bg-white shadow rounded mt-4">
                        <table className="table mb-0 table-center">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-bottom p-3" style={{minWidth:'300px'}}>Forums Title</th>
                                    <th scope="col" className="border-bottom p-3 text-center" style={{maxWidth:'150px'}}>Posted</th>
                                    <th scope="col" className="border-bottom p-3 text-center" style={{width:'100px'}}>Topics</th>
                                    <th scope="col" className="border-bottom p-3 text-end" style={{width:'100px'}}>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                              {forumsData.map((item,index)=>{
                                return(
                                  <tr key={index}>
                                      <td className="p-3">
                                          <div className="d-flex">
                                              <FiMessageCircle className="text-muted h5"/>
                                              <div className="flex-1 content ms-3">
                                                  <Link href="/forums-topic" className="forum-title text-primary fw-bold">{item.title}</Link>
                                                  <p className="text-muted small mb-0 mt-1">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="text-center small p-3 h6">{item.posted}</td>
                                      <td className="text-center small p-3">{item.topics}</td>
                                      <td className="text-center small p-3 text-end">{item.comments}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ForumsSidebar/>
            </div>
        </div>
      </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
