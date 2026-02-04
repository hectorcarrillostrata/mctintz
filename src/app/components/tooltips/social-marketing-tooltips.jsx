'use client'
import React from 'react'
import Link from 'next/link'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiGitlab, FiYoutube } from 'react-icons/fi'
import { TbBrandSkype } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { PiTelegramLogoDuotone } from 'react-icons/pi'

export default function SocialMarketingTooltips() {
  return (
          <ul className="text-center mb-0 p-0">

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Facebook</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-primary"><FiFacebook className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Instagram</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-danger" data-bs-placement="top"><FiInstagram className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Linkedin</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-secondary" data-bs-placement="top"><FiLinkedin className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Twitter</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-info" data-bs-placement="top"><FiTwitter className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Gitlab</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-warning" data-bs-placement="top"><FiGitlab className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Youtube</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-danger" data-bs-placement="top"><FiYoutube className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Whatsapp</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-success" data-bs-placement="top"><FaWhatsapp className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Telegram</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-info" data-bs-placement="top"><PiTelegramLogoDuotone className="icons"/></Link></li>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Skype</Tooltip>}>
              <li className="list-inline-item mx-2 mt-3"><Link href="" className="btn btn-icon btn-pills btn-lg btn-primary" data-bs-placement="top"><TbBrandSkype className="icons"/></Link></li>
            </OverlayTrigger> 
          </ul>
  )
}
