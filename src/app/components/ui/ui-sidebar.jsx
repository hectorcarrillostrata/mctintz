'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function UiSidebar() {
    const pathname = usePathname()
  return (
    <ul className="list-unstyled sidebar-nav mb-0">
        <li className={`navbar-item ${pathname === '/ui-button' ? 'active' : ''}`}><Link href="/ui-button" className="navbar-link">Buttons </Link></li>
        <li className={`navbar-item ${pathname === '/ui-alert' ? 'active' : ''}`}><Link href="/ui-alert" className="navbar-link">Alert </Link></li>
        <li className={`navbar-item ${pathname === '/ui-typography' ? 'active' : ''}`}><Link href="/ui-typography" className="navbar-link">Typography </Link></li>
        <li className={`navbar-item ${pathname === '/ui-dropdown' ? 'active' : ''}`}><Link href="/ui-dropdown" className="navbar-link">Dropdowns </Link></li>
        <li className={`navbar-item ${pathname === '/ui-background' ? 'active' : ''}`}><Link href="/ui-background" className="navbar-link">Background </Link></li>
        <li className={`navbar-item ${pathname === '/ui-text' ? 'active' : ''}`}><Link href="/ui-text" className="navbar-link">Text Color </Link></li>
        <li className={`navbar-item ${pathname === '/ui-badges' ? 'active' : ''}`}><Link href="/ui-badges" className="navbar-link">Badges </Link></li>
        <li className={`navbar-item ${pathname === '/ui-accordion' ? 'active' : ''}`}><Link href="/ui-accordion" className="navbar-link">Accordions </Link></li>
        <li className={`navbar-item ${pathname === '/ui-card' ? 'active' : ''}`}><Link href="/ui-card" className="navbar-link">Cards </Link></li>
        <li className={`navbar-item ${pathname === '/ui-shadow' ? 'active' : ''}`}><Link href="/ui-shadow" className="navbar-link">Shadows </Link></li>
        <li className={`navbar-item ${pathname === '/ui-border' ? 'active' : ''}`}><Link href="/ui-border" className="navbar-link">Borders </Link></li>
        <li className={`navbar-item ${pathname === '/ui-carousel' ? 'active' : ''}`}><Link href="/ui-carousel" className="navbar-link">Carousel </Link></li>
        <li className={`navbar-item ${pathname === '/ui-form' ? 'active' : ''}`}><Link href="/ui-form" className="navbar-link">Form Elements </Link></li>
        <li className={`navbar-item ${pathname === '/ui-breadcrumb' ? 'active' : ''}`}><Link href="/ui-breadcrumb" className="navbar-link">Breadcrumb </Link></li>
        <li className={`navbar-item ${pathname === '/ui-pagination' ? 'active' : ''}`}><Link href="/ui-pagination" className="navbar-link">Pagination </Link></li>
        <li className={`navbar-item ${pathname === '/ui-avatar' ? 'active' : ''}`}><Link href="/ui-avatar" className="navbar-link">Avatars </Link></li>
        <li className={`navbar-item ${pathname === '/ui-nav-tabs' ? 'active' : ''}`}><Link href="/ui-nav-tabs" className="navbar-link">Nav Tabs </Link></li>
        <li className={`navbar-item ${pathname === '/ui-modals' ? 'active' : ''}`}><Link href="/ui-modals" className="navbar-link">Modals </Link></li>
        <li className={`navbar-item ${pathname === '/ui-tables' ? 'active' : ''}`}><Link href="/ui-tables" className="navbar-link">Tables </Link></li>
        <li className={`navbar-item ${pathname === '/ui-icons' ? 'active' : ''}`}><Link href="/ui-icons" className="navbar-link">Icons </Link></li>
        <li className={`navbar-item ${pathname === '/ui-progressbar' ? 'active' : ''}`}><Link href="/ui-progressbar" className="navbar-link">Progressbar </Link></li>
        <li className={`navbar-item ${pathname === '/ui-lightbox' ? 'active' : ''}`}><Link href="/ui-lightbox" className="navbar-link">Lightbox </Link></li>
        <li className={`navbar-item ${pathname === '/ui-tooltip-popover' ? 'active' : ''}`}><Link href="/ui-tooltip-popover" className="navbar-link">Tooltips & Popovers </Link></li>
    </ul>
  )
}
