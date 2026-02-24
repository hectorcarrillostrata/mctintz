'use client'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Commingsoon() {

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 10);
    const deadlineString = deadline.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

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

    useEffect(() => {
      document.title = "mctintz.com - Coming Soon";
    }, [])

  return (
    <>
      <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/mctintz_comingsoon2.jpg')"}}>
        <div className="bg-overlay"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                                        <div className="text-uppercase title-dark text-white mt-2 mb-4 coming-soon">mctintz.com is coming soon...</div>
                    <p className="text-white-50 para-desc mx-auto">The site will be built in <span className="text-primary fw-bold">10 days</span>. We're working hard to bring you an amazing experience.</p>
                    <p className="text-white-50 para-desc mx-auto mt-3">Ready to book your appointment? <a href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="text-primary fw-bold">Reserve your booking here</a></p>
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
          </>
  )
}
