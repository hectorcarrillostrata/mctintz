'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiCamera} from 'react-icons/fi'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function UiLightbox() {
    let images = [
        "/images/work/11.jpg","/images/personal/6.jpg"
    ]

    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const slides = images.map((image) => ({ src: image }));

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }
  return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="row">
                <div className="col-12">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Image Lightbox </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                <pre><code className="text-danger">
                                    &lt;div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&lt;div className="card-body p-0"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" scroll=&#123;false&#125; onClick=&#123;&#40;&#41;=&#8250; handleCLick&#40;0&#41;&#125; className="lightbox d-inline-block" title=""&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="/images/work/11.jpg" className="img-fluid" alt="work-image"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Link&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="content p-3"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 className="mb-0"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="/portfolio-detail-one" className="text-dark title"&gt;Black and white T-shirt&lt;/Link&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h5&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="text-muted tag mb-0"&gt;Clothes&lt;/h6&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                    &lt;/div&gt;<br/>
                                    </code></pre>
                            </h6>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
                                        <div className="card-body p-0">
                                            <Link href="#" scroll={false} onClick={() => handleCLick(0)} className="lightbox d-inline-block" title="">
                                                <Image src="/images/work/11.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="work-image"/>
                                            </Link>
                                            <div className="content p-3">
                                                <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-dark title">Black and white T-shirt</Link></h5>
                                                <h6 className="text-muted tag mb-0">Clothes</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Image Lightbox </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                <pre><code className="text-danger">
                                &lt;div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded"&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&lt;div className="portfolio-box-img position-relative overflow-hidden"&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img className="item-container img-fluid mx-auto" src="assets/images/personal/6.jpg" alt="1" /&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="overlay-work"&gt;&lt;/div&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="content"&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 className="mb-0"&gt;&lt;a href="portfolio-detail-one.html" className="text-white title"&gt;Mockup box with paints&lt;/a&gt;&lt;/h5&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="text-white-50 tag mt-1 mb-0"&gt;Photography&lt;/h6&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="icons text-center"&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link href="#" scroll=&#123;false&#125; onClick=&#123;&#40;&#41;=&#8250; handleCLick&#40;0&#41;&#125; className="work-icon bg-white d-inline-flex rounded-pill lightbox"&gt;&lt;FiCamera className="fea icon-sm image-icon"/&gt;&lt;/Link&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                &lt;/div&gt;<br/> 
                                </code></pre>
                            </h6>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                        <div className="portfolio-box-img position-relative overflow-hidden">
                                            <Image className="item-container img-fluid mx-auto" src="/images/personal/6.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="1" />
                                            <div className="overlay-work"></div>
                                            <div className="content">
                                                <h5 className="mb-0"><Link href="/portfolio-detail-one" className="text-white title">Mockup box with paints</Link></h5>
                                                <h6 className="text-white-50 tag mt-1 mb-0">Photography</h6>
                                            </div>
                                            <div className="icons text-center">
                                                <Link href="#" scroll={false} onClick={() => handleCLick(1)} className="work-icon bg-white d-inline-flex rounded-pill lightbox"><FiCamera className="fea icon-sm image-icon"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={isOpen}
                close={() => setOpen(false)}
                slides={slides}
                index={photoIndex} 
            />
        </div>
  )
}
