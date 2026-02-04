import React from 'react'
import Link from 'next/link'

import {FiArrowRight} from 'react-icons/fi'

export default function JobDescription() {
  return (
    <>
    <h5>Job Description: </h5>
    <p className="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
    <p className="text-muted">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
    <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
    
    <h5 className="mt-4">Responsibilities and Duties: </h5>
    <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
    <ul className="list-unstyled">
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Participate in requirements analysis</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Write clean, scalable code using C# and .NET frameworks</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Test and deploy applications and systems</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Revise, update, refactor and debug code</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Improve existing software</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Develop documentation throughout the software development life cycle (SDLC)</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Serve as an expert on applications and provide technical support</li>
    </ul>

    <h5 className="mt-4">Required Experience, Skills and Qualifications: </h5>
    <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
    <ul className="list-unstyled">
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Proven experience as a .NET Developer or Application Developer</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Experience designing, developing and creating RESTful web services and APIs</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Basic know how of Agile process and practices</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Good understanding of object-oriented programming.</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Good understanding of concurrent programming.</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Sound knowledge of application architecture and design.</li>
        <li className="text-muted mb-1"><FiArrowRight className="fea icon-sm text-success me-2"/> Excellent problem solving and analytical skills</li>
    </ul>

    <div className="mt-4">
        <Link href="/job-apply" className="btn btn-outline-primary">Apply Now <i className="mdi mdi-send"></i></Link>
    </div> 
    </>
  )
}
