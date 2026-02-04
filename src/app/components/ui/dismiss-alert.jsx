'use client'
import React, { useState } from 'react'

export default function DismissAlert() {
    let [show, setShow] = useState(true)
    let [show2, setShow2] = useState(true)
    let [show3, setShow3] = useState(true)
    let [show4, setShow4] = useState(true)
  return (
    <>
        {show && 
            <div className={`alert alert-success alert-dismissible fade show`} role="alert">
                <strong>Well done!</strong> You successfully read this important alert message.
                <button type="button" className="btn-close" onClick={()=>setShow(false)}></button>
            </div>
        }
        
        {show2 && 
            <div className="alert alert-info alert-dismissible fade show" role="alert">
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                <button type="button" className="btn-close" onClick={()=>setShow2(false)}></button>
            </div>
        }
        {show3 && 
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" onClick={()=>setShow3(false)}></button>
            </div>
        }

        {show4 && 
            <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert">
                <strong>Oh snap! </strong> Change a few things up and try submitting again.
                <button type="button" className="btn-close" onClick={()=>setShow4(false)}></button>
            </div> 
        }
    </>
  )
}
