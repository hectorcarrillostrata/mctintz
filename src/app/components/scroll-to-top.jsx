'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'

import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false) 

    useEffect(()=>{
        
        const toggleVisible = () => { 
          const scrolled = document.documentElement.scrollTop; 
          if (scrolled > 300){ 
            setVisible(true) 
          }  
          else if (scrolled <= 300){ 
            setVisible(false) 
          } 
        }; 

        window.addEventListener('scroll', toggleVisible); 

        return()=>{
            window.removeEventListener('scroll', toggleVisible); 
        }
    })
  
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
      }); 
    }; 
    

  return (
    <Link href="#" onClick={()=>scrollToTop()} id="back-to-top" className={`back-to-top fs-5 ${visible ? 'd-block' : 'd-none '}`}><FiArrowUp className="fea icon-sm icons align-middle"></FiArrowUp></Link>
  )
}
