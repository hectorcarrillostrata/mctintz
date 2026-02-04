import React from 'react'

import {FiUserCheck, FiMapPin, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiClock} from 'react-icons/fi'

export default function JobInformationOne({col}) {
  return (
        <div className={col}>
            <div className="card sidebar sticky-bar rounded shadow border-0">
                <div className="card-body widget border-bottom">
                    <h5 className="mb-0">Job Information</h5>
                </div>

                <div className="card-body">
                    <div className="d-flex widget align-items-center">
                        <FiUserCheck className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Employee Type:</h6>
                            <small className="text-primary mb-0">Full Time</small>
                        </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                        <FiMapPin className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Location:</h6>
                            <small className="text-primary mb-0">Beijing, China</small>
                        </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                        <FiMonitor className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Job Type:</h6>
                            <small className="text-primary mb-0">Back-end Developer</small>
                        </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                        <FiBriefcase className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Experience:</h6>
                            <small className="text-primary mb-0">+2 Year</small>
                        </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                        <FiBook className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Qualifications:</h6>
                            <small className="text-primary mb-0">MSCIT</small>
                        </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                        <FiDollarSign className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Salary:</h6>
                            <small className="text-primary mb-0">+50k to 70k</small>
                        </div>
                    </div>

                    <div className="d-flex widget align-items-center mt-3">
                        <FiClock className="fea icon-ex-md me-3"/>
                        <div className="flex-1">
                            <h6 className="widget-title mb-0">Date posted:</h6>
                            <small className="text-primary mb-0 mb-0">5th Sep, 2021</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}
