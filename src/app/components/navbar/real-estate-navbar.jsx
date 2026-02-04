'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiSettings, FiShoppingCart,FiX, FiUser, FiKey, FiMail, FiGlobe} from 'react-icons/fi'
import { FaDribbble, FaBehance, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function RealEstateNavbar({navDark}) {
    let [current, setCurrent] = useState('')
    let [manu, setManu] = useState('')
    let [toggle, setToggle] = useState(false)
    let [show, setShow] = useState(false)
    let [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const current = window.location.pathname
        setCurrent(current)

        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0); // Update state based on scroll position
          }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])

  function toggleMenu() {
        setToggle(!toggle)
    }
  return (
        <header id="topnav" className={`defaultscroll sticky ${isScrolled ? 'nav-sticky' : ''}`}>
            <div className="container">
                {navDark ? (
                    <Link className="logo" href="index.html">
                        <Image src="/images/logo-dark.png" width={134} height={24} className="logo-light-mode" alt=""/>
                        <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt=""/>
                    </Link>
                ) : (
                    <Link className="logo" href="index">
                        <span className="logo-light-mode">
                            <Image src="/images/logo-dark.png" className="l-dark" width={134} height={24} alt=""/>
                            <Image src="/images/logo-light.png" className="l-light" width={134} height={24} alt=""/>
                        </span>
                        <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt=""/>
                    </Link>
                )}

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
                {navDark ? (
                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item mb-0">
                            <Link href="#" onClick={()=>setShow(!show)}>
                                <div className="btn btn-icon btn-pills btn-soft-primary"><FiSettings className="fea icon-sm"/></div>
                            </Link>
                        </li>
                        
                        <li className="list-inline-item ps-1 mb-0">
                            <Link href="https://1.envato.market/landrick-next" target="_blank">
                                <div className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"/></div>
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item mb-0">
                            <Link href="#" onClick={()=>setShow(!show)}>
                                <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-soft-primary"><FiSettings className="fea icon-sm"></FiSettings></span></div>
                                <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><FiSettings className="fea icon-sm"></FiSettings></span></div>
                            </Link>
                        </li>
                
                        <li className="list-inline-item ps-1 mb-0">
                            <Link href="https://1.envato.market/landrick-next" target="_blank">
                                <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"></FiShoppingCart></span></div>
                                <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><FiShoppingCart className="fea icon-sm"></FiShoppingCart></span></div>
                            </Link>
                        </li>
                    </ul>
                )}


                <div id="navigation" className={toggle ? 'd-block' : 'd-none'}>
                    <ul className={`navigation-menu nav-right ${navDark ? '' : 'nav-light'}`}>
                        <li className={current === '/index-real-estate' ? 'active' :''}><Link href="/index-real-estate" className="sub-menu-item">Home</Link></li>
                        <li className={current === '/property-sell' ? 'active' :''}><Link href="/property-sell" className="sub-menu-item">Sell</Link></li>
                        <li className={current === '/property-buy' ? 'active' :''}><Link href="/property-buy" className="sub-menu-item">Buy</Link></li>

                        <li className={`has-submenu parent-menu-item ${['/list-item','/property-grid','/property-detail'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/list-item' ? '' : '/list-item')}>Listing</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/list-item','/property-grid','/property-detail'].includes(manu) ? 'open' : ''}`}>
                                <li className={current === '/property-grid' ? 'active' :''}><Link href="/property-grid" className="sub-menu-item">Grid Listing</Link></li>
                                <li className={current === '/property-detail' ? 'active' :''}><Link href="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-menu-item ${['/page-item','/property-aboutus','/property-features','/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request','/auth-item', '/auth-login', '/auth-signup','/auth-re-password','/utility-item', '/page-terms', '/page-privacy'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/property-aboutus','/property-features','/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request','/auth-item', '/auth-login', '/auth-signup','/auth-re-password','/utility-item', '/page-terms', '/page-privacy'].includes(manu) ? 'open' : ''}`}>
                                <li className={current === '/property-aboutus' ? 'active' : ''}><Link href="/property-aboutus" className="sub-menu-item">About Us</Link></li>
                                <li className={current === '/property-features' ? 'active' : ''}><Link href="/property-features" className="sub-menu-item">Features</Link></li>
                                <li className={`has-submenu parent-menu-item ${['/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/help-item' ? '' : '/help-item')}> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request'].includes(manu) ? 'open' : ''}`}>
                                        <li className={current === '/helpcenter-overview' ? 'active' : ''}><Link href="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                        <li className={current === '/helpcenter-faqs' ? 'active' : ''}><Link href="/helpcenter-faqs" className="sub-menu-item">FAQS</Link></li>
                                        <li className={current === '/helpcenter-guides' ? 'active' : ''}><Link href="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li className={current === '/helpcenter-support-request' ? 'active' : ''}><Link href="/helpcenter-support-request" className="sub-menu-item">Support</Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/auth-item', '/auth-login', '/auth-signup','/auth-re-password'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item', '/auth-login', '/auth-signup','/auth-re-password'].includes(manu) ? 'open' : ''}`}>
                                        <li className={current === '/auth-login' ? 'active' : ''}><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li className={current === '/auth-signup' ? 'active' : ''}><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li className={current === '/auth-re-password' ? 'active' : ''}><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/utility-item', '/page-terms', '/page-privacy'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/utility-item' ? '' : '/utility-item')}> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/utility-item', '/page-terms', '/page-privacy'].includes(manu) ? 'open' : ''}`}>
                                        <li><Link href="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link href="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>

                        <li className={current === '/page-contact-one' ? 'active' : ''}><Link href="/page-contact-one" className="sub-menu-item">Contact us</Link></li>
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
