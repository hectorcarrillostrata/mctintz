'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiSettings, FiShoppingCart,FiX, FiUser, FiKey, FiMail, FiGlobe} from 'react-icons/fi'
import { FaDribbble, FaBehance, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function PortfolioNavbar() {
    let [current, setCurrent] = useState('')
    let [manu, setManu] = useState('')
    let [toggle, setToggle] = useState(false)
    let [show, setShow] = useState(false)
    let [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        let current = window.location.pathname
        setCurrent(current)
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0); // Update state based on scroll position
          }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    })

    const toggleMenu = () => {
        setToggle(!toggle)
    }
  return (
        <header id="topnav" className={`defaultscroll sticky ${isScrolled ? 'nav-sticky' : ''}`}>
            <div className="container">
                <Link className="logo" href="/">
                    <Image src="/images/logo-dark.png" width={134} height={24} className="logo-light-mode" alt=""/>
                    <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt=""/>
                </Link>
        
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={()=>toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                        <Link href="#" onClick={()=>setShow(!show)}>
                            <div className="btn btn-icon btn-pills btn-soft-primary"><FiSettings className="fea icon-sm"></FiSettings></div>
                        </Link>
                    </li>
            
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/landrick-next" target="_blank">
                            <div className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"/></div>
                        </Link>
                    </li>
                </ul>

                <div id="navigation" className={toggle ? 'd-block' : 'd-none'}>
                    <ul className="navigation-menu">
                        <li className={`${current === '/index-portfolio' ? 'active' : ''}`}><Link href="/index-portfolio" className="sub-menu-item">Home</Link></li>
                
                        <li className={`has-submenu parent-parent-menu-item ${['/portfolio-item','/portfolio-modern-two','/portfolio-modern-three','/portfolio-modern-four','/portfolio-modern-five','/portfolio-modern-six','/portfolio-classic-two','/portfolio-classic-three','/portfolio-classic-four','/portfolio-classic-five','/portfolio-classic-six','/portfolio-grid-two','/portfolio-grid-three','/portfolio-grid-four','/portfolio-grid-five','/portfolio-grid-six','/portfolio-masonry-two','/portfolio-masonry-three','/portfolio-masonry-four','/portfolio-masonry-five','/portfolio-masonry-six','/portfolio-creative-two','/portfolio-creative-three','/portfolio-creative-four','/portfolio-creative-five','/portfolio-creative-six','/portfolio-detail-one','/portfolio-detail-two','/portfolio-detail-three','/portfolio-detail-four'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/portfolio-item' ? '' : '/portfolio-item')}>Portfolio</Link><span className="menu-arrow"></span>
                            <ul className={`submenu megamenu ${['/portfolio-item','/portfolio-modern-two','/portfolio-modern-three','/portfolio-modern-four','/portfolio-modern-five','/portfolio-modern-six','/portfolio-classic-two','/portfolio-classic-three','/portfolio-classic-four','/portfolio-classic-five','/portfolio-classic-six','/portfolio-grid-two','/portfolio-grid-three','/portfolio-grid-four','/portfolio-grid-five','/portfolio-grid-six','/portfolio-masonry-two','/portfolio-masonry-three','/portfolio-masonry-four','/portfolio-masonry-five','/portfolio-masonry-six','/portfolio-creative-two','/portfolio-creative-three','/portfolio-creative-four','/portfolio-creative-five','/portfolio-creative-six','/portfolio-detail-one','/portfolio-detail-two','/portfolio-detail-three','/portfolio-detail-four'].includes(manu) ? 'open' : ''}`}>
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li className={`${current === '/portfolio-modern-two' ? 'active' : ''}`}><Link href="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={`${current === '/portfolio-modern-three' ? 'active' : ''}`}><Link href="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={`${current === '/portfolio-modern-four' ? 'active' : ''}`}><Link href="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={`${current === '/portfolio-modern-five' ? 'active' : ''}`}><Link href="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={`${current === '/portfolio-modern-six' ? 'active' : ''}`}><Link href="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li className={`${current === '/portfolio-classic-two' ? 'active' : ''}`}><Link href="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={`${current === '/portfolio-classic-three' ? 'active' : ''}`}><Link href="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={`${current === '/portfolio-classic-four' ? 'active' : ''}`}><Link href="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={`${current === '/portfolio-classic-five' ? 'active' : ''}`}><Link href="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={`${current === '/portfolio-classic-six' ? 'active' : ''}`}><Link href="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Grid Portfolio</li>
                                        <li className={`${current === '/portfolio-grid-two' ? 'active' : ''}`}><Link href="/portfolio-grid-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={`${current === '/portfolio-grid-three' ? 'active' : ''}`}><Link href="/portfolio-grid-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={`${current === '/portfolio-grid-four' ? 'active' : ''}`}><Link href="/portfolio-grid-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={`${current === '/portfolio-grid-five' ? 'active' : ''}`}><Link href="/portfolio-grid-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={`${current === '/portfolio-grid-six' ? 'active' : ''}`}><Link href="/portfolio-grid-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>
                        
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li className={`${current === '/portfolio-masonry-two' ? 'active' : ''}`}><Link href="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                        <li className={`${current === '/portfolio-masonry-three' ? 'active' : ''}`}><Link href="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                        <li className={`${current === '/portfolio-masonry-four' ? 'active' : ''}`}><Link href="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                        <li className={`${current === '/portfolio-masonry-five' ? 'active' : ''}`}><Link href="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                        <li className={`${current === '/portfolio-masonry-six' ? 'active' : ''}`}><Link href="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Creative Portfolio</li>
                                        <li className={`${current === '/portfolio-creative-two' ? 'active' : ''}`}><Link href="/portfolio-creative-two" className="sub-menu-item">Two Column </Link></li>
                                        <li className={`${current === '/portfolio-creative-three' ? 'active' : ''}`}><Link href="/portfolio-creative-three" className="sub-menu-item">Three Column </Link></li>
                                        <li className={`${current === '/portfolio-creative-four' ? 'active' : ''}`}><Link href="/portfolio-creative-four" className="sub-menu-item">Four Column </Link></li>
                                        <li className={`${current === '/portfolio-creative-five' ? 'active' : ''}`}><Link href="/portfolio-creative-five" className="sub-menu-item">Five Column </Link></li>
                                        <li className={`${current === '/portfolio-creative-six' ? 'active' : ''}`}><Link href="/portfolio-creative-six" className="sub-menu-item">Six Column </Link></li>
                                    </ul>

                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li className={`${current === '/portfolio-detail-one' ? 'active' : ''}`}><Link href="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li className={`${current === '/portfolio-detail-two' ? 'active' : ''}`}><Link href="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li className={`${current === '/portfolio-detail-three' ? 'active' : ''}`}><Link href="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                        <li className={`${current === '/portfolio-detail-four' ? 'active' : ''}`}><Link href="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${current === '/portfolio-about' ? 'active' : ''}`}><Link href="/portfolio-about" className="sub-menu-item">About us</Link></li>
                
                        <li className={`${current === '/portfolio-service' ? 'active' : ''}`}><Link href="/portfolio-service" className="sub-menu-item">Services</Link></li>
                    </ul>
                </div>
            </div>

            <div className={`offcanvas offcanvas-end shadow border-0 ${show ? 'show' : ''}`}>
            <div className="offcanvas-header p-4 border-bottom">
                <h5 id="offcanvasRightLabel" className="mb-0">
                    <Image src="/images/logo-dark.png" width={134} height={24} className="light-version" alt=""/>
                    <Image src="/images/logo-light.png" width={134} height={24} className="dark-version" alt=""/>
                </h5>
                <button type="button" className="btn-close d-flex align-items-center text-dark" onClick={()=>setShow(!show)}><FiX className="uil uil-times fs-4"></FiX></button>
            </div>
            <div className="offcanvas-body p-4">
                <div className="row">
                    <div className="col-12">
                        <Image src="/images/contact.svg" width={285} height={285} className="img-fluid d-block mx-auto" alt=""/>
                        <div className="card border-0 mt-4" style={{zIndex:'1'}}>
                            <div className="card-body p-0">
                                <h4 className="card-title text-center">Login</h4>  
                                <form className="login-form mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiUser className="fea icon-sm icons"></FiUser>
                                                    <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <FiKey className="fea icon-sm icons"></FiKey>
                                                    <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                                    </div>
                                                </div>
                                                <p className="forgot-pass mb-0"><Link href="auth-cover-re-password.html" className="text-dark fw-bold">Forgot password ?</Link></p>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Sign in</button>
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link href="auth-cover-signup.html" className="text-dark fw-bold">Sign Up</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-footer p-4 border-top text-center">
                <ul className="list-unstyled social-icon social mb-0">
                    <li className="list-inline-item mb-0 me-1"><Link href="https://1.envato.market/landrick-next" target="_blank" className="rounded"><FiShoppingCart className="align-middle" title="Buy Now"></FiShoppingCart></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FaDribbble className="align-middle" title="dribbble"></FaDribbble></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><FaBehance className="align-middle" title="behance"></FaBehance></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FaFacebookF className="align-middle" title="facebook"></FaFacebookF></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FaInstagram className="align-middle" title="instagram"></FaInstagram></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><FaTwitter className="align-middle" title="twitter"></FaTwitter></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail className="align-middle" title="email"></FiMail></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://shreethemes.in" target="_blank" className="rounded"><FiGlobe className="align-middle" title="website"></FiGlobe></Link></li>
                </ul>
            </div>
        </div>
        </header>
  )
}
