import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Dealers() {

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


    const [getDealerapiData, setDealerapiData] = useState([]);


    async function getData() {
        axios.get(getBaseUrl() + 'dealers', { headers: getHeader() }).then((response) => {
            if (response.data.data) {
                setDealerapiData(response.data.data);
            }
            console.log(response.data.data);
        });
    }

    function handleDelete(_id) {
        axios.delete(`http://localhost:8081/dealers/${_id}`, { headers: getHeader() }).then(() => {
            getData();
        });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="app-page-title ">
                        <div className="page-title-wrapper ">
                            <div className="page-title-heading">

                                <div> Dealers  </div>
                            </div>
                            <div className="page-title-actions">

                                <div className="d-inline-block ">
                             <Link to='/master/dealer'><button className=" bg-secondary text-light p-2 border" style={{cursor:'pointer'}}>
                                        Insert Dealer
                                    </button></Link>
                                </div> 

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="main-card mb-3 card">
                <div className="card-body">
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-12">
                                <table style={{ width: "100%" }} id="example"
                                    className="table table-hover  table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobileno</th>
                                            <th>City</th>
                                            <th>Address</th>
                                            <th>Pincode</th>
                                            <th>Password</th>
                                            <th style={{ width: "150px" }}>Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                    

                                        {
                                            getDealerapiData.map((item, i) => {
                                                return (
                                                    <React.Fragment key={item._id}>
                                                        <tr>
                                                           
                                                            <td>{i + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.mobileno}</td>
                                                            <td>{item.cityid.name}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.pincode}</td>
                                                            <td>{item.password}</td>
                                                            <td>
                                                                <Link to={`/master/dealer/${item._id}`}>
                                                                    <button className="mb-2 mr-2 btn-icon btn-icon-only  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Edit"  >
                                                                        <i className="lnr-magic-wand btn-icon-wrapper"> </i></button>
                                                                </Link>
                                                                <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-danger"  data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={() => { if (window.confirm('are you sure to delete data?')) handleDelete(item._id) }} >
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
    )
}
