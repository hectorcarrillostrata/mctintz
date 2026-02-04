'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import UiSidebar from '../components/ui/ui-sidebar'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);
  const dropdownRef5 = useRef(null);
  const dropdownRef6 = useRef(null);
  const dropdownRef7 = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleClickOutside2 = (event) => {
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpen2(false);
    }
  };
  const handleClickOutside3 = (event) => {
    if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
      setIsOpen3(false);
    }
  };
  const handleClickOutside4 = (event) => {
    if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) {
      setIsOpen4(false);
    }
  };
  const handleClickOutside5 = (event) => {
    if (dropdownRef5.current && !dropdownRef5.current.contains(event.target)) {
      setIsOpen5(false);
    }
  };
  const handleClickOutside6 = (event) => {
    if (dropdownRef6.current && !dropdownRef6.current.contains(event.target)) {
      setIsOpen6(false);
    }
  };
  const handleClickOutside7 = (event) => {
    if (dropdownRef7.current && !dropdownRef7.current.contains(event.target)) {
      setIsOpen7(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside2);
    document.addEventListener('mousedown', handleClickOutside3);
    document.addEventListener('mousedown', handleClickOutside4);
    document.addEventListener('mousedown', handleClickOutside5);
    document.addEventListener('mousedown', handleClickOutside6);
    document.addEventListener('mousedown', handleClickOutside7);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside2);
      document.removeEventListener('mousedown', handleClickOutside3);
      document.removeEventListener('mousedown', handleClickOutside4);
      document.removeEventListener('mousedown', handleClickOutside5);
      document.removeEventListener('mousedown', handleClickOutside6);
      document.removeEventListener('mousedown', handleClickOutside7);
    };
  }, []);

  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Dropdowns </h4>
                  </div>
              </div> 
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Dropdowns</li>
                  </ul>
              </nav>
          </div>
      </div> 
    </section>

    <div className="position-relative">
        <div className="shape overflow-hidden text-color-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
      <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <h5>Components</h5>
                  <UiSidebar/>
              </div>

              <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                      <div className="col">
                          <div className="component-wrapper rounded shadow">
                              <div className="p-4 border-bottom">
                                  <h4 className="title mb-0"> Dropdown </h4>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-2 pb-2">Ex. <br/> 
                                      <pre><code className="text-danger">
                                          &lt;div className="btn-group dropdown-primary me-2 mt-2"&gt;<br/>
                                          &nbsp;&nbsp; &lt;button type="button" className="btn btn-primary dropdown-toggle"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Primary<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br/>
                                          &nbsp;&nbsp; &lt;div className="dropdown-menu"&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" className="dropdown-item"&gt;Home&lt;/Link&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" className="dropdown-item"&gt;Services&lt;/Link&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" className="dropdown-item"&gt;About us&lt;/Link&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="dropdown-divider"&gt;&lt;/div&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" className="dropdown-item"&gt;Contact us&lt;/Link&gt;<br/>
                                          &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                          &lt;/div&gt;
                                          </code></pre>
                                  </h6>

                                  <div className="btn-group dropdown-primary me-2 mt-2" ref={dropdownRef}>
                                      <button type="button" className="btn btn-primary dropdown-toggle" onClick={toggleDropdown}>
                                          Primary
                                      </button>
                                      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>

                                  <div className="btn-group dropdown-secondary me-2 mt-2" ref={dropdownRef2}>
                                      <button type="button" className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown2}>
                                          Secondary
                                      </button>
                                      <div className={`dropdown-menu ${isOpen2 ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>

                                  <div className="btn-group dropdown-success me-2 mt-2" ref={dropdownRef3}>
                                      <button type="button" className="btn btn-success dropdown-toggle" onClick={toggleDropdown3}>
                                          Success
                                      </button>
                                      <div className={`dropdown-menu ${isOpen3 ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>

                                  <div className="btn-group dropdown-warning me-2 mt-2" ref={dropdownRef4}>
                                      <button type="button" className="btn btn-warning dropdown-toggle" onClick={toggleDropdown4}>
                                          Warning
                                      </button>
                                      <div className={`dropdown-menu ${isOpen4 ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>

                                  <div className="btn-group dropdown-info me-2 mt-2" ref={dropdownRef5}>
                                      <button type="button" className="btn btn-info dropdown-toggle" onClick={toggleDropdown5}>
                                          Info
                                      </button>
                                      <div className={`dropdown-menu ${isOpen5 ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>

                                  <div className="btn-group dropdown-danger me-2 mt-2" ref={dropdownRef6}>
                                      <button type="button" className="btn btn-danger dropdown-toggle" onClick={toggleDropdown6}>
                                          Danger
                                      </button>
                                      <div className={`dropdown-menu ${isOpen6 ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>

                                  <div className="btn-group dropdown-dark me-2 mt-2" ref={dropdownRef7}>
                                      <button type="button" className="btn btn-dark dropdown-toggle" onClick={toggleDropdown7}>
                                          Dark
                                      </button>
                                      <div className={`dropdown-menu ${isOpen7 ? 'show' : ''}`}>
                                          <Link href="#" className="dropdown-item">Home</Link>
                                          <Link href="#" className="dropdown-item">Services</Link>
                                          <Link href="#" className="dropdown-item">About us</Link>
                                          <div className="dropdown-divider"></div>
                                          <Link href="#" className="dropdown-item">Contact us</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    </>
  )
}
