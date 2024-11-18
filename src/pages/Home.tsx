import React from "react";
import Card from "../components/Card";
import { FiCamera, FiTwitter } from "react-icons/fi";
import { PiPencilCircle } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { CiBasketball } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <img src="https://picsum.photos/224/224" alt="" />
          </div>
          <div>
            <p>A WEB DESIGNER</p>
            <p>
              Alex <br />
              Lacazette.
            </p>
            <p>I am a Web Designer based in Lyon.</p>
          </div>
        </div>
        <div>
          <div>
            <p>LATEST WORK AND FEATURED *</p>
          </div>
          <div>
            <Card title="Credentials" description="MORE ABOUT ME">
              <img
                decoding="async"
                src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
                alt=""
              />
            </Card>

            <Card title="Projects" description="SHOWCASE">
              <img
                decoding="async"
                src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                alt=""
              />
            </Card>
            <Card title="GFonts" description="BLOG">
              <img
                decoding="async"
                src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
                alt=""
              />
            </Card>
            <Card title="Services Offering" description="SPECIALIZATION">
              <div className="flex justify-around">
                <FiCamera className="icon" />
                <PiPencilCircle className="icon" />
                <IoIosColorFilter className="icon" />
                <MdDeveloperMode className="icon" />
              </div>
            </Card>
            <Card title="Profiles" description="STAY WITH ME">
              <div className="flex gap-5 custom-bg px-5 py-6">
                <i className="icon--bg">
                  <CiBasketball className="icon" />
                </i>
                <i className="icon--bg">
                  <FiTwitter className="icon" />
                </i>
              </div>
            </Card>

            <div className="flex p-6 custom-bg text-center gap-6">
              <div className="p-6 custom-bg text-white ">
                <p>07</p>
                <p className="text-xs uppercase text-[#bcbcbc]">
                  Years <br /> Experience
                </p>
              </div>
              <div className="p-6 custom-bg text-white">
                <p>+125</p>
                <p className="text-xs uppercase text-[#bcbcbc]">
                  clients <br /> worldwide
                </p>
              </div>
              <div className="p-6 custom-bg text-white">
                <p>+210</p>
                <p className="text-xs uppercase text-[#bcbcbc]">
                  total <br /> projects
                </p>
              </div>
            </div>

            {/* <div className="flex custom-bg ">
              <h2>
                Let's <br /> work together.
              </h2>
              <Link to="#">
                <img
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  alt="icon"
                />
              </Link>
            </div> */}

            <Card className="pt-0">
              <img
                decoding="async"
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
                alt="Star"
                className="relative bottom-0"
              />
              <p>
                Let's <br /> work together
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
