import Card from "../components/Card";
import { FiCamera } from "react-icons/fi";
import { PiPencilCircle } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";
import ProfilesCard from "../components/Card/ProfilesCard";
import CredentialsCard from "../components/Card/CredentialsCard";
import LetsWorkCard from "../components/Card/LetsWorkCard";

const Home = () => {
  return (
    <section className="space-y-6 pt-20">
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* profile card */}
        <div className="custom-bg relative flex-1 group cursor-pointer">
          <div className="flex flex-col sm:flex-row gap-8 items-center px-[46px] py-[50px]">
            <img
              className="rounded-tl-4xl rounded-br-4xl"
              src="https://picsum.photos/224/224"
              alt=""
            />
            <div className="text-white w-full sm:w-auto">
              <h5 className="text-sm font-medium text-primary">
                A WEB DESIGNER
              </h5>
              <h1 className="text-4xl font-medium">
                Alex <br />
                Lacazette.
              </h1>
              <p className="text-sm text-primary mt-3">
                I am a Web Designer based in Lyon.
              </p>
            </div>
          </div>
          <Link
            to="#"
            className="absolute right-6 bottom-8 opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out"
          >
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt="link button"
            />
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div className="custom-bg text-primary px-5 py-5">
            <p className="text-xs">LATEST WORK AND FEATURED *</p>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row gap-5 ">
            <div className="flex-1">
              <CredentialsCard />
            </div>

            <div className="flex-1">
              <Card title="Projects" description="SHOWCASE">
                <img
                  decoding="async"
                  src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                  alt=""
                />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-5">
        <div className="flex flex-col sm:flex-row flex-1 gap-5">
          <Card
            className="flex-1 lg:flex-none"
            title="GFonts"
            description="BLOG"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
              alt=""
            />
          </Card>
          <Card
            className="flex-1"
            title="Services Offering"
            description="SPECIALIZATION"
          >
            <div className="flex  h-full justify-around items-center">
              <FiCamera className="icon" />
              <PiPencilCircle className="icon" />
              <IoIosColorFilter className="icon" />
              <MdDeveloperMode className="icon" />
            </div>
          </Card>
        </div>
        <ProfilesCard />
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col sm:flex-row flex-1 justify-around p-6 custom-bg text-center gap-6">
          <div className="px-8 py-11 w-full  rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">07</p>
            <p className="text-xs uppercase text-primary">
              Years <br /> Experience
            </p>
          </div>
          <div className="px-8 py-11 w-full rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+125</p>
            <p className="text-xs uppercase text-primary">
              clients <br /> worldwide
            </p>
          </div>
          <div className="px-8 py-11 w-full rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+210</p>
            <p className="text-xs uppercase text-primary">
              total <br /> projects
            </p>
          </div>
        </div>

        <LetsWorkCard />
      </div>
    </section>
  );
};

export default Home;
