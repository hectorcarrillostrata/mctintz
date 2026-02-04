'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {FiEyeOff, FiCornerUpLeft, FiCornerUpRight, FiTrash2} from 'react-icons/fi'

export default function MessageDropdown() {
    let [show, setShow] = useState(false)
  return (
        <div className="btn-group dropdown-primary me-2 mt-2">
            <button type="button" className="btn btn-primary dropdown-toggle show" onClick={()=>setShow(!show)}>
                Action
            </button>
            <div className={`dropdown-menu ${show? 'show':''}`}>
                <Link href="#" className="dropdown-item"><FiEyeOff className="fea icon-sm"/> Mark Unread</Link>
                <Link href="#" className="dropdown-item"><FiCornerUpLeft className="fea icon-sm"/> Reply</Link>
                <Link href="#" className="dropdown-item"><FiCornerUpRight className="fea icon-sm"/> Forward</Link>
                <div className="dropdown-divider"></div>
                <Link href="#" className="dropdown-item text-danger"><FiTrash2 className="fea icon-sm"/> Delete</Link>
            </div>
        </div>
  )
}
