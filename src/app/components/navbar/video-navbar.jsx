'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiSettings, FiShoppingCart} from 'react-icons/fi'

export default function VideoNavbar() {
    let [current, setCurrent] = useState('')
    let [toggle, setToggle] = useState(false)
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
                        <Link href="#" className="navbar-toggle" id="isToggle" onClick={()=>toggleMenu()}>
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
                        <Link href="#">
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

                <div id="navigation">
                    <ul className="navigation-menu nav-light nav-right" id="navmenu-nav">
                        <li className={`has-submenu ${current === '/index-video-studio' ? 'active' : ''}`}>
                            <Link href="/index-video-studio" className="sub-menu-item">Home</Link>
                        </li>
                        <li className={`has-submenu ${current === '/video-portfolio' ? 'active' : ''}`}>
                            <Link href="/video-portfolio" className="sub-menu-item">Videos</Link>
                        </li>
                        <li className={`has-submenu `}>
                            <Link href="/#" className="sub-menu-item">Studio</Link>
                        </li>
                        <li className={`has-submenu ${current === '/page-contact-one' ? 'active' : ''}`}>
                            <Link href="/page-contact-one" className="sub-menu-item">Get in touch!</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
  )
}
