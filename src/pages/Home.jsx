import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
   <div>

    




    <div className=" text-center "
    style={{
        height:'600px',
        backgroundImage:
          "url('https://www.montredo.com/wp-content/uploads/2020/05/Thumbnail-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        width:'100%',
         
      }}>
        
<marquee
  behavior="scroll"
  direction="left"
  scrollAmount="5"
  style={{
    backgroundColor: "#2C68BA",
    color: "white",
    padding: "8px",
    fontWeight: "bold"
  }}
>
  <img
    src="https://myfreedrawings.com/wp-content/uploads/2022/07/Red-Speaker-Loud-Hailer-Clipart-Megaphone-Announcement-Loudspeaker-Icon-PNG-Clipart.png"
    alt="Watch"
    style={{ height: "25px"}}
  /> Timeless Elegance Arrived! Explore the Latest Premium Watches - Style Meets Perfection
  
</marquee>
      
        <div className="d-flex flex-column justify-content-center align-items-center h-75 text-center" >
          <h1 className="fw-bold mb-3 pt-5 text-white">
        Welcome to <span className="text-primary">Watch Store</span>
      </h1>
      <p className="lead text-dark ">
        Discover luxury, style, and technology — all in one place!
      </p>

      <button
        className="btn btn-primary btn-lg mt-4 px-4"
        onClick={() => navigate("/products")}
      >
        Check Products
      </button>
        </div>
    
    </div>
    </div>
  );
}

export default Home;


