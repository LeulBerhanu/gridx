import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import ContactForm from "../components/ContactForm";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      <div className="text-white pt-20 flex flex-col lg:flex-row gap-20">
        <div className="md:pl-6">
          {/* contact info */}
          <div>
            <h2 className="uppercase font-medium mb-7">Contact info</h2>
            <div className="flex flex-col sm:gap-20 gap-10">
              <div data-aos="zoom-in" className="flex gap-3 sm:gap-6">
                <div className="bg-primary-gradient px-6 py-5 rounded-xl scale-75 sm:scale-100">
                  <CgMail className="icon" />
                </div>
                <div>
                  <p className="uppercase text-sm text-primary mb-1">Mail us</p>
                  <a
                    href="mailto:leulberhanua@gmail.com"
                    className="font-medium opacity-80 hover:underline"
                  >
                    leulberhanua@gmail.com
                  </a>
                  {/* <p className="font-medium opacity-80">info@lacazetteA.com</p> */}
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="flex gap-3 sm:gap-6"
              >
                <div className="bg-primary-gradient px-6 py-5 rounded-xl scale-75 sm:scale-100">
                  <FiPhone className="icon" />
                </div>
                <div>
                  <p className="uppercase text-sm text-primary mb-1">
                    contact us
                  </p>
                  <a
                    href="tel:+251938067108"
                    className="font-medium opacity-80 hover:underline"
                  >
                    +251 938 067 108
                  </a>
                  {/* <p className="font-medium opacity-80">+1 504-123-9876</p> */}
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex gap-3 sm:gap-6 items-center"
              >
                <div className="bg-primary-gradient px-6 py-5 rounded-xl scale-75 sm:scale-100">
                  <GrLocation className="icon" />
                </div>
                <div>
                  <p className="uppercase text-sm text-primary mb-1">
                    location
                  </p>
                  {/* <p className="font-medium opacity-80">
                    
                  </p> */}
                  <p className="font-medium opacity-80">Addis Ababa</p>
                  <p className="font-medium opacity-80">Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* social info */}
          <div className="mt-10 text-white">
            <h2 className="uppercase font-medium">Social info</h2>
            <div className="flex gap-5  mt-5">
              {/* <Link
                to="#"
                className="gradient-transition hover:text-black transition-all duration-200"
                data-aos="zoom-in"
              >
                <CiBasketball className="size-14 p-4 sm:size-20 sm:p-6" />
              </Link> */}
              <Link
                to="#"
                className="gradient-transition hover:text-blue-600 transition-all duration-200"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FaLinkedin className="size-14 p-4 sm:size-20 sm:p-6" />
              </Link>
              <Link
                to="https://wa.me/251938067108"
                className="gradient-transition hover:text-green-800 transition-all duration-200"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <BsWhatsapp className="size-14 p-4 sm:size-20 sm:p-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1" data-aos="fade-in">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
