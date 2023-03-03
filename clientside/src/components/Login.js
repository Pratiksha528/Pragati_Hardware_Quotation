import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {

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

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [userValidation, setUserValidation] = useState({
        usernameMessage: "",
        passwordMessage: "",
    });

    function handleChange(e) {
        e.preventDefault();
        setUser({ ...user, [e.target.id]: e.target.value });
    }

    function Login(e) {
        e.preventDefault();

        let validated = true;
        let usernameMessage = "";
        let passwordMessage = "";

        if (user.username === "") {
            usernameMessage = "Please Enter User Name";
            validated = false;
        }

        if (user.password === "") {
            passwordMessage = "Please Enter Password";
            validated = false;
        }

        setUserValidation({
            usernameMessage: usernameMessage,
            passwordMessage: passwordMessage,
        })

        if (validated) {
            if (user) {
                console.log('Login Form');
                axios.post(getBaseUrl() + 'authentication/userlogin', {
                    username: user.username,
                    password: user.password

                }, { headers: getHeader() },).then((response) => {
                    console.log(response.data);
                    if (response.data.status === "success") {
                        //Set cookies or localstorage
                        localStorage.setItem("username", response.data.data.username);
                        localStorage.setItem("name", response.data.data.name);
                        localStorage.setItem("usertype", response.data.data.usertype);

                        navigate('/master');
                    }
                    else {
                        alert("invalid credential...!")
                    }
                })
                    .catch((err) => {
                        console.log(err);
                        console.log(err.response);
                        alert(err.response.data.error.message);
                    })
            }
        }
    }


    useEffect(() => {

        if (localStorage.getItem("token") == null)
            localStorage.setItem("token", "abhishek");


        axios.post(getBaseUrl() + "gettoken", { token: "abhishek" }, { headers: getHeader() }).then((result) => {
            if (result.data.status === "success") {
                localStorage.setItem("token", result.data.token);
            }
        }, (err) => {
            console.log(err);
        });

    }, []);



    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow">
                <div className="app-container">
                    <div className="h-100">
                        <div className="h-100 no-gutters row">
                            <div className="d-none d-lg-block col-lg-4">
                                <div className="slider-light">
                                    <div className="slick-slider">
                                        <div>
                                            <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" tabIndex="-1">
                                                <div className="slide-img-bg" style={{ backgroundImage: "url(/src/assets/images/ph.png)" }}></div>
                                                <div className="slider-content">
                                                    <h3> | Pragati Hardware |</h3>
                                                    <p>
                                                        | Building Material Dealers
                                                        | Plumbing Pipe Wholesalers
                                                        | Brick Wholesalers
                                                        | Building Material Distributors
                                                        | Building Material Wholesalers
                                                        | PVC Pipe Fitting Dealers
                                                        | GI Fitting Dealers
                                                        | Pipe Coupling Wholesalers
                                                        | Cpvc Pipe Wholesalers
                                                        | Coupling Wholesalers
                                                        | Authorised Dealers-Hindware
                                                        | Swr PVC Pipe Wholesalers
                                                        | Compact Ball Valve Wholesalers
                                                        | Underground Pipe Wholesalers
                                                        | Male Elbow Connector Wholesalers
                                                        | Authorised Dealers
                                                        | Pipe Tee Wholesalers |

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark" tabIndex="-1">
                                                <div className="slide-img-bg" style={{ backgroundImage: "url('assets/images/originals/citynights.jpg')" }}></div>
                                                <div className="slider-content">
                                                    <h3> | Service | </h3>
                                                    <p>When you need to construct a new place, it is necessary that you have access to the right building materials. Cement, brick aggregators, reinforced sand and clay are some of the most common building materials used. The quality of raw materials that you use define the strength and longevity of the building, which is why it is essential that you get some of the best construction materials. You can get in touch with Building Material Dealers who will provide you with an amazing choice of building materials.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning" tabIndex="-1">
                                                <div className="slide-img-bg" style={{ backgroundImage: " url(/assets/images/originals/citydark.jpg) " }}></div>
                                                <div className="slider-content">
                                                    <h3>| Scalability |</h3>
                                                    <p>India’s leading B2B market place, Jd Mart ensures engaging in business activities is a seamless process for small and medium enterprises as well as large businesses. In a wake to enable these businesses to reach their audience, this portal lets them showcase their offerings in terms of the products and/or services through a digital catalogue. This business has a wide range of product offerings and the product/catalogue list includes Hindware Element Wash Basin Ivory [91057], Hindware Enigma Semi-Recessed Wash Basin Ivory [91012], Hindware Solitaire Counter Wash Basin Ivory [91064], Hindware F870011CP Rubbic Glass Shelf, Hindware F890009CP Othello Glass Shelf etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                                    <div><img src="" alt="" /></div>
                                    <div className="divider row"></div>
                                    <div className=" text-center"><h1><b> Pragati Hardware </b></h1></div>
                                    <div className="divider row"></div>


                                    <div className=" text-center"><h1><b> Log In </b></h1></div>

                                    <h4 className="mb-0">
                                        <span className="d-block">Welcome Back </span>
                                    </h4>
                                    <div className="divider row"></div>
                                    <div>
                                        <form className="Form">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="position-relative form-group">
                                                        <label className="">User Name</label>
                                                        <input name="username" id="username" placeholder="User Name  Here..." type="text" onChange={(e) => { handleChange(e) }} className="form-control" />
                                                        <span className='text-danger'>{userValidation.usernameMessage}</span>
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="position-relative form-group">
                                                        <label className="">Password</label>
                                                        <input name="password" id="password" placeholder="Password Here..." type="password" onChange={(e) => { handleChange(e) }} className="form-control" />
                                                        <span className='text-danger'>{userValidation.passwordMessage}</span>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="divider row"></div>
                                            <div className="d-flex align-items-center">
                                                <div className="ml-auto text-center">

                                                    <button className="btn btn-primary btn-lg " onClick={(e) => { Login(e) }}>Log In</button>

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
