'use client'
import React, { useEffect, useState, useRef  } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';

import { TbHeartBroken } from 'react-icons/tb'
import { FiSearch, FiShoppingCart, FiHeart,FiUser } from 'react-icons/fi'
import { LuClipboardList } from 'react-icons/lu'
import { MdArrowCircleDown } from 'react-icons/md'
import { BiLogOutCircle } from 'react-icons/bi'

export default function ShopNavbar() {
    let [current, setCurrent] = useState('');
    let [manu, setManu] = useState('')
    let [toggle, setToggle] = useState(false);
    let [search, setSearch] = useState(false)
    let [cart, setCart] = useState(false)
    let [user, setUser] = useState(false)
    const [show, setShow] = useState(false);
    let [isScrolled, setIsScrolled] = useState(false);

   const searchRef = useRef()
   const cartRef = useRef()
   const userRef = useRef()

    useEffect(()=>{
        current = window.location.pathname
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
        if (cart) {
            const cartClickOutside = (event) => {
              if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCart(false);
              }
            }
            document.addEventListener('mousedown', cartClickOutside);

            return () => {
                document.removeEventListener('mousedown', cartClickOutside);
              };
        }
        if (user) {
            const userClickOutside = (event) => {
              if (userRef.current && !userRef.current.contains(event.target)) {
                setUser(false);
              }
            }
            document.addEventListener('mousedown', userClickOutside);

            return () => {
                document.removeEventListener('mousedown', userClickOutside);
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

    const toggleMenu =()=>{
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
        
                <li className="list-inline-item mb-0 px-1" ref={cartRef}>
                    <div className="dropdown">
                        <button type="button" className="btn btn-icon btn-pills btn-primary dropdown-toggle" onClick={()=>setCart(!cart)}><FiShoppingCart className="icons"/></button>
                        <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4 ${cart ? 'show' : ''}`} style={{width:'300px', right:'100%'}}>
                            <div className="pb-4">
                                <Link href="#" className="d-flex align-items-center">
                                    <Image src="/images/shop/product/s-1.jpg" width={51} height={64} className="shadow rounded" style={{maxHeight:'64px'}} alt=""/>
                                    <div className="flex-1 text-start ms-3">
                                        <h6 className="text-dark mb-0">T-shirt (M)</h6>
                                        <p className="text-muted mb-0">$320 X 2</p>
                                    </div>
                                    <h6 className="text-dark mb-0">$640</h6>
                                </Link>

                                <Link href="#" className="d-flex align-items-center mt-4">
                                    <Image src="/images/shop/product/s-2.jpg" width={51} height={64} className="shadow rounded" style={{maxHeight:'64px'}} alt=""/>
                                    <div className="flex-1 text-start ms-3">
                                        <h6 className="text-dark mb-0">Bag</h6>
                                        <p className="text-muted mb-0">$50 X 5</p>
                                    </div>
                                    <h6 className="text-dark mb-0">$250</h6>
                                </Link>

                                <Link href="#" className="d-flex align-items-center mt-4">
                                    <Image src="/images/shop/product/s-3.jpg" width={51} height={64} className="shadow rounded" style={{maxHeight:'64px'}} alt=""/>
                                    <div className="flex-1 text-start ms-3">
                                        <h6 className="text-dark mb-0">Watch (Men)</h6>
                                        <p className="text-muted mb-0">$800 X 1</p>
                                    </div>
                                    <h6 className="text-dark mb-0">$800</h6>
                                </Link>
                            </div>

                            <div className="d-flex align-items-center justify-content-between pt-4 border-top">
                                <h6 className="text-dark mb-0">Total($):</h6>
                                <h6 className="text-dark mb-0">$1690</h6>
                            </div>

                            <div className="mt-3 text-center">
                                <Link href="#" className="btn btn-primary me-2">View Cart</Link>
                                <Link href="#" className="btn btn-primary">Checkout</Link>
                            </div>
                            <p className="text-muted text-start mt-1 mb-0">*T&C Apply</p>
                        </div>
                    </div>
                </li>
                <li className="list-inline-item mb-0 px-1">
                    <Link href="#" className="btn btn-icon btn-pills btn-primary" onClick={()=>setShow(!show)}><FiHeart className="icons"/></Link>
                </li>
                <Modal show={show} onHide={()=>setShow(!show)} centered={true}>
                    <Modal.Body>
                        <div className="text-center py-4">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{height:'95px', width:'95px'}}>
                                <h1 className="mb-0"><TbHeartBroken className="align-middle"/></h1>
                            </div>
                            <div className="mt-4">
                                <h4>Your wishlist is empty.</h4>
                                <p className="text-muted">Create your first wishlist request...</p>
                                <div className="mt-4">
                                    <a href="#" className="btn btn-outline-primary">+ Create new wishlist</a>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <li className="list-inline-item mb-0" ref={userRef}>
                    <div className="dropdown dropdown-primary">
                        <button type="button" className="btn btn-icon btn-pills btn-primary dropdown-toggle" onClick={()=>setUser(!user)}><FiUser className="icons"/></button>
                        <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4 ${user ? 'show' : ''}`} style={{width:'200px', right:'100%'}}>
                            <Link className="dropdown-item text-dark" href="#"><FiUser className="align-middle me-1"></FiUser> Account</Link>
                            <Link className="dropdown-item text-dark" href="#"><LuClipboardList className="align-middle me-1"></LuClipboardList> Order History</Link>
                            <Link className="dropdown-item text-dark" href="#"><MdArrowCircleDown className="align-middle me-1"></MdArrowCircleDown> Download</Link>
                            <div className="dropdown-divider my-3 border-top"></div>
                            <Link className="dropdown-item text-dark" href="#"><BiLogOutCircle className="align-middle me-1"></BiLogOutCircle> Logout</Link>
                        </div>
                    </div>
                </li>
            </ul>

            <div id="navigation" className={`${toggle ? 'd-block' : 'd-none'}`}>
                <ul className="navigation-menu">
                    <li className={`${current === '/index-shop' ? 'active' : ''}`}><Link href="/index-shop" className="sub-menu-item">Home</Link></li>

                    <li className={`${current === '/shop-aboutus' ? 'active' : ''}`}><Link href="/shop-aboutus" className="sub-menu-item"> About Us</Link></li>

                    <li className={`has-submenu parent-menu-item ${['/shop-item', '/shop-fullwidth-grids','/shop-grids','/shop-fullwidth-lists','/shop-lists','/shop-product-detail','/shop-cart','/shop-checkouts','/shop-myaccount'].includes(current) ? 'active' : ''}`}>
                        <Link href="#" onClick={()=>setManu(manu === '/shop-item' ? '' : '/shop-item')}>Shop</Link><span className="menu-arrow"></span>
                        <ul className={`submenu ${['/shop-item', '/shop-fullwidth-grids','/shop-grids','/shop-fullwidth-lists','/shop-lists','/shop-product-detail','/shop-cart','/shop-checkouts','/shop-myaccount'].includes(manu) ? 'open' : ''}`}>
                            <li className={`${current === '/shop-fullwidth-grids' ? 'active' : ''}`}><Link href="/shop-fullwidth-grids" className="sub-menu-item">Fullwidth Grid</Link></li>
                            <li className={`${current === '/shop-grids' ? 'active' : ''}`}><Link href="/shop-grids" className="sub-menu-item">Product Grids</Link></li>
                            <li className={`${current === '/shop-fullwidth-lists' ? 'active' : ''}`}><Link href="/shop-fullwidth-lists" className="sub-menu-item">Fullwidth List</Link></li>
                            <li className={`${current === '/shop-lists' ? 'active' : ''}`}><Link href="/shop-lists" className="sub-menu-item">Product List</Link></li>
                            <li className={`${current === '/shop-product-detail' ? 'active' : ''}`}><Link href="/shop-product-detail" className="sub-menu-item">Product Details</Link></li>
                            <li className={`${current === '/shop-cart' ? 'active' : ''}`}><Link href="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                            <li className={`${current === '/shop-checkouts' ? 'active' : ''}`}><Link href="/shop-checkouts" className="sub-menu-item">Checkouts</Link></li>
                            <li className={`${current === '/shop-myaccount' ? 'active' : ''}`}><Link href="/shop-myaccount" className="sub-menu-item">My Account</Link></li>
                        </ul>
                    </li>

                    <li className={`has-submenu parent-menu-item ${['/page-item','/auth-login','/auth-signup','/auth-re-password','/page-comingsoon','/page-maintenance','/page-error','/page-thankyou'].includes(current) ? 'active' : ''}`}>
                        <Link href="#" onClick={()=>setManu(manu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                        <ul className={`submenu ${['/page-item','/auth-login','/auth-signup','/auth-re-password','/page-comingsoon','/page-maintenance','/page-error','/page-thankyou'].includes(manu) ? 'open' : ''}`}>                                        
                            <li className={`${current === '/auth-login' ? 'active' : ''}`}><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                            <li className={`${current === '/auth-signup' ? 'active' : ''}`}><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                            <li className={`${current === '/auth-re-password' ? 'active' : ''}`}><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                            <li className={`${current === '/page-comingsoon' ? 'active' : ''}`}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                            <li className={`${current === '/page-maintenance' ? 'active' : ''}`}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                            <li className={`${current === '/page-error' ? 'active' : ''}`}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                            <li className={`${current === '/page-thankyou' ? 'active' : ''}`}><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                        </ul>
                    </li>

                    <li className={`has-submenu parent-menu-item ${['/blog-item','/shop-blog','/shop-blog-detail'].includes(current) ? 'active' : ''}`}>
                        <Link href="#" onClick={()=>setManu(manu === '/blog-item' ? '' : '/blog-item')}>Blog</Link><span className="menu-arrow"></span>
                        <ul className={`submenu ${['/blog-item','/shop-blog','/shop-blog-detail'].includes(manu) ? 'open' : ''}`}>
                            <li className={`${current === '/shop-blog' ? 'active' : ''}`}><Link href="/shop-blog" className="sub-menu-item">Blog Grid</Link></li>
                            <li className={`${current === '/shop-blog-detail' ? 'active' : ''}`}><Link href="/shop-blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
