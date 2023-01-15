import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import "./Products.css";

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {});
  };

  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {});
  };

  const getInCategory = (cat) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  return (
    <div
      className="parent"
      style={{ backgroundColor: "#ffe5d0", padding: "3rem 0" }}
    >
      <h2 className="text-center">OUR PRODUCTS</h2>
      <div className="container">
        <div className="categories d-flex justify-content-center">
          <button
            onClick={getAllProducts}
            className="btn btn-outline-primary m-2"
          >
            All
          </button>
          {categories.map((category) => (
            <button
              onClick={() => getInCategory(category)}
              className="btn btn-outline-primary m-2"
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row m-2">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
