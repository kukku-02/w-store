import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3><img src="https://icon-library.com/images/watch-icon-png/watch-icon-png-17.jpg"
      width={'40px'} alt="" /> W-Store</h3>
      <div style={styles.links}>
        <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to="/products" style={{textDecoration:'none',color:'white'}}>Products</Link>
         <Link to="/cart" style={{textDecoration:'none',color:'white'}}>Cart</Link>
         <Link to="/checkout" style={{textDecoration:'none',color:'white'}}>Checkout</Link>
        <Link to="/admin" style={{textDecoration:'none',color:'white'}}>Admin</Link>
       
        {/* <Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link>  */}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#3498db",
    color: "#fff",
  },
  links: { display: "flex", gap: "15px" },
};

export default Navbar;

