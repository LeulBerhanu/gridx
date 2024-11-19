import ProfilesCard from "../components/Card/ProfilesCard";
import LetsWorkCard from "../components/Card/LetsWorkCard";
import CredentialsCard from "../components/Card/CredentialsCard";

const About = () => {
  return (
    <section className="space-y-4">
      <div className="flex gap-10 pt-20">
        <div className="custom-bg p-6 ">
          <img
            src="https://picsum.photos/300/300"
            alt="image"
            className="rounded-4xl min-w-[300px]"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-1 items-center justify-center">
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain"
            />
            <p className="text-white uppercase font-semibold text-7xl">
              self-summary
            </p>
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain"
            />
          </div>

          <div className="custom-bg px-8 pb-9 flex-1">
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
              alt="Star"
              className="mb-8"
            />
            <p className="text-4xl font-medium text-white">
              Alexandre Lacazette
            </p>
            <p className="text-primary font-medium mt-2">
              I am a Lyon-based product designer with a focus on web design,
              illustration, a visual development. I have a diverse range of
              experience having worked across various fields and industries.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex-1 custom-bg p-8 font-medium">
          <p className="uppercase text-white mb-5">experience</p>

          <p className="text-primary text-sm mb-2">2007 - 2017</p>
          <p className="text-white mb-1">Framer Designer & Developer</p>
          <p className="text-primary text-sm mb-8">Bluebase Designs</p>

          <p className="text-primary text-sm mb-2">2017 - 2023</p>
          <p className="text-white mb-1">Front-End Developer</p>
          <p className="text-primary text-sm">Larsen & Toubro</p>
        </div>

        <div className="flex-1 custom-bg p-8 font-medium">
          <p className="uppercase text-white mb-5">education</p>

          <p className="text-primary text-sm mb-2">2004 - 2007</p>
          <p className="text-white mb-1">Bachelor Degree in Psychology</p>
          <p className="text-primary text-sm mb-8">University of California</p>

          <p className="text-primary text-sm mb-2">2007 - 2009</p>
          <p className="text-white mb-1">Master Degree in Designing</p>
          <p className="text-primary text-sm">University of Texas</p>
        </div>
      </div>

      <div className="flex gap-5">
        <ProfilesCard />
        <LetsWorkCard />
        <CredentialsCard />
      </div>
    </section>
  );
};

export default About;
