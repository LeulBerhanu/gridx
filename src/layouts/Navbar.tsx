import NavLinks from "../components/NavLinks";
import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between py-3 items-center">
      <Logo />
      <NavLinks className="text-primary " />
      <button className="bg-[#323232] text-white font-medium px-8 py-3 rounded-2xl hover:bg-white hover:text-black transition duration-200 ease-in-out ">
        Let's talk
      </button>
    </nav>
  );
};

export default Navbar;
