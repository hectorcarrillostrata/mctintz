'use client'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiSettings, FiShoppingCart ,FiX, FiUser, FiKey,  FiMail, FiGlobe, FiSearch} from 'react-icons/fi'
import { FaDribbble, FaBehance, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function BlogNavbar() {
    let [current, setCurrent] = useState('')
    let [manu, setManu] = useState('');
    let [toggle, setToggle] = useState(false)
    let [search, setSearch] = useState(false)
    let [show, setShow] = useState(false)

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
    })

    const toggleMenu = () => {
        setToggle(!toggle)
    }

  return (
    <header id="topnav" className="defaultscroll sticky navbar-white-bg">
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
                <li className={`${current === '/index-blog' ? 'active' : ''}`}><Link href="/index-blog" className="sub-menu-item">Home</Link></li>

                <li className={`${current === '/blog-about' ? 'active' : ''}`}><Link href="/blog-about" className="sub-menu-item">About</Link></li>

                <li className={`has-submenu parent-menu-item ${['/post-item', '/blog-standard-post', '/blog-slider-post','/blog-gallery-post', '/blog-youtube-post', '/blog-vimeo-post', '/blog-audio-post', '/blog-blockquote-post', '/blog-left-sidebar-post'].includes(current) ? 'active' : ''}`}>
                    <Link href="#" onClick={()=>setManu(manu === '/post-item' ? '' : '/post-item')}>Post</Link><span className="menu-arrow"></span>
                    <ul className={`submenu ${['/post-item', '/blog-standard-post', '/blog-slider-post','/blog-gallery-post', '/blog-youtube-post', '/blog-vimeo-post', '/blog-audio-post', '/blog-blockquote-post', '/blog-left-sidebar-post'].includes(manu) ? 'open' : ''}`}>
                        <li className={`${current === '/blog-standard-post' ? 'active' : ''}`}><Link href="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                        <li className={`${current === '/blog-slider-post' ? 'active' : ''}`}><Link href="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                        <li className={`${current === '/blog-gallery-post' ? 'active' : ''}`}><Link href="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                        <li className={`${current === '/blog-youtube-post' ? 'active' : ''}`}><Link href="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                        <li className={`${current === '/blog-vimeo-post' ? 'active' : ''}`}><Link href="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                        <li className={`${current === '/blog-audio-post' ? 'active' : ''}`}><Link href="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                        <li className={`${current === '/blog-blockquote-post' ? 'active' : ''}`}><Link href="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                        <li className={`${current === '/blog-left-sidebar-post' ? 'active' : ''}`}><Link href="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                    </ul>
                </li>

                <li><Link href="#" className="sub-menu-item">Lifestyle</Link></li>

                <li><Link href="#" className="sub-menu-item">Technology</Link></li>
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
