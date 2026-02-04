'use client'
import React from 'react'
import CountUp from 'react-countup'

export default function ClenerCta() {
  return (
        <section className="section" style={{backgroundImage:`url(${'/images/cleaner/bg.jpg'})`, backgroundAttachment:'fixed', backgroundPosition:'center'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-3">
                        <div className="counter-box text-center">
                            <h1 className="mb-0 text-white fw-bold"><CountUp className="counter-value" end={1548}/>+</h1>
                            <h5 className="counter-head text-white">Satisfied Client</h5>
                        </div>
                    </div>

                    <div className="col-md-4 py-3">
                        <div className="counter-box text-center">
                            <h1 className="mb-0 text-white fw-bold"><CountUp className="counter-value" end={25}/>1+</h1>
                            <h5 className="counter-head text-white">Expert Team</h5>
                        </div>
                    </div>

                    <div className="col-md-4 py-3">
                        <div className="counter-box text-center">
                            <h1 className="mb-0 text-white fw-bold"><CountUp className="counter-value" end={9}/>+</h1>
                            <h5 className="counter-head text-white">Years Experience</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
