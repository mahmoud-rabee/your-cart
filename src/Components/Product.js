import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="card m-2" style={{ borderColor: "#fd7e14" }}>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#feb272" }}
      >
        <img
          src={product.image}
          alt="..."
          style={{
            height: "250px",
            width: "200px",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        />
      </div>
      <div
        className="card-body"
        style={{ borderTop: "1px solid #fd7e14", backgroundColor: "#fecba1" }}
      >
        <h5 className="card-title fs-6">{product.category}</h5>
        <h6>Price: {product.price}$</h6>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-primary"
          style={{ backgroundColor: "#fd7e14", borderColor: "#ffe5d0" }}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
