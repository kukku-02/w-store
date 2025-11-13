



import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { db, auth } from "./firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const userId = auth.currentUser?.uid || "guest"; // fallback for non-logged-in users

  // Load existing cart from Firestore
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const docRef = doc(db, "carts", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCartItems(docSnap.data().items);
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };

    fetchCart();
  }, [userId]);

  // Helper to save cart
  const saveCartToFirebase = async (updatedCart) => {
    try {
      await setDoc(doc(db, "carts", userId), { items: updatedCart });
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  const addToCart = async (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    let updatedCart;

    if (exist) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    await saveCartToFirebase(updatedCart);
  };

  const removeFromCart = async (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    await saveCartToFirebase(updatedCart);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/products"
  element={<Products addToCart={addToCart} cartItems={cartItems} />}
/>

        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
       
      </Routes>
       <Footer/>
    </>
  );
}

export default App;




// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { db } from "./firebaseConfig"; // no need for auth
// import { doc, setDoc, getDoc } from "firebase/firestore";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Checkout from "./pages/Checkout";
// import AdminDashboard from "./pages/AdminDashboard";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   // Load existing cart from Firestore
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const docRef = doc(db, "carts", "adminCart"); // fixed cart for admin
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setCartItems(docSnap.data().items);
//         }
//       } catch (error) {
//         console.error("Error loading cart:", error);
//       }
//     };

//     fetchCart();
//   }, []);

//   // Save cart to Firestore
//   const saveCartToFirebase = async (updatedCart) => {
//     try {
//       await setDoc(doc(db, "carts", "adminCart"), { items: updatedCart });
//     } catch (error) {
//       console.error("Error saving cart:", error);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (product) => {
//     const exist = cartItems.find((item) => item.id === product.id);
//     let updatedCart;

//     if (exist) {
//       updatedCart = cartItems.map((item) =>
//         item.id === product.id
//           ? { ...exist, quantity: exist.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [...cartItems, { ...product, quantity: 1 }];
//     }

//     setCartItems(updatedCart);
//     await saveCartToFirebase(updatedCart);
//   };

//   // Remove item from cart
//   const removeFromCart = async (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     await saveCartToFirebase(updatedCart);
//   };

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/products"
//           element={<Products addToCart={addToCart} cartItems={cartItems} />}
//         />
//         <Route
//           path="/checkout"
//           element={<Checkout cartItems={cartItems} />}
//         />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/cart"
//           element={
//             <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//           }
//         />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;
