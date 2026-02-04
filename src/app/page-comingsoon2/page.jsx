'use client'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import BackToHome from '../components/back-to-home'
import {FiX} from 'react-icons/fi'

export default function ComingsoonTwo() {
  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [show, setShow] = useState(false)

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
        <video autoPlay muted loop style={{position: 'absolute', right: '0', bottom: '0', minWidth: '100%',  minHeight: '100%'}}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
        </video>

          <section className="bg-home bg-animation-left dark-left d-flex align-items-center" id="home">
            <div className="container position-relative text-md-start text-center" style={{zIndex:'1'}}>
                <div className="row">
                    <div className="col-md-12">
                        <Link href="#" className="logo h5"><Image src="/images/logo-light.png" width={134} height={24} alt=""/></Link>
                        <h1 className="text-uppercase text-white title-dark mt-2 mb-4 coming-soon"><span className="text-white typewrite" data-period="2000" data-type='[ "We are Coming soon...", "We are Be Ready to", "We are Connected with us" ]'> <span className="wrap"></span> </span></h1>
                        <p className="text-white-50 para-dark para-desc">Start working with <span className="fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
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
                    <div className="col-md-12">  
                        <Link href="#" className="btn btn-primary mt-4 me-2" onClick={()=>setShow(!show)}><i className="mdi mdi-check"></i> Notify Me</Link>
                    </div>
                </div>
            </div> 
        </section>
        <BackToHome/>
        <div className={`modal fade ${show ? 'show d-block' : ''}`}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content rounded shadow border-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Subscribe Me</h5>
                        <button type="button" className="btn btn-icon btn-close" onClick={()=>setShow(!show)}><FiX className="fs-4 text-dark"/></button>
                    </div>
                    <div className="modal-body">
                        <p>We are comingsoon. Please, Enter your mail id and subscribe.</p>
                        <div className="input-group mb-3">
                            <input name="email" id="email2" type="email" className="form-control" placeholder="Your Email :" required=""/>
                            <button className="btn btn-primary submitBnt" type="submit" id="email">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
