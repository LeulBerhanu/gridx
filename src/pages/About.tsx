import ProfilesCard from "../components/Card/ProfilesCard";
import LetsWorkCard from "../components/Card/LetsWorkCard";
import leul from "../assets/images/leul.png";

const About = () => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col items-center lg:flex-row sm:items-end gap-10 pt-20">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="custom-bg p-6 mx-auto"
        >
          {/* <img src={laca} alt="profile" className="rounded-4xl max-w-[300px]" /> */}
          <div className="bg-slate-200 rounded-4xl overflow-hidden">
            <img
              className=" w-[300px] h-[250px] flex-1  relative -rotate-3 top-3  object-cover "
              src={leul}
              alt="profile"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            className="flex gap-1 items-center justify-center"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain size-7 lg:size-auto"
            />
            <p className="text-white uppercase font-semibold text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
              self-summary
            </p>
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain size-7 lg:size-auto"
            />
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="custom-bg px-8 pb-9 mt-9 lg:mt-0 flex-1"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
              alt="Star"
              className="mb-8"
            />
            <p className="text-4xl font-medium text-white">Leul Berhanu</p>
            <p className="text-primary font-medium mt-2 text-justify">
              I’m an Addis Ababa based full-stack web developer with a focus on
              creating efficient, user-centric web applications. I’ve gained
              experience working across different areas of the development
              stack, from building responsive frontends to designing and
              maintaining backend systems.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="flex-1 custom-bg p-8 font-medium"
        >
          <p className="uppercase text-white mb-5">experience</p>

          <p className="text-primary text-sm mb-2">2024</p>
          <p className="text-white mb-1">Full Stack Development</p>
          <p className="text-primary text-sm mb-8">
            MMCY Tech <span className="opacity-40">{" - "} Intern</span>
          </p>

          <p className="text-primary text-sm mb-2">2023 - </p>
          <p className="text-white mb-1">Full Stack Development</p>
          <p className="text-primary text-sm">
            Freelance <span className="opacity-40">{" - "} Upwork</span>
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="flex-1 custom-bg p-8 font-medium"
        >
          <p className="uppercase text-white mb-5">education</p>

          <p className="text-primary text-sm mb-2">2021 - 2022</p>
          <p className="text-white mb-1">Freshman</p>
          <p className="text-primary text-sm mb-8">
            Addis Ababa Science and Technology University
          </p>

          <p className="text-primary text-sm mb-2">2022 - 2025</p>
          <p className="text-white mb-1">
            Bachelor's Degree in Computer Science
          </p>
          <p className="text-primary text-sm">Microlink IT College</p>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap">
        <div className="flex-1 xl:flex-none">
          <ProfilesCard />
        </div>
        <div className="flex-1 ">
          <LetsWorkCard />
        </div>
        {/* <div className="w-full xl:w-auto">
          <CredentialsCard />
        </div> */}
      </div>
    </section>
  );
};

export default About;
