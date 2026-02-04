'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Tabs() {
    let [activeTab, setActiveTab] = useState(1)
    let [activeTab2, setActiveTab2] = useState(1)
  return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="row">
                <div className="col-12">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Nav Tabs #1 </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex.<br/> 
                                <pre><code className="text-danger">
                                    &lt;div className="row"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&lt;div className="col-lg-12"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="nav-item"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link className=&#123;`nav-link rounded $&#123;activeTab === 1 ? 'active' : ''&#125;`&#125; href="#" scroll=&#123;false&#125; onClick=&#123;()=&#8250;setActiveTab(1)&#125;&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="text-center py-2"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="mb-0"&gt;Home&lt;/h6&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;&lt;!--end nav link--&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;&lt;!--end nav item--&gt;<br/><br/> 
                                                
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="nav-item"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link className=&#123;`nav-link rounded $&#123;activeTab === 2 ? 'active' : ''&#125;`&#125; href="#" scroll=&#123;false&#125; onClick=&#123;()=&#8250;setActiveTab(2)&#125;&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="text-center py-2"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="mb-0"&gt;About&lt;/h6&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;&lt;!--end nav link--&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;&lt;!--end nav item--&gt;<br/> 
                                                
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="nav-item"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link className=&#123;`nav-link rounded $&#123;activeTab === 3 ? 'active' : ''&#125;`&#125; href="#" scroll=&#123;false&#125; onClick=&#123;()=&#8250;setActiveTab(3)&#125;&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="text-center py-2"&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="mb-0"&gt;Service&lt;/h6&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;&lt;!--end nav link--&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;&lt;!--end nav item--&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;&lt;!--end nav pills--&gt;<br/> 
                                        &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/> 
                                    &lt;/div&gt;&lt;!--end row--&gt;<br/><br/> 

                                    &lt;div className="row pt-3"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&lt;div className="col-12"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="tab-content"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&#123;`tab-pane fade $&#123;activeTab === 1 ? 'show active' : ''&#125;`&#125;&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end teb pane--&gt;<br/><br/> 
                                                
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&#123;`tab-pane fade $&#123;activeTab === 2 ? 'show active' : ''&#125;`&#125;&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br/>                       
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end teb pane--&gt;<br/><br/> 

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&#123;`tab-pane fade $&#123;activeTab === 3 ? 'show active' : ''&#125;`&#125;&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br/>                        
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end teb pane--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end tab content--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/> 
                                    &lt;/div&gt;&lt;!--end row--&gt;<br/><br/> 
                                    </code></pre>
                            </h6>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-light">
                                        <li className="nav-item">
                                            <Link className={`nav-link rounded ${activeTab === 1 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(1)}>
                                                <div className="text-center py-2">
                                                    <h6 className="mb-0">Home</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`nav-link rounded ${activeTab === 2 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(2)}>
                                                <div className="text-center py-2">
                                                    <h6 className="mb-0">About</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`nav-link rounded ${activeTab === 3 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab(3)}>
                                                <div className="text-center py-2">
                                                    <h6 className="mb-0">Service</h6>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row pt-3">
                                <div className="col-12">
                                    <div className="tab-content">
                                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                        </div>
                                        
                                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>                       
                                        </div>
            
                                        <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4 pt-2">
                    <div className="component-wrapper rounded shadow">
                        <div className="p-4 border-bottom">
                            <h5 className="title mb-0"> Nav Tabs #2 </h5>
                        </div>

                        <div className="p-4">
                            <h6 className="text-muted mb-2 pb-2">Ex.<br/> 
                                <pre><code className="text-danger">
                                    &lt;div className="row"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&lt;div className="col-md-4 mt-4 pt-2"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist"&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="nav-item"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link className=&#123;`nav-link rounded $&#123;activeTab2 === 1 ? 'active' : ''&#125;`&#125; href="#" scroll=&#123;false&#125; onClick=&#123;()=&#8250;setActiveTab2(1)&#125;&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="text-center py-1"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="mb-0"&gt;Home&lt;/h6&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Link&gt;&lt;!--end nav link--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;&lt;!--end nav item--&gt;<br/><br/> 
                                                
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="nav-item mt-2"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link className=&#123;`nav-link rounded $&#123;activeTab2 === 2 ? 'active' : ''&#125;`&#125; href="#" scroll=&#123;false&#125; onClick=&#123;()=&#8250;setActiveTab2(2)&#125;&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="text-center py-1"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="mb-0"&gt;About&lt;/h6&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Link&gt;&lt;!--end nav link--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;&lt;!--end nav item--&gt;<br/><br/> 
                                                
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li className="nav-item mt-2"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link className=&#123;`nav-link rounded $&#123;activeTab2 === 3 ? 'active' : ''&#125;`&#125; href="#" scroll=&#123;false&#125; onClick=&#123;()=&#8250;setActiveTab2(3)&#125;&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="text-center py-1"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="mb-0"&gt;Service&lt;/h6&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Link&gt;&lt;!--end nav link--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;&lt;!--end nav item--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;&lt;!--end nav pills--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/> 

                                    &nbsp;&nbsp;&nbsp;&lt;div className="col-md-8 col-12 mt-4 pt-2"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="tab-content"&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&#123;`tab-pane fade p-4 rounded shadow $&#123;activeTab2 === 1 ? 'show active' : ''&#125;`&#125;&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end teb pane--&gt;<br/> 
                                                
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&#123;`tab-pane fade p-4 rounded shadow $&#123;activeTab2 === 2 ? 'show active' : ''&#125;`&#125;&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end teb pane--&gt;<br/> 

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&#123;`tab-pane fade p-4 rounded shadow $&#123;activeTab2 === 3 ? 'show active' : ''&#125;`&#125;&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="text-muted mb-0"&gt;You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.&lt;/p&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end teb pane--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end tab content--&gt;<br/> 
                                    &nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/> 
                                    &lt;/div&gt;&lt;!--end row--&gt;<br/> 
                                    </code></pre>
                                </h6>
                            <div className="row">
                                <div className="col-md-4 mt-4 pt-2">
                                    <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                                        <li className="nav-item">
                                            <Link className={`nav-link rounded ${activeTab2 === 1 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab2(1)}>
                                                <div className="text-center py-1">
                                                    <h6 className="mb-0">Home</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item mt-2">
                                            <Link className={`nav-link rounded ${activeTab2 === 2 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab2(2)}>
                                                <div className="text-center py-1">
                                                    <h6 className="mb-0">About</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item mt-2">
                                            <Link className={`nav-link rounded ${activeTab2 === 3 ? 'active' : ''}`} href="#" scroll={false} onClick={()=>setActiveTab2(3)}>
                                                <div className="text-center py-1">
                                                    <h6 className="mb-0">Service</h6>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-8 col-12 mt-4 pt-2">
                                    <div className="tab-content">
                                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab2 === 1 ? 'show active' : ''}`}>
                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                        </div>
                                        
                                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab2 === 2 ? 'show active' : ''}`}>
                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                        </div>

                                        <div className={`tab-pane fade p-4 rounded shadow ${activeTab2 === 3 ? 'show active' : ''}`}>
                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
