'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MctintzNavbarDark() {
    let [toggle, setToggle] = useState(false)
    let [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50); // Only apply after scrolling 50px
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="topnav" className={`defaultscroll sticky ${isScrolled ? 'nav-sticky' : ''}`} style={{transition: 'all 0.5s ease'}}>
            <div className="container">
                <Link className="logo" href="/index-mctintz">
                    <span className="logo-light-mode">
                        <Image src="/images/logo-dark.png" className="l-dark" width={134} height={24} alt="MC Tintz"/>
                        <Image src="/images/logo-light.png" className="l-light" width={134} height={24} alt="MC Tintz"/>
                    </span>
                    <Image src="/images/logo-light.png" width={134} height={24} className="logo-dark-mode" alt="MC Tintz"/>
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
                    <ul className={`navigation-menu`}>
                        <li>
                            <Link href="/index-mctintz" className="sub-menu-item">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-mctintz" className="sub-menu-item">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
