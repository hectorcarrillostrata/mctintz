'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { RxSlider } from 'react-icons/rx'
import { RiBarChartHorizontalLine,} from 'react-icons/ri'
import { VscTable } from 'react-icons/vsc'
import { BsPostcard, BsSortDown } from 'react-icons/bs'
import { PiTextT,  PiBracketsCurlyBold,} from 'react-icons/pi'
import {TbCube, TbListTree, TbVector, TbIcons,} from 'react-icons/tb'
import { FiSettings,FiShoppingCart, FiBookOpen, FiAward, FiInfo, FiLayers, FiAlignCenter,FiSquare, FiCopy, FiImage, FiX, FiUser, FiKey, FiMail, FiGlobe} from 'react-icons/fi'
import { FaDribbble, FaBehance, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdOutlineBackspace,MdOutlinePalette, MdBorderOuter,MdOutlineEventNote, MdOutlinePlayCircle} from 'react-icons/md'

export default function Navbar({app, bgWhite,navlight,tagline}) {
let [current, setCurrent] = useState('')
let [manu, setManu] = useState('');
let [toggle, setToggle] = useState(false)
let [show, setShow] = useState(false)
let [isScrolled, setIsScrolled] = useState(false);

useEffect(()=>{
    current = window.location.pathname
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
    
  return (
    <header id="topnav" className={`defaultscroll sticky ${bgWhite ? 'navbar-white-bg' : ''} ${isScrolled ? 'nav-sticky' : ''} ${tagline ? 'tagline-height' : ''}`}>
        <div className="container">
            {navlight ? 
            (
                <Link className="logo" href="/">
                    <span className="logo-light-mode">
                        <Image src="/images/logo-dark.png" className="l-dark" width={134} height={24} alt=""/>
                        <Image src="/images/logo-light.png" className="l-light" width={134} height={24} alt=""/>
                    </span>
                    <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt=""/>
                </Link>
            ) :
             (
                <Link className="logo" href="/">
                    <Image src="/images/logo-dark.png" width={134} height={24} className="logo-light-mode" alt=""/>
                    <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt=""/>
                </Link> 
            )}
            
                           

            <div className="menu-extras">
                <div className="menu-item">
                    <Link href="#" className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={()=>setToggle(!toggle)}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            {app ? (
                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0 mx-1">
                        <Link href="#" className="btn btn-icon btn-light">
                            <img src="/images/app/app-store.png" className="avatar avatar-ex-small p-1" alt=""/>
                        </Link>
                    </li>
            
                    <li className="list-inline-item mb-0 mx-1">
                        <Link href="#" className="btn btn-icon btn-light">
                            <img src="/images/app/play-store.png" className="avatar avatar-ex-small p-1" alt=""/>
                        </Link>
                    </li>
                </ul>
            ) : (
                navlight ? (
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
                ) : (

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                        <Link href="#" onClick={()=>setShow(!show)}>
                            <div className="btn btn-icon btn-pills btn-soft-primary"><FiSettings className="fea icon-sm"></FiSettings></div>
                        </Link>
                    </li>
            
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/landrick-next" target="_blank">
                            <div className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"></FiShoppingCart></div>
                        </Link>
                    </li>
                </ul>
                )
            )}


            <div id="navigation" className={toggle ? 'd-block' : 'd-none'}>
                <ul className={`navigation-menu ${navlight ? 'nav-light' : ''}`}>
                    <li className={`${current === '/' ? 'active' : ''}`}><Link href="/" className="sub-menu-item">Home</Link></li>
                    <li className={`has-submenu parent-parent-menu-item ${['/index-cleaner','/index-web-programming','/landing-item','/index-saas','/index-classic-saas','/index-modern-saas','/index-agency','/index-apps','/index-classic-app','/index-modern-app','/index-studio','/index-marketing','/index-enterprise','/index-services','/index-payments','/index-it-solution','/index-it-solution-two','/index-developer','/index-seo-agency','/index-hospital','/index-coworking','/index-business','/index-modern-business','/index-finance','/index-logistics','/index-social-marketing','/index-digital-agency','/index-customer','/index-software','/index-yoga','/index-gym','/index-consulting','/index-hotel','/index-restaurant','/index-construction','/index-videocall','/index-blockchain','/index-crypto-two','/index-integration','/index-task-management','/index-email-inbox','/index-travel','/index-course','/index-online-learning','/index-insurance','/index-furniture','/index-law-firm','/index-single-product','/index-car-riding','/index-landing-one','/index-landing-two','/index-landing-three','/index-landing-four','/index-charity','/index-personal','/index-creative-personal','/index-freelancer','/index-event','/index-ebook','/index-onepage','/index-corporate','/index-crypto','/index-shop','/index-ai','/index-portfolio','/helpcenter-overview','/index-hosting','/index-job','/index-video-studio','/index-real-estate','/forums','/index-blog','/index-nft','/index-photography'].includes(current) ? 'active' : '' }`}>
                        <Link href="#" onClick={()=>setManu(manu === '/landing-item' ?  '' : '/landing-item' )}>Landing</Link><span className="menu-arrow"></span>
                        <ul className={`submenu megamenu ${['/index-cleaner','/index-web-programming','/landing-item','/index-saas','/index-classic-saas','/index-modern-saas','/index-agency','/index-apps','/index-classic-app','/index-modern-app','/index-studio','/index-marketing','/index-enterprise','/index-services','/index-payments','/index-it-solution','/index-it-solution-two','/index-developer','/index-seo-agency','/index-hospital','/index-coworking','/index-business','/index-modern-business','/index-finance','/index-logistics','/index-social-marketing','/index-digital-agency','/index-customer','/index-software','/index-yoga','/index-gym','/index-consulting','/index-hotel','/index-restaurant','/index-construction','/index-videocall','/index-blockchain','/index-crypto-two','/index-integration','/index-task-management','/index-email-inbox','/index-travel','/index-course','/index-online-learning','/index-insurance','/index-furniture','/index-law-firm','/index-single-product','/index-car-riding','/index-landing-one','/index-landing-two','/index-landing-three','/index-landing-four','/index-charity','/index-personal','/index-creative-personal','/index-freelancer','/index-event','/index-ebook','/index-onepage','/index-corporate','/index-crypto','/index-shop','/index-ai','/index-portfolio','/helpcenter-overview','/index-hosting','/index-job','/index-video-studio','/index-real-estate','/forums','/index-blog','/index-nft','/index-photography'].includes(manu) ? 'open' : '' }`}>
                            <li>
                                <ul>
                                    <li className="megamenu-head"><FiBookOpen className="fs-6 align-middle"/> Landing Pages</li>
                                    <li className={`${current === '/index-saas' ? 'active' : ''}`}><Link href="/index-saas" className="sub-menu-item">Saas</Link></li>
                                    <li className={`${current === '/index-classic-saas' ? 'active' : ''}`}><Link href="/index-classic-saas" className="sub-menu-item">Classic Saas</Link></li>
                                    <li className={`${current === '/index-modern-saas' ? 'active' : ''}`}><Link href="/index-modern-saas" className="sub-menu-item">Modern Saas </Link></li>
                                    <li className={`${current === '/index-agency' ? 'active' : ''}`}><Link href="/index-agency" className="sub-menu-item">Agency</Link></li>
                                    <li className={`${current === '/index-apps' ? 'active' : ''}`}><Link href="/index-apps" className="sub-menu-item">Application</Link></li>
                                    <li className={`${current === '/index-classic-app' ? 'active' : ''}`}><Link href="/index-classic-app" className="sub-menu-item">Classic App</Link></li>
                                    <li className={`${current === '/index-modern-app' ? 'active' : ''}`}><Link href="/index-modern-app" className="sub-menu-item">Modern App </Link></li>
                                    <li className={`${current === '/index-studio' ? 'active' : ''}`}><Link href="/index-studio" className="sub-menu-item">Studio</Link></li>
                                    <li className={`${current === '/index-marketing' ? 'active' : ''}`}><Link href="/index-marketing" className="sub-menu-item">Marketing</Link></li>
                                    <li className={`${current === '/index-enterprise' ? 'active' : ''}`}><Link href="/index-enterprise" className="sub-menu-item">Enterprise</Link></li>
                                    <li className={`${current === '/index-services' ? 'active' : ''}`}><Link href="/index-services" className="sub-menu-item">Service</Link></li>
                                    <li className={`${current === '/index-payments' ? 'active' : ''}`}><Link href="/index-payments" className="sub-menu-item">Payments</Link></li>
                                    <li className={`${current === '/index-it-solution' ? 'active' : ''}`}><Link href="/index-it-solution" className="sub-menu-item">IT Solution </Link></li>
                                    <li className={`${current === '/index-it-solution-two' ? 'active' : ''}`}><Link href="/index-it-solution-two" className="sub-menu-item">IT Solution Two </Link></li>
                                    <li className={`${current === '/index-web-programming' ? 'active' : ''}`}><Link href="/index-web-programming" className="sub-menu-item">Web Programming<span className="badge text-bg-danger ms-2">New</span></Link></li>
                    
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head"><FiBookOpen className="fs-6 align-middle"/> Landing Pages</li>
                                    <li className={`${current === '/index-developer' ? 'active' : ''}`}><Link href="/index-developer" className="sub-menu-item">Developer</Link></li>
                                    <li className={`${current === '/index-seo-agency' ? 'active' : ''}`}><Link href="/index-seo-agency" className="sub-menu-item">SEO Agency</Link></li>
                                    <li className={`${current === '/index-hospital' ? 'active' : ''}`}><Link href="/index-hospital" className="sub-menu-item">Hospital</Link></li>
                                    <li className={`${current === '/index-coworking' ? 'active' : ''}`}><Link href="/index-coworking" className="sub-menu-item">Coworking</Link></li>
                                    <li className={`${current === '/index-business' ? 'active' : ''}`}><Link href="/index-business" className="sub-menu-item">Business</Link></li>
                            
                                    <li className={`${current === '/index-modern-business' ? 'active' : ''}`}><Link href="/index-modern-business" className="sub-menu-item">Modern Business</Link></li>
                                    <li className={`${current === '/index-finance' ? 'active' : ''}`}><Link href="/index-finance" className="sub-menu-item">Finance </Link></li>
                                    <li className={`${current === '/index-logistics' ? 'active' : ''}`}><Link href="/index-logistics" className="sub-menu-item">Delivery & Logistics </Link></li>
                                    <li className={`${current === '/index-social-marketing' ? 'active' : ''}`}><Link href="/index-social-marketing" className="sub-menu-item">Social Media</Link></li>
                                    <li className={`${current === '/index-digital-agency' ? 'active' : ''}`}><Link href="/index-digital-agency" className="sub-menu-item">Digital Agency</Link></li>
                                    <li className={`${current === '/index-customer' ? 'active' : ''}`}><Link href="/index-customer" className="sub-menu-item">Customer</Link></li>
                                    <li className={`${current === '/index-software' ? 'active' : ''}`}><Link href="/index-software" className="sub-menu-item">Software</Link></li>
                                    <li className={`${current === '/index-yoga' ? 'active' : ''}`}><Link href="/index-yoga" className="sub-menu-item">Yoga </Link></li>
                                    <li className={`${current === '/index-gym' ? 'active' : ''}`}><Link href="/index-gym" className="sub-menu-item">GYM & Fitness </Link></li>
                                    <li className={`${current === '/index-cleaner' ? 'active' : ''}`}><Link href="/index-cleaner" className="sub-menu-item">Cleaner Service <span className="badge text-bg-danger ms-2">New</span></Link></li>
                    
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head"><FiBookOpen className="fs-6 align-middle"/> Landing Pages</li>
                                    <li className={`${current === '/index-consulting' ? 'active' : ''}`}><Link href="/index-consulting" className="sub-menu-item">Consulting </Link></li>
                                    <li className={`${current === '/index-hotel' ? 'active' : ''}`}><Link href="/index-hotel" className="sub-menu-item">Hotel</Link></li>
                                    <li className={`${current === '/index-restaurant' ? 'active' : ''}`}><Link href="/index-restaurant" className="sub-menu-item">Restaurant </Link></li>
                                    <li className={`${current === '/index-construction' ? 'active' : ''}`}><Link href="/index-construction" className="sub-menu-item">Construction</Link></li>
                                    <li className={`${current === '/index-videocall' ? 'active' : ''}`}><Link href="/index-videocall" className="sub-menu-item">Video Conference </Link></li>
                                    <li className={`${current === '/index-blockchain' ? 'active' : ''}`}><Link href="/index-blockchain" className="sub-menu-item">Blockchain </Link></li>
                                    <li className={`${current === '/index-crypto-two' ? 'active' : ''}`}><Link href="/index-crypto-two" className="sub-menu-item">Cryptocurrency Two </Link></li>
                                    <li className={`${current === '/index-integration' ? 'active' : ''}`}><Link href="/index-integration" className="sub-menu-item">Integration</Link></li>
                                    <li className={`${current === '/index-task-management' ? 'active' : ''}`}><Link href="/index-task-management" className="sub-menu-item">Task Management </Link></li>
                                    <li className={`${current === '/index-email-inbox' ? 'active' : ''}`}><Link href="/index-email-inbox" className="sub-menu-item">Email Inbox </Link></li>
                                    <li className={`${current === '/index-travel' ? 'active' : ''}`}><Link href="/index-travel" className="sub-menu-item">Travel </Link></li>
                                    <li className={`${current === '/index-course' ? 'active' : ''}`}><Link href="/index-course" className="sub-menu-item">Course</Link></li>
                                    <li className={`${current === '/index-online-learning' ? 'active' : ''}`}><Link href="/index-online-learning" className="sub-menu-item">Online Learning</Link></li>
                                    <li className={`${current === '/index-insurance' ? 'active' : ''}`}><Link href="/index-insurance" className="sub-menu-item">Insurance</Link></li>
                                    <li className={`${current === '/index-furniture' ? 'active' : ''}`}><Link href="/index-furniture" className="sub-menu-item">Furniture </Link></li>
                    
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li className="megamenu-head"><FiBookOpen className="fs-6 align-middle"/> Landing Pages</li>
                                    <li className={`${current === '/index-law-firm' ? 'active' : ''}`}><Link href="/index-law-firm" className="sub-menu-item">Law Firm </Link></li>
                                    <li className={`${current === '/index-single-product' ? 'active' : ''}`}><Link href="/index-single-product" className="sub-menu-item">Product</Link></li>
                                    <li className={`${current === '/index-car-riding' ? 'active' : ''}`}><Link href="/index-car-riding" className="sub-menu-item">Car Ride</Link></li>
                                    <li className={`${current === '/index-landing-one' ? 'active' : ''}`}><Link href="/index-landing-one" className="sub-menu-item">Landing One </Link></li>
                                    <li className={`${current === '/index-landing-two' ? 'active' : ''}`}><Link href="/index-landing-two" className="sub-menu-item">Landing Two </Link></li>
                                    <li className={`${current === '/index-landing-three' ? 'active' : ''}`}><Link href="/index-landing-three" className="sub-menu-item">Landing Three </Link></li>
                                    <li className={`${current === '/index-landing-four' ? 'active' : ''}`}><Link href="/index-landing-four" className="sub-menu-item">Landing Four</Link></li>
                                    <li className={`${current === '/index-charity' ? 'active' : ''}`}><Link href="/index-charity" className="sub-menu-item">Charity </Link></li>
                                    <li className={`${current === '/index-personal' ? 'active' : ''}`}><Link href="/index-personal" className="sub-menu-item">Personal</Link></li>
                                    <li className={`${current === '/index-creative-personal' ? 'active' : ''}`}><Link href="/index-creative-personal" className="sub-menu-item">Creative Personal</Link></li>
                                    <li className={`${current === '/index-freelancer' ? 'active' : ''}`}><Link href="/index-freelancer" className="sub-menu-item">Freelance </Link></li>
                                    <li className={`${current === '/index-event' ? 'active' : ''}`}><Link href="/index-event" className="sub-menu-item">Event</Link></li>
                                    <li className={`${current === '/index-ebook' ? 'active' : ''}`}><Link href="/index-ebook" className="sub-menu-item">E-Book</Link></li>
                                    <li className={`${current === '/index-onepage' ? 'active' : ''}`}><Link href="/index-onepage" className="sub-menu-item">Saas <span className="badge text-bg-warning ms-2">Onepage</span></Link></li>
                    
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li className="megamenu-head"><TbCube className="fs-6 align-middle"/> Full Demos</li>
                                    <li className={`${current === '/index-corporate' ? 'active' : ''}`}><Link href="/index-corporate" className="sub-menu-item">Corporate</Link></li>
                                    <li className={`${current === '/index-crypto' ? 'active' : ''}`}><Link href="/index-crypto" className="sub-menu-item">Cryptocurrency </Link></li>
                                    <li className={`${current === '/index-shop' ? 'active' : ''}`}><Link href="/index-shop" className="sub-menu-item">Shop</Link></li>
                                    <li className={`${current === '/index-ai' ? 'active' : ''}`}><Link href="/index-ai" className="sub-menu-item">AI Tools </Link></li>
                                    <li className={`${current === '/index-portfolio' ? 'active' : ''}`}><Link href="/index-portfolio" className="sub-menu-item">Portfolio </Link></li>
                                    <li className={`${current === '/helpcenter-overview' ? 'active' : ''}`}><Link href="/helpcenter-overview" className="sub-menu-item">Help Center</Link></li>
                                    <li className={`${current === '/index-hosting' ? 'active' : ''}`}><Link href="/index-hosting" className="sub-menu-item">Hosting & Domain</Link></li>
                                    <li className={`${current === '/index-job' ? 'active' : ''}`}><Link href="/index-job" className="sub-menu-item">Jobs & Careers</Link></li>
                                    <li className={`${current === '/index-video-studio' ? 'active' : ''}`}><Link href="/index-video-studio" className="sub-menu-item">Video Studio </Link></li>
                                    <li className={`${current === '/index-real-estate' ? 'active' : ''}`}><Link href="/index-real-estate" className="sub-menu-item">Real Estate</Link></li>
                                    <li className={`${current === '/forums' ? 'active' : ''}`}><Link href="/forums" className="sub-menu-item">Forums</Link></li>
                                    <li className={`${current === '/index-blog' ? 'active' : ''}`}><Link href="/index-blog" className="sub-menu-item">Blog or News</Link></li>
                                    <li className={`${current === '/index-nft' ? 'active' : ''}`}><Link href="/index-nft" className="sub-menu-item">NFT Marketplace</Link></li>
                                    <li className={`${current === '/index-photography' ? 'active' : ''}`}><Link href="/index-photography" className="sub-menu-item">Photography </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`has-submenu parent-parent-menu-item ${['/page-item','/company-item','/page-aboutus','/page-aboutus-two','/page-services','/page-history','/page-team','/page-pricing','/account-item', '/account-profile', '/account-members', '/account-works', '/account-messages', '/account-chat', '/account-payments', '/account-setting', '/page-invoice','/mail-item', '/email-confirmation', '/email-password-reset', '/email-alert','/email-invoice','/blog-item', '/blog-grid', '/blog-grid-sidebar','/blog-list','/blog-list-sidebar','/blog-detail','/blog-detail-two','/case-item', '/page-cases', '/page-case-detail','/course-detail','/auth-item','/login-item','/auth-login','/auth-cover-login','/auth-login-three','/auth-bs-login','/auth-login-bg-video','/signup-item','/auth-signup','/auth-cover-signup','/auth-signup-three','/auth-bs-signup','/auth-signup-bg-video','/reset-item', '/auth-re-password', '/auth-cover-re-password', '/auth-re-password-three', '/auth-bs-reset', '/auth-reset-password-bg-video','/utility-item', '/page-terms', '/page-privacy','/special-item','/page-comingsoon','/page-comingsoon2','/page-maintenance','/page-error','/page-thankyou','/contact-item', '/page-contact-detail', '/page-contact-two', '/page-contact-three','/level-item','/level2-item','/footer'].includes(current) ? 'active' : '' }`}>
                        <Link href="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item' )}>Pages</Link><span className="menu-arrow"></span>
                        <ul className={`submenu ${['/page-item','/company-item','/page-aboutus','/page-aboutus-two','/page-services','/page-history','/page-team','/page-pricing','/account-item', '/account-profile', '/account-members', '/account-works', '/account-messages', '/account-chat', '/account-payments', '/account-setting', '/page-invoice','/mail-item', '/email-confirmation', '/email-password-reset', '/email-alert','/email-invoice','/blog-item', '/blog-grid', '/blog-grid-sidebar','/blog-list','/blog-list-sidebar','/blog-detail','/blog-detail-two','/case-item', '/page-cases', '/page-case-detail','/course-detail','/auth-item','/login-item','/auth-login','/auth-cover-login','/auth-login-three','/auth-bs-login','/auth-login-bg-video','/signup-item','/auth-signup','/auth-cover-signup','/auth-signup-three','/auth-bs-signup','/auth-signup-bg-video','/reset-item', '/auth-re-password', '/auth-cover-re-password', '/auth-re-password-three', '/auth-bs-reset', '/auth-reset-password-bg-video','/utility-item', '/page-terms', '/page-privacy','/special-item','/page-comingsoon','/page-comingsoon2','/page-maintenance','/page-error','/page-thankyou','/contact-item', '/page-contact-detail', '/page-contact-two', '/page-contact-three','/level-item','/level2-item','/footer'].includes(manu) ? 'open' : ''}`}>

                            <li className={`has-submenu parent-menu-item ${['/company-item','/page-aboutus','/page-aboutus-two','/page-services','/page-history','/page-team','/page-pricing'].includes(current) ? 'active' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/company-item' ? '' : '/company-item')}> Company </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/company-item','/page-aboutus','/page-aboutus-two','/page-services','/page-history','/page-team','/page-pricing'].includes(manu) ? 'open' : '' }`}>
                                    <li className={`${current === '/page-aboutus' ? 'active' : ''}`}><Link href="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                                    <li className={`${current === '/page-aboutus-two' ? 'active' : ''}`}><Link href="/page-aboutus-two" className="sub-menu-item"> About Us Two </Link></li>
                                    <li className={`${current === '/page-services' ? 'active' : ''}`}><Link href="/page-services" className="sub-menu-item">Services</Link></li>
                                    <li className={`${current === '/page-history' ? 'active' : ''}`}><Link href="/page-history" className="sub-menu-item">History </Link></li>
                                    <li className={`${current === '/page-team' ? 'active' : ''}`}><Link href="/page-team" className="sub-menu-item"> Team</Link></li>
                                    <li className={`${current === '/page-pricing' ? 'active' : ''}`}><Link href="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                </ul> 
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/account-item', '/account-profile', '/account-members', '/account-works', '/account-messages', '/account-chat', '/account-payments', '/account-setting', '/page-invoice'].includes(current) ? 'active' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/account-item' ? '' : '/account-item')}> Account </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/account-item', '/account-profile', '/account-members', '/account-works', '/account-messages', '/account-chat', '/account-payments', '/account-setting', '/page-invoice'].includes(manu) ? 'open' : '' }`}>
                                    <li className={`${current === '/account-profile' ? 'active' : ''}`}><Link href="/account-profile" className="sub-menu-item">Profile</Link></li>
                                    <li className={`${current === '/account-members' ? 'active' : ''}`}><Link href="/account-members" className="sub-menu-item">Members </Link></li>
                                    <li className={`${current === '/account-works' ? 'active' : ''}`}><Link href="/account-works" className="sub-menu-item">Works </Link></li>
                                    <li className={`${current === '/account-messages' ? 'active' : ''}`}><Link href="/account-messages" className="sub-menu-item">Messages </Link></li>
                                    <li className={`${current === '/account-chat' ? 'active' : ''}`}><Link href="/account-chat" className="sub-menu-item">Chat </Link></li>
                                    <li className={`${current === '/account-payments' ? 'active' : ''}`}><Link href="/account-payments" className="sub-menu-item">Payments </Link></li>
                                    <li className={`${current === '/account-setting' ? 'active' : ''}`}><Link href="/account-setting" className="sub-menu-item">Setting</Link></li>
                                    <li className={`${current === '/page-invoice' ? 'active' : ''}`}><Link href="/page-invoice" className="sub-menu-item">Invoice</Link></li>
                                </ul>  
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/mail-item', '/email-confirmation', '/email-password-reset', '/email-alert','/email-invoice'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/mail-item' ? '' : '/mail-item')}> Email Template</Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/mail-item', '/email-confirmation', '/email-password-reset', '/email-alert','/email-invoice'].includes(manu) ? 'open' : ''}`}>
                                    <li className={`${current === '/email-confirmation' ? 'active' : ''}`}><Link href="/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                                    <li className={`${current === '/email-password-reset' ? 'active' : ''}`}><Link href="/email-password-reset" className="sub-menu-item">Reset Password</Link></li>
                                    <li className={`${current === '/email-alert' ? 'active' : ''}`}><Link href="/email-alert" className="sub-menu-item">Alert</Link></li>
                                    <li className={`${current === '/email-invoice' ? 'active' : ''}`}><Link href="/email-invoice" className="sub-menu-item">Invoice</Link></li>
                                </ul>  
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/blog-item', '/blog-grid', '/blog-grid-sidebar','/blog-list','/blog-list-sidebar','/blog-detail','/blog-detail-two'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/blog-item', '/blog-grid', '/blog-grid-sidebar','/blog-list','/blog-list-sidebar','/blog-detail','/blog-detail-two'].includes(manu) ? 'open' : ''}`}>
                                    <li className={`${current === '/blog-grid' ? 'active' : ''}`}><Link href="/blog-grid" className="sub-menu-item">Blog Grid</Link></li>
                                    <li className={`${current === '/blog-grid-sidebar' ? 'active' : ''}`}><Link href="/blog-grid-sidebar" className="sub-menu-item">Blog with Sidebar</Link></li>
                                    <li className={`${current === '/blog-list' ? 'active' : ''}`}><Link href="/blog-list" className="sub-menu-item">Blog Listing</Link></li>
                                    <li className={`${current === '/blog-list-sidebar' ? 'active' : ''}`}><Link href="/blog-list-sidebar" className="sub-menu-item">Blog List & Sidebar</Link></li>
                                    <li className={`${current === '/blog-detail' ? 'active' : ''}`}><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                    <li className={`${current === '/blog-detail-two' ? 'active' : ''}`}><Link href="/blog-detail-two" className="sub-menu-item">Blog Detail 2 </Link></li>
                                </ul>  
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/case-item', '/page-cases', '/page-case-detail'].includes(current) ? 'active' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/case-item' ? '' : '/case-item')}> Case Study </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/case-item', '/page-cases', '/page-case-detail'].includes(manu) ? 'open' : '' }`}>
                                    <li className={`${current === '/page-cases' ? 'active' : ''}`}><Link href="/page-cases" className="sub-menu-item">All Cases </Link></li>
                                    <li className={`${current === '/page-case-detail' ? 'active' : ''}`}><Link href="/page-case-detail" className="sub-menu-item">Case Detail </Link></li>
                                </ul>
                            </li>

                            <li className={`${current === '/course-detail' ? 'active' : ''}`}><Link href="/course-detail" className="sub-menu-item">Course Detail </Link></li>

                            <li className={`has-submenu parent-menu-item ${['/auth-item','/login-item','/auth-login','/auth-cover-login','/auth-login-three','/auth-bs-login','/auth-login-bg-video','/signup-item','/auth-signup','/auth-cover-signup','/auth-signup-three','/auth-bs-signup','/auth-signup-bg-video','/reset-item', '/auth-re-password', '/auth-cover-re-password', '/auth-re-password-three', '/auth-bs-reset', '/auth-reset-password-bg-video'].includes(current) ? 'active' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/auth-item','/login-item','/auth-login','/auth-cover-login','/auth-login-three','/auth-bs-login','/auth-login-bg-video','/signup-item','/auth-signup','/auth-cover-signup','/auth-signup-three','/auth-bs-signup','/auth-signup-bg-video','/reset-item', '/auth-re-password', '/auth-cover-re-password', '/auth-re-password-three', '/auth-bs-reset', '/auth-reset-password-bg-video'].includes(manu) ? 'open' : '' }`}>
                                    <li className="has-submenu child-menu-item"><Link href="#" onClick={()=>setManu(manu === '/login-item' ? '' : '/login-item')}> Login </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${['/login-item','/auth-login','/auth-cover-login','/auth-login-three','/auth-bs-login','/auth-login-bg-video'].includes(manu) ? 'open' : ''}`}>
                                            <li className={`${current === '/auth-login' ? 'active' : ''}`}><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                            <li className={`${current === '/auth-cover-login' ? 'active' : ''}`}><Link href="/auth-cover-login" className="sub-menu-item">Login Cover</Link></li>
                                            <li className={`${current === '/auth-login-three' ? 'active' : ''}`}><Link href="/auth-login-three" className="sub-menu-item">Login Simple</Link></li>
                                            <li className={`${current === '/auth-bs-login' ? 'active' : ''}`}><Link href="/auth-bs-login" className="sub-menu-item">BS5 Login</Link></li>
                                            <li className={`${current === '/auth-login-bg-video' ? 'active' : ''}`}><Link href="/auth-login-bg-video" className="sub-menu-item">Login Five</Link></li>
                                        </ul>  
                                    </li>

                                    <li className="has-submenu child-menu-item"><Link href="#" onClick={()=>setManu(manu === '/signup-item' ? '' : '/signup-item')}> Signup </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${['/signup-item','/auth-signup','/auth-cover-signup','/auth-signup-three','/auth-bs-signup','/auth-signup-bg-video'].includes(manu) ? 'open' : ''}`}>
                                            <li className={`${current === '/auth-signup' ? 'active' : ''}`}><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                            <li className={`${current === '/auth-cover-signup' ? 'active' : ''}`}><Link href="/auth-cover-signup" className="sub-menu-item">Signup Cover</Link></li>
                                            <li className={`${current === '/auth-signup-three' ? 'active' : ''}`}><Link href="/auth-signup-three" className="sub-menu-item">Signup Simple</Link></li>
                                            <li className={`${current === '/auth-bs-signup' ? 'active' : ''}`}><Link href="/auth-bs-signup" className="sub-menu-item">BS5 Singup</Link></li>
                                            <li className={`${current === '/auth-signup-bg-video' ? 'active' : ''}`}><Link href="/auth-signup-bg-video" className="sub-menu-item">Singup Five</Link></li>
                                        </ul>  
                                    </li>

                                    <li className="has-submenu child-menu-item"><Link href="#" onClick={()=>setManu(manu === '/reset-item' ? '' : '/reset-item')}> Reset password </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${['/reset-item', '/auth-re-password', '/auth-cover-re-password', '/auth-re-password-three', '/auth-bs-reset', '/auth-reset-password-bg-video'].includes(manu) ? 'open' : ''}`}>
                                            <li className={`${current === '/auth-re-password' ? 'active' : ''}`}><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                            <li className={`${current === '/auth-cover-re-password' ? 'active' : ''}`}><Link href="/auth-cover-re-password" className="sub-menu-item">Reset Password Cover</Link></li>
                                            <li className={`${current === '/auth-re-password-three' ? 'active' : ''}`}><Link href="/auth-re-password-three" className="sub-menu-item">Reset Password Simple</Link></li>
                                            <li className={`${current === '/auth-bs-reset' ? 'active' : ''}`}><Link href="/auth-bs-reset" className="sub-menu-item">BS5 Reset Password</Link></li>
                                            <li className={`${current === '/auth-reset-password-bg-video' ? 'active' : ''}`}><Link href="/auth-reset-password-bg-video" className="sub-menu-item">Reset Pass Five</Link></li>
                                        </ul>  
                                    </li>
                                </ul>  
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/utility-item', '/page-terms', '/page-privacy'].includes(current) ? 'active ' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/utility-item' ? '' : '/utility-item')}> Utility </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/utility-item', '/page-terms', '/page-privacy'].includes(manu) ? 'open ' : ''}`}>
                                    <li className={`${current === '/page-terms' ? 'active' : ''}`}><Link href="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                    <li className={`${current === '/page-privacy' ? 'active' : ''}`}><Link href="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                </ul>  
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/special-item','/page-comingsoon','/page-comingsoon2','/page-maintenance','/page-error','/page-thankyou'].includes(current) ? 'active' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/special-item' ? '' : '/special-item')}> Special</Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/special-item','/page-comingsoon','/page-comingsoon2','/page-maintenance','/page-error','/page-thankyou'].includes(manu) ? 'open' : '' }`}>
                                    <li className={`${current === '/page-comingsoon' ? 'active' : ''}`}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                    <li className={`${current === '/page-comingsoon2' ? 'active' : ''}`}><Link href="/page-comingsoon2" className="sub-menu-item">Coming Soon Two</Link></li>
                                    <li className={`${current === '/page-maintenance' ? 'active' : ''}`}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                    <li className={`${current === '/page-error' ? 'active' : ''}`}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                    <li className={`${current === '/page-thankyou' ? 'active' : ''}`}><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                </ul>
                            </li>

                            <li className={`has-submenu parent-menu-item ${['/contact-item', '/page-contact-detail', '/page-contact-one', '/page-contact-two', '/page-contact-three'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/contact-item' ? '' : '/contact-item')}> Contact </Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/contact-item', '/page-contact-detail', '/page-contact-one', '/page-contact-two', '/page-contact-three'].includes(manu) ? 'open' : ''}`}>
                                    <li className={`${current === '/page-contact-detail' ? 'active' : ''}`}><Link href="/page-contact-detail" className="sub-menu-item">Contact Detail</Link></li>
                                    <li><Link href="/page-contact-one" className="sub-menu-item">Contact One</Link></li>
                                    <li className={`${current === '/page-contact-two' ? 'active' : ''}`}><Link href="/page-contact-two" className="sub-menu-item">Contact Two</Link></li>
                                    <li className={`${current === '/page-contact-three' ? 'active' : ''}`}><Link href="/page-contact-three" className="sub-menu-item">Contact Three</Link></li>
                                </ul>  
                            </li>

                            <li className="has-submenu parent-menu-item"><Link href="#" onClick={()=>setManu(manu === '/level-item' ? '' : '/level-item')}> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                <ul className={`submenu ${['/level-item','/level2-item'].includes(manu) ? 'open' :'' }`}>
                                    <li><Link href="#" className="sub-menu-item">Level 1.0</Link></li>
                                    <li className="has-submenu child-menu-item"><Link href="#" onClick={()=>setManu(manu === '/level2-item' ? '' : '/level2-item')}> Level 2.0 </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${['/level2-item'].includes(manu) ? 'open' :'' }`}>
                                            <li><Link href="#" className="sub-menu-item">Level 2.1</Link></li>
                                            <li><Link href="#" className="sub-menu-item">Level 2.2</Link></li>
                                        </ul>  
                                    </li>
                                </ul>  
                            </li>

                            <li className={`${current === '/footer' ? 'active' : ''}`}><Link href="/footer" className="sub-menu-item">Footer Layouts </Link></li>

                        </ul>
                    </li>

                    <li className="has-submenu parent-parent-menu-item">
                        <Link href="#" onClick={()=>setManu(manu === '/demo-item' ? '' : '/demo-item' )}>Demos</Link><span className="menu-arrow"></span>
                        <ul className={`submenu megamenu ${['/demo-item'].includes(manu) ? 'open': '' }`}>
                            <li>
                                <ul>
                                    <li>
                                        <Link href="/index-corporate" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/corporate.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Corporate</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-crypto" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/crypto.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Cryptocurrency </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-real-estate" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/real.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Real Estate</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li>
                                        <Link href="/index-shop" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/shop.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Shop</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-portfolio" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/portfolio.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Portfolio </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-photography" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/photography.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Photography </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li>
                                        <Link href="/helpcenter-overview" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/help-center.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Help Center</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-hosting" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/hosting.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Hosting & Domain</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-video-studio" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/video-studio.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Video Studio </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li>
                                        <Link href="/index-job" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/job.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Job & Career</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-ai" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/ai.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">AI Tools </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/forums" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/forums.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Forums</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li>
                                        <Link href="/index-blog" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/blog.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">Blog</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-nft" className="sub-menu-item">
                                            <div className="text-lg-center">
                                                <span className="d-none d-lg-block"><Image src="/images/demos/nft.png" width={183} height={114} className="img-fluid rounded shadow-md" alt=""/></span>
                                                <span className="mt-lg-2 d-block">NFT Marketplace</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`has-submenu parent-parent-menu-item ${['/components-item','/ui-button','/ui-badges','/ui-alert','/ui-dropdown','/ui-typography','/ui-background','/ui-text','/ui-accordion','/ui-card','/ui-tooltip-popover','/ui-shadow','/ui-border','/ui-carousel','/ui-form','/ui-breadcrumb','/ui-pagination','/ui-avatar','/ui-nav-tabs','/ui-modals','/ui-tables','/ui-icons','/ui-progressbar','/ui-lightbox'].includes(current) ? 'active' : ''}`}>
                        <Link href="#" onClick={()=>setManu(manu === '/components-item' ? '' : '/components-item' )}>Components</Link><span className="menu-arrow"></span>
                        <ul className={`submenu megamenu ${['/components-item','/ui-button','/ui-badges','/ui-alert','/ui-dropdown','/ui-typography','/ui-background','/ui-text','/ui-accordion','/ui-card','/ui-tooltip-popover','/ui-shadow','/ui-border','/ui-carousel','/ui-form','/ui-breadcrumb','/ui-pagination','/ui-avatar','/ui-nav-tabs','/ui-modals','/ui-tables','/ui-icons','/ui-progressbar','/ui-lightbox'].includes(manu) ? 'open' : ''}`}>
                            <li>
                                <ul>
                                    <li className={`${current === '/ui-button' ? 'active' : ''}`}><Link href="/ui-button" className="sub-menu-item"><TbCube className="fs-6 align-middle me-1"/> Buttons</Link></li>
                                    <li className={`${current === '/ui-badges' ? 'active' : ''}`}><Link href="/ui-badges" className="sub-menu-item"><FiAward className="fs-6 align-middle me-1"/> Badges</Link></li>
                                    <li className={`${current === '/ui-alert' ? 'active' : ''}`}><Link href="/ui-alert" className="sub-menu-item"><FiInfo className="uil uil-info-circle fs-6 align-middle me-1"/>Alert</Link></li>
                                    <li className={`${current === '/ui-dropdown' ? 'active' : ''}`}><Link href="/ui-dropdown" className="sub-menu-item"><FiLayers className="uil uil-layers fs-6 align-middle me-1"/> Dropdowns</Link></li>
                                    <li className={`${current === '/ui-typography' ? 'active' : ''}`}><Link href="/ui-typography" className="sub-menu-item"><FiAlignCenter className="uil uil-align-center-alt fs-6 align-middle me-1"/> Typography</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={`${current === '/ui-background' ? 'active' : ''}`}><Link href="/ui-background" className="sub-menu-item"><MdOutlinePalette className="fs-6 align-middle me-1"/> Background</Link></li>
                                    <li className={`${current === '/ui-text' ? 'active' : ''}`}><Link href="/ui-text" className="sub-menu-item"><PiTextT className="fs-6 align-middle me-1"/> Text Color</Link></li>
                                    <li className={`${current === '/ui-accordion' ? 'active' : ''}`}><Link href="/ui-accordion" className="sub-menu-item"><TbListTree className="fs-6 align-middle me-1"/> Accordions</Link></li>
                                    <li className={`${current === '/ui-card' ? 'active' : ''}`}><Link href="/ui-card" className="sub-menu-item"><BsPostcard className="uil uil-postcard fs-6 align-middle me-1"/> Cards</Link></li>
                                    <li className={`${current === '/ui-tooltip-popover' ? 'active' : ''}`}><Link href="/ui-tooltip-popover" className="sub-menu-item"><MdOutlineBackspace className="fs-6 align-middle me-1"/> Tooltips & Popovers</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={`${current === '/ui-shadow' ? 'active' : ''}`}><Link href="/ui-shadow" className="sub-menu-item"><FiSquare className="uil uil-square-full fs-6 align-middle me-1"/> Shadows</Link></li>
                                    <li className={`${current === '/ui-border' ? 'active' : ''}`}><Link href="/ui-border" className="sub-menu-item"><MdBorderOuter className="uil uil-border-out fs-6 align-middle me-1"/> Border</Link></li>
                                    <li className={`${current === '/ui-carousel' ? 'active' : ''}`}><Link href="/ui-carousel" className="sub-menu-item"><RxSlider className="uil uil-slider-h-range fs-6 align-middle me-1"/> Carousel</Link></li>
                                    <li className={`${current === '/ui-form' ? 'active' : ''}`}><Link href="/ui-form" className="sub-menu-item"><MdOutlineEventNote className="fs-6 align-middle me-1"/> Form Elements</Link></li>
                                    <li className={`${current === '/ui-breadcrumb' ? 'active' : ''}`}><Link href="/ui-breadcrumb" className="sub-menu-item"><BsSortDown className="fs-6 align-middle me-1"/> Breadcrumb</Link></li>
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li className={`${current === '/ui-pagination' ? 'active' : ''}`}><Link href="/ui-pagination" className="sub-menu-item"><FiCopy className="fs-6 align-middle me-1"/> Pagination</Link></li>
                                    <li className={`${current === '/ui-avatar' ? 'active' : ''}`}><Link href="/ui-avatar" className="sub-menu-item"><FiImage className="fs-6 align-middle me-1"/> Avatars</Link></li>
                                    <li className={`${current === '/ui-nav-tabs' ? 'active' : ''}`}><Link href="/ui-nav-tabs" className="sub-menu-item"><RiBarChartHorizontalLine className="fs-6 align-middle me-1"/> Nav Tabs</Link></li>
                                    <li className={`${current === '/ui-modals' ? 'active' : ''}`}><Link href="/ui-modals" className="sub-menu-item"><TbVector className="fs-6 align-middle me-1"/> Modals</Link></li>
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li className={`${current === '/ui-tables' ? 'active' : ''}`}><Link href="/ui-tables" className="sub-menu-item"><VscTable className="fs-6 align-middle me-1"/> Tables</Link></li>
                                    <li className={`${current === '/ui-icons' ? 'active' : ''}`}><Link href="/ui-icons" className="sub-menu-item"><TbIcons className="fs-6 align-middle me-1"/> Icons</Link></li>
                                    <li className={`${current === '/ui-progressbar' ? 'active' : ''}`}><Link href="/ui-progressbar" className="sub-menu-item"><PiBracketsCurlyBold className="fs-6 align-middle me-1"/> Progressbar</Link></li>
                                    <li className={`${current === '/ui-lightbox' ? 'active' : ''}`}><Link href="/ui-lightbox" className="sub-menu-item"><MdOutlinePlayCircle className="fs-6 align-middle me-1"></MdOutlinePlayCircle> Lightbox</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${current === '/page-contact-one' ? 'active' : ''}`}><Link href="/page-contact-one" className="sub-menu-item">Contact Us</Link></li>
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


