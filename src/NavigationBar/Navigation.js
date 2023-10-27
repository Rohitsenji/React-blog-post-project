import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../AllComponents/Home";
import Bollywood from "../AllComponents/Bollywood";
import Technology from "../AllComponents/Technology";
import Hollywood from "../AllComponents/Hollywood";
import Fitness from "../AllComponents/Fitness";
import Food from "../AllComponents/Food";
import Storedata from "../Routes/Storedata";
import UsedataDynamically from "../Routes/Dynamicdata";
import Footer from "../Footer/Footer";
// import HamburgerMenu from "./Hamburgermenu";
// import { StoredData } from "../store/Store";

const NavBar = () => {
  return (
    <>
    <div className="Wrap">
    <div className="logo">
        <span className="The">THE</span>
        <span className="siren">SIREN</span>
    </div>
      {/* <HamburgerMenu /> */}
      <BrowserRouter>
        <div className="Navbar ">
          <div className="NavTools">
            <Link to="/" className="Home">Home</Link>
          </div>
          <div className="NavTools">
            <Link to="/bollywood">Bollywood</Link>
          </div>
          <div className="NavTools">
            <Link to="/technology">Technology</Link>
          </div>
          <div className="NavTools">
            <Link to="/hollywood">Hollywood</Link>
          </div>
          <div className="NavTools">
            <Link to="/fitness">Fitness</Link>
          </div>
          <div className="NavTools">
            <Link to="/food">Food</Link>
          </div>
        </div>
        <Storedata>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/Details/:id" element={<UsedataDynamically />} />
          </Routes>
        </Storedata>
      </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default NavBar;
