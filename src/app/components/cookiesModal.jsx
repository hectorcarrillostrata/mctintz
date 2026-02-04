'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { FiX } from 'react-icons/fi'

export default function CookiesModal() {
    let [show, setShow] = useState(true)

    return (
        <div className={`card cookie-popup shadow rounded py-3 px-4 ${show ? '' : 'cookie-popup-accepted'}`}>
            <p className="text-muted mb-0">This website uses cookies to provide you with a great user experience. By using it, you accept our <Link href="https://shreethemes.in" target="_blank" className="text-success h6">use of cookies</Link></p>
            <div className="cookie-popup-actions text-end">
                <button><FiX className="text-dark fs-4" onClick={()=>setShow(false)}/></button>
            </div>
        </div>
    )
}
