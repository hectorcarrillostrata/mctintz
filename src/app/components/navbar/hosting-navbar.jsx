'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiSettings, FiShoppingCart, FiX, FiUser, FiKey,  FiMail, FiGlobe} from 'react-icons/fi'
import { FaDribbble, FaBehance, FaFacebookF, FaInstagram, FaTwitter, } from 'react-icons/fa'

export default function HostingNavbar() {
    let [current, setCurrent] = useState('')
    let [manu, setManu] = useState()
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


    const toggleMenu =()=>{
        setToggle(!toggle)
    }
  return (
        <header id="topnav" className={`defaultscroll sticky ${isScrolled ? 'nav-sticky' : ''}`}>
            <div className="container">
                <Link className="logo" href="/">
                    <span className="logo-light-mode">
                        <Image src="/images/logo-dark.png" className="l-dark" width={134} height={24} alt=""/>
                        <Image src="/images/logo-light.png" className="l-light" width={134} height={24} alt=""/>
                    </span>
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
                            <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-soft-primary"><FiSettings className="fea icon-sm"/></span></div>
                            <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><FiSettings className="fea icon-sm"/></span></div>
                        </Link>
                    </li>
            
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/landrick-next" target="_blank">
                            <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"/></span></div>
                            <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><FiShoppingCart className="fea icon-sm"/></span></div>
                        </Link>
                    </li>
                </ul>

                <div id="navigation" className={toggle ? 'd-block' : 'd-none '}>
                    <ul className="navigation-menu nav-light">
                        <li className={`${current === '/index-hosting' ? 'active' : ''}`}><Link href="/index-hosting" className="sub-menu-item">Home</Link></li>

                        <li className={`${current === '/hosting-domain' ? 'active' : ''}`}><Link href="/hosting-domain" className="sub-menu-item">Domain</Link></li>

                        <li className={`has-submenu parent-menu-item ${['/hosting-item','/hosting-shared','/hosting-vps','/hosting-dedicated','/hosting-cloud','/hosting-reseller'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/hosting-item' ? '' : '/hosting-item')}>Hosting</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/hosting-item','/hosting-shared','/hosting-vps','/hosting-dedicated','/hosting-cloud','/hosting-reseller'].includes(manu) ? 'open' : ''}`}>
                                <li className={`${current === '/hosting-shared' ? 'active' : ''}`}><Link href="/hosting-shared" className="sub-menu-item">Shared Hosting</Link></li>
                                <li className={`${current === '/hosting-vps' ? 'active' : ''}`}><Link href="/hosting-vps" className="sub-menu-item">VPS Hosting</Link></li>
                                <li className={`${current === '/hosting-dedicated' ? 'active' : ''}`}><Link href="/hosting-dedicated" className="sub-menu-item">Dedicated Hosting</Link></li>
                                <li className={`${current === '/hosting-cloud' ? 'active' : ''}`}><Link href="/hosting-cloud" className="sub-menu-item">Cloud Hosting</Link></li>
                                <li className={`${current === '/hosting-reseller' ? 'active' : ''}`}><Link href="/hosting-reseller" className="sub-menu-item">Reseller Hosting</Link></li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/page-item','/hosting-aboutus','/hosting-services','/hosting-faqs','/blog-item','/hosting-blog','/hosting-blog-detail','/auth-item','/auth-cover-login','/auth-cover-signup','/auth-cover-re-password'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/hosting-aboutus','/hosting-services','/hosting-faqs','/blog-item','/hosting-blog','/hosting-blog-detail','/auth-item','/auth-cover-login','/auth-cover-signup','/auth-cover-re-password'].includes(manu) ? 'open' : ''}`}>
                                <li className={`${current === '/hosting-aboutus' ? 'active' : ''}`}><Link href="/hosting-aboutus" className="sub-menu-item"> About Us</Link></li>
                                <li className={`${current === '/hosting-services' ? 'active' : ''}`}><Link href="/hosting-services" className="sub-menu-item"> Services</Link></li>
                                <li className={`${current === '/hosting-faqs' ? 'active' : ''}`}><Link href="/hosting-faqs" className="sub-menu-item"> FAQs</Link></li>
                                <li className={`has-submenu parent-menu-item ${['/blog-item','/hosting-blog','/hosting-blog-detail'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/blog-item','/hosting-blog','/hosting-blog-detail'].includes(manu) ? 'open' : ''}`}>
                                        <li className={`${current === '/hosting-blog' ? 'active' : ''}`}><Link href="/hosting-blog" className="sub-menu-item"> Blogs </Link></li>
                                        <li className={`${current === '/hosting-blog-detail' ? 'active' : ''}`}><Link href="/hosting-blog-detail" className="sub-menu-item">Blog Details</Link></li>
                                    </ul> 
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/auth-item','/auth-cover-login','/auth-cover-signup','/auth-cover-re-password'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/auth-item' ? '' : '/auth-item')}> Auth pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item','/auth-cover-login','/auth-cover-signup','/auth-cover-re-password'].includes(manu) ? 'open' : ''}`}>
                                        <li className={`${current === '/auth-cover-login' ? 'active' : ''}`}><Link href="/auth-cover-login" className="sub-menu-item">Login</Link></li>
                                        <li className={`${current === '/auth-cover-signup' ? 'active' : ''}`}><Link href="/auth-cover-signup" className="sub-menu-item">Signup</Link></li>
                                        <li className={`${current === '/auth-cover-re-password' ? 'active' : ''}`}><Link href="/auth-cover-re-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul> 
                                </li>
                            </ul>
                        </li>
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
