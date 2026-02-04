'use client'
import React from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import {FiMessageCircle, FiBell, FiSettings} from 'react-icons/fi'
import { LuUserPlus } from 'react-icons/lu';

export default function AccountTooltip() {
  return (
        <ul className="list-unstyled social-icon social mb-0 mt-4">
            <li className="list-inline-item" style={{margin:'0 2px'}}>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Add Friend</Tooltip>}>
                    <Link href="#" className="rounded"><LuUserPlus className="align-middle"/></Link>
                </OverlayTrigger>
            </li>

            <li className="list-inline-item" style={{margin:'0 2px'}}>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Messages</Tooltip>}>
                    <Link href="#" className="rounded"><FiMessageCircle className="align-middle"/></Link>
                </OverlayTrigger>
            </li>

            <li className="list-inline-item" style={{margin:'0 2px'}}>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Notifications</Tooltip>}>
                    <Link href="#" className="rounded"><FiBell className="align-middle"/></Link>
                </OverlayTrigger>
            </li>

            <li className="list-inline-item" style={{margin:'0 2px'}}>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Settings</Tooltip>}>
                    <Link href="/account-setting" className="rounded"><FiSettings className="align-middle"/></Link>
                </OverlayTrigger>
            </li>
        </ul>
  )
}
