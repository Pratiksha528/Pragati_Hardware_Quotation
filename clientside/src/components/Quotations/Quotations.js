import React from 'react'

function Quotations() {


    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="app-page-title ">
                            <div className="page-title-wrapper ">

                                <div className="page-title-heading">

                                    <div> Quotations </div>

                                </div>

                                <div className="page-title-actions">


                                    <div className="d-inline-block ">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label className=""><b>Dealer</b></label>
                                                <select name="dealer" id="dealer" className='form-control' >
                                                    <option value="">Select  Dealer</option>

                                                </select>
                                            </div>


                                            <div className="col-lg-4">
                                                <label className=''> <b> Date</b> </label><br />
                                                <input type="Date" className="form-control" />
                                            </div>

                                            <div className="col-lg-4">
                                                <label className=''></label><br />
                                                <button className=" bg-secondary text-light border form-control" data-toggle="tooltip" data-placement="bottom" title="Add Row">
                                                    +
                                                </button>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div className="main-card mb-2 card ">
                <div className="card-body">
                    <div className=''>
                        <div className="row">
                            <div className="col-lg-12">
                                <table style={{ width: "100%" }} id="table"
                                    className="table table-hover text-center table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Ctagory</th>
                                            <th>Company</th>
                                            <th>Product</th>
                                            <th> Quantity</th>
                                            <th>Rate</th>
                                            <th>SubTotal</th>
                                            <th>GST (%)</th>
                                            <th>Total</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <select name="companycatagory" id="companycatagory" className='form-control' >
                                                    <option value="">Select  Catagory</option>

                                                </select>
                                            </td>
                                            <td>
                                                <select name="company" id="company" className='form-control' >
                                                    <option value="">Select Company</option>

                                                </select>
                                            </td>
                                            <td>
                                                <select name="product" id="product" className='form-control' >
                                                    <option value="">Select  Product</option>

                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>

                                            <td> <button className="mb-2 mr-2 btn-icon btn-icon-only  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Update"  >
                                                <i className="lnr-magic-wand btn-icon-wrapper"> </i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Quotations