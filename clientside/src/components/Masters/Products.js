import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Products() {
  function getHeader() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
    return headers;
  }

  function getBaseUrl() {
    return "http://localhost:8081/";
  }

  const [getProductapiData, setProductapiData] = useState([]);

 async function getData() {
        axios.get(getBaseUrl() + 'products', { headers: getHeader() }).then((response) => {
            if (response.data.data) {
              setProductapiData(response.data.data);
            }
            console.log(response.data.data);
        });
    }

    function handleDelete(_id) {
        axios.delete(`http://localhost:8081/products/${_id}`, { headers: getHeader() }).then(() => {
            getData();
        });
    }
    useEffect(() => {
        getData();
    }, []);



  return (
    <div>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="app-page-title ">
              <div className="page-title-wrapper ">
                <div className="page-title-heading">

                  <div> Products  </div>
                </div>
                <div className="page-title-actions">

                  <div className="d-inline-block ">
                    <Link to='/master/product'><button className=" bg-secondary text-light p-2 border" style={{cursor:'pointer'}} data-toggle="tooltip" data-placement="bottom" title="Insert Product">
                      Insert Product
                    </button></Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="main-card mb-3 card">
                <div className="card-body">
                    <div>
                        <div className="row">
                            <div className="col-lg-12">
                                <table style={{ width: "100%" }} id="example"
                                    className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Company</th>
                                            <th>Product Catagory</th>
                                            <th>Name</th>
                                            <th>Packet Quantity</th>
                                            <th>Box Quantity</th>
                                            <th>MRP</th>
                                            <th>GST (%)</th>
                                            <th>Credit Sale Rate</th>
                                            <th>Cash Sale Rate</th>
                                            <th>Stock Quantity</th>
                                            <th style={{ width: "150px" }}>Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                    

                                        {
                                            getProductapiData.map((item, i) => {
                                                return (
                                                    <React.Fragment key={item._id}>
                                                        <tr>
                                                            
                                                            <td>{i + 1}</td>
                                                            <td>{item.companyid.name}</td>
                                                            <td>{item.pcid.name}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.packetquantity}</td>
                                                            <td>{item.boxquantity}</td>
                                                            <td>{item.mrp}</td>
                                                            <td>{item.gstpercentage}</td>
                                                            <td>{item.creditsalerate}</td>
                                                            <td>{item.cashsalerate}</td>
                                                            <td>{item.stockquantity}</td>
                                                            <td>
                                                                <Link to={`/master/product/${item._id}`}>
                                                                    <button className="mb-2 mr-2 btn-icon btn-icon-only  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Edit"  >
                                                                        <i className="lnr-magic-wand btn-icon-wrapper"> </i></button>
                                                                </Link>
                                                                <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-danger" data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={() => { if (window.confirm('are you sure to delete data?')) handleDelete(item._id) }} >
                                                                    <i
                                                                        className="pe-7s-trash btn-icon-wrapper" > </i></button>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </tbody>
          
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
      </div>

    </div>
  )
}
