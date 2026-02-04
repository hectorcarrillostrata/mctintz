'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiCog,  BiLogOutCircle,} from 'react-icons/bi'
import { TbMailStar } from 'react-icons/tb'
import { MdOutlinePayments } from 'react-icons/md'
import { FiUserPlus, FiUsers, FiFile, FiMessageCircle, FiFacebook, FiTwitter,FiInstagram,FiLinkedin,FiGithub,FiYoutube,FiGitlab } from 'react-icons/fi'
import { GrDashboard } from 'react-icons/gr'

export default function AccountingTab() {
    const pathname = usePathname()
  return (
        <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
            <div className="sidebar sticky-bar p-4 rounded shadow">
                <div className="widget">
                    <h5 className="widget-title">Followers :</h5>
                    <div className="row mt-4">
                        <div className="col-6 text-center">
                            <FiUserPlus className="fea icon-ex-md text-primary mb-2"/>
                            <h5 className="mb-0">2588</h5>
                            <p className="text-muted mb-0">Followers</p>
                        </div>

                        <div className="col-6 text-center">
                            <FiUsers className="fea icon-ex-md text-primary mb-2"/>
                            <h5 className="mb-0">454</h5>
                            <p className="text-muted mb-0">Following</p>
                        </div>
                    </div>
                </div>

                <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Projects :</h5>
                    <div className="progress-box mt-4">
                        <h6 className="title text-muted">Progress</h6>
                        <div className="progress">
                            <div className="progress-bar position-relative bg-primary" style={{width:'50%'}}>
                                <div className="progress-value d-block text-muted h6">24 / 48</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="widget mt-4">
                    <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                        <li className={`navbar-item account-menu px-0 ${pathname === '/account-profile' ? 'active' : ''}`}>
                            <Link href="/account-profile" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><GrDashboard className='h5'/></span>
                                <h6 className="mb-0 ms-2">Profile</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-members' ? 'active' : ''}`}>
                            <Link href="/account-members" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><FiUsers className='h5'/></span>
                                <h6 className="mb-0 ms-2">Members</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-works' ? 'active' : ''}`}>
                            <Link href="/account-works" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><FiFile className='h5'/></span>
                                <h6 className="mb-0 ms-2">Portfolio</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-chat' ? 'active' : ''}`}>
                            <Link href="/account-chat" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><FiMessageCircle className="h5 mb-0"/></span>
                                <h6 className="mb-0 ms-2 mt-1">Chat</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-messages' ? 'active' : ''}`}>
                            <Link href="/account-messages" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><TbMailStar className="h-5"/></span>
                                <h6 className="mb-0 ms-2 mt-1">Messages</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-payments' ? 'active' : ''}`}>
                            <Link href="/account-payments" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><MdOutlinePayments className="h-5"/></span>
                                <h6 className="mb-0 ms-2 mt-1">Payments</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-setting' ? 'active' : ''}`}>
                            <Link href="/account-setting" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><BiCog  className="h5 mb-0"/></span>
                                <h6 className="mb-0 ms-2 mt-1">Settings</h6>
                            </Link>
                        </li>
                        
                        <li className={`navbar-item account-menu px-0 mt-2 ${pathname === '/account-members' ? '' : ''}`}>
                            <Link href="/auth-login-three" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                                <span className="h4 mb-0"><BiLogOutCircle className="h5 mb-0"/></span>
                                <h6 className="mb-0 ms-2 mt-1">Logout</h6>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Follow me :</h5>
                    <ul className="list-unstyled social-icon social mb-0 mt-4">
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiGithub className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiYoutube className="fea icon-sm fea-social"/></Link></li>
                        <li className="list-inline-item" style={{margin:'0 2px'}}><Link href="#" className="rounded"><FiGitlab className="fea icon-sm fea-social"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
