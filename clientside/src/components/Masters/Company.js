import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Company() {
    function getHeader(){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }  
        return headers;
    }
    
     function getBaseUrl(){
        return "http://localhost:8081/";
    }

    const [name, setName] = useState('');

    const [show, setShow] = useState(false);

    const [edit, setEdit] = useState({ id: "", name: "" });

    const [companyApiData, setCompanyApiData] = useState([]);

    const [nameValidated, setNameValidated] = useState(true);


    const handleSubmit = (e) => {

        e.preventDefault();

        setNameValidated(name === "" ? false : true);

        if (name !== '') {

            axios.post(getBaseUrl() +'companies', {
                name: name
            }, {headers:getHeader()}).then(() => {
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
        axios.get(getBaseUrl() + 'companies', {headers:getHeader()}).then((response) => {
            setCompanyApiData(response.data.data);
            console.log(response.data.data);
        })
    };

    function handleDelete(_id) {
        axios.delete(`http://localhost:8081/companies/${_id}`, {headers:getHeader()}).then(() => {
            getData();
        });
    }

    async function editCompany(id, name) {
        // axios.put(`http://localhost:8081/cities/${id}`,{
        //     name:Name
        // }).then(()=>{
        //         getData();
        // });
        setName(name);
        document.getElementById('name').value = name;
        setShow(true);
        setEdit({ id: id, name: name })
    }

    function updateName() {
        if (edit.id !== '' && name !== '') {
            axios.put(`http://localhost:8081/companies/${edit.id}`,  {
                name: name
            },{headers:getHeader()}).then(() => {
                getData();
                document.getElementById('name').value = "";
                setShow(false)
            });
        }
    }

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div>

            <div className=''>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="app-page-title ">
                            <div className="page-title-wrapper ">
                                <div className="page-title-heading">

                                    <div> Companies </div>
                                </div>
                                {/* <div className="page-title-actions"> */}

                                    {/* <div className="d-inline-block ">
                             <label className=" bg-secondary text-light p-2 border">
                                        Count :
                                    </label>
                                </div> */}

                                {/* </div> */}

                            </div>
                        </div>

                        <div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-card mb-2 card ">
                                        <form onSubmit={handleSubmit}>
                                            <div className="card-body form-group">

                                                <label className=""><b>Company Name</b></label>
                                                <input name="companyname" id="name"
                                                    placeholder="Enter Company Name" type="text"
                                                    className="form-control" onChange={(e) => { setName(e.target.value) }} />

                                                {!nameValidated && <span className='text-danger'>please enter your city name</span>}
                                                <br />
                                                {show === false &&
                                                    <button type="submit" value='Submit'
                                                        className="btn btn-primary" >Save</button>
                                                }

                                                {show === true &&
                                                    <button type="button" value='edit'
                                                        className="btn btn-primary" onClick={() => { updateName() }}>Update</button>
                                                }

                                                <button type="button" className='m-2 btn btn-danger' onClick={() => { cleared() }}>Clear</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-card  card">
                            <div className="card-body">
                                <div className=''>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table style={{ width: "100%" }} id="example"
                                                className="table table-hover  table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: "50px" }}>No.</th>
                                                        <th style={{ width: "50px" }}>Name</th>
                                                        <th style={{ width: "50px" }}>Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        companyApiData.map((item, i) => {
                                                            return (

                                                                <tr key={i}>
                                                                    
                                                                    <td>{i + 1}</td>
                                                                    <td>{item.name}</td>

                                                                    <td>
                                                                        <button className="mb-2 mr-2 btn-icon btn-icon-only  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Edit" onClick={() => editCompany(item._id, item.name)} >
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
