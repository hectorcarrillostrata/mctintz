import React from 'react'
import Link from 'next/link'
import { socialData } from '../../data/footer'

export default function SmallFooter() {
  return (
        <footer className="footer footer-bar">
            <div className="footer-py-30">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start">
                                <p className="mb-0">© {new Date().getFullYear()} Landrick. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                                {socialData.map((item,index)=>{
                                    let Icon = item.icon
                                    return(
                                        <li className="list-inline-item mb-0" key={index} style={{margin:'0 2px'}}><Link href="https://1.envato.market/landrick-next" target="_blank" className="rounded"><Icon className="align-middle"/></Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}
