// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// export default function Bulkprices() {
//     function getHeader() {
//         const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + localStorage.getItem("token")
//         }
//         return headers;
//     }

//     function getBaseUrl() {
//         return "http://localhost:8081/";
//     }

//     const [products, setProducts] = useState([]);
//     const [companyid, setCompanyId] = useState("");
//     const [pcid, setPCId] = useState("");

//     const [companyApiData, setCompanyApiData] = useState([]);

//     const [pcApidata, setPcApiData] = useState([]);

//     function getCompanies() {
//         axios.get(getBaseUrl() + 'companies', { headers: getHeader() }).then((response) => {
//             setCompanyApiData(response.data.data);
//         });
//     }

//     function getCategory() {
//         axios.get(getBaseUrl() + 'productcatagories', { headers: getHeader() }).then((response) => {
//             setPcApiData(response.data.data);
//         });
//     }

    
//     function updateValues(e,i, field){
//         e.preventDefault();
//         setProducts(products => products.map((product, index)=>{ 
//             if(i === index){
//                 product[field] = parseFloat(e.target.value)
//             }
//             return product;
//         }));
//     };

//     function submitValues(e, i){
//         e.preventDefault();
//         axios.put(getBaseUrl() + 'products/' + products[i]["_id"],products[i], { headers: getHeader() }).then((response) => {
//             if (response) {
//               console.log("Done");
//             }
//           });
//     }

//     useEffect(() => {
//         getCategory();
//         getCompanies();
//     }, []);

//     useEffect(()=>{
//         axios.get(getBaseUrl() + 'products?pcid=' + pcid + "&companyid=" + companyid, { headers: getHeader() }).then((response) => {
//             setProducts(response.data.data);
//         });
//     }, [companyid, pcid]);

//     return (
//         <div className='m-0'>
//             <div>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="app-page-title ">
//                             <div className="page-title-wrapper ">
//                                 <div className="page-title-heading">

//                                     <div> Bulk Product Prices  </div>

//                                 </div>

//                                 <div className="page-title-actions ">
//                                     <div className="row">
//                                         <div className="col-lg-4">
//                                             <label className=""><b>Product Catagory</b></label>
//                                             <select name="productcatagory" id="productcatagory" value={ pcid } onChange={(e)=>{ setPCId(e.target.value) }}  className='form-control'>
//                                                 <option value="">Select  Catagory</option>
//                                                 {
//                                                     pcApidata.map((productcatagories, i) => {
//                                                         return <option key={"pc" + i} value={productcatagories._id}>{productcatagories.name}</option>
//                                                     })
//                                                 }
//                                             </select>
//                                         </div>

//                                         <div className="col-lg-4">
//                                             <label><b>Company </b></label>
//                                             <select name="companycatagory" id="companycatagory" className='form-control' value={companyid} onChange={(e)=>{ setCompanyId(e.target.value) }} >
//                                                 <option value="">Select  Catagory</option>
//                                                 {
//                                                     companyApiData.map((company, i) => {
//                                                         return <option key={"company" + i} value={company._id}>{company.name}</option>
//                                                     })
//                                                 }
//                                             </select>
//                                         </div>

//                                         <div className="col-lg-4">
//                                             <label className=''> <b> Search</b> </label><br />
//                                             <input type="textbox" className="form-control" />
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>
//             </div>

//             <div className="main-card mb-2 card ">
//                 <div className="card-body">
//                     <div className='m-0'>
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <table style={{ width: "100%" }} id="table"
//                                     className="table table-hover  table-bordered">
//                                     <thead>
//                                         <tr>
//                                             <th>No.</th>
//                                             <th>Company</th>
//                                             <th>Product  Catagory</th>
//                                             <th>Product Name</th>
//                                             <th>Stock Quantity</th>
//                                             <th>MRP</th>
//                                             <th>Credit  Sale Rate</th>
//                                             <th>Cash  Sale Rate</th>
//                                             <th>Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>

//                                         {
//                                             products.map((item, i) => {
//                                                 return (

//                                                     <tr key={i}>
//                                                         <td>{i + 1}</td>
//                                                         <td>{item.companyid.name}</td>
//                                                         <td>{item.pcid.name}</td>
//                                                         <td>{item.name}</td>
//                                                         <td>{item.stockquantity}</td>
//                                                         <td>
//                                                             <input type="tel" min="0"  value={item.mrp} className="form-control" onInput={(e) => { updateValues(e,i, 'mrp') }} />
//                                                         </td>
//                                                         <td>    
//                                                             <input type="tel" min="0" value={item.creditsalerate} className="form-control" onInput={(e) => { updateValues(e,i, 'creditsalerate') }} />
//                                                         </td>
//                                                         <td>
//                                                             <input  type="tel" min="0" value={item.cashsalerate} className="form-control"  onInput={(e) => { updateValues(e,i, 'cashsalerate') }} />
//                                                         </td>

//                                                         <td> <button className="mb-2 mr-2 btn-icon btn-icon-wrapper  btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Update" onClick={(e)=>{submitValues(e, i)}}  >
//                                                             <i className="lnr-magic-wand btn-icon-wrapper"> </i></button></td>
//                                                     </tr>
//                                                 )
//                                             })
//                                         }
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }
