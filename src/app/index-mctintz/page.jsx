import React from 'react'
import Link from 'next/link'

import MctintzNavbarLight from '../components/navbar/mctintz-navbar-light'
import MctintzAbout from '../components/about/mctintz-about'
import MctintzFeature from '../components/feature/mctintz-feature'
import MctintzCta from '../components/cta/mctintz-cta'
import ClenerServices from '../components/services/clener-services'
import ClientOne from '../components/client/client-one'
import { teamOne, teamSocial } from '../data/team'
import Image from 'next/image'
import ClenerBlog from '../components/blog/clener-blog'
import MctintzFooter from '../components/footer/mctintz-footer'
import ScrollToTop from '../components/scroll-to-top'

export default function IndexMctintz() {
  return (
    <>
        <MctintzNavbarLight/>   

        <section className="bg-video-studio d-flex align-items-center justify-content-center" id="home">
            <div className="bg-video-wrapper">
                <video 
    src="/videos/mc_tintz_video_1.mp4"
    autoPlay
    muted
    loop
    playsInline
    controls={false}
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1
    }}
></video>
            </div>
            <div className="bg-overlay bg-primary" style={{opacity: '0.50'}}></div>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-2 mb-4 fw-bold text-white title-dark">
    <Image src="/images/logo-mctintz.svg" width={800} height={160} alt="MC Tintz" className="mb-3" style={{opacity: 0.60, maxWidth: '100%', height: 'auto'}}/>
