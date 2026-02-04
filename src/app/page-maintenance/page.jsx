'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import BackToHome from '../components/back-to-home';

export default function Maintanance() {
  const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);
        var seconds = 3599;
        function calculateTimeRemaining() {
            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;
            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);
            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }
        return () => {
            clearInterval(intervalId);
        };
    }, []);

  return (
    <>
      <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/maintenance.jpg')"}}>
        <div className="bg-overlay"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                    <Link href="#" className="logo h5"><Image src="/images/logo-light.png" width={134} height={24} alt=""/></Link>
                    <div className="text-uppercase text-white title-dark mt-2 mb-4 maintenance">System Is Under Maintenance</div>
                    <p className="text-white-50 para-desc mx-auto para-dark">Perfect and awesome template to present your future product or service. Hooking audience attention is all in the opener.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="text-center">
                        <span id="maintenance" className="timer">{minutes}:{remainingSeconds}</span><span className="d-block h6 text-uppercase text-white">Minutes</span>
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
