import Card from "../components/Card";

const imgStyle = "rounded-4xl w-full h-[290px] object-cover sm:h-auto";

const Works = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-5 pt-20 justify-center">
        {/* section title for mobile */}
        <div className="flex sm:hidden gap-1 items-center justify-center mb-4 ">
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
          <Card title="Dynamic" description="WEB DESIGNING" worksCard>
            <img
              className={imgStyle}
              decoding="async"
              src="https://picsum.photos/300/300"
              alt=""
            />
          </Card>
          <Card
            title="Diesel H1"
            description="PHOTOGRAPHY"
            worksCard
            className="sm:flex-1"
          >
            <img
              className={`rounded-4xl w-full h-[290px]  object-cover sm:h-full "`}
              src="https://picsum.photos/300/300"
              alt=""
            />
          </Card>
        </div>

        <div>
          {/* section title */}
          <div className="hidden sm:flex gap-1 items-center justify-center mb-4 ">
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
            <Card title="Seven Studio" description="MOBILE DESIGNING" worksCard>
              <img
                className={imgStyle}
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
            <Card title="Raven Studio" description="BRANDING" worksCard>
              <img
                className={imgStyle}
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
            <Card title="Submarine" description="MOBILE DESIGNING" worksCard>
              <img
                className={imgStyle}
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
            <Card title="Hydra Merc" description="WEB DESIGNING" worksCard>
              <img
                className={imgStyle}
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
