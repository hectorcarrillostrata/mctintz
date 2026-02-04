'use client'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function CryptoTooltip() {
  return (
        <div className="mt-4 pt-2 text-center">
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Bitcoin</Tooltip>}>
                    <Image src="/images/crypto/bitcoin.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Coinye</Tooltip>}>
                    <Image src="/images/crypto/coinye.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Ethereum</Tooltip>}>
                    <Image src="/images/crypto/ethereum.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Litecoin</Tooltip>}>
                    <Image src="/images/crypto/litecoin.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Monero</Tooltip>}>
                    <Image src="/images/crypto/monero.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Auroracoin</Tooltip>}>
                    <Image src="/images/crypto/auroracoin.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Potcoin</Tooltip>}>
                    <Image src="/images/crypto/potcoin.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
            <Link href="#">
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Zcash</Tooltip>}>
                    <Image src="/images/crypto/zcash.png" width={65} height={65} className="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" alt=""/>
                </OverlayTrigger>
            </Link>
        </div>
  )
}
