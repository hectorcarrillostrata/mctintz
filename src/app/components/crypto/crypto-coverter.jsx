'use client'
import React from 'react'

export default function CryptoCoverter() {
  return (
    <>
      <crypto-converter-widget shadow symbol live background-color="#161c2d" border-radius="6px" fiat="united-states-dollar" crypto="bitcoin" amount="1" font-family="sans-serif" decimal-places="2"></crypto-converter-widget>
    <script src="https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget/dist/latest.min.js" async></script>
    </>
  )
}
