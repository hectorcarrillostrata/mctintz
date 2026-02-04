'use client'
import React, { useState } from 'react'

export default function QuantityTwo() {
    let [counter, setCounter] = useState(0)

    const decrement = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };
    const increment = () => {
        setCounter(counter + 1);
    };
  return (
        <td className="text-center qty-icons">
            <button onClick={()=>decrement()} className="btn btn-icon btn-soft-primary minus">-</button>
            <span className="btn btn-icon btn-soft-primary qty-btn quantity mx-1">{counter}</span>
            <button onClick={()=>increment()} className="btn btn-icon btn-soft-primary plus">+</button>
        </td>
  )
}
