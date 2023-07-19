
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import About from './components/About/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
  import jwtDecode from 'jwt-decode'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import {CounterContextProvider} from './Context/CounterContext.jsx'
import {CartContextProvider} from './Context/CartContext.jsx'
import  { Toaster } from 'react-hot-toast';
import Chekout from './components/Chekout/Chekout.jsx'
import CategoreisDetails from './components/CategoreisDetails/CategoreisDetails.jsx'
import BrandsDetails from './components/BrandsDetails/BrandsDetails.jsx'
import { Offline } from "react-detect-offline";
import { Provider } from 'react-redux';

import { store } from './Redux/Store';
function App() {
useEffect(()=>{
  if(localStorage.getItem('userToken')!==null)
  {encodeToken()}
},[])



  const [ userData, setuserData] = useState(null);

function encodeToken(){
 let TokenCode = localStorage.getItem('userToken')
 let decodedToken = jwtDecode(TokenCode)
 setuserData(decodedToken)
 
 
}

  let Router=createHashRouter([
    {path : '' , element : <Layout setuserData={setuserData} userData={userData}/> ,children : [
      {index: true , element : <ProtectedRoute><Home/></ProtectedRoute>},
      {path : 'Cart' , element :<ProtectedRoute><Cart/></ProtectedRoute> },
      {path : 'Chekout' , element :<ProtectedRoute><Chekout/></ProtectedRoute> },
      {path : 'Products' , element :<ProtectedRoute><Products/></ProtectedRoute> },
      {path : 'allorders' , element :<ProtectedRoute><Products/></ProtectedRoute> },
      {path : 'Products/ProductDetails/:id' , element :<ProtectedRoute><ProductDetails/></ProtectedRoute> },
      {path : 'ProductDetails/:id' , element :<ProtectedRoute><ProductDetails/></ProtectedRoute> },
      {path : 'Categories' , element :<ProtectedRoute><Categories/></ProtectedRoute> },
      {path : 'Categories/CategoreisDetails/:id' , element :<ProtectedRoute><CategoreisDetails/></ProtectedRoute> },
      {path : 'Brands' , element :<ProtectedRoute><Brands/></ProtectedRoute>  },
      {path : 'Brands/BrandsDetails/:id' , element :<ProtectedRoute><BrandsDetails/></ProtectedRoute>  },
      {path : 'About' , element :<ProtectedRoute><About/></ProtectedRoute>},
      {path : 'Register' , element : <Register/>},
      {path : 'Login' , element : <Login encodeToken ={encodeToken}/>},
      {path : '*' , element : <NotFound/>},
    ]}
  ])



  return (
    <>
     <Offline> <div className='networke'>Only shown offline (surprise!) </div></Offline>
     <Provider store={store}>
    <CartContextProvider>
    <CounterContextProvider>
      <Toaster/>
    <RouterProvider router={Router}></RouterProvider>
    </CounterContextProvider>
    </CartContextProvider>
    </Provider>

    </>
  );
}

export default App;
