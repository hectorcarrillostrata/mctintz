import React from 'react'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import UiSidebar from '../components/ui/ui-sidebar'
import AccordionOne from '../components/accordion/accordion-one'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Accordion() {
  return (
    <>
     <Navbar/> 
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h4 className="title mb-0"> Accordions </h4>
                    </div>
                </div>  
            </div>
            
            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Accordions</li>
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
                        <div className="col-12">
                            <div className="component-wrapper rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Accordions</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <br/>
                                        <pre><code className="text-danger">
                                            &lt;div className="accordion"&gt;<br/>
                                               &nbsp; &lt;div className="accordion-item rounded"&gt;<br/>
                                               &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2 className="accordion-header"&gt;<br/>
                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;&#40;&#41;=&#62;setActiveTab&#40;item.id&#41;&#125; className="accordion-button border-0 bg-light" type="button"&gt;
                                                            How does it work ?&lt;/button&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp; &lt;/h2&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp; &lt;div id="collapseOne" className="accordion-collapse border-0 collapse show"&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="accordion-body text-muted"&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.<br/>
                                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                      &nbsp; &lt;/div&gt;<br/>
                                                
                                                      &nbsp;&lt;div className="accordion-item rounded mt-2"&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp; &lt;h2 className="accordion-header"&gt;<br/>
                                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button className="accordion-button border-0 bg-light collapsed"&gt;
                                                            Do I need a designer to use Landrick ?
                                                        &lt;/button&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/h2&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="collapseTwo" className="accordion-collapse border-0 collapse"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="accordion-body text-muted"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &lt;/div&gt;</code>
                                          </pre>
                                    </h6>

                                    <AccordionOne/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
