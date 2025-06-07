import Card from "../components/Card";
import mmcy from "../assets/images/mmcy.webp";
import urbnedss from "../assets/images/urbnedss.webp";
import explorer from "../assets/images/explorer.webp";
import bekur from "../assets/images/bekur.webp";
import blackrock from "../assets/images/blackrock.webp";
import maldaa from "../assets/images/malda.webp";
import cpa from "../assets/images/cpa.jpg";
import lucy from "../assets/images/lucy.png";

const imgStyle =
  "rounded-4xl filter grayscale group-hover:grayscale-0 w-full h-[200px] sm:h-[250px] lg:h-[350px] object-cover group-hover:scale-125 transition duration-700 ease-in-out";

const Works = () => {
  return (
    <section>
      <div className="flex flex-col  sm:flex-row gap-5 pt-20 justify-center">
        {/* section title for mobile */}
        <div
          data-aos="fade-in"
          className="flex sm:hidden gap-1 items-center justify-center mb-4 "
        >
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Star"
            className="object-contain size-7 lg:size-auto"
          />
          <p className="text-white uppercase font-semibold text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            all projects
          </p>
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Star"
            className="object-contain size-7 lg:size-auto"
          />
        </div>

        <div className="flex flex-col gap-5 ">
          <Card
            data-aos="zoom-in"
            data-aos-delay="100"
            title="Talent Spot Portal"
            description="Frontend Development"
            link="https://mmcy-talent-spot-portal-client.vercel.app/"
            worksCard
          >
            <img
              className={`${imgStyle} `}
              decoding="async"
              src={mmcy}
              alt=""
            />
          </Card>
          <Card
            data-aos="zoom-in"
            data-aos-delay="150"
            title="Urbned Landing Page"
            description="Frontend Development"
            link="https://urbned.com/"
            worksCard
            // className="sm:flex-1"
          >
            <img
              // className={`rounded-4xl w-[350px] h-[200px] sm:h-auto object-cover`}
              // className={`${imgStyle} h-full`}
              className={imgStyle}
              src={urbnedss}
              alt=""
            />
          </Card>
        </div>

        <div>
          {/* section title */}
          <div
            data-aos="fade-in"
            className="hidden sm:flex gap-1 items-center justify-center mb-4"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain size-7 lg:size-auto"
            />
            <p className="text-white uppercase font-semibold text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
              all projects
            </p>
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain size-7 lg:size-auto"
            />
          </div>

          <div className="flex flex-col sm:grid grid-cols-2 gap-5">
            <Card
              data-aos="zoom-in"
              data-aos-delay="200"
              title="Finden"
              description="Frontend Development"
              link="https://finden-fontend-next.vercel.app/"
              worksCard
            >
              <img className={imgStyle} src={explorer} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="300"
              title="Flikia Delivery"
              description="Fullstack Development"
              link="https://znbildelivery.bekurtechsolution.com/"
              worksCard
            >
              <img className={imgStyle} src={bekur} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="400"
              title="Blackrock Solution PLC"
              description="Backend Development"
              link="https://znbildelivery.bekurtechsolution.com/"
              worksCard
            >
              <img className={imgStyle} src={blackrock} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="500"
              title="Malda Nutritional Hub"
              description="Fullstack Development"
              link="https://malda-hub.vercel.app/"
              worksCard
            >
              <img className={imgStyle} src={maldaa} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="500"
              title="JEMS JTC CPAs Enterprise"
              description="Backend Development"
              link="#"
              nolink
              worksCard
            >
              <img
                className={`${imgStyle} group-hover:scale-100`}
                src={cpa}
                alt=""
              />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="500"
              title="Lucy"
              description="Backend Development"
              link="https://lucy.com/"
              worksCard
            >
              <img className={imgStyle} src={lucy} alt="" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
