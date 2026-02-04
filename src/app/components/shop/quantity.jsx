'use client'
import React, { useState } from 'react'

export default function Quantity() {
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
        <div className="qty-icons">
            <button className="btn btn-icon btn-soft-primary minus" onClick={()=>decrement()}>-</button>
            <span className="btn btn-icon btn-soft-primary qty-btn quantity mx-1">{counter}</span>
            <button className="btn btn-icon btn-soft-primary plus" onClick={()=>increment()}>+</button>
        </div>
  )
}