</h4>
                            <p className="para-desc text-white-50 mx-auto">MC Tintz is your trusted destination for premium automotive customization. We specialize in window tinting, custom wheels, and performance tires, offering top-tier products, expert installation, and flexible financing options starting at just $50 down and 90 days same as cash.</p>
                            <div className="mt-4 pt-2">
                                <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section overflow-hidden" id="about" style={{scrollMarginTop: '80px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">About MC Tintz</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Proudly serving the 815 — because at MC Tintz, Tintin Ain't Easy. Located at 6810 Forest Hills Rd Loves Park, IL 61111</p>
                        </div>
                    </div>
                </div>
                <MctintzAbout/>
            </div>

            <div className="container mt-100 mt-60" id="services" style={{scrollMarginTop: '80px'}}>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Our Services</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Professional window tinting services with premium films and expert installation</p>
                        </div>
                    </div>
                </div>
                <MctintzFeature/>
            </div>
        </section>

        <MctintzCta/>

        <section className="section" id="service-menu" style={{scrollMarginTop: '80px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Service Menu</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Professional window tinting services with competitive pricing and quality materials</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">2 Front Windows Only</h5>
                                <p className="text-muted mb-0">2 Front Windows only to match your rear windows.</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$100.00</h2>
                                <p className="text-muted">1 hr</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">Please comment year, make and model</li>
                                    <li className="text-muted">3 year warranty</li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">2 Front Window Only (Ceramic)</h5>
                                <p className="text-muted mb-0">BEST (ceramic) - If you demand top-level performance combined with a custom look</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$150.00</h2>
                                <p className="text-muted">1 hr</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• maximum heat rejection</li>
                                    <li className="text-muted">• maximum UV rejection</li>
                                    <li className="text-muted">• IR blocking</li>
                                    <li className="text-muted">• Shatter glass protection</li>
                                    <li className="text-muted">• Lifetime warranty</li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Sedan (Carbon)</h5>
                                <p className="text-muted mb-0">Better - we offer best carbon film is the market</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$220.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• superior heat rejection</li>
                                    <li className="text-muted">• excellent UV rejection</li>
                                    <li className="text-muted">• color stable (will not fade)</li>
                                    <li className="text-muted">• zero interference</li>
                                    <li className="text-muted">• 3 year warranty</li>
                                </ul>
                                <p className="text-muted small">This price includes all windows except the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Sedan (Ceramic)</h5>
                                <p className="text-muted mb-0">BEST (ceramic) - Top-level performance with custom look</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$320.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• maximum heat rejection</li>
                                    <li className="text-muted">• maximum UV rejection</li>
                                    <li className="text-muted">• IR blocking</li>
                                    <li className="text-muted">• Shatter glass protection</li>
                                    <li className="text-muted">• Lifetime warranty</li>
                                </ul>
                                <p className="text-muted small">This price includes all windows except the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Truck (Carbon)</h5>
                                <p className="text-muted mb-0">Better - we offer best carbon film is the market</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$220.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• superior heat rejection</li>
                                    <li className="text-muted">• excellent UV rejection</li>
                                    <li className="text-muted">• color stable (will not fade)</li>
                                    <li className="text-muted">• zero interference</li>
                                    <li className="text-muted">• 3 year warranty</li>
                                </ul>
                                <p className="text-muted small">This price includes all windows except the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Truck (Ceramic)</h5>
                                <p className="text-muted mb-0">BEST (ceramic) - Top-level performance with custom look</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$320.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• maximum heat rejection</li>
                                    <li className="text-muted">• maximum UV rejection</li>
                                    <li className="text-muted">• IR blocking</li>
                                    <li className="text-muted">• Shatter glass protection</li>
                                    <li className="text-muted">• Lifetime warranty</li>
                                </ul>
                                <p className="text-muted small">This price includes all windows except the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Compact SUV (Carbon)</h5>
                                <p className="text-muted mb-0">Better - we offer best carbon film is the market</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$220.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• superior heat rejection</li>
                                    <li className="text-muted">• excellent UV rejection</li>
                                    <li className="text-muted">• color stable (will not fade)</li>
                                    <li className="text-muted">• zero interference</li>
                                    <li className="text-muted">• 3 year warranty</li>
                                </ul>
                                <p className="text-muted small">This price includes all windows except the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Compact SUV (Ceramic)</h5>
                                <p className="text-muted mb-0">BEST (ceramic) - Top-level performance with custom look</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$320.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• maximum heat rejection</li>
                                    <li className="text-muted">• maximum UV rejection</li>
                                    <li className="text-muted">• IR blocking</li>
                                    <li className="text-muted">• Shatter glass protection</li>
                                    <li className="text-muted">• Lifetime warranty</li>
                                </ul>
                                <p className="text-muted small">This price includes all windows except the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Big SUV (Carbon)</h5>
                                <p className="text-muted mb-0">9 windows not including the front windshield. Better carbon film</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$240.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• superior heat rejection</li>
                                    <li className="text-muted">• excellent UV rejection</li>
                                    <li className="text-muted">• color stable (will not fade)</li>
                                    <li className="text-muted">• zero interference</li>
                                    <li className="text-muted">• 3 year warranty</li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Big SUV (Ceramic)</h5>
                                <p className="text-muted mb-0">BEST (ceramic) - Top-level performance for 9 windows</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$340.00</h2>
                                <p className="text-muted">2 hrs</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• maximum heat rejection</li>
                                    <li className="text-muted">• maximum UV rejection</li>
                                    <li className="text-muted">• IR blocking</li>
                                    <li className="text-muted">• Shatter glass protection</li>
                                    <li className="text-muted">• Lifetime warranty</li>
                                </ul>
                                <p className="text-muted small">This is for 9 windows not including the front windshield.</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Front Windshield (Carbon)</h5>
                                <p className="text-muted mb-0">Front Windshield only - Illegal and not safe, at your own risk!</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$140.00</h2>
                                <p className="text-muted">1 hr</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• superior heat rejection</li>
                                    <li className="text-muted">• excellent UV rejection</li>
                                    <li className="text-muted">• color stable (will not fade)</li>
                                    <li className="text-muted">• zero interference</li>
                                    <li className="text-muted">• 3 year warranty</li>
                                </ul>
                                <p className="text-warning small">⚠️ Just a head up front windshield are illegal they are not safe. If you put it on your own risk!</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Front Windshield (Ceramic)</h5>
                                <p className="text-muted mb-0">BEST (ceramic) - Top-level performance, at your own risk!</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$200.00</h2>
                                <p className="text-muted">1 hr</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">• maximum heat rejection</li>
                                    <li className="text-muted">• maximum UV rejection</li>
                                    <li className="text-muted">• IR blocking</li>
                                    <li className="text-muted">• Shatter glass protection</li>
                                    <li className="text-muted">• Lifetime warranty</li>
                                </ul>
                                <p className="text-warning small">⚠️ Just head up front windshield are illegal they are not safe. If you put it on your own risk!</p>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card pricing-box bg-white shadow rounded overflow-hidden">
                            <div className="pricing-header bg-light text-center p-4">
                                <h5 className="title mb-0">Removing Tint</h5>
                                <p className="text-muted mb-0">Remove old window tint film</p>
                            </div>
                            <div className="pricing-body bg-white p-4">
                                <h2 className="fw-bold mb-0" style={{color: '#212529'}}>$100.00</h2>
                                <p className="text-muted">1 hr</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">Keep in mind depending how old it is might take us longer</li>
                                    <li className="text-muted">Sometimes rear defroster could come off</li>
                                    <li className="text-muted">We always try our best to remove with steamer</li>
                                    <li className="text-muted">Old tint may require glass guy ($200 labor)</li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>

        <MctintzFooter/>
        <ScrollToTop/>
    </>
  )
}
