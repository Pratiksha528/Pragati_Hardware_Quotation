import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DealerUpdate() {
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

    const [dealerLoad, setDealerLoad] = useState({});
    const { id } = useParams("");
    const [option, setOption] = useState("");

    const [cityApiData, setCityApiData] = useState([]);


    function getDataToUpdate() {
        if (id !== undefined && id !== null) {
            axios.get(getBaseUrl() + 'dealers/' + id, { headers: getHeader() }).then((response) => {
                setDealerLoad(response.data.data);
                console.log(dealerLoad);
                setOption(dealerLoad.cityid);
                console.log(option);

            })
        }
    }

    function getCities() {
        axios.get(getBaseUrl() + 'cities', { headers: getHeader() }).then((response) => {
            setCityApiData(response.data.data);
            console.log(response.data.data);
        });
    }

    function updateName() {
        if (id !== undefined && id !== null) {

            axios.put(getBaseUrl() + `dealers/` + id, {
                name: dealerLoad.name,
                email: dealerLoad.email,
                mobileno: dealerLoad.mobileno,
                cityid: dealerLoad.cityid,
                pincode: dealerLoad.pincode,
                password: dealerLoad.password

            }, { headers: getHeader() }).then(() => {
                setDealerLoad('');
                // document.getElementById('name').value = "";
                // document.getElementById('email').value = "";
                // document.getElementById('mobileno').value = "";
                // document.getElementById('cityid').value = "";
                // document.getElementById('pincode').value = "";
                // document.getElementById('password').value = "";
            });
        }

    }

    function handleChange(e){
        e.preventDefault();
        setDealerLoad({ ...dealerLoad, [e.target.id]: e.target.value });
    }

    useEffect(() => {
        getCities();
        getDataToUpdate();
    }, []);


    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="app-page-title ">
                                <div className="page-title-wrapper ">
                                    <div className="page-title-heading">

                                        <div> Dealer Update Form </div>
                                    </div>
                                    <div className="page-title-actions">

                                        {/* <div className="d-inline-block ">
                             <label className=" bg-secondary text-light p-2 border">
                                        Count :
                                    </label>
                                </div> */}

                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className='mb-2 mt-2'>
                                    <Link to='/master/dealers'>
                                        <button type="submit" value='display'
                                            className="btn btn-danger" >Display</button>
                                    </Link>
                                </div><br />


                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="main-card mb-2 card ">
                                            <form id='Form'>
                                                <div className="card-body form-group">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label className=""><b> Name </b></label>
                                                            <input name="companyname" id="name" value={dealerLoad.name || ''} onChange={(e) => { handleChange(e) }}
                                                                placeholder="Enter Company Name" type="text"
                                                                className="form-control" />
                                                        </div>
                                                        <div className="col-lg-6">

                                                            <label className=""><b>Email</b></label>
                                                            <input name="email" id="email" value={dealerLoad.email || ''} onChange={(e) => { handleChange(e)}}
                                                                placeholder="Enter your email " type="email"
                                                                className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label className=""><b>Mobileno</b></label>
                                                            <input name="mobile" id="mobileno" value={dealerLoad.mobileno || ''} onChange={(e) => { handleChange(e)}}
                                                                placeholder="Enter your mobileno " type="number"
                                                                className="form-control" />
                                                        </div>

                                                        <div className="col-lg-6">

                                                            <label className=""><b>City</b></label>
                                                            <select name="cityid" id="cityid" className='form-control' onChange={(e) => { handleChange(e)}}>
                                                                {
                                                                    cityApiData.map((city, i) => {
                                                                        return <option key={i} value={city._id}>{city.name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label className=""><b>Address</b></label>
                                                            <input name="address" id="address" value={dealerLoad.address || ''} onChange={(e) => { handleChange(e)}}
                                                                placeholder="Enter your address " type="text"
                                                                className="form-control" />
                                                        </div>
                                                        <div className="col-lg-6">

                                                            <label className=""><b>pincode</b></label>
                                                            <input name="pincode" id="pincode" value={dealerLoad.pincode || ''} onChange={(e) => { handleChange(e)}}
                                                                placeholder="Enter your pincode " type="text"
                                                                className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-6">                                                    <label className=""><b>Password</b></label>
                                                            <input name="password" id="password" value={dealerLoad.password || ''} onChange={(e) => { handleChange(e)}}
                                                                placeholder="Enter your password " type="password"
                                                                className="form-control" />


                                                            <br />
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <button type="submit" value='Update' onClick={() => { updateName() }}
                                                                className="btn btn-primary" >Update</button>
                                                        </div>

                                                    </div>


                                                </div>
                                            </form>
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
