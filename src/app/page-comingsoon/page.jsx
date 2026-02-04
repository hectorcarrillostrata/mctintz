'use client'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackToHome from '../components/back-to-home'

export default function Commingsoon() {

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    let deadline = "December, 31, 2026";

    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
    })

  return (
    <>
      <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/comingsoon.jpg')"}}>
        <div className="bg-overlay"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                    <Link href="#" className="logo h5"><Image src="/images/logo-light.png" width={134} height={28} alt=""/></Link>
                    <div className="text-uppercase title-dark text-white mt-2 mb-4 coming-soon">We're Coming soon...</div>
                    <p className="text-white-50 para-desc mx-auto">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <div id="countdown">
                        <ul className="count-down list-unstyled">
                            <li id="days" className="count-number list-inline-item m-2">{days}<p className='count-head'>Days</p></li>
                            <li id="hours" className="count-number list-inline-item m-2">{hours}<p className='count-head'>Hours</p></li>
                            <li id="mins" className="count-number list-inline-item m-2">{minutes}<p className='count-head'>Mins</p></li>
                            <li id="secs" className="count-number list-inline-item m-2">{seconds}<p className='count-head'>Secs</p></li>
                            <li id="end" className="h1"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">  
                    <Link href="/" className="btn btn-primary mt-4"><i className="mdi mdi-backup-restore"></i> Go Back Home</Link>
                </div>
            </div>
        </div> 
      </section>
      <BackToHome/>
    </>
  )
}
