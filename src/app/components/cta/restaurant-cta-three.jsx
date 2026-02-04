'use client'
import React from 'react'
import { Parallax } from 'react-parallax';

export default function RestaurantCtaThree() {
  return (
        <section className="section jarallax position-relative">
            <Parallax
                bgImage='/images/restaurant/bg6.jpg'
                bgImageAlt=""
                strength={400}
                style={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%',}}
            >
            </Parallax>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <div className="card shadow rounded p-lg-5 p-4 me-lg-5">
                            <div className="section-title mb-4">
                                <span className="badge rounded-pill bg-soft-primary py-2 px-3 fw-semibold">Reservation</span>
                                <h4 className="title fw-bold text-uppercase my-3">Book A Table</h4>
                                <p className="text-muted mx-auto para-desc mb-0">We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>

                            <form>
                                <div className="row gx-2">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Your Name</label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Your Email</label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Phone no.</label>
                                            <input name="number" type="number" id="phone-number" className="form-control" placeholder="Phone no. :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Person</label>
                                            <input type="number" min="0" autoComplete="off" id="adult" className="form-control" required="" placeholder="Person :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Date</label>
                                            <input name="date" type="text" className="form-control start" placeholder="(ex: mm/ dd/ yy)"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Time</label>
                                            <input name="time" type="number" id="input-time" className="form-control timepicker" placeholder="(ex: 8:00 p.m)"/>
                                        </div> 
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-sm-12">
                                        <input type="submit" id="submit" name="send" className="btn btn-primary text-uppercase w-100" value="Book a table"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
