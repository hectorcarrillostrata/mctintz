import React from 'react'

import {FiArrowRight} from 'react-icons/fi'

export default function Schedule({title}) {
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">{title}</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>
    </div>

    <div className="row justify-content-center mt-4 pt-2">
        <div className="col-lg-7 col-md-10">
            <div className="subcribe-form">
                <form className="ms-0">
                    <input type="email" id="subemail" name="email" className="rounded-pill border" placeholder="E-mail :"/>
                    <button type="submit" className="btn btn-pills btn-primary d-inline-flex align-items-center">Submit <FiArrowRight className="ms-1"/></button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
