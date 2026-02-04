'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { MdOutlineSettings } from 'react-icons/md'
import { LiaEllipsisVSolid } from 'react-icons/lia'
import { LuUser } from 'react-icons/lu'
import { FiTrash2 } from 'react-icons/fi'

export default function ChatDropdown() {
    let [ show, setShow ] = useState(false)
  return (
        <ul className="list-unstyled mb-0">
            <li className="dropdown dropdown-primary list-inline-item">
                <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={()=>setShow(!show)}><LiaEllipsisVSolid /></button>
                <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${show ? 'show' : ''}`}>
                    <Link className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><LuUser className="align-middle h6"/></span> Profile</Link>
                    <Link className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><MdOutlineSettings className="align-middle h6"/></span> Profile Settings</Link>
                    <Link className="dropdown-item text-dark" href="#"><span className="mb-0 d-inline-block me-1"><FiTrash2 className="align-middle h6"/></span> Delete</Link>
                </div>
            </li>
        </ul>
  )
}
