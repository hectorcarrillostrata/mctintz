'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBehance, FaFacebookF } from 'react-icons/fa';
import { FiDribbble, FiGlobe, FiInstagram, FiMail, FiShoppingCart, FiTwitter, FiX } from 'react-icons/fi';

const themeMap = {
  'style': { bootstrap: 'bootstrap.css', style: 'style.css' },
  'style-rtl': { bootstrap: 'bootstrap-rtl.css', style: 'style-rtl.css' },
  'style-dark': { bootstrap: 'bootstrap-dark.css', style: 'style-dark.css' },
  'style-dark-rtl': { bootstrap: 'bootstrap-dark-rtl.css', style: 'style-dark-rtl.css' },
};

export default function Switcher() {
     const [theme, setTheme] = useState('style');
     const [show, setShow] = useState(false);
      console.log(theme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && themeMap[savedTheme]) {
        setTheme(savedTheme);
        }
    }, []);
      
      useEffect(() => {
        if (!themeMap[theme]) return;

        // Remove old links
        document.getElementById("bootstrap-theme")?.remove();
        document.getElementById("style-theme")?.remove();

        // Create new Bootstrap CSS link
        const bootstrapLink = document.createElement("link");
        bootstrapLink.rel = "stylesheet";
        bootstrapLink.id = "bootstrap-theme";
        bootstrapLink.href = `/css/${themeMap[theme].bootstrap}`;
        document.head.appendChild(bootstrapLink);

        // Create new style CSS link
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.id = "style-theme";
        styleLink.href = `/css/${themeMap[theme].style}`;
        document.head.appendChild(styleLink);

        // Set RTL or LTR direction
        document.documentElement.dir =
        theme === "style-rtl" || theme === "style-dark-rtl" ? "rtl" : "ltr";

        // Save theme to localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);


  return (
    <>
        <Link href="#" data-bs-toggle="offcanvas" data-bs-target="#switcher-sidebar" className="card switcher-btn shadow-md text-primary z-index-1 d-md-inline-flex d-none">
            <i className="mdi mdi-cog mdi-24px mdi-spin align-middle"></i>
        </Link>
        <div className="offcanvas offcanvas-start shadow border-0" tabIndex={-1} id="switcher-sidebar" aria-labelledby="offcanvasLeftLabel">
            <div className="offcanvas-header p-4 border-bottom">
                <h5 id="offcanvasLeftLabel" className="mb-0">
                    <img src="/images/logo-dark.png" height="24" className="light-version" alt=""/>
                    <img src="/images/logo-light.png" height="24" className="dark-version" alt=""/>
                </h5>
                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close d-flex align-items-center text-dark"><FiX className="fs-4"/></button>
            </div>
            <div className="offcanvas-body p-4 pb-0">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mt-4 pt-4 border-top">
                            <h6 className="fw-bold">Theme Options</h6>

                            <ul className="text-center style-switcher list-unstyled mt-4">
                                <li className="d-grid"><Link href="#" className="rtl-version t-rtl-light"  onClick={() => {setTheme('style-rtl'), setShow(false)}}><img src="/images/demos/rtl.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width:'240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">RTL Version</span></Link></li>
                                <li className="d-grid"><Link href="#" className="ltr-version t-ltr-light" onClick={() => {setTheme('style'), setShow(false)}}><img src="/images/demos/ltr.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width:'240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">LTR Version</span></Link></li>
                                <li className="d-grid"><Link href="#" className="dark-rtl-version t-rtl-dark" onClick={() => {setTheme('style-dark-rtl'), setShow(false)}} ><img src="/images/demos/dark-rtl.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width:'240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">RTL Version</span></Link></li>
                                <li className="d-grid"><Link href="#" className="dark-ltr-version t-ltr-dark" onClick={() => {setTheme('style-dark'), setShow(false)}} ><img src="/images/demos/dark.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width:'240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">LTR Version</span></Link></li>
                                <li className="d-grid"><Link href="#" className="dark-version t-dark mt-4" onClick={() => {setTheme('style-dark'), setShow(false)}} ><img src="/images/demos/dark.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width:'240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">Dark Version</span></Link></li>
                                <li className="d-grid"><Link href="#" className="light-version t-light mt-4" onClick={() => {setTheme('style'), setShow(false)}} ><img src="/images/demos/ltr.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width:'240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">Light Version</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-footer p-4 border-top text-center">
                <ul className="list-unstyled social-icon social mb-0">
                    <li className="list-inline-item mb-0 me-1"><Link href="https://1.envato.market/landrick" target="_blank" className="rounded"><FiShoppingCart className="align-middle" title="Buy Now"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FiDribbble className="align-middle" title="dribbble"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><FaBehance className="align-middle" title="behance"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FaFacebookF className="align-middle" title="facebook"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FiInstagram className="align-middle" title="instagram"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><FiTwitter className="align-middle" title="twitter"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail className="align-middle" title="email"/></Link></li>
                    <li className="list-inline-item mb-0 me-1"><Link href="https://shreethemes.in" target="_blank" className="rounded"><FiGlobe className="align-middle" title="website"/></Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
