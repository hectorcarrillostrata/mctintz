'use client'
import Link from 'next/link'
import React from 'react'

export default function PrintBtn() {
  return (
    <Link href="#" scroll={false} onClick={() => window.print()} className="btn btn-soft-primary d-print-none">Print</Link>
  )
}
