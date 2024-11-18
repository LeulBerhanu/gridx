import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import { CiBasketball } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <div className="text-white pt-20 flex gap-20">
        <div>
          <h2 className="uppercase font-medium mb-7">Contact info</h2>
          <div className="flex flex-col gap-20">
            <div className="flex gap-6">
              <div className="bg-primary-gradient px-6 py-5 rounded-xl ">
                <MdOutlineEmail className="icon" />
              </div>
              <div>
                <p className="uppercase text-sm text-primary mb-1">Mail us</p>
                <p className="font-medium opacity-80">info@lacazette.com</p>
                <p className="font-medium opacity-80">info@lacazetteA.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-primary-gradient px-6 py-5 rounded-xl ">
                <FiPhone className="icon" />
              </div>
              <div>
                <p className="uppercase text-sm text-primary mb-1">
                  contact us
                </p>
                <p className="font-medium opacity-80">+1 504-123-4567</p>
                <p className="font-medium opacity-80">+1 504-123-9876</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="bg-primary-gradient px-6 py-5 rounded-xl ">
                <GrLocation className="icon" />
              </div>
              <div>
                <p className="uppercase text-sm text-primary mb-1">location</p>
                <p className="font-medium opacity-80">22 Baker Street, Texas</p>
                <p className="font-medium opacity-80">United States</p>
                <p className="font-medium opacity-80">W1U 3BW</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-white">
            <h2 className="uppercase font-medium">Social info</h2>
            <div className="flex gap-5 justify-around mt-5">
              <Link
                to="#"
                className="gradient-transition hover:text-black transition-all duration-200"
              >
                <CiBasketball className="size-20 p-6" />
              </Link>
              <Link
                to="#"
                className="gradient-transition hover:text-black transition-all duration-200"
              >
                <FiTwitter className="size-20 p-6" />
              </Link>
              <Link
                to="#"
                className="gradient-transition hover:text-black transition-all duration-200"
              >
                <BsInstagram className="size-20 p-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
