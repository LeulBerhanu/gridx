import React from "react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const transition = "hover:text-white transition duration-200 ease-in-out";

const NavLinks = ({ className }: Props) => {
  return (
    <div className={`flex gap-11 ${className}`}>
      <Link className={transition} to="/">
        Home
      </Link>
      <Link className={transition} to="/about">
        About
      </Link>
      <Link className={transition} to="/works">
        Works
      </Link>
      <Link className={transition} to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
