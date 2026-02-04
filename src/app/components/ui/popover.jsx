'use client'
import React from 'react'
import Link from 'next/link'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Popover() {
  return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="row">
                <div className="col">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h4 className="title mb-0"> Tooltips </h4>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex. <br/> 
                                <pre><code className="text-danger">
                                &lt;OverlayTrigger placement="top" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Top Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Top&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                &lt;OverlayTrigger placement="left" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Left Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Left&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                &lt;OverlayTrigger placement="bottom" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Bottom Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Bottom&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                &lt;OverlayTrigger placement="right" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Right Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Right&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                    </code></pre>
                            </h6>
                            <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Top Tooltip</Tooltip>}>
                                <Link href="#" className="btn btn-primary me-2 mt-2">Top</Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="left" overlay={<Tooltip id="button-tooltip-2">Left Tooltip</Tooltip>}>
                                <Link href="#" className="btn btn-primary me-2 mt-2">Left</Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Bottom Tooltip</Tooltip>}>
                                <Link href="#" className="btn btn-primary me-2 mt-2">Bottom</Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Right Tooltip</Tooltip>}>
                                <Link href="#" className="btn btn-primary me-2 mt-2">Right</Link>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h4 className="title mb-0"> Popovers </h4>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex. <br/> 
                                <pre><code className="text-danger">
                                &lt;OverlayTrigger trigger="click" placement="top" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Top Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Top&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                &lt;OverlayTrigger trigger="click" placement="left" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Left Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Left&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                &lt;OverlayTrigger trigger="click" placement="bottom" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Bottom Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Bottom&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                &lt;OverlayTrigger trigger="click" placement="right" overlay=&#123;&lt;Tooltip id="button-tooltip-2"&gt;Right Tooltip&lt;/Tooltip&gt;&#125;&gt;<br/>
                                    &nbsp;&nbsp;&lt;Link href="#" className="btn btn-primary me-2 mt-2"&gt;Right&lt;/Link&gt; <br/>
                                &lt;/OverlayTrigger&gt;<br/><br/>
                                    </code></pre>
                            </h6>
                            <OverlayTrigger trigger="click" placement="top" overlay={<Tooltip id="button-tooltip-2">Top Tooltip</Tooltip>}>
                                <Link href="#" scroll={false} className="btn btn-primary me-2 mt-2">Top</Link>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="left" overlay={<Tooltip id="button-tooltip-2">Left Tooltip</Tooltip>}>
                                <Link href="#" scroll={false} className="btn btn-primary me-2 mt-2">Left</Link>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={<Tooltip id="button-tooltip-2">Bottom Tooltip</Tooltip>}>
                                <Link href="#" scroll={false} className="btn btn-primary me-2 mt-2">Bottom</Link>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="right" overlay={<Tooltip id="button-tooltip-2">Right Tooltip</Tooltip>}>
                                <Link href="#" scroll={false} className="btn btn-primary me-2 mt-2">Right</Link>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
