


import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products({ addToCart, cartItems }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Default products
  const defaultProducts = [
    { id: "1", name: "Rolex Watch", price: 2500, image: "https://tse2.mm.bing.net/th/id/OIP._EM-1qs6gzpecmisAtcqwAHaFn?pid=Api&P=0&h=180" },
    { id: "2", name: "Casio Smartwatch", price: 1800, image: "https://tse3.mm.bing.net/th/id/OIP.OLEZfVw4ZLliyV4K3Mj83wHaFQ?pid=Api&P=0&h=180" },
    { id: "3", name: "Titan Classic", price: 1200, image: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw58e12908/images/Titan/Catalog/90198QM01_1.jpg" },
    { id: "4", name: "Timex Analog Watch", price: 5196, image: "https://m.media-amazon.com/images/I/61lnO6dlSYL._SL1226_.jpg" },
    { id: "5", name: "Tissot", price: 30000, image: "https://cdn.media.amplience.net/i/hsamuel/HS21B08_Tissot1a-1920x1375?w=1900&fmt.jpeg.interlaced=true" },
    { id: "6", name: "Citizen", price: 20000, image: "https://c.shld.net/rpx/i/s/i/spin/10023990/prod_1638999712??hei=64&wid=64&qlt=50" },
    { id: "7", name: "Deniel wellington", price: 10000, image: "https://tse4.mm.bing.net/th/id/OIP.e6bHHOcQvXqISz7osH-CPwHaHa?pid=Api&P=0&h=180" },
    { id: "8", name: "Fossil Watches", price: 9000, image: "https://www.jomashop.com/media/catalog/product/f/o/fossil-grant-chronograph-automatic-men_s-watch-me1162.jpg" },
    { id: "9", name: "Seiko", price: 10000, image: "https://watchesbysjx.com/wp-content/uploads/2023/03/Seiko-Prospex-1968-GMT-SPB-383-black-profile.jpg" },
    { id: "10", name: "Bulova", price: 12000, image: "https://www.mastersintime.com/pictures/bulova-marine-star-98b301-10918302.jpg" },
    { id: "11", name: "Rado", price: 15000, image: "https://www.jomashop.com/media/catalog/product/r/a/rado-centrix-brown-automatic-skeleton-dial-men_s-watch-r30181312_2.jpg" },
    { id: "12", name: "orient", price: 14000, image: "https://monochrome-watches.com/wp-content/uploads/2022/10/Orient-Star-Skeleton-8.jpg" },


  ];

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const firebaseProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts([...defaultProducts, ...firebaseProducts]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary"> Watches</h2>

      {products.length === 0 ? (
        <p className="text-center text-muted">No products available</p>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      )}

{/* Cart Section — show only when items are added */}
{cartItems.length > 0 && (
  <div className="mt-5 p-4 border rounded bg-light shadow-sm">
    <h3 className="text-center text-secondary mb-3">Cart</h3>

    <ul className="list-group mb-3">
      {cartItems.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            {item.name} x {item.quantity}
          </span>
          <span className="fw-bold">₹{item.price * item.quantity}</span>
        </li>
      ))}
    </ul>

    <div className="text-center">
      <button
        onClick={() => navigate("/cart")}
        className="btn btn-primary btn-lg px-4"
      >
        Go to Cart
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default Products;


