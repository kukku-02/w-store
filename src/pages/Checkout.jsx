// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Checkout({ cartItems }) {
//   const navigate = useNavigate();
//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="container d-flex justify-content-center align-items-center my-5">
//       <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
//         <div className="card-body">
//           <h2 className="fw-bold text-primary text-center mb-4">Checkout Page</h2>

//           {cartItems.length === 0 ? (
//             <div className="alert alert-info text-center">Your cart is empty.</div>
//           ) : (
//             <>
//               {/* Product List */}
//               <div className="mb-3">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="d-flex justify-content-between align-items-center border-bottom py-2"
//                   >
//                     <span className="fw-semibold">{item.name}</span>
//                     <span className="text-muted">
//                       ₹{item.price} × {item.quantity}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* Total */}
//               <div className="d-flex justify-content-between mt-3 fw-bold border-top pt-3">
//                 <span>Total:</span>
//                 <span className="text-success fs-5">₹{total}</span>
//               </div>

//               {/* Buttons */}
//               <div className="d-flex justify-content-center gap-3 mt-4">
//                 <button
//                   className="btn btn-secondary px-4"
//                   onClick={() => navigate(-1)}
//                 >
//                  Back to Cart
//                 </button>

//                 <button className="btn btn-primary px-4">
//                  Proceed to Payment
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;




import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Checkout({ cartItems }) {
  const navigate = useNavigate();
  const billRef = useRef();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const date = new Date().toLocaleString();

  const handleDownload = async () => {
    const element = billRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Bill.pdf");
  };

  return (
    <div>
      <h1 className="fw-bold text-primary text-center mt-4">Bill Summary</h1>
    <div className="container d-flex justify-content-center align-items-center my-5">
      
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-body" ref={billRef}>
          <h2 className="fw-bold text-primary text-center mb-4"><img src="https://icon-library.com/images/watch-icon-png/watch-icon-png-17.jpg"
      width={'40px'} alt="" />W-Store</h2>

          {cartItems.length === 0 ? (
            <div className="alert alert-info text-center">Your cart is empty.</div>
          ) : (
            <>
              {/* Bill Header */}
              <div className="mb-3 text-center">
                
                <p className="text-muted small mb-0">Date: {date}</p>
                
              </div>

              {/* Product List */}
              <div className="mb-3 border-top py-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center py-2"
                  >
                    <span>{item.name}</span>
                    <span>
                      ₹{item.price} x {item.quantity} = ₹
                      {item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="d-flex justify-content-between mt-3 fw-bold border-top pt-3">
                <span>Total Amount:</span>
                <span className="text-success fs-5">₹{total}</span>
              </div>

              {/* Footer */}
              <div className="text-center mt-4">
                <p className="text-muted small">
                  Thank you for shopping with us 
                </p>
              </div>
            </>
          )}
        </div>

        {/* Buttons */}
        {cartItems.length > 0 && (
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-secondary px-4"
              onClick={() => navigate(-1)}
            >
              Back to Cart
            </button>

            <button
              className="btn btn-success px-4"
              onClick={handleDownload}
            >
              Download Bill
            </button>
          </div>
        )}
      </div>
    </div>
   
   {cartItems.length != 0 && (
        <div className="text-center mb-5">
          <button className="btn btn-primary px-4">Proceed to Payment</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;






// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// function Checkout({ cartItems }) {
//   const navigate = useNavigate();
//   const printRef = useRef();

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   // 🖨️ Print Bill
//   const handlePrint = () => {
//     const printContent = printRef.current.innerHTML;
//     const printWindow = window.open("", "", "width=800,height=600");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Watch Store Bill</title>
//           <link
//             href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//             rel="stylesheet"
//           />
//           <style>
//             body { padding: 30px; font-family: 'Poppins', sans-serif; }
//             .table th, .table td { vertical-align: middle; }
//             .text-success { color: #28a745 !important; }
//             .header { text-align: center; margin-bottom: 20px; }
//             .footer { text-align: center; margin-top: 30px; font-size: 14px; color: gray; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h3 class="text-primary fw-bold">⌚ Watch Store</h3>
//               <p class="text-muted">Luxury • Style • Technology</p>
//               <hr />
//             </div>
//             ${printContent}
//             <div class="footer">
//               <p>Thank you for shopping with us!</p>
//               <p>Visit again 💙</p>
//             </div>
//           </div>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center my-5">
//       <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "650px" }}>
//         <div ref={printRef}>
//           <h3 className="text-center text-primary fw-bold mb-4">
//             🧾 Checkout Summary
//           </h3>

//           {cartItems.length === 0 ? (
//             <div className="alert alert-info text-center">
//               Your cart is empty.
//             </div>
//           ) : (
//             <>
//               <table className="table table-bordered table-striped text-center">
//                 <thead className="table-light">
//                   <tr>
//                     <th>Product</th>
//                     <th>Price</th>
//                     <th>Qty</th>
//                     <th>Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.name}</td>
//                       <td>₹{item.price}</td>
//                       <td>{item.quantity}</td>
//                       <td>₹{item.price * item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//                 <tfoot>
//                   <tr>
//                     <td colSpan="3" className="text-end fw-bold">
//                       Total:
//                     </td>
//                     <td className="text-success fw-bold fs-5">₹{total}</td>
//                   </tr>
//                 </tfoot>
//               </table>
//             </>
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <div className="d-flex justify-content-center gap-3 mt-4">
//             <button
//               className="btn btn-secondary px-4"
//               onClick={() => navigate(-1)}
//             >
//               ⬅️ Back
//             </button>

//             <button className="btn btn-success px-4" onClick={handlePrint}>
//               🖨️ Print Bill
//             </button>

//             <button className="btn btn-primary px-4">
//               💳 Proceed to Payment
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Checkout;
