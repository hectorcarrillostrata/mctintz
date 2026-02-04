import { clenerServicesTwo } from '@/app/data/services'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function ClenerServices() {
  return (
    <div className="row">
        {clenerServicesTwo.map((item,index)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="blog blog-primary">
                        <div className="position-relative">
                            <img src={item.image} className="img-fluid rounded" alt="..."/>
                        </div>

                        <div className="card position-relative mx-4 p-4 mt-n16 rounded shadow">
                            <h5><Link href="#" className="card-title title text-dark">{item.title}</Link></h5>

                            <ul className="list-unstyled mt-2">
                                {item.feature.map((el,index)=>{
                                    return(
                                        <li className="d-flex text-muted" key={index}><i className="mdi mdi-check text-primary align-middle me-2"></i> {el}</li>
                                    )
                                })}
                            </ul>

                            <div className="">
                                <Link href="" className="readmore text-dark fw-semibold">Read More <FiArrowRight  className=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
