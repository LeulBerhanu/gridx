import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-3">
      <p>GridX</p>
      <div className="flex gap-12">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button>Let's talk</button>
    </div>
  );
};

export default Navbar;
