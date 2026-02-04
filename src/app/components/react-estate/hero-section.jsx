'use client'
import React,{useState, useEffect} from 'react'

export default function HeroSection() {
    const images = ['/images/real/1.jpg','/images/real/2.jpg', '/images/real/3.jpg'];

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <section className="bg-half-260 d-table w-100" id="home" style={{backgroundImage:`url(${images[currentIndex]})`}}>
        <div className="bg-overlay bg-black opacity-7"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h4 className="display-4 fw-bold text-white title-dark mb-3">Find your perfect property</h4>
                        <p className="para-desc text-white-50 mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
