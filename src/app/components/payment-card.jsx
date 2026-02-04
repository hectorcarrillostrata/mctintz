import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function PaymentCard() {
  return (
    <div className="mt-4">
        <Link href="#">
            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Maestro</Tooltip>}>
                <Image src="/images/payments/payment/maestro.jpg" width={65} height={65} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" alt=""/>
            </OverlayTrigger>
        </Link>
        <Link href="#">
            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Paypal</Tooltip>}>
                <Image src="/images/payments/payment/paypal.jpg" width={65} height={65} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" alt=""/>
            </OverlayTrigger>
        </Link>
        <Link href="#">
            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Master Card</Tooltip>}>
                <Image src="/images/payments/payment/master-card.jpg" width={65} height={65} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" alt=""/>
            </OverlayTrigger>
        </Link>
        <Link href="#">
            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Visa</Tooltip>}>
                <Image src="/images/payments/payment/visa.jpg" width={65} height={65} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" alt=""/>
            </OverlayTrigger>
        </Link>
        <Link href="#">
            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">American Express</Tooltip>}>
                <Image src="/images/payments/payment/american-express.jpg" width={65} height={65} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" alt=""/>
            </OverlayTrigger>
        </Link>
        <Link href="#">
            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Discover</Tooltip>}>
                <Image src="/images/payments/payment/discover.jpg" width={65} height={65} className="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow" alt=""/>
            </OverlayTrigger>
        </Link>
    </div>
  )
}
