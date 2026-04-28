'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MctintzNavbarLight() {
    let [toggle, setToggle] = useState(false)
    let [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Set initial scroll state
        const initialScroll = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(initialScroll > 50);

        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50); // Only apply after scrolling 50px
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setToggle(false); // Close mobile menu
        }
    };

    return (
        <header id="topnav" className={`defaultscroll sticky ${isScrolled ? 'nav-sticky' : ''}`} style={{
            transition: 'all 0.5s ease',
            backgroundColor: isScrolled ? 'rgba(20, 20, 20, 0.65)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? '0 2px 12px rgba(0, 0, 0, 0.3)' : 'none'
        }}>
            <div className="container">
                <Link className="logo" href="/index-mctintz">
                    <span className="logo-light-mode">
                        <Image src="/images/logo-mctintz.svg" className="l-dark" width={134} height={24} alt="MC Tintz" style={{opacity: 1}}/>
                        <Image src="/images/logo-mctintz.svg" className="l-light" width={134} height={24} alt="MC Tintz" style={{opacity: 1}}/>
                    </span>
                    <Image src="/images/logo-mctintz.svg" width={134} height={24} className="logo-dark-mode" alt="MC Tintz" style={{opacity: 1}}/>
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={() => setToggle(!toggle)}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    {/* Empty to maintain structure */}
                </ul>

                <div id="navigation" className={toggle ? 'd-block' : 'd-none'}>
                    <ul className={`navigation-menu ${isScrolled ? '' : 'nav-light'}`}>
                        <li>
                            <Link href="/index-mctintz" className="sub-menu-item" style={{color: 'rgba(255,255,255,0.9)'}}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="sub-menu-item" style={{color: 'rgba(255,255,255,0.9)'}}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="sub-menu-item" style={{color: 'rgba(255,255,255,0.9)'}}>
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#service-menu" onClick={(e) => { e.preventDefault(); scrollToSection('service-menu'); }} className="sub-menu-item" style={{color: 'rgba(255,255,255,0.9)'}}>
                                Service Menu
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-mctintz" className="sub-menu-item" style={{color: 'rgba(255,255,255,0.9)'}}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
