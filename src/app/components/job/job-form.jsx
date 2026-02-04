import React from 'react'

export default function JobForm() {
  return (
        <form className="card rounded p-4 mt-4">
            <div className="row text-start">
                <div className="col-lg-5 col-md-4">
                    <div className="mb-0">
                        <input type="text" className="form-control" required placeholder="Keywords"/>
                    </div>
                </div>
                
                <div className="col-lg-7 col-md-8">
                    <div className="row align-items-center">
                        <div className="col-md-4 mt-4 mt-sm-0">
                            <div className="mb-0">
                                <select className="form-control form-select">
                                    <option value="">Location</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">&Aring;land Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mt-4 mt-sm-0">
                            <div className="mb-0">
                                <select className="form-control form-select">
                                    <option value="">Job Types</option>
                                    <option value="4">Accounting</option>
                                    <option value="1">IT & Software</option>
                                    <option value="3">Marketing</option>
                                    <option value="5">Banking</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0">
                            <div className="d-grid">
                                <input type="submit" id="search" name="search" className="searchbtn btn btn-primary" value="Search"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </form>
  )
}
