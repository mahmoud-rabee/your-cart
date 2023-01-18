import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteFromCart } from "./Redux/Slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
  const totalQuantity = cart.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table align-middle caption-top">
          <caption>Choosen Products</caption>
          <thead style={{ backgroundColor: "#ffe5d0" }} className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>
                  <img
                    style={{ width: "65px", height: "75px" }}
                    src={item.image}
                    alt="..."
                  />
                </td>
                <td>{item.title.slice(0, 37)}</td>
                <td>{item.quantity}</td>
                <td>{item.price}$</td>
                <td>
                  <button
                    onClick={() => dispatch(deleteFromCart(item))}
                    className="btn btn-warning"
                    style={{ backgroundColor: "#fd7e14" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>

              {cart.length > 0 && (
                <td style={{ color: "#fd7e14", fontWeight: "bold" }}>
                  Total Quantity ({totalQuantity})
                </td>
              )}
              {cart.length > 0 && (
                <td style={{ color: "#fd7e14", fontWeight: "bold" }}>
                  Total Price ({totalPrice.toFixed(2)}$)
                </td>
              )}
              {cart.length > 0 && (
                <td>
                  <button
                    onClick={() => dispatch(deleteAll())}
                    className="btn btn-warning"
                    style={{ backgroundColor: "#fd7e14" }}
                  >
                    Delete All
                  </button>
                </td>
              )}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
