import { socialData } from '@/app/data/footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AiFooter() {
  return (
        <footer className="footer" style={{backgroundImage:"url('/images/svg-map.svg')", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 py-lg-5">
                        <div className="footer-py-60 text-center">
                            <Link href="#" className="logo-footer">
                                <Image src="/images/logo-light.png" width={178} height={32} alt=""/>
                            </Link>
                            <p className="mt-4 para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                {socialData.map((item,index)=>{
                                    let Icon = item.icon
                                    return(
                                        <li className="list-inline-item mb-0" key={index} style={{margin:"0 2px"}}><Link href={item.Link} target="_blank" className="rounded"><Icon className="align-middle" title="Buy Now"/></Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Landrick. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}
