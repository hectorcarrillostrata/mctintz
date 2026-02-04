'use client'
import React from 'react'
import { background, backgroundSoft } from '@/app/data/ui-data'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function BgTooltips() {
  return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="row">
                <div className="col-12">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Background Color </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;div className="bg-primary"&gt; Landrick Saas & Software Template &lt;/div&gt;</code></h6>
                            {background.map((item,index)=>{
                                return(
                                    <div className="d-inline-block me-1 mt-2" data-bs-toggle="tooltip" data-bs-placement="top" title=".bg-primary" key={index}>
                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">{item.style}</Tooltip>}>
                                            <p className={`avatar avatar-small rounded mb-0 ${item.style}`}></p>
                                        </OverlayTrigger>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Background Gradient Color </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;div className="bg-primary bg-gradient"&gt; Landrick Saas & Software Template &lt;/div&gt;</code></h6>
                            {background.map((item,index)=>{
                                return(
                                    <div className="d-inline-block me-1 mt-2" data-bs-toggle="tooltip" data-bs-placement="top" title=".bg-primary" key={index}>
                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">.{item.style} .bg-gradient</Tooltip>}>
                                            <p className={`avatar avatar-small bg-gradient rounded mb-0 ${item.style}`}></p>
                                        </OverlayTrigger>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Soft Background Color </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;div className="bg-soft-primary"&gt; Landrick Saas & Software Template &lt;/div&gt;</code></h6>
                            {backgroundSoft.map((item,index)=>{
                                return(
                                    <div className="d-inline-block me-1 mt-2" data-bs-toggle="tooltip" key={index}>
                                        <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">.{item.style}</Tooltip>}>
                                            <p className={`avatar avatar-small rounded mb-0 ${item.style}`}></p>
                                        </OverlayTrigger>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
