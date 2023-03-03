import './App.css';
import './main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Company from './components/Masters/Company';
import Productcatagories from './components/Masters/Productcatagories';
import Cities from './components/Masters/Cities';
import Dealer from './components/Masters/Dealer';
import Dealers from './components/Masters/Dealers';
import Users from './components/Masters/Users';
import Product from './components/Masters/Product';
import Products from './components/Masters/Products';
// import Quotations from './components/Masters/Quotations';


function App() {
  return (
    <div>

      <BrowserRouter>
        {/* login */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        {/* masters */}
        <Routes>
          <Route path='/master' element={<Header />}>
            <Route path='/master/cities' element={<Cities />} />
            <Route path='/master/companies' element={<Company />} />
            <Route path='/master/productcatagories' element={<Productcatagories />} />
            <Route path='/master/dealer/:id' element={<Dealer />} />
            <Route path='/master/dealer' element={<Dealer />} />
            <Route path='/master/dealers' element={<Dealers />} />y
            <Route path='/master/users' element={<Users />} />
            <Route path='/master/product/:id' element={<Product />} />
            <Route path='/master/product' element={<Product />} />
            <Route path='/master/products' element={<Products />} />
            {/* <Route path='/master/quotations' element={<Quotations />} /> */}

          </Route>

          {/* Admins */}




        </Routes>

        <Footer />

      </BrowserRouter>




      {/* <Header />
      <Analyticaldashboard/>
      <Chartcard/>
      <Dynamictables/>
      <Taskandchatbox/>
      <Technicalsupport/>
      <Totalorders/>
      <Footer/> */}
    </div>
  );
}

export default App;
