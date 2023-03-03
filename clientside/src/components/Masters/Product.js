import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Product() {

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

  const [product, setProduct] = useState({
    _id: "",
    companyid: "",
    pcid: "",
    name: "",
    packetquantity: "",
    boxquantity: "",
    mrp: "",
    gstpercentage: "",
    creditsalerate: "",
    cashsalerate: "",
    stockquantity: ""
  });

  const [productValidation, setProductValidation] = useState({
    companyMessage: "",
    productCatagoryMessage: "",
    nameMessage: "",
    packetQuantityMessage: "",
    boxQuantityMessage: "",
    mrpMessage: "",
    gstPercentageMessage: "",
    creditSalerateMessage: "",
    cashsaleRateMassage: "",
    stockquantityMassage: ""
  });

  const [companyApiData, setCompanyApiData] = useState([]);

  const [pcApidata, setPcApiData] = useState([]);

  function save(e) {
    e.preventDefault();
    let validated = true;
    let companyMessage = "";
    let productCatagoryMessage = "";
    let nameMessage = "";
    let packetQuantityMessage = "";
    let boxQuantityMessage = "";
    let mrpMessage = "";
    let gstPercentageMessage = "";
    let creditSalerateMessage = "";
    let cashsaleRateMassage = "";
    let stockquantityMassage = "";

    if (product.companyid === "") {
      companyMessage = "Please Enter company name";
      validated = false;
    }

    if (product.pcid === "") {
      productCatagoryMessage = "Please Enter catagory name";
      validated = false;
    }

    if (product.name === "") {
      nameMessage = "Please Enter Name";
      validated = false;
    }

    if (product.packetquantity === "") {
      packetQuantityMessage = "Please Enter packet quantity";
      validated = false;
    }

    if (product.boxquantity === "") {
      boxQuantityMessage = "Please Enter box quantity";
      validated = false;
    }

    if (product.mrp === "") {
      mrpMessage = "Please Enter mrp";
      validated = false;
    }

    if (product.gstpercentage === "") {
      gstPercentageMessage = "Please Enter gstpercentage";
      validated = false;
    }

    if (product.creditsalerate === "") {
      creditSalerateMessage = "Please Enter creditsalerate";
      validated = false;
    }

    if (product.cashsalerate === "") {
      cashsaleRateMassage = "Please Enter cashsaleRate";
      validated = false;
    }

    if (product.stockquantity === "") {
      stockquantityMassage = "Please Enter stockquantity";
      validated = false;
    }


    setProductValidation({
      companyMessage: companyMessage,
      productCatagoryMessage: productCatagoryMessage,
      nameMessage: nameMessage,
      packetQuantityMessage: packetQuantityMessage,
      boxQuantityMessage: boxQuantityMessage,
      mrpMessage: mrpMessage,
      gstPercentageMessage: gstPercentageMessage,
      creditSalerateMessage: creditSalerateMessage,
      cashsaleRateMassage: cashsaleRateMassage,
      stockquantityMassage: stockquantityMassage

    });



    if (validated) {
      if (product) {
        if (id === undefined) {
          axios.post(getBaseUrl() + 'products', {
            companyid: product.companyid,
            pcid: product.pcid,
            name: product.name,
            packetquantity: product.packetquantity,
            boxquantity: product.boxquantity,
            mrp: product.mrp,
            gstpercentage: product.gstpercentage,
            creditsalerate: product.creditsalerate,
            cashsalerate: product.cashsalerate,
            stockquantity: product.stockquantity

          }, { headers: getHeader() }).then((response) => {
            if (response) {
              console.log(response);
              navigate('/master/products');
            }
          });
        }

        else {
          axios.put(getBaseUrl() + 'products/' + id, {
            _id: product._id,
            companyid: product.companyid,
            pcid: product.pcid,
            name: product.name,
            packetquantity: product.packetquantity,
            boxquantity: product.boxquantity,
            mrp: product.mrp,
            gstpercentage: product.gstpercentage,
            creditsalerate: product.creditsalerate,
            cashsalerate: product.cashsalerate,
            stockquantity: product.stockquantity

          }, { headers: getHeader() }).then((response) => {
            if (response) {
              console.log(response);
              navigate('/master/products');
            }
          });
        }
      }
      console.log(product);
    }


  }

  function setProductData(e) {
    e.preventDefault();
    setProduct({ ...product, [e.target.id]: e.target.value });
  }

  function cleared() {
    setProduct({
      _id: "",
      companyid: "",
      pcid: "",
      name: "",
      packetquantity: "",
      boxquantity: "",
      mrp: "",
      gstpercentage: "",
      creditsalerate: "",
      cashsalerate: "",
      stockquantity: ""
    });
  }

  function getCompanies() {
    axios.get(getBaseUrl() + 'companies', { headers: getHeader() }).then((response) => {
      setCompanyApiData(response.data.data);
      console.log(response.data.data);
    });
  }

  function getCategory() {
    axios.get(getBaseUrl() + 'productcatagories', { headers: getHeader() }).then((response) => {
      setPcApiData(response.data.data);
      console.log(response.data.data);
    });
  }



  useEffect(() => {
    // if (id === undefined) {
      getCompanies();
      getCategory();
    // }

    if (id !== undefined) {
      axios.get(getBaseUrl() + 'products/' + id, { headers: getHeader() }).then((response) => {
        //console.log(response.data.data);
        setProduct(response.data.data);
      });

    }

  }, []);


  return (
    <div>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="app-page-title ">
              <div className="page-title-wrapper ">
                <div className="page-title-heading">

                  <div> Product </div>
                </div>
                <div className="page-title-actions">

                  <div className="d-inline-block ">
                    <Link to='/master/products'> <button className=" bg-secondary text-light  p-2 border" style={{cursor:'pointer'}} data-toggle="tooltip" data-placement="bottom" title="Show Product">
                      Show Products
                    </button></Link>
                  </div>

                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="main-card mb-2 card ">
                  <form id='Form' >
                    <div className="card-body form-group">

                      <div className="row">
                        <div className="col-lg-6">
                          <label className=""><b>Company</b></label>
                          <select name="company" id="company" className='form-control' value={product.companyid} onChange={(e) => { setProductData(e) }}>
                            <option value="">Select Company</option>
                            {
                              companyApiData.map((company, i) => {
                                return <option key={i} value={company._id}>{company.name}</option>
                              })
                            }

                          </select>
                          <span className='text-danger'>{productValidation.companyMessage}</span>
                          <br />
                        </div>

                        <div className="col-lg-6">
                          <label className=""><b>Product Catagory</b></label>
                          <select name="productcatagory" id="productcatagory" className='form-control' value={product.pcid} onChange={(e) => { setProductData(e) }}>
                            <option value="">Select Product Catagory</option>
                            {
                              pcApidata.map((productcatagories, i) => {
                                return <option key={i} value={productcatagories._id}>{productcatagories.name}</option>
                              })
                            }

                          </select>
                          <span className='text-danger'>{productValidation.productCatagoryMessage}</span>
                          <br />
                        </div>
                      </div>

                      <div className="row">
                        <div className='col-lg-6'>
                          <label className=""><b> Name</b></label>
                          <input name="name" id="name" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter Product Name" type="text" value={product.name}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.nameMessage}</span>
                          <br />

                        </div>

                        <div className='col-lg-6'>

                          <label><b>Packet Quantity</b></label>
                          <input name="packetquantity" id="packetquantity" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter Packet Quantity " type="text" value={product.packetquantity}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.packetQuantityMessage}</span>
                          <br />

                        </div>

                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label className=""><b>Box Quantity</b></label>
                          <input name="boxquantity" id="boxquantity" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter Box Quantity " type="number" value={product.boxquantity}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.boxQuantityMessage}</span>
                          <br />
                        </div>

                        <div className="col-lg-6">
                          <label className=""><b>MRP </b></label>
                          <input name="mrp" id="mrp" className='form-control' onChange={(e) => { setProductData(e) }}
                            placeholder="Enter MRP " type="text" value={product.mrp}
                          />
                          <span className='text-danger'>{productValidation.mrpMessage}</span>
                          <br />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label className=""><b>GST %</b></label>
                          <input name="gstpercentage" id="gstpercentage" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter  GST % " type="text" value={product.gstpercentage}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.gstPercentageMessage}</span>
                          <br />
                        </div>
                        <div className="col-lg-6">
                          <label className=""><b>Credit Sale Rate </b></label>
                          <input name="creditsalerate" id="creditsalerate" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter Credit Sale Rate " type="number" value={product.creditsalerate}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.creditSalerateMessage}</span>
                          <br />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label className=""><b>Cash Sale Rate Stock Quantity</b></label>
                          <input name="cashsalerate" id="cashsalerate" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter Cash Sale Rate " type="number" value={product.cashsalerate}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.cashsaleRateMassage}</span>
                          <br />
                        </div>

                        <div className="col-lg-6">
                          <label className=""><b> Stock Quantity</b></label>
                          <input name="stockquantity" id="stockquantity" onChange={(e) => { setProductData(e) }}
                            placeholder="Enter Stock Quantity " type="number" value={product.stockquantity}
                            className="form-control" />

                          <span className='text-danger'>{productValidation.stockquantityMassage}</span>
                          <br />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="">

                            <button type="submit" value='Submit' onClick={(e) => { save(e) }}
                              className="btn btn-primary" >Save</button>




                            <button type="button" className='m-2 btn btn-danger' onClick={() => { cleared() }} >Clear</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div >



    </div >
  )
}
