'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiShoppingCart} from 'react-icons/fi'

export default function AiNavbar({navlight}) {
    let [toggle, setToggle] = useState(false);
    let [current, setCurrent] = useState('');
    let [manu, setManu] = useState('')
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

    const toggleMenu = () => {
        setToggle(!toggle)
    }

  
  return (
        <header id="topnav" className={`defaultscroll sticky ${isScrolled ? 'nav-sticky' : ''}`}>
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
                        <Link href="#" className="btn btn-sm btn-primary text-uppercase">Login</Link>
                    </li>
                   { navlight ? (
                
                        <li className="list-inline-item ps-1 mb-0">
                            <Link href="https://1.envato.market/landrick-next" target="_blank">
                                <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"></FiShoppingCart></span></div>
                                <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><FiShoppingCart className="fea icon-sm"></FiShoppingCart></span></div>
                            </Link>
                        </li>
                ) : (

                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/landrick-next" target="_blank">
                            <div className="btn btn-icon btn-pills btn-primary"><FiShoppingCart className="fea icon-sm"></FiShoppingCart></div>
                        </Link>
                    </li>
                )}
                </ul>

                <div id="navigation" className={`${toggle ? 'd-block' : 'd-none'}`}>
                    <ul className={`navigation-menu nav-right ${navlight ? 'nav-light' : ''}`}>
                        <li className={`${current === '/index-ai' ? 'active' : ''}`}><Link href="/index-ai" className="sub-menu-item">Home</Link></li>

                        <li className={`${current === '/ai-about' ? 'active' : ''}`}><Link href="/ai-about" className="sub-menu-item">About us</Link></li>

                        <li className={`${current === '/ai-pricing' ? 'active' : ''}`}><Link href="/ai-pricing" className="sub-menu-item">Pricing</Link></li>

                        <li className={`has-submenu parent-parent-menu-item ${['/page-item','/ai-services','/blog-grid','/blog-detail','/helpcenter-overview','/auth-login-bg-video','/auth-signup-bg-video','/auth-reset-password-bg-video','/page-terms','/page-privacy','/page-comingsoon','/page-maintenance','/page-error','/blog-item','/auth-item','/utility-item','/special-item'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/ai-services','/blog-grid','/blog-detail','/helpcenter-overview','/auth-login-bg-video','/auth-signup-bg-video','/auth-reset-password-bg-video','/page-terms','/page-privacy','/page-comingsoon','/page-maintenance','/page-error','/blog-item','/auth-item','/utility-item','/special-item'].includes(manu) ? 'open' : ''}`}>
                                <li className={`${current === '/ai-services' ? 'active' : ''}`}><Link href="/ai-services" className="sub-menu-item">Services </Link></li>
                
                                <li className={`has-submenu parent-menu-item ${['/blog-item','/blog-grid','/blog-detail'].includes(current) ? 'active ' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/blog-item','/blog-grid','/blog-detail'].includes(manu) ? 'open ' : '' }`}>
                                        <li className={`${current === '/blog-grid' ? 'active' : ''}`}><Link href="/blog-grid" className="sub-menu-item">Blog Grid</Link></li>
                                        <li className={`${current === '/blog-detail' ? 'active' : ''}`}><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                    </ul>  
                                </li>

                                <li className={`${current === '/helpcenter-overview' ? 'active' : ''}`}><Link href="/helpcenter-overview" className="sub-menu-item">Helpcenter </Link></li>
                
                                <li className={`has-submenu parent-menu-item ${['/auth-item','/auth-login-bg-video','/auth-signup-bg-video','auth-reset-password-bg-video'].includes(current) ? 'active ' : '' }`}><Link href="#" onClick={()=>setManu(manu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item','/auth-login-bg-video','/auth-signup-bg-video','auth-reset-password-bg-video'].includes(manu) ? 'open ' : '' }`}>
                                        <li className={`${current === '/auth-login-bg-video' ? 'active' : ''}`}><Link href="/auth-login-bg-video" className="sub-menu-item">Login</Link></li>
                                        <li className={`${current === '/auth-signup-bg-video' ? 'active' : ''}`}><Link href="/auth-signup-bg-video" className="sub-menu-item">Singup</Link></li>
                                        <li className={`${current === '/auth-reset-password-bg-video' ? 'active' : ''}`}><Link href="/auth-reset-password-bg-video" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                
                                <li className={`has-submenu parent-menu-item ${['/utility-item','/page-terms','/page-privacy'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/utility-item' ? '' : '/utility-item')}> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/utility-item','/page-terms','/page-privacy'].includes(manu) ? 'open' : ''}`}>
                                        <li className={`${current === '/page-terms' ? 'active' : ''}`}><Link href="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={`${current === '/page-privacy' ? 'active' : ''}`}><Link href="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>
                
                                <li className={`has-submenu parent-menu-item ${['/special-item','/page-comingsoon','/page-maintenance','/page-error'].includes(current) ? 'active' : ''}`}><Link href="#" onClick={()=>setManu(manu === '/special-item' ? '' : '/special-item')}> Special</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/special-item','/page-comingsoon','/page-maintenance','/page-error'].includes(manu) ? 'open' : ''}`}>
                                        <li className={`${current === '/page-comingsoon' ? 'active' : ''}`}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li className={`${current === '/page-maintenance' ? 'active' : ''}`}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li className={`${current === '/page-error' ? 'active' : ''}`}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${current === '/page-contact-one' ? 'active' : ''}`}><Link href="/page-contact-one" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
  )
}
