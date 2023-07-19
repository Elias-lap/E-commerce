import React, { useContext } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
 import {Link} from 'react-router-dom'
 import { CartContext } from "../../Context/CartContext";

export default function Navbar({userData ,logout}) {
  let {numOfCartItems} =useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <img src={logo} alt="logo" />
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {userData !== null ?<ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Brands">
                  Brands
                </Link>
              </li>
                <li className="nav-item position-relative">
                <Link className="nav-link" to="Cart">
                <i class="  fa-solid fa-cart-shopping fa-2x"></i>
                <span className=" position-absolute top-0 end-0 badge bg-main text-white">{numOfCartItems}</span>
                </Link>
              </li>
            </ul>:null}
            

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
              <i className=" m-2 fa-brands fa-facebook"></i>
              <i className=" m-2 fa-brands fa-linkedin"></i>
                <i className=" m-2 fa-brands fa-twitter" />
                <i className=" m-2 fa-brands fa-instagram" />
                <i className=" m-2 fa-brands fa-youtube" />
              </li>
              {userData ==null ?<><li className="nav-item">
                <Link className="nav-link" to="Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Register">
                  Register
                </Link>
              </li></>: <li className="nav-item">
                <span onClick={logout} className="cursor-pointer   nav-link">
                  Logout
                </span>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
