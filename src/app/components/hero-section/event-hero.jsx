'use client'
import React,{useState, useEffect} from 'react'

import { Parallax } from 'react-parallax';

import {LuTicket} from 'react-icons/lu'
import Link from 'next/link';

export default function EventHero() {

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
        <section className="bg-half-260 w-100 d-table jarallax position-relative">
            <Parallax
            bgImage='/images/event/event.jpg'
            bgImageAlt="the dog"
            strength={300}
            style={{
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',
                backgroundPosition:'top'
            }}
        ></Parallax>
            <div className="bg-overlay bg-primary bg-gradient" style={{opacity:'0.85'}}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="title-heading">
                            <h4 className="text-success mb-3">11th October, 2021</h4>
                            <h1 className="display-4 title-dark text-white fw-bold mb-3">Digital Conference 2021-21</h1>
                            <p className="para-desc title-dark mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5.0.0 html page.</p>
                            
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div id="eventdown">
                                        <ul className="count-down list-unstyled">
                                            <li id="days" className="count-number list-inline-item px-4">{days}<p className='count-head'>Days</p></li>
                                            <li id="hours" className="count-number list-inline-item px-4">{hours}<p className='count-head'>Hours</p></li>
                                            <li id="mins" className="count-number list-inline-item px-4">{minutes}<p className='count-head'>Minutes</p></li>
                                            <li id="secs" className="count-number list-inline-item px-4">{seconds}<p className='count-head'>Seconds</p></li>
                                            <li id="end" className="h1"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Link href="#" className="btn btn-success mt-2 me-2"><LuTicket className=""/> Buy Tickets</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
