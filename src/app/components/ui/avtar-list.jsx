'use client'
import Image from 'next/image';
import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function AvtarList() {
  return (
    <div className="col-lg-9 col-md-8 col-12">
        <div className="row">
            <div className="col-12">
                <div className="component-wrapper rounded shadow">
                    <div className="p-4 border-bottom">
                        <h5 className="title mb-0"> Default Avatars </h5>
                    </div>

                    <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Image src="/images/home/01.jpg" className="avatar avatar-ex-sm rounded"/&gt;</code></h6>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-ex-sm</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={25} height={25} className="avatar avatar-ex-sm me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-ex-small</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={36} height={36} className="avatar avatar-ex-small me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-md-sm</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={45} height={45} className="avatar avatar-md-sm me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-small</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={65} height={65} className="avatar avatar-small me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-md-md</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={80} height={80} className="avatar avatar-md-md me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-medium</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={110} height={110} className="avatar avatar-medium me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-large</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={140} height={140} className="avatar avatar-large me-2 rounded" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-ex-large</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={180} height={180} className="avatar avatar-ex-large me-2 rounded" alt=""/>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>

            <div className="col-12 mt-4 pt-2">
                <div className="component-wrapper rounded shadow">
                    <div className="p-4 border-bottom">
                        <h5 className="title mb-0"> Circle Avatars </h5>
                    </div>

                    <div className="p-4">
                        <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Image src="/images/home/01.jpg" className="avatar avatar-ex-sm rounded-circle"/&gt;</code></h6>
                        
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-ex-sm</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={25} height={25} className="avatar avatar-ex-sm me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-ex-small</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={36} height={36} className="avatar avatar-ex-small me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-md-sm</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={45} height={45} className="avatar avatar-md-sm me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-small</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={65} height={65} className="avatar avatar-small me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-md-md</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={80} height={80} className="avatar avatar-md-md me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-medium</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={110} height={110} className="avatar avatar-medium me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-large</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={140} height={140} className="avatar avatar-large me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">avatar-ex-large</Tooltip>}>
                            <Image src="/images/client/05.jpg" width={180} height={180} className="avatar avatar-ex-large me-2 rounded-circle" alt=""/>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
