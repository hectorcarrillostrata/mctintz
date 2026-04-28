import React from 'react'
import Link from 'next/link'
import {FiMail, FiPhone, FiMapPin} from 'react-icons/fi'

export default function MctintzFooter() {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="text-center">
              <h5 className="text-light mb-4">MC Tintz</h5>
              <p className="text-muted mb-2">6810 Forest Hills Rd<br/>Loves Park, Illinois 61111</p>
              <p className="text-muted mb-2">(815) 540-0297<br/>workhard851@yahoo.com</p>
              <Link href="https://maps.google.com/?q=6810+Forest+Hills+Rd+Loves+Park+IL+61111" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Get Directions</Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="text-center">
              <h5 className="text-light mb-4">Business Hours</h5>
              <div className="text-muted text-start d-inline-block">
                <div className="d-flex justify-content-between mb-1">
                  <span><strong>Monday:</strong></span>
                  <span>7:00 am - 3:00 pm</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span><strong>Tuesday - Saturday:</strong></span>
                  <span>7:00 am - 5:00 pm</span>
                </div>
                <div className="d-flex justify-content-between mb-0">
                  <span><strong>Sunday:</strong></span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="text-center">
              <h5 className="text-light mb-4">Quick Links</h5>
              <ul className="list-unstyled footer-list mb-0">
                <li><Link href="/index-mctintz" className="text-muted">Home</Link></li>
                <li><Link href="/index-mctintz#about" className="text-muted">About Us</Link></li>
                <li><Link href="/index-mctintz#services" className="text-muted">Our Services</Link></li>
                <li><Link href="/index-mctintz#service-menu" className="text-muted">Service Menu</Link></li>
                <li><Link href="https://book.squareup.com/appointments/i4j6yc545z3evy/location/LY0JZVKP79TXE/services" target="_blank" rel="noopener noreferrer" className="text-muted">Book Appointment</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4">
          <div className="col-12">
            <div className="text-center">
              <p className="text-muted mb-0">MC Tintz - Premium Automotive Customization</p>
              <p className="text-muted mb-3">Proudly serving the 815 — because at MC Tintz, Tintin Ain't Easy.</p>
              
              <ul className="list-unstyled social-icon mb-0 mt-4">
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Link></li>
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link></li>
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </Link></li>
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Link></li>
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </Link></li>
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </Link></li>
                <li className="list-inline-item"><Link href="https://mctintz.square.site/" target="_blank" rel="noopener noreferrer" className="rounded text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-2">
          <div className="col-12">
            <div className="text-center">
              <p className="text-muted mb-0">© {new Date().getFullYear()} MC Tintz. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
