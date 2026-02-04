import React from 'react'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import Counter from '../components/counter'
import Footer from '../components/footer/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function PageCaseDetail() {
  return (
    <>
     <Navbar/> 
    <section className="bg-half">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                  <div className="section-title">
                      <div className="text-center">
                          <h4 className="title mb-4">Social Media & Small Business</h4>
                          <Image src="/images/blog/05.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-md shadow-md" alt=""/>
                      </div>
                      <p className="text-muted mb-0 mt-4">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>
                  
                      <h4 className="my-4">Challenges</h4>
                      <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                      <p className="text-muted mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces.</p>

                      <h4 className="my-4">Solutions</h4>
                      <p className="text-muted">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                      <p className="text-muted mb-0">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>

                      <h4 className="my-4">Results</h4>
                      <p className="text-muted">Disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized. It is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>

                      <div className="row" id="counter">
                          <div className="col-md-4 col-6 mt-4 pt-2">
                              <div className="counter-box text-center">
                                  <Image src="/images/illustrator/Asset190.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                                  <h2 className="mb-0 mt-4"><Counter end={15}/>%</h2>
                                  <h6 className="counter-head text-muted">Depritiation</h6>
                              </div>
                          </div>
      
                          <div className="col-md-4 col-6 mt-4 pt-2">
                              <div className="counter-box text-center">
                                  <Image src="/images/illustrator/Asset189.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                                  <h2 className="mb-0 mt-4"><Counter end={195}/>%</h2>
                                  <h6 className="counter-head text-muted">Profit</h6>
                              </div>
                          </div>
      
                          <div className="col-md-4 col-6 mt-4 pt-2">
                              <div className="counter-box text-center">
                                  <Image src="/images/illustrator/Asset187.svg" width={65} height={65} className="avatar avatar-small" alt=""/>
                                  <h2 className="mb-0 mt-4"><Counter end={98}/>%</h2>
                                  <h6 className="counter-head text-muted">Case Solved</h6>
                              </div>
                          </div>
                      </div>


                      <h4 className="my-4">Client Feedback</h4>
                      <div className="p-4 bg-light">
                          <p className="text-muted h6 fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                          <Image src="/images/client/01.jpg" width={65} height={65} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                          <ul className="list-unstyled mb-0 mt-3">
                              <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                              <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                              <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                              <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                              <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                          </ul>
                          <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>
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
