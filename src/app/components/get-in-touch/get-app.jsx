import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GetApp() {
  return (
            <div className="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <h4 className="title mb-4">Get the App now !</h4>
                        <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <div className="mt-4">
                            <Link href="#">
                                <Image src="/images/app/app.png" width={167} height={50} className="m-1" alt=""/>
                            </Link>

                            <Link href="#">
                                <Image src="/images/app/playstore.png" className="m-1" width={167} height={50} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}
