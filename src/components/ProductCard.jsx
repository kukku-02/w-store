// import React from "react";

// function ProductCard({ product, addToCart }) {
//   return (
//     <div style={styles.card}>
//       <img src={product.image} alt={product.name} style={styles.image} />
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     width: "200px",
//     textAlign: "center",
//   },
//   image: { width: "100%", borderRadius: "8px" },
// };

// export default ProductCard;



// import React from "react";

// function ProductCard({ product, addToCart }) {
//   return (
//     <div style={styles.card}>
//       <img src={product.image} alt={product.name} style={styles.image} />
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     display:'grid',
//     border: "1px solid #ddd",
//     borderRadius: 10,
//     padding: 10,
//     textAlign: "center",
//     background: "#fff",
//   },
//   image: {
//     width: "100%",
//     height: 150,
//     objectFit: "cover",
//     borderRadius: 8,
//   },
// };

// export default ProductCard;


import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div
        className="card shadow-sm text-center h-100"
        style={{
    borderRadius: "12px",
    transition: "0.3s",
    minWidth: "200px",
   
      
  }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text fw-semibold text-muted">₹{product.price}</p>
          </div>
          <button
            className="btn btn-primary mt-2 w-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

