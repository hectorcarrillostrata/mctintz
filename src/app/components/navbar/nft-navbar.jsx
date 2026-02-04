'use client'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiSearch } from 'react-icons/fi'
import { LuWallet } from 'react-icons/lu'

export default function NftNavbar() {
    let [current, setCurrent] = useState('')
    let [manu, setManu] = useState('')
    let [toggle, setToggle] = useState(false)

    let [search, setSearch] = useState(false)
    let [isScrolled, setIsScrolled] = useState(false);

    const searchRef = useRef()

    useEffect(()=>{
        const current = window.location.pathname
        setCurrent(current)

        if (search) {
            const searchClickOutside = (event) => {
              if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch(false);
              }
            }
            document.addEventListener('mousedown', searchClickOutside);

            return () => {
                document.removeEventListener('mousedown', searchClickOutside);
              };
        }
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
                <li className="list-inline-item mb-0 px-1" ref={searchRef}>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle p-0" onClick={()=>setSearch(!search)}>
                            <FiSearch className="text-dark fs-5 align-middle"></FiSearch>
                        </button>
                        <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0 ${search ? 'show' : ''}`} style={{width:'300px', right:'100%'}}>
                            <div className="search-bar">
                                <div id="itemSearch" className="menu-search mb-0">
                                    <form role="search" method="get" id="searchItemform" className="searchform">
                                        <input type="text" className="form-control border rounded" name="s" id="searchItem" placeholder="Search..."/>
                                        <input type="submit" id="searchItemsubmit" value="Search"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="https://1.envato.market/landrick-next" target="_blank" className="btn btn-icon btn-pills btn-primary"><LuWallet/></Link>
                    </li>
                </ul>

                <div id="navigation" className={toggle ? 'd-block ' : 'd-none'}>
                    <ul className="navigation-menu">
                        <li className={`${current === '/index-nft' ? 'active' : ''}`}><Link href="/index-nft" className="sub-menu-item">Home</Link></li>

                        <li className={`${current === '/nft-explore' ? 'active' : ''}`}><Link href="/nft-explore" className="sub-menu-item"> Explore</Link></li>

                        <li className={`${current === '/nft-creators' ? 'active' : ''}`}><Link href="/nft-creators" className="sub-menu-item"> Creators</Link></li>

                        <li className={`has-submenu parent-menu-item ${['/page-item','/auth-login-bg-video','/auth-signup-bg-video','/auth-reset-password-bg-video','/page-comingsoon','/page-maintenance','/page-error','/page-thankyou', '/nft-item-detail'].includes(current) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/auth-login-bg-video','/auth-signup-bg-video','/auth-reset-password-bg-video','/page-comingsoon','/page-maintenance','/page-error','/page-thankyou', '/nft-item-detail'].includes(manu) ? 'open' : ''}`}>                                        
                                <li><Link href="/nft-item-detail" className="sub-menu-item">Nft Detail</Link></li>
                                <li><Link href="/auth-login-bg-video" className="sub-menu-item">Login</Link></li>
                                <li><Link href="/auth-signup-bg-video" className="sub-menu-item">Signup</Link></li>
                                <li><Link href="/auth-reset-password-bg-video" className="sub-menu-item">Reset Password</Link></li>
                                <li><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                <li><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                <li><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                <li><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                            </ul>
                        </li>

                        <li><Link href="/helpcenter-overview" className="sub-menu-item"> Help Center</Link></li>
                
                        <li><Link href="/page-contact-one" className="sub-menu-item"> Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
  )
}
