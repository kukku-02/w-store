import React from 'react'

function Footer() {
  return (
    <>
      <footer style={{ background: "rgba(44, 104, 186, 1)", color: "white", paddingTop: "10px",marginTop:"" }}>

    <div style={{ textAlign: "center", padding: "10px ", color: "white" }}>
      
      <h4 style={{ margin: "4px "}}>Contact With Us</h4>
      <p><span><i className="fa-solid fa-envelope"></i></span> Email: wstore@gmail.com<br />
        <span><i className="fa-solid fa-phone"></i></span>Phone:9876543210</p>
      <p style={{fontSize:"25px"}}><i className="fa-brands fa-whatsapp"></i>
      <i className="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i></p>
      <p>
       © 2020 Copyright: wstore.com
      </p>
    </div>
    </footer>
    </>
  )
}

export default Footer
