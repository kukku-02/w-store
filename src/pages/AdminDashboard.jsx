

// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function AdminDashboard() {
//   const [admin, setAdmin] = useState(null);
//   const [isSignup, setIsSignup] = useState(true); // ✅ Start with signup screen
//   const [authData, setAuthData] = useState({ email: "", password: "" });
//   const [product, setProduct] = useState({ name: "", price: "", image: "" });

//   // Watch admin login state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAdmin(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle Signup
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(
//         auth,
//         authData.email,
//         authData.password
//       );
//       alert("✅ Admin account created successfully!");
//       setIsSignup(false); // ✅ After signup, go to login screen
//       setAuthData({ email: "", password: "" }); // Clear input
//     } catch (error) {
//       alert("❌ Signup failed: " + error.message);
//     }
//   };

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(
//         auth,
//         authData.email,
//         authData.password
//       );
//       alert("✅ Admin logged in successfully!");
//     } catch (error) {
//       alert("❌ Login failed: " + error.message);
//     }
//   };

//   // Handle Logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     alert("👋 Admin logged out successfully!");
//   };

//   // Add Product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "products"), {
//         name: product.name,
//         price: parseFloat(product.price),
//         image: product.image,
//       });
//       alert("✅ Product added successfully!");
//       setProduct({ name: "", price: "", image: "" });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: 50 }}>
//       <h2>Admin Dashboard</h2>

//       {/* If admin not logged in */}
//       {!admin ? (
//         <>
//           <form
//             onSubmit={isSignup ? handleSignup : handleLogin}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               width: "300px",
//               margin: "auto",
//             }}
//           >
//             <input
//               type="email"
//               placeholder="Admin Email"
//               value={authData.email}
//               onChange={(e) =>
//                 setAuthData({ ...authData, email: e.target.value })
//               }
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={authData.password}
//               onChange={(e) =>
//                 setAuthData({ ...authData, password: e.target.value })
//               }
//               required
//             />
//             <button type="submit">
//               {isSignup ? "Sign Up" : "Login"}
//             </button>
//           </form>

//           <p style={{ marginTop: "15px" }}>
//             {isSignup ? (
//               <>
//                 Already have an account?{" "}
//                 <button
//                   style={{
//                     border: "none",
//                     background: "none",
//                     color: "blue",
//                     cursor: "pointer",
//                     textDecoration: "underline",
//                   }}
//                   onClick={() => setIsSignup(false)}
//                 >
//                   Login
//                 </button>
//               </>
//             ) : (
//               <>
//                 Don’t have an account?{" "}
//                 <button
//                   style={{
//                     border: "none",
//                     background: "none",
//                     color: "blue",
//                     cursor: "pointer",
//                     textDecoration: "underline",
//                   }}
//                   onClick={() => setIsSignup(true)}
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </p>
//         </>
//       ) : (
//         <>
//           <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
//             Logout
//           </button>

//           <form
//             onSubmit={handleAddProduct}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               width: "300px",
//               margin: "auto",
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Product Name"
//               value={product.name}
//               onChange={(e) =>
//                 setProduct({ ...product, name: e.target.value })
//               }
//               required
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={product.price}
//               onChange={(e) =>
//                 setProduct({ ...product, price: e.target.value })
//               }
//               required
//             />
//             <input
//               type="text"
//               placeholder="Image URL"
//               value={product.image}
//               onChange={(e) =>
//                 setProduct({ ...product, image: e.target.value })
//               }
//               required
//             />
//             <button type="submit">Add Product</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;







// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function AdminDashboard() {
//   const [admin, setAdmin] = useState(null);
//   const [isSignup, setIsSignup] = useState(false);
//   const [authData, setAuthData] = useState({ email: "", password: "" });
//   const [product, setProduct] = useState({ name: "", price: "", image: "" });

//   // Check admin login state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAdmin(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, authData.email, authData.password);
//       alert("✅ Admin logged in successfully!");
//     } catch (error) {
//       alert("❌ Login failed: " + error.message);
//     }
//   };

//   // Handle signup
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, authData.email, authData.password);
//       alert("✅ Admin account created successfully!");
//       setIsSignup(false);
//     } catch (error) {
//       alert("❌ Signup failed: " + error.message);
//     }
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     alert("👋 Admin logged out successfully!");
//   };

//   // Add product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "products"), {
//         name: product.name,
//         price: parseFloat(product.price),
//         image: product.image,
//       });
//       alert("✅ Product added successfully!");
//       setProduct({ name: "", price: "", image: "" });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: 50 }}>
//       <h2>Admin Dashboard</h2>

//       {/* If admin not logged in */}
//       {!admin ? (
//         <>
//           <form
//             onSubmit={isSignup ? handleSignup : handleLogin}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               width: "300px",
//               margin: "auto",
//             }}
//           >
//             <input
//               type="email"
//               placeholder="Admin Email"
//               value={authData.email}
//               onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={authData.password}
//               onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
//               required
//             />
//             <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//           </form>

//           {/* Toggle between Login and Signup */}
//           <p style={{ marginTop: "15px" }}>
//             {isSignup ? (
//               <>
//                 Already have an account?{" "}
//                 <button
//                   style={{
//                     border: "none",
//                     background: "none",
//                     color: "blue",
//                     cursor: "pointer",
//                     textDecoration: "underline",
//                   }}
//                   onClick={() => setIsSignup(false)}
//                 >
//                   Login
//                 </button>
//               </>
//             ) : (
//               <>
//                 Don’t have an account?{" "}
//                 <button
//                   style={{
//                     border: "none",
//                     background: "none",
//                     color: "blue",
//                     cursor: "pointer",
//                     textDecoration: "underline",
//                   }}
//                   onClick={() => setIsSignup(true)}
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </p>
//         </>
//       ) : (
//         <>
//           <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
//             Logout
//           </button>

//           <form
//             onSubmit={handleAddProduct}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               width: "300px",
//               margin: "auto",
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Product Name"
//               value={product.name}
//               onChange={(e) => setProduct({ ...product, name: e.target.value })}
//               required
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={product.price}
//               onChange={(e) => setProduct({ ...product, price: e.target.value })}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Image URL"
//               value={product.image}
//               onChange={(e) => setProduct({ ...product, image: e.target.value })}
//               required
//             />
//             <button type="submit">Add Product</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;



// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebaseConfig";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function AdminDashboard() {
//   const [admin, setAdmin] = useState(null);
//   const [isSignup, setIsSignup] = useState(false);
//   const [authData, setAuthData] = useState({ email: "", password: "" });
//   const [product, setProduct] = useState({ name: "", price: "", image: "" });
//   const [products, setProducts] = useState([]);

//   //  Check admin login state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAdmin(user);
//       if (user) fetchProducts();
//     });
//     return () => unsubscribe();
//   }, []);

//   // Fetch all products
//   const fetchProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     const productList = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setProducts(productList);
//   };

//   // Login / Signup
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, authData.email, authData.password);
//       alert("Admin logged in successfully!");
//       fetchProducts();
//     } catch (error) {
//       alert("Login failed " );
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, authData.email, authData.password);
//       alert(" Admin account created successfully!");
//       setIsSignup(false);
//     } catch (error) {
//       alert("Signup failed " );
//     }
//   };

