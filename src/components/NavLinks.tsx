import { Link } from "react-router-dom";

interface Props {
  className?: string;
  footer?: boolean;
}

const transition = "hover:text-white transition duration-200 ease-in-out";

const NavLinks = ({ className, footer }: Props) => {
  return (
    <div
      className={`${
        footer ? "flex" : "flex flex-col sm:flex-row"
      } text-center sm:text-left gap-6 sm:gap-11 ${className}`}
    >
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
