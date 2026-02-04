import React from 'react'

import {FiUserCheck, FiMapPin, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiClock} from 'react-icons/fi'
export default function JobInformationTwo() {
  return (
    <>
    <div className="sidebar border-0">
        <h5 className="mb-0">Job Information</h5>

        <ul className="list-unstyled mb-0 mt-4">                                
            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiUserCheck className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Employee Type:</h6>
                        <small className="text-primary mb-0">Full Time</small>
                    </div>
                </div>
            </li>

            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiMapPin className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Location:</h6>
                        <small className="text-primary mb-0">Beijing, China</small>
                    </div>
                </div>
            </li>

            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiClock className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Date posted:</h6>
                        <small className="text-primary mb-0 mb-0">5th Sep, 2021</small>
                    </div>
                </div>
            </li>

            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiMonitor className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Job Type:</h6>
                        <small className="text-primary mb-0">Back-end Developer</small>
                    </div>
                </div>
            </li>

            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiBriefcase className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Experience:</h6>
                        <small className="text-primary mb-0">+2 Year</small>
                    </div>
                </div>
            </li>

            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiBook className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Qualifications:</h6>
                        <small className="text-primary mb-0">MSCIT</small>
                    </div>
                </div>
            </li>

            <li className="list-inline-item px-3 py-2 shadow rounded text-start">
                <div className="d-flex widget align-items-center">
                    <FiDollarSign className="fea icon-ex-md me-3"/>
                    <div className="flex-1">
                        <h6 className="widget-title mb-0">Salary:</h6>
                        <small className="text-primary mb-0">+50k to 70k</small>
                    </div>
                </div>
            </li>
        </ul>
    </div> 
    </>
  )
}
