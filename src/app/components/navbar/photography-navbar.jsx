'use client'
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {FiMenu, FiX, FiShoppingCart, FiDribbble,  FiMail, FiGlobe} from 'react-icons/fi'
import { FaBehance, FaFacebookF, FaInstagram, FaTwitter, } from 'react-icons/fa'

export default function PhotographyNavbar() {

    let [show, setShow] = useState(false);
    let [current, setCurrent] = useState('')
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
    })

  return (
    <header id="topnav" className={`defaultscroll sticky  ${isScrolled ? 'nav-sticky' : ''}`}>
    <div className="container">
        <Link className="logo" href="/">
            <span className="logo-light-mode">
                <Image src="/images/logo-dark.png" className="l-dark" width={134} height={24} alt=""/>
                <Image src="/images/logo-light.png" className="l-light" width={134} height={24} alt=""/>
            </span>
            <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt=""/>
        </Link>

        <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0">
                <Link href="#" onClick={()=>setShow(!show)}>
                    <span className="btn btn-icon btn-pills btn-primary"><FiMenu className="fea icon-sm"></FiMenu></span>
                </Link>
            </li>
        </ul>


        <div className={`offcanvas offcanvas-end shadow border-0 ${show ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header px-4 border-bottom">
                <h5 id="offcanvasRightLabel" className="mb-0">
                    <Image src="/images/logo-dark.png" width={134} height={24} className="light-version" alt=""/>
                    <Image src="/images/logo-light.png" width={134} height={24} className="dark-version" alt=""/>
                </h5>
                <button type="button" className="btn-close d-flex align-items-center text-dark" onClick={()=>setShow(!show)}><FiX  className="fs-4"></FiX></button>
            </div>
    
            <div className="offcanvas-body d-flex align-items-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="navigation" className="toggle-menu">
                                <ul className="navigation-menu toggle-menu-item">
                                    <li className={`has-submenu ${current === '/index-photography' ? 'active' : ''}`}>
                                        <Link href="/index-photography" className="sub-menu-item">Home</Link>
                                    </li>
                                    <li className={`has-submenu ${current === '/photography-about' ? 'active' : ''}`}>
                                        <Link href="/photography-about" className="sub-menu-item">About us</Link>
                                    </li>
                                    <li className={`has-submenu ${current === '/photography-portfolio' ? 'active' : ''}`}>
                                        <Link href="/photography-portfolio" className="sub-menu-item">Portfolio</Link>
                                    </li>
                                    <li className={`has-submenu ${current === '/page-contact-one' ? 'active' : ''}`}>
                                        <Link href="/page-contact-one" className="sub-menu-item">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="offcanvas-footer p-4 border-top text-center">
                <ul className="list-unstyled social-icon social mb-0">
                    <li className="list-inline-item mb-0 me-1"><Link href="https://1.envato.market/landrick-next" target="_blank" className="rounded"><FiShoppingCart className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FiDribbble className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><FaBehance className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FaFacebookF className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FaInstagram className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><FaTwitter className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail className="align-middle"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://shreethemes.in" target="_blank" className="rounded"><FiGlobe className="align-middle"/></Link></li>
                </ul>
            </div>
        </div>
    </div>
</header>
  )
}
