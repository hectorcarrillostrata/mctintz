'use client'
import { useState } from 'react';
import Link from 'next/link'

import Modal from 'react-bootstrap/Modal';

export default function MapModal() {
    const [show, setShow] = useState(false);
  return (
    <>
    <Link href="" scroll={false} onClick={()=>setShow(!show)} className="lightbox text-primary">View on Google map</Link>

    <Modal show={show} onHide={()=>setShow(!show)} animation={false} size='lg'>
        <Modal.Body className='p-0'>
            <iframe width="100%" height="576px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin">
            </iframe>
        </Modal.Body>
    </Modal>
    </>
  )
}
