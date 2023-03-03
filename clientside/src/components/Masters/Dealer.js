import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function Dealer() {
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

    const { id } = useParams();

    const navigate = useNavigate();
    const [cityApiData, setCityApiData] = useState([]);

    const [dealers, setDealers] = useState({
        _id: "",
        name: "",
        email: "",
        mobileno: "",
        cityid: "",
        address: "",
        pincode: "",
        password: ""
    });



    const [dealerValidation, setDealerValidation] = useState({
        nameMessage: "",
        emailMessage: "",
        mobilenoMessage: "",
        cityMessage: "",
        addressMessage: "",
        pincodeMessage: "",
        passwordMessage: ""
    });


    function save(e) {
        e.preventDefault();
        let validated = true;
        let nameMessage = "";
        let emailMessage = "";
        let mobilenoMessage = "";
        let cityMessage = "";
        let addressMessage = "";
        let pincodeMessage = "";
        let passwordMessage = "";

        if (dealers.name === "") {
            nameMessage = "Please Enter Name";
            validated = false;
        }

        if (dealers.email.trim() === "") {
            emailMessage = "Please Enter Email";
            validated = false;
        }
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(dealers.email)) {
            emailMessage = "Please Enter Valid Email";
            validated = false;
        }

        if (dealers.mobileno === "") {
            mobilenoMessage = "Please Enter mobile number";
            validated = false;
        }
        else if (!/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(dealers.mobileno)) {
            mobilenoMessage = "Please Enter valid Mobileno";
            validated = false;
        }
        if (dealers.cityid === "") {
            cityMessage = "Please Enter city";
            validated = false;
        }

        if (dealers.address === "") {
            addressMessage = "Please Enter Address";
            validated = false;
        }

        if (dealers.pincode === "") {
            pincodeMessage = "Please Enter Pincode";
            validated = false;
        }

        if (dealers.password === "") {
            passwordMessage = "Please Enter Password";
            validated = false;
        }

        setDealerValidation({
            nameMessage: nameMessage,
            emailMessage: emailMessage,
            mobilenoMessage: mobilenoMessage,
            cityMessage: cityMessage,
            addressMessage: addressMessage,
            pincodeMessage: pincodeMessage,
            passwordMessage: passwordMessage
        })

        if (validated) {
            if (dealers) {
                if (id === undefined) {
                    axios.post(getBaseUrl() + 'dealers', {
                        _id:dealers._id,
                        name: dealers.name,
                        email: dealers.email,
                        mobileno: dealers.mobileno,
                        cityid: dealers.cityid,
                        address: dealers.address,
                        pincode: dealers.pincode,
                        password: dealers.password
                    }, { headers: getHeader() }).then((response) => {
                        if (response) {
                            navigate('/master/dealers');
                        }
                    });
                }
                else {
                    axios.put(getBaseUrl() + 'dealers/' + id, {
                        _id:dealers._id,
                        name: dealers.name,
                        email: dealers.email,
                        mobileno: Number(dealers.mobileno),
                        cityid: dealers.cityid,
                        address: dealers.address,
                        pincode: dealers.pincode,
                        password: dealers.password
                    }, { headers: getHeader() }).then((response) => {
                        if (response) {
                            navigate('/master/dealers');
                        }
                    });
                }
            }
            console.log(dealers);
        }
    }

    function cleared() {
        setDealers({
            name: "",
            email: "",
            mobileno: "",
            cityid: "",
            address: "",
            pincode: "",
            password: ""
        });
       

    }

    // function getData() {
    // axios.get('http://localhost:8081/dealers').then((response) => {
    //     setDealerapiData(response.data.data);
    //     console.log(response.data.data);
    // });
    // }

    function setDealerData(e) {
        e.preventDefault();
        setDealers({ ...dealers, [e.target.id]: e.target.value });
    }

    useEffect(() => {
        axios.get(getBaseUrl() + 'cities', { headers: getHeader() }).then((response) => {
            setCityApiData(response.data.data);

            console.log(response.data.data);

        })

        if (id !== undefined) {
            axios.get(getBaseUrl() + 'dealers/' + id, { headers: getHeader() }).then((response) => {
                console.log(response.data.data);
                setDealers(response.data.data);
            });
        }
        // getData();
    }, []);

    return (
        <div className=''>
            <div >
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="app-page-title  ">
                            <div className="page-title-wrapper ">
                                <div className="page-title-heading">

                                    <div> Dealer </div>
                                </div>
                                <div className="page-title-actions">

                                    <div className="d-inline-block ">

                                        <Link to='/master/dealers'> <button className=" bg-secondary text-light p-2 border" data-toggle="tooltip" data-placement="bottom" title="Show Dealers" style={{cursor:'pointer'}}>
                                            Show Dealers
                                        </button></Link>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-card mb-2 card ">
                                        <form id='Form' >
                                            <div className="card-body form-group">
                                                <div className="row">
                                                    <div className='col-lg-6'>
                                                        <label className=""><b> Name</b></label>
                                                        <input name="companyname" id="name" onChange={(e) => { setDealerData(e) }}
                                                            placeholder="Enter Company Name" type="text" value={dealers.name}
                                                            className="form-control" />

                                                        <span className='text-danger'>{dealerValidation.nameMessage}</span>
                                                        <br />
                                                    </div>

                                                    <div className='col-lg-6'>

                                                        <label className=""><b>Email</b></label>
                                                        <input name="email" id="email" onChange={(e) => { setDealerData(e) }}
                                                            placeholder="Enter Your Email " type="email" value={dealers.email}
                                                            className="form-control" />

                                                        <span className='text-danger'>{dealerValidation.emailMessage}</span>
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label className=""><b>Mobileno</b></label>
                                                        <input name="mobile" id="mobileno" onChange={(e) => { setDealerData(e) }}
                                                            placeholder="Enter Your MobileNo " type="number" value={dealers.mobileno}
                                                            className="form-control" />

                                                        <span className='text-danger'>{dealerValidation.mobilenoMessage}</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label className=""><b>City</b></label>
                                                        <select name="cityid" id="cityid" className='form-control' value={dealers.cityid} onChange={(e) => { setDealerData(e) }}>
                                                            <option value="">Select City</option>
                                                            {
                                                                cityApiData.map((city, i) => {
                                                                    return <option key={i} value={city._id}>{city.name}</option>
                                                                })
                                                            }

                                                        </select>
                                                        <span className='text-danger'>{dealerValidation.cityMessage}</span>
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label className=""><b>Address</b></label>
                                                        <input name="address" id="address" onChange={(e) => { setDealerData(e) }}
                                                            placeholder="Enter Your Address " type="text" value={dealers.address}
                                                            className="form-control" />

                                                        <span className='text-danger'>{dealerValidation.addressMessage}</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label className=""><b>Pincode</b></label>
                                                        <input name="pincode" id="pincode" onChange={(e) => { setDealerData(e) }}
                                                            placeholder="Enter Your Pincode " type="text" value={dealers.pincode}
                                                            className="form-control" />

                                                        <span className='text-danger'>{dealerValidation.pincodeMessage}</span>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label className=""><b>Password</b></label>
                                                        <input name="password" id="password" onChange={(e) => { setDealerData(e) }}
                                                            placeholder="Enter Your Password " type="password" value={dealers.password}
                                                            className="form-control" />

                                                        <span className='text-danger'>{dealerValidation.passwordMessage}</span>
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="  ">
                                                    <button type="submit" value='Submit' onClick={(e) => { save(e) }}
                                                        className="btn btn-primary" >Save</button>




                                                    <button type="button" className='m-2 btn btn-danger' onClick={() => { cleared() }} >Clear</button>
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
    )
}
