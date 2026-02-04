'use client'
import React from 'react'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Scrollbar({children,height}) {
  return (
    <SimpleBar style={{ maxHeight: height }}>
        {children}
    </SimpleBar>
  )
}
