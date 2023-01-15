import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productDetails.css";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {});
  });

  return (
    <div className="g-parent">
      <div className="card mt-3 mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-4 p-5">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.category}</p>
              <p className="card-text" style={{ width: "90%" }}>
                <small className="text-muted">{product.description}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Price: {product.price} $</small>
              </p>
              <button className="btn btn-outline-primary w-50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
