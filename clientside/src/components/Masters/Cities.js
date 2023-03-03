import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Cities() {

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

    const [name, setName] = useState('');

    const [show, setShow] = useState(false);

    const [edit, setEdit] = useState({ id: "", name: "" });

    const [cityApiData, setCityApiData] = useState([]);

    const [nameValidated, setNameValidated] = useState(true);


    const handleSubmit = (e) => {

        e.preventDefault();

        setNameValidated(name === "" ? false : true);

        if (name !== '') {
            axios.post(getBaseUrl() + 'cities', {
                name: name
            }, { headers: getHeader() }).then(() => {
                getData();
                document.getElementById('name').value = '';
                setName('');
            });
        }
    }

    function cleared() {
        document.getElementById('name').value = '';
    }

    function getData() {
        axios.get(getBaseUrl() + 'cities', { headers: getHeader() }).then((response) => {
            setCityApiData(response.data.data);

            console.log(response.data.data);

        })
    };

    function handleDelete(_id) {
        axios.delete(getBaseUrl() + `cities/${_id}`, { headers: getHeader() }).then(() => {
            getData();
        });
    }

    async function editCity(id, name) {
        // axios.put(`http://localhost:8081/cities/${id}`,{
        //     name:Name
        // }).then(()=>{
        //         getData();
        // });
        setName(name);
        document.getElementById('name').value = name;

        setShow(true);
        setEdit({ id: id, name: name });
    }


    function updateName() {
        if (edit.id !== '' && name !== '') {
            axios.put(`http://localhost:8081/cities/${edit.id}`, {
                name: name
            }, { headers: getHeader() }).then(() => {
                getData();
                document.getElementById('name').value = "";
                setShow(false);
                setName('');
            });
        }
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <div className=''>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className="app-page-title ">
                        <div className="">
                            <div className="page-title-heading">

                                <div> Cities </div>
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
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body form-group">

                                            <label className=""><b>City Name</b></label>
                                            <input name="cityname" id="name"
                                                placeholder="Enter City Name" type="text"
                                                className="form-control" onChange={(e) => { setName(e.target.value) }} />

                                            {!nameValidated && <span className='text-danger'>please enter your city name</span>}
                                            <br />
                                            {show === false &&
                                                <button type="submit" value='Submit' data-toggle="tooltip" data-placement="bottom" title="Save"
                                                    className="btn btn-primary" >Save</button>
                                            }

                                            {show === true &&
                                                <button type="button" value='edit' data-toggle="tooltip" data-placement="bottom" title="Update"
                                                    className="btn btn-primary" onClick={() => { updateName() }}>Update</button>
                                            }

                                            <button type="button" className='m-2 btn btn-danger' data-toggle="tooltip" data-placement="bottom" title="Clear" onClick={() => { cleared() }}>Clear</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <div className=''>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <table style={{ width: "100%" }} id="example"
                                            className="table table-hover  table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "25px" }}>No.</th>
                                                    <th style={{ width: "50px" }}>Name</th>
                                                    <th style={{ width: "50px" }} className='text-left'>Actions</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    cityApiData.map((item, i) => {
                                                        return (

                                                            <tr key={i}>
                                                                 <td>{i + 1}</td>
                                                                <td>{item.name}</td>

                                                                <td>
                                                                    <button className="mb-2 mr-2 btn-icon btn-icon-only  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Edit" onClick={() => editCity(item._id, item.name)} >
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
    )
}
