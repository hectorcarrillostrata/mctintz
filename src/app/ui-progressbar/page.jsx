import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import UiSidebar from '../components/ui/ui-sidebar'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Progressbar() {
  return (
    <>
     <Navbar/> 

    <section className="bg-half-170 bg-light d-table w-100">
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="pages-heading">
                      <h4 className="title mb-0"> Progressbar </h4>
                  </div>
              </div>  
          </div>
          
          <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                  <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                      <li className="breadcrumb-item"><Link href="/">Landrick</Link></li>
                      <li className="breadcrumb-item"><Link href="#">Components</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Progressbar</li>
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
                                  <h5 className="title mb-0"> Progressbar </h5>
                              </div>
  
                              <div className="p-4">
                                  <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                      <pre><code className="text-danger"><br/> 
                                          &lt;div className="progress-box"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;WordPress&lt;/h6&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;div className="progress"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-bar position-relative bg-primary" style=&#123;&#123;width:"84%"&#125;&#125;&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-value d-block text-muted h6"&gt;84%&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                          &lt;/div&gt;&lt;!--end process box--&gt;<br/> 
                                          &lt;div className="progress-box mt-4"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;PHP / MYSQL&lt;/h6&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;div className="progress"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-bar position-relative bg-primary" style=&#123;&#123;width:"75%"&#125;&#125;&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-value d-block text-muted h6"&gt;75%&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp; &lt;/div&gt;<br/> 
                                          &lt;/div&gt;&lt;!--end process box--&gt;<br/> 
                                          &lt;div className="progress-box mt-4"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;Angular / JavaScript&lt;/h6&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;div className="progress"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-bar position-relative bg-primary" style=&#123;&#123;width:"79%"&#125;&#125;&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-value d-block text-muted h6"&gt;79%&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                          &lt;/div&gt;&lt;!--end process box--&gt;<br/> 
                                          &lt;div className="progress-box mt-4"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;h6 className="title text-muted"&gt;HTML&lt;/h6&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&lt;div className="progress"&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-bar position-relative bg-primary" style=&#123;&#123;width:"95%"&#125;&#125;&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="progress-value d-block text-muted h6"&gt;95%&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                          &nbsp;&nbsp;&nbsp; &lt;/div&gt;<br/> 
                                          &lt;/div&gt;&lt;!--end process box--&gt;<br/> 
                                          </code></pre>
                                  </h6>
                                  
                                  <div className="progress-box">
                                      <h6 className="title text-muted">WordPress</h6>
                                      <div className="progress">
                                          <div className="progress-bar position-relative bg-primary" style={{width:"84%"}}>
                                              <div className="progress-value d-block text-muted h6">84%</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="progress-box mt-4">
                                      <h6 className="title text-muted">PHP / MYSQL</h6>
                                      <div className="progress">
                                          <div className="progress-bar position-relative bg-primary" style={{width:"75%"}}>
                                              <div className="progress-value d-block text-muted h6">75%</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="progress-box mt-4">
                                      <h6 className="title text-muted">Angular / JavaScript</h6>
                                      <div className="progress">
                                          <div className="progress-bar position-relative bg-primary" style={{width:"79%"}}>
                                              <div className="progress-value d-block text-muted h6">79%</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="progress-box mt-4">
                                      <h6 className="title text-muted">HTML</h6>
                                      <div className="progress">
                                          <div className="progress-bar position-relative bg-primary" style={{width:"95%"}}>
                                              <div className="progress-value d-block text-muted h6">95%</div>
                                          </div>
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
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
