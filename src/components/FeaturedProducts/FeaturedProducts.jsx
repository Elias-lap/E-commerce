import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
export default function FeaturedProducts() {
  let { addCart, setnumOfCartItems } = useContext(CartContext);
  const [Products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  async function AddToCart(productId) {
    let response = await addCart(productId);
    if (response.data.status === "success") {
      toast.success(response.data.message);
      setnumOfCartItems(response.data.numOfCartItems);
      console.log(response.data.numOfCartItems);
    } else {
      toast.error("Error adding item");
    }
  }

  async function GetData() {
    setloading(true);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );

    setProducts(data.data);
    setloading(false);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {loading ? (
        <div className="text-center">
          {" "}
          <i className="  fa-3x fa-solid fa-cog fa-spin"></i>
        </div>
      ) : (
        <>
          <div className="row g-3 ">
            {Products.map((product) => (
              <div
                key={product._id}
                className="col-md-3 product cursor-pointer "
              >
                <Link to={`ProductDetails/${product._id}`}>
                  <img className=" w-100" src={product.imageCover} alt="" />
                  <span className="text-main fw-bold ">
                    {product.category.name}
                  </span>
                  <h3 className="h6 fw-bolder ">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <div className=" d-flex justify-content-between">
                    <span className="text-muted">{product.price}pln</span>
                    <span className="me-4">
                      <i className="fas fa-star rating-color "></i>
                      {product.ratingsQuantity}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => AddToCart(product._id)}
                  className=" btn w-100  bg-main text-white mb-1"
                >
                  ++Add Product
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
