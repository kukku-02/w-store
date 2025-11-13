import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-body">
          <h2 className="fw-bold text-primary text-center mb-4">Your Cart</h2>

          {/* If cart empty */}
          {cartItems.length === 0 ? (
            <div className="alert alert-info text-center">No items in cart.</div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="mb-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    <div>
                      <p className="mb-1 fw-semibold">{item.name}</p>
                      <small className="text-muted">
                        ₹{item.price} x {item.quantity}
                      </small>
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total Section */}
              <div className="d-flex justify-content-between mt-3 fw-bold border-top pt-3">
                <span>Total:</span>
                <span className="text-success fs-5">₹{total}</span>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-secondary px-4" onClick={() => navigate(-1)}>
                  Back
                </button>

                <button
                  className="btn btn-primary px-4"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout 
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
