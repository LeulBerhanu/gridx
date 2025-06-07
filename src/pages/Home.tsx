import Card from "../components/Card";
import { FiFigma } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfilesCard from "../components/Card/ProfilesCard";
import CredentialsCard from "../components/Card/CredentialsCard";
import LetsWorkCard from "../components/Card/LetsWorkCard";
import Marquee from "react-fast-marquee";
import portfolio from "../assets/images/portfolio.png";
import { FaAws, FaNode, FaReact } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import {
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Home = () => {
  return (
    <section className="space-y-6 pt-20">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* profile card */}
        <div
          className="hidden md:flex custom-bg relative flex-1 group"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-5 xl:gap-8 items-center px-7 sm:px-[46px] lg:px-6 xl:px-[46px] py-[50px]">
            <div className="bg-slate-200 flex-1 w-[224px] h-[224px] overflow-clip rounded-tl-4xl rounded-br-4xl relative">
              <img
                className=" w-[500px] h-[290px] relative -rotate-3 right-3 bottom-7 object-cover "
                src={portfolio}
                alt="profile"
              />
            </div>

            <div className="text-white w-full sm:w-auto flex-1">
              <h5 className="text-sm font-medium text-primary">
                FULLSTACK WEB-DEV
              </h5>
              <h1 className="text-4xl font-medium">
                Leul <br />
                Berhanu.
              </h1>
              <p className="text-sm text-primary mt-3">
                I am a Full Stack Web Developer based in Addis Ababa, Ethiopia.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="absolute right-6 bottom-8 opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out"
          >
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt="link button"
            />
          </Link>
        </div>

        <div
          className="md:hidden custom-bg relative flex-1 group"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-5 xl:gap-8 items-center px-7 sm:px-[46px] lg:px-6 xl:px-[46px] py-[50px]">
            <div className="bg-slate-200 flex-1 w-full h-[224px] overflow-clip rounded-tl-4xl rounded-br-4xl relative">
              <img
                className=" w-full h-[350px] scale-125 relative -rotate-3 right-6  object-cover "
                src={portfolio}
                alt="profile"
              />
            </div>

            <div className="text-white w-full sm:w-auto flex-1">
              <h5 className="text-sm font-medium text-primary">
                FULLSTACK WEB-DEV
              </h5>
              <h1 className="text-4xl font-medium">Leul Berhanu.</h1>
              <p className="text-sm text-primary mt-3">
                I am a Full Stack Web Developer based in Addis Ababa, Ethiopia.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="absolute right-6 bottom-8 opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out"
          >
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt="link button"
            />
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="custom-bg text-primary  py-5"
          >
            <Marquee speed={80}>
              <p className="text-xs mr-2">
                LATEST WORK AND <span className="text-white">FEATURED </span>*
              </p>
              <p className="text-xs mr-2">
                LATEST WORK AND <span className="text-white">FEATURED </span>*
              </p>
              <p className="text-xs mr-2">
                LATEST WORK AND <span className="text-white">FEATURED </span>*
              </p>
            </Marquee>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row gap-5 ">
            <div className="flex-1">
              <CredentialsCard />
            </div>
            <div className="flex-1">
              <ProfilesCard />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-5">
        <div className="flex flex-col sm:flex-row flex-1 gap-5">
          {/* <Card
            data-aos="zoom-in"
            data-aos-delay="150"
            className="flex-1 lg:flex-none"
            title="GFonts"
            description="BLOG"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
              alt=""
              className="mx-auto"
            />
          </Card> */}

          <Card
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex-1"
            title="Services Offering"
            description="SPECIALIZATION"
            nolink
          >
            <div className="flex flex-col  h-full justify-around items-center py-5">
              <div className="flex justify-around w-full mb-8">
                <FiFigma className="icon" />
                <SiMongodb className="icon" />
                <SiExpress className="icon" />
                <FaReact className="icon" />
                <FaNode className="icon" />
                <SiPostgresql className="icon" />
                <SiPrisma className="icon" />
                <SiMongoose className="icon" />
              </div>
              <div className="flex justify-around w-full">
                <SiMysql className="icon" />
                <SiNextdotjs className="icon" />
                <SiNestjs className="icon" />
                <TbSql className="icon" />
                <DiRedis className="icon" />
                <SiFastapi className="icon" />
                <FaAws className="icon" />
              </div>

              {/* <MdDeveloperMode className="icon" /> */}
            </div>
            <div className="flex flex-col text-xl md:text-lg md:flex-row text-center leading-loose md:leading-normal md:justify-around px-10 py-10 ">
              <p className="tracking-wider">UI/UX Design</p>
              <p className="tracking-wider">Frontend Development</p>
              <p className="tracking-wider">Backend Development</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div data-aos="zoom-in" data-aos-delay="150" className="flex-1">
          <Card
            title="Projects"
            description="SHOWCASE"
            className="h-full"
            link="/works"
            noNewTab
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
              alt=""
              className="mx-auto"
            />
          </Card>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="flex flex-col sm:flex-row flex-1 justify-around p-6 custom-bg text-center gap-6"
        >
          <div className="px-8 py-11 w-full  rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+3</p>
            <p className="text-xs uppercase text-primary">
              Years <br /> Experience
            </p>
          </div>
          {/* <div className="px-8 py-11 w-full rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+125</p>
            <p className="text-xs uppercase text-primary">
              clients <br /> worldwide
            </p>
          </div> */}
          <div className="px-8 py-11 w-full rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+10</p>
            <p className="text-xs uppercase text-primary">
              total <br /> projects
            </p>
          </div>
        </div>

        <LetsWorkCard />
        {/* <div></div> */}
      </div>
    </section>
  );
};

export default Home;
