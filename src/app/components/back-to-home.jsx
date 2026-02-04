import Link from 'next/link'
import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'

export default function BackToHome() {
  return (
        <div className="back-to-home">
            <Link href="/" className="back-button btn btn-icon btn-primary"><FiArrowLeft className="icons"/></Link>
        </div>
  )
}
