'use client'
import React,{useState} from 'react'

import DatePicker from "react-datepicker";

import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

export default function DateSelect() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='w-100' />
  )
}
