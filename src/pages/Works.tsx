import Card from "../components/Card";
import img1 from "../assets/images/worksPage/1.jpg";
import img2 from "../assets/images/worksPage/2.jpg";
import img3 from "../assets/images/worksPage/3.jpg";
import img4 from "../assets/images/worksPage/4.jpg";
import img5 from "../assets/images/worksPage/5.jpg";
import img6 from "../assets/images/worksPage/6.jpg";

const imgStyle =
  "rounded-4xl w-[300px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover ";

const Works = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-5 pt-20 justify-center">
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

        <div className="flex flex-col gap-5">
          <Card
            data-aos="zoom-in"
            data-aos-delay="100"
            title="Dynamic"
            description="WEB DESIGNING"
            worksCard
          >
            <img className={imgStyle} decoding="async" src={img2} alt="" />
          </Card>
          <Card
            data-aos="zoom-in"
            data-aos-delay="150"
            title="Diesel H1"
            description="PHOTOGRAPHY"
            worksCard
            className="sm:flex-1"
          >
            <img
              className={`rounded-4xl w-[300px] h-[200px] sm:h-auto object-cover`}
              // className={`${imgStyle} h-full`}
              src={img1}
              alt=""
            />
          </Card>
        </div>

        <div>
          {/* section title */}
          <div
            data-aos="fade-in"
            className="hidden sm:flex gap-1 items-center justify-center mb-4 "
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
              title="Seven Studio"
              description="MOBILE DESIGNING"
              worksCard
            >
              <img className={imgStyle} src={img3} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="300"
              title="Raven Studio"
              description="BRANDING"
              worksCard
            >
              <img className={imgStyle} src={img4} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="400"
              title="Submarine"
              description="MOBILE DESIGNING"
              worksCard
            >
              <img className={imgStyle} src={img5} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="500"
              title="Hydra Merc"
              description="WEB DESIGNING"
              worksCard
            >
              <img className={imgStyle} src={img6} alt="" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
