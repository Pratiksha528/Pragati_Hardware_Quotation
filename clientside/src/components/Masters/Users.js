import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Users() {

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

    const [usersApiData, setUsersApiData] = useState([]);

    const [show, setShow] = useState(false);

    const [edit, setEdit] = useState({ id: "", name: "", username: "", password: "", email: "", mobileno: "", usertype: "" });


    const [users, setUsers] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        mobileno: "",
        usertype: ""
    });

    let [userValidations, setUserValidations] = useState({
        nameMessage: "",
        usernameMessage: "",
        passwordMessage: "",
        emailMessage: "",
        mobilenoMessage: "",
        usertypeMessage: ""

    });

    function save(e) {
        e.preventDefault();
        let validated = true;
        let nameMessage = "";
        let usernameMessage = "";
        let passwordMessage = "";
        let emailMessage = "";
        let mobilenoMessage = "";
        let usertypeMessage = "";

        if (users.name === "") {
            nameMessage = "Please Enter Name";
            validated = false;
        }
        if (users.username === "") {
            usernameMessage = "Please Enter username";
            validated = false;
        }

        if (users.email.trim() === "") {
            emailMessage = "Please Enter Email";
            validated = false;
        }
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(users.email)) {
            emailMessage = "Please Enter Valid Email";
            validated = false;
        }

        if (users.mobileno.trim() === "") {
            mobilenoMessage = "Please Enter mobile number";
            validated = false;
        }
        else if (!/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(users.mobileno)) {
            mobilenoMessage = "Please Enter valid Mobileno";
            validated = false;
        }

        if (users.password === "") {
            passwordMessage = "Please Enter Password";
            validated = false;
        }

        if (users.usertype === "") {
            usertypeMessage = "Please Enter Password";
            validated = false;
        }

        setUserValidations({
            nameMessage: nameMessage,
            usernameMessage: usernameMessage,
            emailMessage: emailMessage,
            passwordMessage: passwordMessage,
            mobilenoMessage: mobilenoMessage,
            usertypeMessage: usertypeMessage

        })

        if (validated) {
            if (users) {

                axios.post(getBaseUrl() + 'users', {
                    name: users.name,
                    username: users.username,
                    email: users.email,
                    password: users.password,
                    mobileno: users.mobileno,
                    usertype: users.usertype

                }, { headers: getHeader() }).then(() => {
                    getData();
                    setUsers('');

                });
                console.log(users);
            }
        }
    }

    function setUserData(e) {
        e.preventDefault();
        setUsers({ ...users, [e.target.id]: e.target.value });
    }


    function getData() {
        axios.get(getBaseUrl() + 'users', { headers: getHeader() }).then((response) => {
            if (response?.data?.data) {
                setUsersApiData(response.data.data);
            }
            console.log(response.data.data);
        });
    }

    function cleared(e) {
        e.preventDefault();
        setUsers({
            name: "",
            username: "",
            password: "",
            email: "",
            mobileno: "",
            usertype: ""
        });
    }

    function updateData() {
        if (edit._id !== '' && users.name !== '' && users.username !== '' && users.email !== '' && users.password !== '' && users.mobileno !== '' && users.usertype !== '') {
            axios.put(`http://localhost:8081/users/${edit.id}`, {
                name: users.name,
                username: users.username,
                email: users.email,
                password: users.password,
                mobileno: users.mobileno,
                usertype: users.usertype

            }, { headers: getHeader() }).then(() => {
                getData();
                document.getElementById('Form').reset();
                setShow(false);
                setUsers('');
            });
        }
    }

    function editUsers(id, name, username, password, email, mobileno, usertype) {
        setUsers(name, username, password, email, mobileno, usertype);
        document.getElementById('name').value = name;
        document.getElementById('username').value = username;
        document.getElementById('password').value = password;
        document.getElementById('email').value = email;
        document.getElementById('mobileno').value = mobileno;
        document.getElementById('usertype').value = usertype;
        setShow(true);
        setEdit({ id: id, name: name, username: username, password: password, email: email, mobileno: mobileno, usertype: usertype });

    }

    function handleDelete(_id) {
        axios.delete(`http://localhost:8081/users/${_id}`, { headers: getHeader() }).then(() => {
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
                        <div className="app-page-title">
                            <div className="page-title-wrapper ">
                                <div className="page-title-heading ">

                                    <div> Users </div>
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
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-card mb-2 card ">
                                        <form id='Form'>
                                            <div className="card-body form-group">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label className=""><b> Name</b></label>
                                                        <input name="name" id="name" onChange={(e) => { setUserData(e) }}
                                                            placeholder="Enter  Name" type="text"
                                                            className="form-control" />

                                                        <span className='text-danger'>{userValidations.nameMessage}</span>

                                                        <br />
                                                    </div>
                                                    <div className="col-lg-6">

                                                        <label className=""><b> User Name </b></label>
                                                        <input name="username" id="username" onChange={(e) => { setUserData(e) }}
                                                            placeholder="Enter User Name" type="text"
                                                            className="form-control" />

                                                        <span className='text-danger'>{userValidations.usernameMessage}</span>

                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label className=""><b> Password</b></label>
                                                        <input name="password" id="password" onChange={(e) => { setUserData(e) }}
                                                            placeholder="Enter password " type="password"
                                                            className="form-control" />

                                                        <span className='text-danger'>{userValidations.passwordMessage}</span>

                                                        <br />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label className=""><b> Email</b></label>
                                                        <input name="email" id="email" onChange={(e) => { setUserData(e) }}
                                                            placeholder="Enter Email" type="email"
                                                            className="form-control" />

                                                        <span className='text-danger'>{userValidations.emailMessage}</span>

                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label className=""><b> MibileNo</b></label>
                                                        <input name="mobileno" id="mobileno" onChange={(e) => { setUserData(e) }}
                                                            placeholder="Enter mobile Number" type="number"
                                                            className="form-control" />

                                                        <span className='text-danger'>{userValidations.mobilenoMessage}</span>

                                                        <br />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label className=""><b> User Type</b></label>
                                                        <input name="usertype" id="usertype" onChange={(e) => { setUserData(e) }}
                                                            placeholder="Enter usertype " type="text"
                                                            className="form-control" />

                                                        <span className='text-danger'>{userValidations.usertypeMessage} </span>

                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-12 ">
                                                        {show === false &&
                                                            <button type="submit" value='Submit' onClick={(e) => { save(e) }}
                                                                className="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Save" >Save</button>
                                                        }

                                                        {show === true &&
                                                            <button type="button" value='edit'
                                                                className="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Update" onClick={() => { updateData() }} >Update</button>
                                                        }

                                                        <button type="button" className='m-2 btn btn-danger' data-toggle="tooltip" data-placement="bottom" title="Clear" onClick={(e) => { cleared(e) }} >Clear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
                                                className="table table-hover text-center table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Name</th>
                                                        <th>User Name</th>
                                                        <th>Password</th>
                                                        <th>Email</th>
                                                        <th>MobileNo</th>
                                                        <th>User Type</th>
                                                        <th style={{ width: "150px" }}>Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        usersApiData.map((item, i) => {
                                                            return (

                                                                <tr key={i}>
                                                                                                               <td>{i + 1}</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.username}</td>
                                                                    <td>{item.password}</td>
                                                                    <td>{item.email}</td>
                                                                    <td>{item.mobileno}</td>
                                                                    <td>{item.usertype}</td>
                                                                    <td>
                                                                        <button className="mb-2 mr-2 btn-icon btn-icon-only  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Edit" onClick={() => editUsers(item._id, item.name, item.username, item.password, item.email, item.mobileno, item.usertype)}  >
                                                                            <i className="lnr-magic-wand btn-icon-wrapper"> </i></button>

                                                                        <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-danger" data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={() => { if (window.confirm('are you sure to delete data?')) handleDelete(item._id) }}  >
                                                                            <i
                                                                                className="pe-7s-trash btn-icon-wrapper" > </i></button>

                                                                    </td>
                         
                                                                </tr>

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
            </div>

        </div>

    )
}