//   // Logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     alert("Admin logged out successfully!");
//   };

//   //  Add / Delete product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "products"), {
//         name: product.name,
//         price: parseFloat(product.price),
//         image: product.image,
//       });
//       alert("Product added successfully!");
//       setProduct({ name: "", price: "", image: "" });
//       fetchProducts();
//     } catch (error) {
//       console.error("Error adding product");
//     }
//   };

//   const handleDeleteProduct = async (id) => {
//     try {
//       await deleteDoc(doc(db, "products", id));
//       alert("Product deleted successfully!");
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (

    
//     <div className="container my-5">

//       {/*  Logout Button */}
//           <div className="text-end ">
//             <button className="btn btn-danger" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>


//       <h2 className="text-center text-primary fw-bold mb-4">
//         Admin Dashboard
//       </h2>

//       {/* Login / Signup Section */}
//       {!admin ? (
//         <div className="d-flex justify-content-center">
//           <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
//             <h4 className="text-center mb-3">
//               {isSignup ? "Admin Sign Up" : "Admin Login"}
//             </h4>

//             <form onSubmit={isSignup ? handleSignup : handleLogin}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Admin Email"
//                   value={authData.email}
//                   onChange={(e) =>
//                     setAuthData({ ...authData, email: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={authData.password}
//                   onChange={(e) =>
//                     setAuthData({ ...authData, password: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary w-100">
//                 {isSignup ? "Sign Up" : "Login"}
//               </button>
//             </form>

//             <div className="text-center mt-3">
//               {isSignup ? (
//                 <p>
//                   Already have an account?{" "}
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={() => setIsSignup(false)}
//                   >
//                     Login
//                   </button>
//                 </p>
//               ) : (
//                 <p>
//                   Don’t have an account?{" "}
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={() => setIsSignup(true)}
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
          

//           {/*  Add Product Section */}
//           <div className="card shadow p-4 mx-auto mb-5" style={{ maxWidth: "500px" }}>
//             <h4 className="text-center text-success mb-3">Add New Product</h4>
//             <form onSubmit={handleAddProduct}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Product Name"
//                   value={product.name}
//                   onChange={(e) => setProduct({ ...product, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Price"
//                   value={product.price}
//                   onChange={(e) => setProduct({ ...product, price: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Image URL"
//                   value={product.image}
//                   onChange={(e) => setProduct({ ...product, image: e.target.value })}
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-success w-100">
//                 Add Product
//               </button>
//             </form>
//           </div>

//           {/*  Product List */}
//           <h4 className="text-center mb-3">Added Products</h4>
//           {products.length === 0 ? (
//             <div className="alert alert-info text-center">
//               No products added yet.
//             </div>
//           ) : (
//             <div className="row justify-content-center">
//               {products.map((item) => (
//                 <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
//                   <div className="card h-100 shadow-sm">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="card-img-top"
//                       style={{
//                         height: "200px",
//                         objectFit: "cover",
//                       }}
//                     />
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{item.name}</h5>
//                       <p className="text-muted mb-2">₹{item.price}</p>
//                       <button
//                         className="btn btn-outline-danger btn-sm"
//                         onClick={() => handleDeleteProduct(item.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;







// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebaseConfig";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function AdminDashboard() {
//   const [admin, setAdmin] = useState(null);
//   const [isSignup, setIsSignup] = useState(false);
//   const [authData, setAuthData] = useState({ email: "", password: "" });
//   const [product, setProduct] = useState({ name: "", price: "", image: "" });
//   const [products, setProducts] = useState([]);

//   // Check admin login state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAdmin(user);
//       if (user) fetchProducts();
//     });
//     return () => unsubscribe();
//   }, []);

//   // Fetch all products
//   const fetchProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     const productList = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setProducts(productList);
//   };

//   // Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, authData.email, authData.password);
//       alert("Admin logged in successfully!");
//       fetchProducts();
//     } catch (error) {
//       alert("Login failed");
//     }
//   };

//   // Signup
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(
//         auth,
//         authData.email,
//         authData.password
//       );
//       alert("Admin account created successfully!");
//       setIsSignup(false);
//     } catch (error) {
//       alert("Signup failed");
//     }
//   };

//   // Logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     alert("Admin logged out successfully!");
//   };

//   // Add Product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "products"), {
//         name: product.name,
//         price: parseFloat(product.price),
//         image: product.image,
//       });
//       alert("Product added successfully!");
//       setProduct({ name: "", price: "", image: "" });
//       fetchProducts();
//     } catch (error) {
//       console.error("Error adding product");
//     }
//   };

//   // Delete Product
//   const handleDeleteProduct = async (id) => {
//     try {
//       await deleteDoc(doc(db, "products", id));
//       alert("Product deleted successfully!");
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <div className="container my-5">
//       {admin ? <h2 className="text-center text-primary fw-bold mb-4">
//         Welcome Admin
//       </h2>: <h2 className="text-center text-primary fw-bold mb-4">
//         Admin Dashboard
//       </h2>}

//       {/* Login / Signup Section */}
//       {!admin ? (
//         <div className="d-flex justify-content-center">
//           <div
//             className="card shadow p-4"
//             style={{ maxWidth: "400px", width: "100%" }}
//           >
//             <h4 className="text-center mb-3">
//               {isSignup ? "Admin Sign Up" : "Admin Login"}
//             </h4>
//             <form onSubmit={isSignup ? handleSignup : handleLogin}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Admin Email"
//                   value={authData.email}
//                   onChange={(e) =>
//                     setAuthData({ ...authData, email: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={authData.password}
//                   onChange={(e) =>
//                     setAuthData({ ...authData, password: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary w-100">
//                 {isSignup ? "Sign Up" : "Login"}
//               </button>
//             </form>

//             <div className="text-center mt-3">
//               {isSignup ? (
//                 <p>
//                   Already have an account?{" "}
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={() => setIsSignup(false)}
//                   >
//                     Login
//                   </button>
//                 </p>
//               ) : (
//                 <p>
//                   Don’t have an account?{" "}
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={() => setIsSignup(true)}
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Admin Info */}
//           <div className="text-center mb-5">
//             <img
//               src={
//                 admin.photoURL ||
//                 "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               }
//               alt="Admin"
//               className="rounded-circle mb-3 shadow"
//               style={{ width: "120px", height: "120px", objectFit: "cover" }}
//             />
//             <h5 className="text-muted mb-2">{admin.email}</h5>
//             <button className="btn btn-danger btn-sm" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>

//           {/* Add Product Section */}
//           <div
//             className="card shadow p-4 mx-auto mb-5"
//             style={{ maxWidth: "500px" }}
//           >
//             <h4 className="text-center text-success mb-3">Add New Product</h4>
//             <form onSubmit={handleAddProduct}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Product Name"
//                   value={product.name}
//                   onChange={(e) =>
//                     setProduct({ ...product, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Price"
//                   value={product.price}
//                   onChange={(e) =>
//                     setProduct({ ...product, price: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Image URL"
//                   value={product.image}
//                   onChange={(e) =>
//                     setProduct({ ...product, image: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-success w-100">
//                 Add Product
//               </button>
//             </form>
//           </div>

//           {/* Product List */}
//           <h4 className="text-center mb-3">Added Products</h4>
//           {products.length === 0 ? (
//             <div className="alert alert-info text-center">
//               No products added yet.
//             </div>
//           ) : (
//             <div className="row justify-content-center">
//               {products.map((item) => (
//                 <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
//                   <div className="card h-100 shadow-sm">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="card-img-top"
//                       style={{ height: "200px", objectFit: "cover" }}
//                     />
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{item.name}</h5>
//                       <p className="text-muted mb-2">₹{item.price}</p>
//                       <button
//                         className="btn btn-outline-danger btn-sm"
//                         onClick={() => handleDeleteProduct(item.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;



import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function AdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [product, setProduct] = useState({ name: "", price: "", image: "" });
  const [products, setProducts] = useState([]);

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAdmin(user);
      if (user) fetchProducts();
    });
    return () => unsubscribe();
  }, []);

  // Fetch all products
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, authData.email, authData.password);
        setAuthData({ email: "", password: "" });
      alert("Admin logged in successfully!");
    
      fetchProducts();
    } catch (error) {
      alert("Login failed");
    }
  };

  //  Signup (Fixed version)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );

      // Immediately sign out after signup to force manual login
      await signOut(auth);
 setAuthData({ email: "", password: "" });
      alert("Signup successful! Please log in with your new account.");
     
      setIsSignup(false); // switch to login form
    } catch (error) {
      alert("Signup failed");
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    alert("Admin logged out successfully!");
  };

  // Add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        name: product.name,
        price: parseFloat(product.price),
        image: product.image,
      });
      alert("Product added successfully!");
      setProduct({ name: "", price: "", image: "" });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container my-5">
      {admin ? (
        <h2 className="text-center text-primary fw-bold mb-4">
          Welcome Admin
        </h2>
      ) : (
        <h2 className="text-center text-primary fw-bold mb-4">
          Admin Dashboard
        </h2>
      )}

      {/* AUTH SECTION */}
      {!admin ? (
        <div className="d-flex justify-content-center">
          <div
            className="card shadow p-4"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h4 className="text-center mb-3">
              {isSignup ? "Admin Sign Up" : "Admin Login"}
            </h4>
            <form onSubmit={isSignup ? handleSignup : handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Admin Email"
                  value={authData.email}
                  onChange={(e) =>
                    setAuthData({ ...authData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={authData.password}
                  onChange={(e) =>
                    setAuthData({ ...authData, password: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="text-center mt-3">
              {isSignup ? (
                <p>
                  Already have an account?
                  <button
                    className="btn btn-link p-0"
                    onClick={() => setIsSignup(false)}
                  >
                    Login
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?
                  <button
                    className="btn btn-link p-0"
                    onClick={() => setIsSignup(true)}
                  >
                    Sign Up
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/*  ADMIN INFO  */}
          <div className="text-center mb-5">
            <img
              src={
                admin.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Admin"
              className="rounded-circle mb-3 shadow"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <h5 className="text-muted mb-2">{admin.email}</h5>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {/* ADD PRODUCT */}
          <div
            className="card shadow p-4 mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h4 className="text-center text-success mb-3">Add New Product</h4>
            <form onSubmit={handleAddProduct}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image URL"
                  value={product.image}
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Add Product
              </button>
            </form>
          </div>

          {/*PRODUCT LIST */}
          <h4 className="text-center mb-3">Added Products</h4>
          {products.length === 0 ? (
            <div className="alert alert-info text-center">
              No products added yet.
            </div>
          ) : (
            <div className="row justify-content-center">
              {products.map((item) => (
                <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="text-muted mb-2">₹{item.price}</p>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDeleteProduct(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AdminDashboard;



// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebaseConfig";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function AdminDashboard() {
//   const [admin, setAdmin] = useState(null);
//   const [isSignup, setIsSignup] = useState(false);
//   const [authData, setAuthData] = useState({ email: "", password: "" });
//   const [product, setProduct] = useState({ name: "", price: "", image: "" });
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [signingUp, setSigningUp] = useState(false);

//   // Track login state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAdmin(user);
//       setLoading(false);
//       if (user) fetchProducts();
//     });
//     return () => unsubscribe();
//   }, []);

//   // Fetch all products
//   const fetchProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     const productList = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setProducts(productList);
//   };

//   // Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, authData.email, authData.password);

//       alert("Admin logged in successfully!");
//       setAuthData({ email: "", password: "" });
//       fetchProducts();
//     } catch (error) {
//       alert("Login failed" );
//     }
//   };

//   // Signup
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       setSigningUp(true);

//       await createUserWithEmailAndPassword(
//         auth,
//         authData.email,
//         authData.password
//       );

//       await signOut(auth); 
//       setAdmin(null);
//       setAuthData({ email: "", password: "" });
//       setIsSignup(false);

//       alert("Signup successful! Please login now.");
//     } catch (error) {
//       alert("Signup failed");
//     } finally {
//       setSigningUp(false);
//     }
//   };

//   // Logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     setAdmin(null);
//     alert("Logged out successfully!");
//   };

//   // Add product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "products"), {
//         name: product.name,
//         price: parseFloat(product.price),
//         image: product.image,
//       });
//       alert("Product added successfully!");
//       setProduct({ name: "", price: "", image: "" });
//       fetchProducts();
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   // Delete product
//   const handleDeleteProduct = async (id) => {
//     try {
//       await deleteDoc(doc(db, "products", id));
//       alert("Product deleted successfully!");
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };


//   return (
//     <div className="container my-5">
//       {admin ? (
//         <h2 className="text-center text-primary fw-bold mb-4">
//           Welcome Admin
//         </h2>
//       ) : (
//         <h2 className="text-center text-primary fw-bold mb-4">
//           Admin Dashboard
//         </h2>
//       )}

//       {/* ---------------- AUTH SECTION ---------------- */}
//       {!admin ? (
//         <div className="d-flex justify-content-center">
//           <div
//             className="card shadow p-4"
//             style={{ maxWidth: "400px", width: "100%" }}
//           >
//             <h4 className="text-center mb-3">
//               {isSignup ? "Admin Sign Up" : "Admin Login"}
//             </h4>
//             <form onSubmit={isSignup ? handleSignup : handleLogin}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Admin Email"
//                   value={authData.email}
//                   onChange={(e) =>
//                     setAuthData({ ...authData, email: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={authData.password}
//                   onChange={(e) =>
//                     setAuthData({ ...authData, password: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary w-100">
//                 {isSignup ? "Sign Up" : "Login"}
//               </button>
//             </form>

//             <div className="text-center mt-3">
//               {isSignup ? (
//                 <p>
//                   Already have an account?{" "}
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={() => setIsSignup(false)}
//                   >
//                     Login
//                   </button>
//                 </p>
//               ) : (
//                 <p>
//                   Don't have an account?{" "}
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={() => setIsSignup(true)}
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* ---------------- ADMIN INFO ---------------- */}
//           <div className="text-center mb-5">
//             <img
//               src={
//                 admin.photoURL ||
//                 "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               }
//               alt="Admin"
//               className="rounded-circle mb-3 shadow"
//               style={{ width: "120px", height: "120px", objectFit: "cover" }}
//             />
//             <h5 className="text-muted mb-2">{admin.email}</h5>
//             <button className="btn btn-danger btn-sm" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>

//           {/* ---------------- ADD PRODUCT ---------------- */}
//           <div
//             className="card shadow p-4 mx-auto mb-5"
//             style={{ maxWidth: "500px" }}
//           >
//             <h4 className="text-center text-success mb-3">Add New Product</h4>
//             <form onSubmit={handleAddProduct}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Product Name"
//                   value={product.name}
//                   onChange={(e) =>
//                     setProduct({ ...product, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Price"
//                   value={product.price}
//                   onChange={(e) =>
//                     setProduct({ ...product, price: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Image URL"
//                   value={product.image}
//                   onChange={(e) =>
//                     setProduct({ ...product, image: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-success w-100">
//                 Add Product
//               </button>
//             </form>
//           </div>

//           {/* ---------------- PRODUCT LIST ---------------- */}
//           <h4 className="text-center mb-3">Added Products</h4>
//           {products.length === 0 ? (
//             <div className="alert alert-info text-center">
//               No products added yet.
//             </div>
//           ) : (
//             <div className="row justify-content-center">
//               {products.map((item) => (
//                 <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
//                   <div className="card h-100 shadow-sm">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="card-img-top"
//                       style={{ height: "200px", objectFit: "cover" }}
//                     />
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{item.name}</h5>
//                       <p className="text-muted mb-2">₹{item.price}</p>
//                       <button
//                         className="btn btn-outline-danger btn-sm"
//                         onClick={() => handleDeleteProduct(item.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;

